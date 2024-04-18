import { useState } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

function ForgotPassword() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Button btntype='textOnly' onClick={handleOpenModal}>
        Lost Password?
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Password Recovery
        </h3>
        <div className='mt-2'>
          <p className='text-sm text-gray-500'>
            Please contact your admin for a new password. Sai Ram 🙏.
          </p>
        </div>
      </Modal>
    </>
  );
}

export default ForgotPassword;
