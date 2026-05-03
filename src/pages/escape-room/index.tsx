import React, { useState } from "react";
import { Layout, Card, Button, Typography, Input, message, Row, Col } from "antd";
import travelerBg from "/src/assets/images/escape-room/traveler-bg.png";
import boardgameBg from "/src/assets/images/escape-room/boardgame-bg.png";
import pianoBg from "/src/assets/images/escape-room/piano-bg.png";
import myRoomBg from "/src/assets/images/escape-room/my-room-bg.png";

const { Content } = Layout;
const { Title, Text } = Typography;

const PASSWORD_TRAVELER = "1234";
const PASSWORD_BOARDGABE = "1234";
const PASSWORD_PIANO = "1234";
const PASSWORD_MYROOM = "1234";

interface EscapeRoomProps {
  type: 'traveler' | 'boardgame' | 'piano' | 'myRoom';
}

const EscapeRoom = ({ type='traveler' }: EscapeRoomProps) => {
  const [page, setPage] = useState<"login" | "success">("login");
  const [password, setPassword] = useState("");

  const bg = {
    traveler: travelerBg,
    boardgame: boardgameBg,
    piano: pianoBg,
    myRoom: myRoomBg,
  }[type]

  const PASSWORD = {
    traveler: PASSWORD_TRAVELER,
    boardgame: PASSWORD_BOARDGABE,
    piano: PASSWORD_PIANO,
    myRoom: PASSWORD_MYROOM,
  }[type]

  const handleNumberClick = (num: string) => {
    if (password.length >= 8) return;
    setPassword((prev) => prev + num);
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setPassword("");
  };

  const handleSubmit = () => {
    if (password === PASSWORD) {
      setPage("success");
    } else {
      message.error("비밀번호가 틀렸습니다.");
      setPassword("");
    }
  };

  const numberButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "inherit",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      <Content
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <div style={{ width: "100%", maxWidth: 320, textAlign: "center" }}>
          <Title
            style={{
              color: "#fff8d6",
              fontSize: 52,
              fontWeight: 900,
              marginBottom: 24,
              textShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
          </Title>

          {page === "login" && (
            <Card
              style={{
                maxWidth: 320,
                margin: "0 auto",
                borderRadius: 22,
                background: "rgba(255,255,255,0.93)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.22)",
              }}
              bodyStyle={{ padding: 18 }}
            >
              <Title level={4}>🔐 출입 인증</Title>
              <Text type="secondary">
                숫자 버튼을 눌러 비밀번호를 입력하세요.
              </Text>

              {/* 입력창 */}
              <Input
                value={password.replace(/./g, "●")}
                readOnly
                size="large"
                style={{
                  marginTop: 16,
                  height: 42,
                  textAlign: "center",
                  fontSize: 22,
                  borderRadius: 10,
                  letterSpacing: 5,
                }}
              />

              {/* 숫자 패드 */}
              <div style={{ marginTop: 20 }}>
                <Row gutter={[12, 12]}>
                  {numberButtons.slice(0, 9).map((num) => (
                    <Col span={8} key={num}>
                      <Button
                        block
                        size="large"
                        onClick={() => handleNumberClick(num)}
                        style={{
                          height: 44,
                          borderRadius: 12,
                          fontSize: 18,
                          fontWeight: 700,
                        }}
                      >
                        {num}
                      </Button>
                    </Col>
                  ))}

                  <Col span={8}>
                    <Button
                      block
                      danger
                      size="large"
                      onClick={handleDelete}
                      style={{
                        height: 44,
                        borderRadius: 12,
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                    >
                      ←
                    </Button>
                  </Col>

                  <Col span={8}>
                    <Button
                      block
                      size="large"
                      onClick={() => handleNumberClick("0")}
                      style={{
                        height: 44,
                        borderRadius: 12,
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                    >
                      0
                    </Button>
                  </Col>

                  <Col span={8}>
                    <Button
                      block
                      size="large"
                      onClick={handleClear}
                      style={{
                        height: 44,
                        borderRadius: 12,
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                    >
                      C
                    </Button>
                  </Col>
                </Row>
              </div>

              <Button
                type="primary"
                block
                size="large"
                onClick={handleSubmit}
                style={{
                  marginTop: 18,
                  height: 50,
                  borderRadius: 14,
                  fontWeight: 800,
                }}
              >
                입장하기
              </Button>
            </Card>
          )}

          {page === "success" && (
            <Card
              style={{
                maxWidth: 320,
                margin: "0 auto",
                borderRadius: 22,
                background: "rgba(255,255,255,0.93)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.22)",
              }}
              bodyStyle={{ padding: 18 }}
            >
              <Title level={2}>🚪 입장 성공</Title>
              <Text style={{ fontSize: 18 }}>
                비밀번호 인증 완료!
                <br />
                이제 방으로 입장하세요.
              </Text>
            </Card>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default EscapeRoom;