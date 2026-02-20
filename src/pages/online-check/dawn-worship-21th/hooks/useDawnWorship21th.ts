import { useState } from 'react';
import { UserAttendance } from 'types';
import { message } from 'antd';

export const useDawnWorship21th = () => {
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

  // 출석현황 페이지 이동
  const handleRankClick = () => {
    window.location.href = '/dawn-worship-21th/prayer-altar';
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
    handleRankClick,
  };
};
