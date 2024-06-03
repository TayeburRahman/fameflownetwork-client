import axios from 'axios';
import React, { useState } from 'react';
import useToast from '../../../../../hooks/useToast';

interface ModalProps {
  onCloseDelete: () => void;
  dValue: any;
  isDelete: any;
}

const DeleteModal: React.FC<ModalProps> = ({
  onCloseDelete,
  dValue,
  isDelete,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { displayToast } = useToast();
  const closeModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onCloseDelete();
      setIsTransitioning(false);
    }, 300); // Adjust the transition duration as needed
  };

  const deleteOnHandel = async () => {
    try {
      const apiUrl2 = `https://fameflownetwork-server.vercel.app/api/v1/package/delete/${dValue._id}`;

      const response = await axios.delete(apiUrl2);

      if (response.data.status === 'success') {
        displayToast({
          status: 'success',
          message: 'Publication delete successfully!',
        });
        closeModal(); // Close modal on successful submission
      } else {
        displayToast({
          status: 'error',
          message: 'There is something wrong! Please try again.',
        });
      }
    } catch (error: any) {
      console.error('Submission error:', error.response?.data || error.message);
      displayToast({
        status: 'error',
        message:
          'An error occurred while processing your request. Please try again later.',
      });
    }
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full transition-opacity ${
          isDelete ? 'block' : 'hidden'
        } ${isTransitioning ? 'duration-300' : ''}`}
        onClick={closeModal}
        style={{ opacity: '0.2', backgroundColor: 'rgb(0 0 0 / 31%)' }}
      ></div>

      {/* Modal dialog */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg transition-all ${
          isDelete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${isTransitioning ? 'duration-300' : ''}`}
      >
        <div className="flex justify-between mb-5">
          <h2 className="text-xl font-bold mb-4">
            {/* {status === ' ' ? ' ' : ' '} */}
          </h2>
          <button
            className="px-4 py-2 font-bold text-black rounded-md bg-blue-100 hover:bg-blue-200 transition-colors"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <h6 className="mb-5">
          Are you sure! you want to delete{' '}
          <span className="font-bold">{dValue && dValue.email}</span>
        </h6>

        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 text-white transition-colors"
            onClick={deleteOnHandel}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
