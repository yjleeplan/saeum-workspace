import { useState } from 'react';
import { UserAttendance } from 'types';

export const useDawnWorship17th = () => {
  /** State */
  const [userAddModalVisible, setUserAddModalVisible] = useState<boolean>(false);
  const [searchAttendanceModalVisible, setSearchAttendanceModalVisible] = useState<boolean>(false);
  const [userAttendanceModalVisible, setUserAttendanceModalVisible] = useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<UserAttendance | undefined>(undefined);

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

  // 출석체크 모달에서 사용자 선택
  const handleSelect = (data: UserAttendance) => {
    setSelectedRowData(data);
    setUserAttendanceModalVisible(true);
  };

  // 사용자 출석체크 모달 닫기
  const handleUserAttendanceModalClose = () => {
    setUserAttendanceModalVisible(false);
  };

  // 영상 링크
  const handleVideoClick = () => {
    window.open('https://youtube.com/playlist?list=PLFdkyNDzHdpNVq4q7eDzTQcrHnkVvRs0R');
  };

  // 사진 링크
  const handlePictureClick = () => {
    window.open('http://naver.me/FUGfHWej');
  };

  return {
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
  };
};
