import { Button } from 'antd';
import React from 'react';

interface GridCellButtonProps {
  data: any;
  onClick: (data: any) => void;
}

const GridCellButton = ({ data, onClick }: GridCellButtonProps) => {
  return (
    <Button type='primary' size='small' className='grid-cell-button' onClick={() => onClick({ data })}>
      삭제
    </Button>
  );
};

export default GridCellButton;
