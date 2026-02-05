import { Col, Image, Row } from 'antd';
import { useOutletContext } from 'react-router-dom';
import iconAttendance from 'assets/images/dawn-worship-17th/icon_attendance.png';
import iconPicture from 'assets/images/dawn-worship-17th/icon_picture.png';
import iconUserAdd from 'assets/images/dawn-worship-17th/icon_user_add.png';
import iconVideo from 'assets/images/dawn-worship-17th/icon_video.png';
import Comments from 'components/Comments';
import AdminSearchAttendanceModal from 'components/_modal/AdminSearchAttendanceModal';
import SearchAttendanceModal from 'components/_modal/SearchAttendanceModal';
import UserAddModal from 'components/_modal/UserAddModal';
import AdminUserAttendanceModal from './AdminUserAttendanceModal';
import UserAttendanceModal from './UserAttendanceModal';
import { useDawnWorship17th } from './hooks/useDawnWorship17th';

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
    handleVideoClick,
    handlePictureClick,
  } = useDawnWorship17th();

  return (
    <>
      <Row className='user-attendance-modal-title'>
        <Col span={24}>
          <div className='main-title' />
        </Col>
      </Row>
      <Row className='user-attendance-modal-icon'>
        <Col span={6} onClick={handleUserAddModalOpen} className='icon-wrap'>
          <Image width={'80%'} height={'100%'} src={iconUserAdd} preview={false} />
        </Col>
        <Col span={6} onClick={handleSearchAttendanceModalOpen} className='icon-wrap'>
          <Image width={'80%'} height={'100%'} src={iconAttendance} preview={false} />
        </Col>
        <Col span={6} onClick={handleVideoClick} className='icon-wrap'>
          <Image width={'80%'} height={'100%'} src={iconVideo} preview={false} />
        </Col>
        <Col span={6} onClick={handlePictureClick} className='icon-wrap'>
          <Image width={'80%'} height={'100%'} src={iconPicture} preview={false} />
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
