import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';
import { useSelector } from 'react-redux';
import useToast from '../../../hooks/useToast';

type PropsPay = {
  checked: any;
  setValue: any;
};

export default function PayButton({ checked, setValue }: PropsPay) {
  const { writingPackage, detailedResearch, publishPackage, account, brand } =
    useSelector((state) => state.order);

  const { displayToast } = useToast();

  console.log(
    'writingPackage, detailedResearch, publishPackage, account, brand',
    writingPackage,
    detailedResearch,
    publishPackage,
    account,
    brand,
  );

  const handleOnPayment = async () => {
    if (!checked) {
      setValue(true);
      return;
    }

    try {
      const response = await axios.post(
        'https://fameflownetwork-server.vercel.app/api/v1/payment/oder',
      );

      if (response.statusText !== 'OK') {
        displayToast({
          status: 'error',
          message: 'Something wrong. Please try again',
        });
        return;
      }

      if (response?.data?.session.url) {
        window.location.href = response.data.session.url;
      }
    } catch (error) {
      displayToast({
        status: 'error',
        message: 'Server Error!',
      });
    }
  };

  return (
    <button
      className="button-next mt-5 mb-5"
      role="button"
      onClick={handleOnPayment}
    >
      Continue to Payment <ArrowForwardIcon />
    </button>
  );
}
