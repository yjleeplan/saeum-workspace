import { Col, Image, Row } from 'antd';
import { useOutletContext } from 'react-router-dom';
import iconUserAdd from 'assets/images/dawn-worship-21th/icon_user_add.png';
import iconAttendance from 'assets/images/dawn-worship-21th/icon_attendance.png';
import iconAttendanceStatus from 'assets/images/dawn-worship-21th/icon_attendance_status.png';
import Comments from 'components/Comments';
import AdminSearchAttendanceModal from 'components/_modal/AdminSearchAttendanceModal';
import SearchAttendanceModal from 'components/_modal/SearchAttendanceModal';
import UserAddModal from 'components/_modal/UserAddModal';
import AdminUserAttendanceModal from './AdminUserAttendanceModal';
import UserAttendanceModal from './UserAttendanceModal';
import { useDawnWorship21th } from './hooks/useDawnWorship21th';

interface OutletContextProps {
  setIsLoading: (data: boolean) => void;
}

interface MainProps {
  isAdmin?: boolean;
}

const Main = ({ isAdmin }: MainProps) => {
  const { setIsLoading }: OutletContextProps = useOutletContext();
  const {
    userAddModalVisible,
    searchAttendanceModalVisible,
    userAttendanceModalVisible,
    selectedRowData,
    handleUserAddModalOpen,
    handleUserAddModalClose,
    handleSearchAttendanceModalOpen,
    handleSearchAttendanceModalClose,
    handleSelect,
    handleUserAttendanceModalClose,
    handleRankClick,
  } = useDawnWorship21th();

  return (
    <>
      <Row className='user-attendance-modal-title'>
        <Col span={24}>
          <div className='main-title' />
        </Col>
      </Row>
      <Row className='user-attendance-modal-icon'>
        <Col span={8} onClick={handleUserAddModalOpen} className='icon-wrap'>
          <Image width={'70%'} height={'100%'} src={iconUserAdd} preview={false} />
        </Col>
        <Col span={8} onClick={handleSearchAttendanceModalOpen} className='icon-wrap'>
          <Image width={'70%'} height={'100%'} src={iconAttendance} preview={false} />
        </Col>
        <Col span={8} onClick={handleRankClick} className='icon-wrap'>
          <Image width={'70%'} height={'100%'} src={iconAttendanceStatus} preview={false} />
        </Col>
        <div id='userAddModal'>
          <UserAddModal visible={userAddModalVisible} onCancel={handleUserAddModalClose} setIsLoading={setIsLoading} />
        </div>
        {isAdmin ? (
          // 관리자 모드
          <>
            <div id='searchAttendanceModal'>
              <AdminSearchAttendanceModal
                visible={searchAttendanceModalVisible}
                onSelect={handleSelect}
                onCancel={handleSearchAttendanceModalClose}
                setIsLoading={setIsLoading}
              />
            </div>
            <div id='userAttendanceModal'>
              <AdminUserAttendanceModal
                visible={userAttendanceModalVisible}
                onCancel={handleUserAttendanceModalClose}
                selectedUserInfo={selectedRowData}
                setIsLoading={setIsLoading}
              />
            </div>
          </>
        ) : (
          // 일반 사용자
          <>
            <div id='searchAttendanceModal'>
              <SearchAttendanceModal
                visible={searchAttendanceModalVisible}
                onSelect={handleSelect}
                onCancel={handleSearchAttendanceModalClose}
                setIsLoading={setIsLoading}
              />
            </div>
            <div id='userAttendanceModal'>
              <UserAttendanceModal
                visible={userAttendanceModalVisible}
                onCancel={handleUserAttendanceModalClose}
                selectedUserInfo={selectedRowData}
                setIsLoading={setIsLoading}
              />
            </div>
          </>
        )}
      </Row>
      {/* <VideoPlayer /> */}
      <Comments title={`"특별새벽부흥회를 통해 받은 은혜를 나눠주세요!"`} setIsLoading={setIsLoading} />
    </>
  );
};

export default Main;
