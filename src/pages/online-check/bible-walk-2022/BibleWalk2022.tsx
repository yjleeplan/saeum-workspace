import { Col, Image, Row } from 'antd';
import iconAttendance from 'assets/images/bible-walk-2022/icon_attendance.png';
import iconPicture from 'assets/images/bible-walk-2022/icon_picture.png';
import iconUserAdd from 'assets/images/bible-walk-2022/icon_user_add.png';
import iconVideo from 'assets/images/bible-walk-2022/icon_video.png';
import Comments from 'components/Comments';
import AdminSearchAttendanceModal from 'components/_modal/AdminSearchAttendanceModal';
import SearchAttendanceModal from 'components/_modal/SearchAttendanceModal';
import UserAddModal from 'components/_modal/UserAddModal';
import AdminUserAttendanceModal from './AdminUserAttendanceModal';
import UserAttendanceModal from './UserAttendanceModal';
import { useBibleWalk2022 } from './hooks/useBibleWalk2022';

interface MainProps {
  isAdmin?: boolean;
  setIsLoading?: (data: boolean) => void;
}

const Main = ({ isAdmin = false, setIsLoading = () => {} }: MainProps) => {
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
  } = useBibleWalk2022();

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
      <Comments title={`"가을성경산책을 통해 받은 은혜를 나눠주세요!"`} setIsLoading={setIsLoading} />
    </>
  );
};

export default Main;
