import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AgGridReact } from 'ag-grid-react';
import { Input, Steps, message } from 'antd';
import { isEmpty, sortBy } from 'lodash';
import styled from 'styled-components';
import { queries } from 'api/queries';
import { ReserveData } from 'types';
import { USER_LIST, USER_LIST_DEV } from 'context/Context';

const { Search } = Input;

const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '70%')};
  margin: 0 auto;
  padding: 20px 20px;
  color: #fff;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 2rem;
  color: #fff;
  border-bottom: 1px solid #f0a721;
`;

const SearchWrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  justify-content: ${({ $ismobile }) => ($ismobile === 'true' ? 'center' : '')};
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  & .ant-input-group-wrapper.ant-input-search {
    width: 250px;
    height: 40px;

    .ant-input-wrapper.ant-input-group {
      height: 100%;

      > input {
        height: 100%;
        font-size: 18px;
      }

      button {
        width: 40px;
        height: 100%;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const StepsWrapper = styled.div`
  color: #fff;
  margin-top: 20px;

  & .ant-steps-item-icon {
    width: fit-content;
  }

  & .ant-steps-item-content {
    > .ant-steps-item-title {
      color: #fff !important;
    }
    > .ant-steps-item-description {
      color: #fff !important;
    }
  }
`;

const GridWrapper = styled.div`
  & .ag-header-viewport {
    font-size: 16px;
    background: #333;

    .ag-header-row.ag-header-row-column {
      color: #fff;
    }
  }

  & .ag-body-horizontal-scroll {
    display: none;
  }
`;

interface NehemRoadCheckProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadCheck = ({ isMobile, setIsLoading }: NehemRoadCheckProps) => {
  // 그리드 컬럼 정의
  const columnDefs = [
    {
      headerName: '예약번호',
      field: 'id',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '0 4px',
      },
      width: 60,
    },
    {
      headerName: '예약 시간',
      field: 'created_at',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '0 4px',
      },
      width: 120,
    },
    {
      headerName: '조 이름',
      field: 'user_name',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '0 4px',
      },
      width: 60,
    },
    {
      headerName: '시작 시간',
      field: 'game_start_time',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '0 4px',
      },
      width: 60,
    },
    {
      headerName: '소요 시간',
      field: 'play_time',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '0 4px',
      },
      width: 60,
    },
    {
      headerName: '게임',
      field: 'game_name',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '0 4px',
      },
    },
    {
      headerName: '위치',
      field: 'location_name_display',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '0 4px',
      },
      width: 160,
    },
  ];

  // 그리드 Row Height
  const rowHeight = 37;

  // 그리드 Header Height
  const headerHeight = 40;

  // 그리드 Height
  const getAgGridHeight = () => {
    const totalHeight = headerHeight + 3 + resultList.length * rowHeight;
    return totalHeight > 700 ? 700 : totalHeight;
  };

  /** Hook */
  const queryClient = useQueryClient();

  /** State */
  const [resultList, setResultList] = useState<ReserveData[]>([]);

  // 예약 목록 조회
  const handleSearch = async (value: string) => {
    if (!value) {
      return;
    }

    const userList = process.env.NODE_ENV === 'production' ? USER_LIST : USER_LIST_DEV;
    const userId = userList.filter((item) => item.name === `${value}조`)[0]?.id;

    if (!userId) {
      message.error('존재하지 않는 조입니다.');
      return;
    }

    try {
      setIsLoading(true);

      const result = await queryClient.fetchQuery({
        ...queries.reserve.list({ user_id: userId }),
      });

      if (isEmpty(result)) {
        setResultList([]);
      } else {
        setResultList(sortBy(result, ['game_date', 'game_start_time']));
      }
    } catch (error: any) {
      // 공통 처리
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper $ismobile={isMobile.toString()}>
      <TitleWrapper>
        <Title>Check</Title>
      </TitleWrapper>
      <SearchWrapper $ismobile={isMobile.toString()}>
        <Search
          type='number'
          inputMode='numeric'
          pattern='[0-9]*'
          placeholder='조를 입력해주세요'
          onSearch={handleSearch}
        />
      </SearchWrapper>
      {isMobile ? (
        <StepsWrapper>
          {!isEmpty(resultList) && (
            <Steps
              direction='vertical'
              current={0}
              items={resultList.map((item) => {
                return {
                  title: <div>[{item.game_name}]</div>,
                  description: (
                    <div>
                      <div>
                        <span style={{ color: '#ccc' }}>장소 : </span>
                        {item.location_name_display}
                      </div>
                      <div>
                        <span style={{ color: '#ccc' }}>시간 : </span>
                        {item.play_time}분
                      </div>
                    </div>
                  ),
                  icon: <div style={{ color: '#f0a721' }}>{item.game_start_time}</div>,
                };
              })}
            />
          )}
        </StepsWrapper>
      ) : (
        <GridWrapper>
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
        </GridWrapper>
      )}
    </Wrapper>
  );
};

export default NehemRoadCheck;
