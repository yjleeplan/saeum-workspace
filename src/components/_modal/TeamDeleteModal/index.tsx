import React, { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Modal, Button, Col, Row, message, Image } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import _ from 'lodash';
import FlagImage from '../../FlagImage';
import { queries } from 'api/queries';
import { useDeleteCountry } from 'api/useMapApi';
import type { DeleteCountryRequest } from 'types';

interface TeamDeleteModalProps {
  visible: boolean;
  onCancel: () => void;
  setIsLoading: (data: boolean) => void;
  selectedTeam: any;
  onDelete: () => void;
}

const TeamDeleteModal = ({ visible, onCancel, setIsLoading, selectedTeam, onDelete }: TeamDeleteModalProps) => {
  // 팀별 나라 목록 조회 API
  const {
    data: resultListQueryData = [],
    refetch: refetchResultList,
    isSuccess: resultListQuerySuccess,
    isFetching: resultListFetching,
  } = useQuery({
    ...queries.map.countryList({
      team_no: selectedTeam?.team_no,
    }),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 팀별 나라 목록 데이터 세팅
  const resultList = useMemo(() => {
    if (resultListQuerySuccess) {
      return resultListQueryData;
    } else {
      return [];
    }
  }, [resultListQueryData]);

  // 나라 삭제 API
  const { mutate: deleteCountry } = useDeleteCountry();
  const handleDeleteCountry = async (payload: DeleteCountryRequest) => {
    setIsLoading(true);

    deleteCountry(payload, {
      onSuccess: () => {
        message.success('정상적으로 삭제되었습니다.');
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        refetchResultList();
        onDelete();
        setIsLoading(false);
      },
    });
  };

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  // 삭제
  const handleDelete = (countryName: string) => {
    Modal.confirm({
      className: 'confirm-team-delete',
      icon: false,
      content: '삭제하시겠습니까?',
      cancelText: '취소',
      okText: '삭제',
      okType: 'danger',
      onOk: async () => {
        handleDeleteCountry({
          team_no: selectedTeam.team_no,
          country_name: countryName,
        });
      },
    });
  };

  /** Effect */
  useEffect(() => {
    // 모달이 열릴 때마다 목록 새로 조회
    if (visible) {
      refetchResultList();
    }
  }, [visible]);

  return (
    <Modal
      wrapClassName='team-delete-modal-wrap'
      title={`${selectedTeam?.team_no}조`}
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key='close' onClick={handleCancel}>
          닫기
        </Button>,
      ]}
      maskClosable={false}
      getContainer={document.getElementById('teamDeleteModal') || ''}
      destroyOnClose
    >
      {resultList?.length > 0 ? (
        _.map(resultList, (item, index) => {
          return (
            <Row key={index} className='team-delete-row'>
              <Col span={20} className='team-delete-col-1'>
                <FlagImage size={32} name={item.country_name} />
                {item.country_name}
              </Col>
              <Col span={4} className=''>
                <Button onClick={() => handleDelete(item.country_name)}>
                  <DeleteOutlined />
                </Button>
              </Col>
            </Row>
          );
        })
      ) : (
        <Row className='team-delete-row-nodata'>
          <Col span={24}>아직 복음화된 나라가 없습니다.</Col>
        </Row>
      )}
    </Modal>
  );
};

export default TeamDeleteModal;
