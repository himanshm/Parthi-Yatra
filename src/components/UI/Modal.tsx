import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: (() => void) | undefined;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  //   const handleDialogClick = (e: MouseEvent) => {
  //     // Prevent clicks within the dialog from closing it
  //     e.stopPropagation();
  //   };

  const modalRoot = document.getElementById('modal');
  if (!modalRoot) {
    console.error('Modal root not found!');
    return;
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClick={onClose}
      onClose={onClose}
      className='backdrop:bg-stone-900/90 rounded-2xl shadow-xl'
    >
      <div className='w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-slate-200 shadow-xl rounded-2xl'>
        {children}
        <button
          onClick={onClose}
          className='absolute top-2 right-2.5 bg-gray-100 text-gray-700 hover:bg-gray-400 focus:outline-none rounded-full p-1.5 text-sm'
        >
          X
        </button>
      </div>
    </dialog>,
    modalRoot
  );
};

export default Modal;
