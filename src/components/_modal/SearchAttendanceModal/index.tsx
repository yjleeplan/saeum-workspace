import { SearchOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';
import { AgGridReact } from 'ag-grid-react';
import { Form, Input, message, Modal } from 'antd';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { queries } from 'api/queries';
import GridCellButton from 'components/GridCellButton';
import { UserAttendance } from 'types';

interface ModalProps {
  visible: boolean;
  onSelect: (data: UserAttendance) => void;
  onCancel: () => void;
  setIsLoading: (data: boolean) => void;
}

const SearchAttendanceModal = ({ visible, onSelect, onCancel, setIsLoading }: ModalProps) => {
  // Form Init
  const initialValues = {
    keyword: '',
  };

  // 검색결과 그리드 컬럼 정의
  const columnDefs = [
    {
      headerName: '이름',
      field: 'name',
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '소속',
      field: 'department',
      cellStyle: { textAlign: 'center' },
    },
    {
      field: '',
      cellStyle: { textAlign: 'center' },
      cellRendererFramework: GridCellButton,
      cellRendererParams: (params: any) => ({
        data: params.data,
        onClick: handleCellClicked,
      }),
    },
  ];

  // 검색결과 그리드 Row Height
  const rowHeight = 37;

  // 검색결과 그리드 Header Height
  const headerHeight = 40;

  /** Hook */
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  /** State */
  const [resultList, setResultList] = useState<UserAttendance[]>([]);

  // 검색결과 그리드 Height
  const getAgGridHeight = () => {
    const totalHeight = headerHeight + 1 + resultList.length * rowHeight;
    return totalHeight > 246 ? 246 : totalHeight;
  };

  // 그리드 셀 클릭
  const handleCellClicked = ({ data }: { data: UserAttendance }) => {
    onSelect(data);
  };

  // 검색
  const handleSearch = () => {
    form.submit();
  };

  // Form Submit
  const onFinish = async ({ keyword }: { keyword: string }) => {
    try {
      setIsLoading(true);

      const result = await queryClient.fetchQuery({
        ...queries.user.list({ name: keyword }),
      });

      if (isEmpty(result)) {
        message.warning({
          content: '검색결과 없습니다. 등록 먼저 부탁드립니다.',
          duration: 1.2,
          style: {
            marginTop: '280px',
          },
        });
        setResultList([]);
      } else {
        setResultList(result);
      }
    } catch (error: any) {
      // 공통 처리
    } finally {
      setIsLoading(false);
    }
  };

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      wrapClassName='search-attendance-modal-wrap'
      title='출석 체크'
      open={visible}
      onCancel={handleCancel}
      footer={false}
      maskClosable={false}
      getContainer={document.getElementById('searchAttendanceModal') ?? false}
      destroyOnClose
    >
      <Form form={form} name='form' initialValues={initialValues} onFinish={onFinish}>
        <div className='search-wrap'>
          <Form.Item name='keyword'>
            <Input placeholder='이름을 입력해주세요' suffix={<SearchOutlined onClick={handleSearch} />} />
          </Form.Item>
        </div>
        <div className='grid-wrap'>
          {!isEmpty(resultList) && (
            <div className='ag-theme-alpine' style={{ height: getAgGridHeight() }}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={resultList}
                rowHeight={rowHeight}
                headerHeight={headerHeight}
                suppressMovableColumns={true}
                onGridReady={(params) => params.api.sizeColumnsToFit()}
              />
            </div>
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default SearchAttendanceModal;
