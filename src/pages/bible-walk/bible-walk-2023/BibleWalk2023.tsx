import { Col, Image, Row } from 'antd';
import { useOutletContext } from 'react-router-dom';
import iconAttendance from 'assets/images/icon_attendance.png';
import iconPicture from 'assets/images/icon_picture.png';
import iconUserAdd from 'assets/images/icon_user_add.png';
import iconVideo from 'assets/images/icon_video.png';
import title from 'assets/images/title.png';
import Comments from 'components/Comments';
import SearchAttendanceModal from 'components/_modal/SearchAttendanceModal';
import AdminSearchAttendanceModal from 'components/_modal/AdminSearchAttendanceModal';
import UserAddModal from 'components/_modal/UserAddModal';
import { useBibleWalk2023 } from './hooks/useBibleWalk2023';

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
    handleUserAddModalOpen,
    handleUserAddModalClose,
    handleSearchAttendanceModalOpen,
    handleSearchAttendanceModalClose,
    handleVideoClick,
    handlePictureClick,
  } = useBibleWalk2023();

  return (
    <>
      <Row className='user-attendance-modal-title'>
        <Col span={24}>
          <Image width={186} height={150} src={title} preview={false} />
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
        <div id='searchAttendanceModal'>
          {isAdmin ? (
            <AdminSearchAttendanceModal
              visible={searchAttendanceModalVisible}
              onCancel={handleSearchAttendanceModalClose}
              setIsLoading={setIsLoading}
            />
          ) : (
            <SearchAttendanceModal
              visible={searchAttendanceModalVisible}
              onCancel={handleSearchAttendanceModalClose}
              setIsLoading={setIsLoading}
            />
          )}
        </div>
      </Row>
      {/* <VideoPlayer /> */}
      <Comments setIsLoading={setIsLoading} />
    </>
  );
};

export default Main;
