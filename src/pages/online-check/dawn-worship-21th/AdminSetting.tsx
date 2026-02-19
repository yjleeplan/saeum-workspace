import { useQuery } from '@tanstack/react-query';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Select, message } from 'antd';
import React, { useState, useEffect, useMemo } from 'react';
import { queries } from 'api/queries';
import { usePutDepartmentCount } from 'api/useDepartmentApi';
import type { PutDepartmentCount } from 'types';

interface OutletContextProps {
  setIsLoading?: (data: boolean) => void;
}

const AdminSetting = ({ setIsLoading = () => {} }: OutletContextProps) => {
  // 소속 리스트
  const deptOptions = [
    { label: '소담마을', value: '소담마을' },
    { label: '도담마을', value: '도담마을' },
    { label: '어울림마을', value: '어울림마을' },
    { label: '울림마을', value: '울림마을' },
    { label: '이음마을', value: '이음마을' },
    { label: '세붐마을', value: '세붐마을' },
    { label: '새움청년부', value: '새움청년부' },
    { label: '주일학교', value: '주일학교' },
  ];

  /** State */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [selectedKey, setSelectedKey] = useState<string>('');

  // 마을별 수기 카운트 조회 API
  const {
    data: departmentCountQueryData,
    refetch: refetchDepartmentCount,
    isSuccess: departmentCountQuerSuccess,
    isFetching: departmentCountFetching,
  } = useQuery({
    ...queries.department.countList({
      department: selectedKey,
    }),
    staleTime: 500,
    cacheTime: 1000,
    enabled: !!selectedKey,
  });

  // 마을별 수기 카운트 데이터 세팅
  const departmentInfo = useMemo(() => {
    if (departmentCountQuerSuccess) {
      if (departmentCountQueryData?.length > 0) {
        return departmentCountQueryData[0];
      } else {
        message.warning('해당 부서에 대한 정보가 없습니다');
        return undefined;
      }
    }
  }, [departmentCountQueryData]);

  // 마을별 수기 카운트 변경 API
  const { mutate: putDepartmentCount } = usePutDepartmentCount();
  const handlePutDepartmentCount = async (payload: PutDepartmentCount) => {
    setIsLoading(true);

    putDepartmentCount(payload, {
      onSuccess: () => {
        refetchDepartmentCount();
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        setIsLoading(false);
      },
    });
  };

  // 마을 선택
  const handleSelect = (departmentName: string) => {
    setSelectedKey(departmentName);
  };

  // - 버튼
  const minus = () => {
    handlePutDepartmentCount({
      id: departmentInfo?.department_id!,
      data: {
        add_count: -1,
      },
    });
  };

  // + 버튼
  const plus = () => {
    handlePutDepartmentCount({
      id: departmentInfo?.department_id!,
      data: {
        add_count: 1,
      },
    });
  };

  /** Effect */
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (departmentCountFetching) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, departmentCountFetching]);

  return (
    <div id='admin-setting-wrap'>
      <div id='admin-select-wrap'>
        <Select
          placeholder='소속을 선택해주세요'
          options={deptOptions}
          size='large'
          getPopupContainer={() => document.getElementById('admin-select-wrap')!}
          onSelect={handleSelect}
        />
      </div>
      {departmentInfo && (
        <>
          <div className='point-wrap'>{departmentInfo?.attendance_free_count?.toLocaleString() ?? 0}</div>
          <div className='button-wrap'>
            <div className='button-3d blue' onClick={minus}>
              <MinusOutlined style={{ fontSize: '50px' }} />
            </div>
            <div className='button-3d cyan' onClick={plus}>
              <PlusOutlined style={{ fontSize: '50px' }} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSetting;
