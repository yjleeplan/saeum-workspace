import { useState } from 'react';

export const useBibleWalk2023 = () => {
  /** State */
  const [userAddModalVisible, setUserAddModalVisible] = useState<boolean>(false);
  const [searchAttendanceModalVisible, setSearchAttendanceModalVisible] = useState<boolean>(false);

  // 사용자 등록 모달 오픈
  const handleUserAddModalOpen = () => {
    setUserAddModalVisible(true);
  };

  // 사용자 등록 모달 닫기
  const handleUserAddModalClose = () => {
    setUserAddModalVisible(false);
  };

  // 출석체크 모달 오픈
  const handleSearchAttendanceModalOpen = () => {
    setSearchAttendanceModalVisible(true);
  };

  // 출석체크 모달 닫기
  const handleSearchAttendanceModalClose = () => {
    setSearchAttendanceModalVisible(false);
  };

  // 영상 링크
  const handleVideoClick = () => {
    window.open('https://youtube.com/playlist?list=PLFdkyNDzHdpNlm75HRaCUV2uWuNxg76vw&si=da9Qbd75NIKciFeG');
  };

  // 사진 링크
  const handlePictureClick = () => {
    window.open('https://m.post.naver.com/viewer/postView.naver?volumeNo=36765325&memberNo=28453879');
  };

  return {
    userAddModalVisible,
    searchAttendanceModalVisible,
    handleUserAddModalOpen,
    handleUserAddModalClose,
    handleSearchAttendanceModalOpen,
    handleSearchAttendanceModalClose,
    handleVideoClick,
    handlePictureClick,
  };
};
