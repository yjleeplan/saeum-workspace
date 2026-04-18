import { Form, Input, message, Modal, Row, Col, Button } from 'antd';
import React from 'react';
import { usePostRank } from 'api/useRankApi';
import { PostRankRequest } from 'types';

interface FormCupPingpongProps {
  setIsLoading?: (data: boolean) => void;
}

const FormCupPingpong = ({ setIsLoading }: FormCupPingpongProps) => {
  // Form Init
  const initialValues = {
    name: '',
    // age: "",
    point: '',
  };

  /** Hook */
  const [form] = Form.useForm();

  // 점수 등록 API
  const { mutate: postRank } = usePostRank();
  const handlePostRank = async (payload: PostRankRequest) => {
    setIsLoading?.(true);

    postRank(payload, {
      onSuccess: () => {
        message.success('정상적으로 등록되었습니다');
        handleClear();
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        setIsLoading?.(false);
      },
    });
  };

  // 등록
  const handleSave = () => {
    form.submit();
  };

  // 초기화
  const handleClear = () => {
    form.resetFields();
  };

  // Form Submit
  const onFinish = (values: PostRankRequest) => {
    Modal.confirm({
      title: '등록 확인',
      content: '등록하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk: async () => {
        handlePostRank({
          type: 3,
          name: values.name,
          age: 0,
          point: values.point,
        });
      },
    });
  };

  return (
    <>
      <Row className='rank-game-head'>
        <Col span={24}>탁구공 넣기</Col>
      </Row>
      <Row className='rank-game-body'>
        <Col span={24}>
          <Form form={form} name='form' initialValues={initialValues} onFinish={onFinish} labelCol={{ span: 4 }}>
            <Form.Item label='이름' required className='form-item-wrap'>
              <Form.Item
                className='form-item-inner-wrap'
                name='name'
                rules={[
                  {
                    required: true,
                    message: '이름을 입력해주세요',
                  },
                ]}
              >
                <Input placeholder='이름을 입력해주세요' size='large' />
              </Form.Item>
            </Form.Item>
            {/* <Form.Item label="나이" required className="form-item-wrap">
              <Form.Item
                name="age"
                rules={[
                {
                    required: false,
                    message: "나이를 입력해주세요",
                },
                ]}
              >
                <Input placeholder="나이를 입력해주세요" size="large" inputmode="numeric" pattern="[0-9]*" disabled/>
              </Form.Item>
            </Form.Item> */}
            <Form.Item label='점수' required className='form-item-wrap'>
              <Form.Item
                name='point'
                rules={[
                  {
                    required: true,
                    message: '점수를 입력해주세요',
                  },
                ]}
              >
                <Input placeholder='점수를 입력해주세요' size='large' inputMode='numeric' pattern='[0-9]*' />
              </Form.Item>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row className='rank-game-foot'>
        <Col span={24}>
          <Button size='large' type='primary' className='rank-game-button' onClick={handleSave}>
            등 록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default FormCupPingpong;
