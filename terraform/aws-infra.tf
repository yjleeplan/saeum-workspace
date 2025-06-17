# For IAM certificate
provider "aws" {
#   access_key = "<AWS_ACCESS_KEY_ID in .envrc>"
#   secret_key = "<AWS_SECRET_ACCESS_KEY in .envrc>"
  region = "ap-northeast-2"
}

# For CloudFront certificate
provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}

# For local config
locals {
  site_name          = "workspace"
  base_url           = "saeum.or.kr"
  full_url           = {
    "production"     = "${local.site_name}.${local.base_url}"
    "development"    = "${local.site_name}-dev.${local.base_url}"
  }
  route53_zone_id    = "Z05104941NC8A2EKE3A76"
  web_origin_id      = "workspace-origin-id"
  acm_arn            = "arn:aws:acm:us-east-1:589047518471:certificate/bf5e9752-af8c-4f8b-ac44-d202ab3e4e2e"
}

# aws_s3_bucket will be created
resource "aws_s3_bucket" "bucket" {
  count  = length(local.full_url)
  bucket = values(local.full_url)[count.index]
}

# aws_s3_bucket_website_configuration will be created
resource "aws_s3_bucket_website_configuration" "web" {
  count  = length(local.full_url)
  bucket = aws_s3_bucket.bucket[count.index].id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

# aws_s3_bucket_ownership_controls will be created
resource "aws_s3_bucket_ownership_controls" "ownership" {
  count  = length(local.full_url)
  bucket = aws_s3_bucket_website_configuration.web[count.index].id
  rule {
    object_ownership = "ObjectWriter"
  }
}

# aws_s3_bucket_public_access_block will be created
resource "aws_s3_bucket_public_access_block" "access" {
  count  = length(local.full_url)
  bucket = aws_s3_bucket_website_configuration.web[count.index].id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# aws_s3_bucket_acl will be created
resource "aws_s3_bucket_acl" "acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.ownership,
    aws_s3_bucket_public_access_block.access,
  ]

  count  = length(local.full_url)
  bucket = aws_s3_bucket_website_configuration.web[count.index].id
  acl    = "public-read"
}

# aws_s3_bucket_policy will be created
resource "aws_s3_bucket_policy" "policy" {
  depends_on = [aws_s3_bucket_public_access_block.access]

  count  = length(local.full_url)
  bucket = aws_s3_bucket_website_configuration.web[count.index].id
  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "${local.site_name}_policy_sid",
        "Action": [
          "s3:GetObject"
        ],
        "Effect": "Allow",
        "Resource": "arn:aws:s3:::${values(local.full_url)[count.index]}/*",
        "Principal": "*"
      }
    ]
  })
}

# aws_cloudfront_distribution will be created
resource "aws_cloudfront_distribution" "web" {
  count    = length(local.full_url)
  aliases  = [
    values(local.full_url)[count.index]
  ]

  origin {
    domain_name = aws_s3_bucket.bucket[count.index].bucket_regional_domain_name
    origin_id   = local.web_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.web_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = local.acm_arn
    minimum_protocol_version = "TLSv1.2_2018"
    ssl_support_method       = "sni-only"
  }
}

# aws_route53_record will be created
resource "aws_route53_record" "web" {
  count   = length(local.full_url)
  name    = values(local.full_url)[count.index]
  type    = "A"
  zone_id = local.route53_zone_id
  alias {
    name                   = aws_cloudfront_distribution.web[count.index].domain_name
    zone_id                = aws_cloudfront_distribution.web[count.index].hosted_zone_id
    evaluate_target_health = false
  }
}
