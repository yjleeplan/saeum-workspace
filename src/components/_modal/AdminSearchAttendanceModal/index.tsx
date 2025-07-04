import { SearchOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';
import { AgGridReact } from 'ag-grid-react';
import { Col, Form, Image, Input, message, Modal, Row, Select, Tag } from 'antd';
import { isEmpty, map, omit } from 'lodash';
import moment from 'moment';
import React, { useState } from 'react';
import { queries } from 'api/queries';
import * as xlsx from 'xlsx';
import excelBtn from 'assets/images/btn_excel.png';
import { addComma } from 'utils/formatNumber';
import GridCellButton from 'components/GridCellButton';
import AdminUserAttendanceModal from 'components/_modal/AdminUserAttendanceModal';
import { UserAttendance } from 'types';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  setIsLoading: (data: boolean) => void;
}

const AdminSearchAttendanceModal = ({ visible, onCancel, setIsLoading }: ModalProps) => {
  // Form Init
  const initialValues = {
    department: null,
    keyword: '',
  };

  // 소속 리스트
  const deptOptions = [
    { label: '전체', value: '' },
    { label: '교역자', value: '교역자' },
    { label: '믿음1', value: '믿음1' },
    { label: '믿음2', value: '믿음2' },
    { label: '믿음3', value: '믿음3' },
    { label: '믿음4', value: '믿음4' },
    { label: '소망1', value: '소망1' },
    { label: '소망2', value: '소망2' },
    { label: '소망3', value: '소망3' },
    { label: '소망4', value: '소망4' },
    { label: '사랑1', value: '사랑1' },
    { label: '사랑2', value: '사랑2' },
    { label: '사랑3', value: '사랑3' },
    { label: '사랑4', value: '사랑4' },
    { label: '에하드', value: '에하드' },
    { label: '세붐마을', value: '세붐마을' },
    { label: '이음마을', value: '이음마을' },
    { label: '청년부', value: '청년부' },
    { label: '고등부', value: '고등부' },
    { label: '중등부', value: '중등부' },
    { label: '초등부', value: '초등부' },
    { label: '유년부', value: '유년부' },
    { label: '유치부', value: '유치부' },
    { label: '영아부', value: '영아부' },
    { label: '해외', value: '해외' },
    { label: '기타', value: '기타' },
  ];

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
  // const gridRef = useRef();

  /** State */
  const [resultList, setResultList] = useState<UserAttendance[]>([]);
  const [selectedRowData, setSelectedRowData] = useState<UserAttendance | undefined>(undefined);
  const [userAttendanceModalVisible, setUserAttendanceModalVisible] = useState<boolean>(false);

  // 검색결과 그리드 Height
  const getAgGridHeight = () => {
    const totalHeight = headerHeight + 1 + resultList.length * rowHeight;
    return totalHeight > 246 ? 246 : totalHeight;
  };

  // 그리드 셀 클릭
  const handleCellClicked = ({ data }: { data: UserAttendance }) => {
    setSelectedRowData(data);
    handleUserAttendanceModalOpen();
  };

  // 검색
  const handleSearch = () => {
    form.submit();
  };

  // Form Submit
  const onFinish = async ({ keyword, department }: { keyword: string; department: string | null }) => {
    try {
      setIsLoading(true);

      const result = await queryClient.fetchQuery({
        ...queries.user.list({ name: keyword, department }),
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

  // 사용자 출석체크 모달 오픈
  const handleUserAttendanceModalOpen = () => {
    setUserAttendanceModalVisible(true);
  };

  // 사용자 출석체크 모달 닫기
  const handleUserAttendanceModalClose = () => {
    setUserAttendanceModalVisible(false);
  };

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  // Excel Download
  const handleExcelDownload = async () => {
    try {
      setIsLoading(true);

      const { department, keyword } = form.getFieldsValue();

      const result = await queryClient.fetchQuery({
        ...queries.user.excelDownload({ name: keyword, department }),
      });
      const excelDatas = map(result, (data) => {
        return {
          부서: data.department,
          이름: data.name,
          ...omit(data, ['department', 'name']),
        };
      });
      const worksheet = xlsx.utils.json_to_sheet(excelDatas);
      const workbook = xlsx.utils.book_new();
      const departmentValue = department ? department : '전체';
      const fileName = `온라인_출석명단_${departmentValue}_${moment().format('YYYYMMDDHHmm')}.xlsx`;

      xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      xlsx.writeFile(workbook, fileName);
    } catch (error: any) {
      // 공통 처리
    } finally {
      setIsLoading(false);
    }
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
        <div className='admin-search-wrap'>
          <Row>
            <Col span={11}>
              <Form.Item name='department'>
                <Select placeholder='소속' options={deptOptions} size='large' />
              </Form.Item>
            </Col>
            <Col span={12} offset={1}>
              <Form.Item name='keyword'>
                <Input size='large' placeholder='이름' suffix={<SearchOutlined onClick={handleSearch} />} />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className='admin-grid-wrap'>
          {!isEmpty(resultList) && (
            <>
              <Row className='grid-info-wrap'>
                <Col span={12} className='total-cnt-wrap'>
                  총 {addComma(resultList.length)}명
                </Col>
                <Col span={12} className='excel-btn-wrap'>
                  <Tag onClick={handleExcelDownload}>
                    <Image width={25} height={25} src={excelBtn} preview={false} />
                    다운로드
                  </Tag>
                </Col>
              </Row>
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
              {/* <div>
                <AgGridReact
                  ref={gridRef}
                  columnDefs={columnDefs}
                  rowData={resultList}
                />
              </div> */}
            </>
          )}
        </div>
        <div id='userAttendanceModal'>
          <AdminUserAttendanceModal
            visible={userAttendanceModalVisible}
            onCancel={handleUserAttendanceModalClose}
            selectedUserInfo={selectedRowData}
            setIsLoading={setIsLoading}
          />
        </div>
      </Form>
    </Modal>
  );
};

export default AdminSearchAttendanceModal;
