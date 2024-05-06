import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import axios from 'axios';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useToast from '../../../../../hooks/useToast';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: string;
  uValue: any;
  userData: any;
  setReqStatus: any;
}

type FormValues = {
  news_name: string;
  news_link: string;
  authority: number;
  authority_link: string;
  moz_rank_link: string;
  global_rank: number;
  global_rank_link: string;
  social_link: string;
  traffic_link: string;
  social: number;
  traffic: number;
  moz_rank: number;
  image: string;
  package: Array<any>;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const Pricing = ['LIMITED', 'POPULAR', 'AUTHORITY', 'ULTIMATE'];

const PublicationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  status,
  uValue,
  userData,
  setReqStatus,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();
  const [price, setPricing] = useState([]);
  const { displayToast } = useToast();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('ddd', data);
    try {
      const apiUrl = `http://localhost:6060/api/v1/package/add_new`;
      const apiUrl2 = `http://localhost:6060/api/v1/package/update/${uValue?._id}`;
      const response = await axios.post(
        status === 'Update' ? apiUrl2 : apiUrl,
        {
          site: data,
        },
      );
      // console.log('response.data', response.data);
      if (response.data.status === 'success') {
        setReqStatus((ra: any) => !ra);
        displayToast({
          status: 'success',
          message: `Site ${status} Successfully!`,
        });
        onClose(); // Close modal on successful submission
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

  const closeModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onClose();
      setIsTransitioning(false);
    }, 300); // Adjust the transition duration as needed
  };

  const handleChangesetPricing = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const {
      target: { value },
    } = event;

    console.log('gggg', value);

    setPricing(typeof value === 'string' ? value.split(',') : value);
    setValue('package', value); // Set value directly
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
            {status === 'Update' ? 'Update' : 'Add a new link'} 11
          </h2>
          <button
            className="px-4 py-2 font-bold text-black rounded-md hover:bg-blue-100 transition-colors"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="mb-3 me-2">
              <label htmlFor="site_link" className="block">
                News Name
              </label>
              <input
                id="site_link"
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="text"
                defaultValue={uValue ? uValue.news_name : ''}
                required
                {...register('news_name')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="site_link" className="block">
                News Sites Link
              </label>
              <input
                id="site_link"
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="text"
                defaultValue={uValue ? uValue.news_link : ''}
                required
                {...register('news_link')}
              />
            </div>
          </div>

          <div className="mb-3 me-2">
            <label htmlFor="moz_rank" className="block">
              Site Image Link
            </label>
            <input
              id="moz_rank"
              required
              defaultValue={uValue ? uValue.moz_rank : ''}
              className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
              type="text"
              style={{ width: '100%' }}
              {...register('image')}
            />
          </div>

          <div className="flex">
            <div className="mb-3 me-2">
              <label htmlFor="site_link" className="block">
                AUTHORITY
              </label>
              <input
                id="site_link"
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                defaultValue={uValue ? uValue.authority : ''}
                required
                {...register('authority')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="authority_link" className="block">
                AUTHORITY Link
              </label>
              <input
                id="authority_link"
                type="text"
                required
                defaultValue={uValue ? uValue.authority_link : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                {...register('authority_link')}
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
                defaultValue={uValue ? uValue.moz_rank : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('moz_rank')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="moz_rank_link" className="block">
                MOZ RANK Link
              </label>
              <input
                id="moz_rank_link"
                required
                defaultValue={uValue ? uValue.moz_rank_link : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="text"
                {...register('moz_rank_link')}
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-3 me-2">
              <label htmlFor="global_rank" className="block">
                GLOBAL RANK
              </label>
              <input
                id="global_rank"
                required
                defaultValue={uValue ? uValue.global_rank : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('global_rank')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="global_rank_link" className="block">
                GLOBAL RANK Link
              </label>
              <input
                id="global_rank_link"
                required
                defaultValue={uValue ? uValue.global_rank_link : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="text"
                {...register('global_rank_link')}
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
                defaultValue={uValue ? uValue.social : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('social')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="social_link" className="block">
                SOCIAL Link
              </label>
              <input
                id="social_link"
                required
                defaultValue={uValue ? uValue.social_link : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="text"
                {...register('social_link')}
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-3 me-2">
              <label htmlFor="traffic" className="block">
                TRAFFIC
              </label>
              <input
                id="traffic"
                required
                defaultValue={uValue ? uValue.traffic : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="number"
                {...register('traffic')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="traffic_link" className="block">
                TRAFFIC Link
              </label>
              <input
                id="traffic_link"
                required
                defaultValue={uValue ? uValue.traffic_link : ''}
                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
                type="text"
                {...register('traffic_link')}
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label htmlFor="traffic" className="block">
                Packages:
              </label>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                placeholder="Select pricing"
                multiple
                required
                value={price}
                onChange={handleChangesetPricing}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                style={{ width: '100%' }}
                // className="bg-cyan-200"

                className="border-solid border-2 border-blue-600 rounded h-10 ps-2"
              >
                {Pricing.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={price.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>

              {/* {errors?.pricing && (
                <p className="text-red-500 text-xs italic">
                  Features is required.
                </p>
              )} */}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              className="border-solid border-2 border-blue-600 rounded px-4 py-2 bg-blue-600 text-white"
              type="submit"
            >
              {status}
            </button>

            {/* <input
              type="submit"
              value={status}
              className="border-solid border-2 border-blue-600 rounded px-4 py-2 bg-blue-600 text-white"
            /> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default PublicationModal;
