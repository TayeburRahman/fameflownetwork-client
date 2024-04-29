import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: string;
  uValue: any;
}

type FormValues = {
  site_link: string;
  authority: string;
  global_link: string;
  social: string;
  traffic: string;
  moz_rank: string;
};

const LinkModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  status,
  uValue,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const closeModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onClose();
      setIsTransitioning(false);
    }, 300); // Adjust the transition duration as needed
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full transition-opacity ${
          isOpen ? 'block' : 'hidden'
        } ${isTransitioning ? 'duration-300' : ''}`}
        onClick={closeModal}
        style={{ opacity: '0.2', backgroundColor: 'rgb(0 0 0 / 31%)' }}
      ></div>

      {/* Modal dialog */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg transition-all ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${isTransitioning ? 'duration-300' : ''}`}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">
            {status === 'Update' ? 'Update' : 'Add a new link'}
          </h2>
          <button
            className="px-4 py-2 font-bold text-black rounded-md hover:bg-blue-100 transition-colors"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <p className="text-gray-700 mb-4">Input type goes here...</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="site_link" className="block">
              News Sites Link
            </label>
            <input
              id="site_link"
              className="border-solid border-2 border-blue-600 rounded h-10  w-full"
              type="text"
              defaultValue={uValue && uValue?.name}
              required
              {...register('site_link')}
            />
          </div>
          <div className="flex">
            <div className="mb-3 me-2">
              <label htmlFor="site_link" className="block">
                News Name
              </label>
              <input
                id="site_link"
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="text"
                defaultValue={uValue && uValue.name}
                required
                {...register('site_link')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="authority" className="block">
                AUTHORITY
              </label>
              <input
                id="authority"
                type="number"
                required
                defaultValue={uValue && uValue.visitors}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                {...register('authority')}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-3 me-2">
              <label htmlFor="moz_rank" className="block">
                MOZ RANK
              </label>
              <input
                id="moz_rank"
                required
                defaultValue={uValue && uValue.revenues}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('moz_rank')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="global_link" className="block">
                GLOBAL RANK
              </label>
              <input
                id="global_link"
                required
                defaultValue={uValue && uValue.sales}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('global_link')}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-3 me-2">
              <label htmlFor="social" className="block">
                SOCIAL
              </label>
              <input
                id="social"
                required
                defaultValue={uValue && uValue.conversion}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('social')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="traffic" className="block">
                TRAFFIC
              </label>
              <input
                id="traffic"
                required
                defaultValue={uValue && uValue.conversion}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('traffic')}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <input
              type="submit"
              value={status}
              className="border-solid border-2 border-blue-600 rounded px-4 py-2 bg-blue-600 text-white"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default LinkModal;
