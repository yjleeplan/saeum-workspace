import React, { useState, useEffect } from "react";
import {
  Layout,
  Card,
  Button,
  Typography,
  Input,
  message,
  Row,
  Col,
  Modal,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import travelerBg from "/src/assets/images/escape-room/traveler-bg.png";
import boardgameBg from "/src/assets/images/escape-room/boardgame-bg.png";
import pianoBg from "/src/assets/images/escape-room/piano-bg.png";
import myRoomBg from "/src/assets/images/escape-room/my-room-bg.png";

const { Content } = Layout;
const { Title, Text } = Typography;

const ADMIN_PASSWORD = "1111";

interface EscapeRoomProps {
  type: 'traveler' | 'boardgame' | 'piano' | 'myRoom';
}

const EscapeRoom = ({ type='traveler' }: EscapeRoomProps) => {
  const [page, setPage] = useState<"login" | "success">("login");

  const [password, setPassword] = useState("");
  const [answerPassword, setAnswerPassword] = useState("1324");

  // 관리자 모달 상태
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);

  const [adminInput, setAdminInput] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const bg = {
    traveler: travelerBg,
    boardgame: boardgameBg,
    piano: pianoBg,
    myRoom: myRoomBg,
  }[type];

  // ===== 다이얼 =====
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
    if (password === answerPassword) {
      setPage("success");
    } else {
      message.error("비밀번호가 틀렸습니다.");
      setPassword("");
    }
  };

  // ===== 관리자 =====
  const handleAdminCheck = () => {
    if (adminInput === ADMIN_PASSWORD) {
      setIsAdminModalOpen(false);
      setIsSettingModalOpen(true);
      setAdminInput("");
    } else {
      message.error("관리자 비밀번호가 틀렸습니다.");
    }
  };

  const handleChangePassword = () => {
    if (!newPassword) {
      message.warning("새 비밀번호를 입력하세요.");
      return;
    }

    if (!/^\d+$/.test(newPassword)) {
      message.warning("숫자만 입력하세요.");
      return;
    }

    setAnswerPassword(newPassword);
    setNewPassword("");
    setIsSettingModalOpen(false);

    message.success("비밀번호가 변경되었습니다.");
  };

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  useEffect(() => {
    const saved = localStorage.getItem("escape-password");
    if (saved) setAnswerPassword(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("escape-password", answerPassword);
  }, [answerPassword]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
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
          backdropFilter: "brightness(0.6)",
        }}
      >
        <div style={{ width: "100%", maxWidth: 320, textAlign: "center" }}>
          {/* 타이틀 */}
          <Title
            style={{
              color: "#cfcfcf",
              fontSize: 42,
              fontWeight: 800,
              marginBottom: 20,
              letterSpacing: 4,
              textShadow: `
                0 2px 4px rgba(0,0,0,0.8),
                0 6px 16px rgba(0,0,0,0.9)
              `,
            }}
          >
          </Title>

          {page === "login" && (
            <Card
              style={{
                borderRadius: 18,
                background: "rgba(20,20,20,0.85)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
              bodyStyle={{ padding: 18 }}
            >
              <Text style={{ color: "#aaa" }}>
                비밀번호를 입력하세요
              </Text>

              {/* 입력창 */}
              <Input
                value={password.replace(/./g, "●")}
                readOnly
                style={{
                  marginTop: 16,
                  height: 42,
                  textAlign: "center",
                  fontSize: 22,
                  borderRadius: 10,
                  letterSpacing: 6,
                  background: "#111",
                  color: "#fff",
                  border: "1px solid #333",
                }}
              />

              {/* 숫자 패드 */}
              <div style={{ marginTop: 16 }}>
                <Row gutter={[8, 8]}>
                  {numbers.map((num) => (
                    <Col span={8} key={num}>
                      <Button
                        block
                        onClick={() => handleNumberClick(num)}
                        style={{
                          height: 44,
                          borderRadius: 10,
                          fontSize: 18,
                          fontWeight: 700,
                          background: "#1a1a1a",
                          color: "#ddd",
                          border: "1px solid #333",
                        }}
                      >
                        {num}
                      </Button>
                    </Col>
                  ))}

                  <Col span={8}>
                    <Button
                      block
                      onClick={handleDelete}
                      style={{
                        height: 44,
                        borderRadius: 10,
                        background: "#1a1a1a",
                        color: "#ff6b6b",
                        border: "1px solid #333",
                      }}
                    >
                      ←
                    </Button>
                  </Col>

                  <Col span={8}>
                    <Button
                      block
                      onClick={() => handleNumberClick("0")}
                      style={{
                        height: 44,
                        borderRadius: 10,
                        fontSize: 18,
                        fontWeight: 700,
                        background: "#1a1a1a",
                        color: "#ddd",
                        border: "1px solid #333",
                      }}
                    >
                      0
                    </Button>
                  </Col>

                  <Col span={8}>
                    <Button
                      block
                      onClick={handleClear}
                      style={{
                        height: 44,
                        borderRadius: 10,
                        background: "#1a1a1a",
                        color: "#aaa",
                        border: "1px solid #333",
                      }}
                    >
                      C
                    </Button>
                  </Col>
                </Row>
              </div>

              <Button
                block
                onClick={handleSubmit}
                style={{
                  marginTop: 14,
                  height: 46,
                  borderRadius: 10,
                  background: "#2a2a2a",
                  color: "#fff",
                  fontWeight: 800,
                  border: "1px solid #444",
                }}
              >
                입장하기
              </Button>
            </Card>
          )}

          {page === "success" && (
            <Card
              style={{
                borderRadius: 18,
                background: "rgba(20,20,20,0.85)",
                color: "#fff",
              }}
            >
              <Title level={3} style={{ color: "#ddd" }}>
                🚪 입장 성공
              </Title>
              <Text style={{ color: "#aaa" }}>
                이제 방으로 들어가세요...
              </Text>
            </Card>
          )}
        </div>

        {/* 설정 버튼 */}
        <Button
          shape="circle"
          icon={<SettingOutlined />}
          onClick={() => setIsAdminModalOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "#222",
            color: "#fff",
            border: "1px solid #444",
          }}
        />

        {/* 관리자 인증 모달 */}
        <Modal
          open={isAdminModalOpen}
          onOk={handleAdminCheck}
          onCancel={() => setIsAdminModalOpen(false)}
          okText="확인"
          cancelText="취소"
        >
          <Title level={4}>관리자 인증</Title>
          <Input.Password
            placeholder="관리자 비밀번호"
            value={adminInput}
            onChange={(e) => setAdminInput(e.target.value)}
          />
        </Modal>

        {/* 비밀번호 설정 모달 */}
        <Modal
          open={isSettingModalOpen}
          onOk={handleChangePassword}
          onCancel={() => setIsSettingModalOpen(false)}
          okText="변경"
          cancelText="취소"
        >
          <Title level={4}>새 비밀번호 설정</Title>
          <Input
            placeholder="새 비밀번호 입력"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Modal>
      </Content>
    </Layout>
  );
};

export default EscapeRoom;