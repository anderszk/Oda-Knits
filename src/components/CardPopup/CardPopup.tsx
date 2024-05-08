import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface CardPopupProps {
    images: any[]
    title: string,
    desc: string,
    isModalOpen: boolean,
    handleClosed: () => void
    handleOK () => void
}

const CardPopup: React.FC<CardPopupProps> = ({images, title, desc}) => {



  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CardPopup;

