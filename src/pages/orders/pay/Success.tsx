import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useToast from '../../../hooks/useToast';

type PropsPay = {
  checked: any;
  setValue: any;
};

export default function SuccessPayment() {
  const { id, email } = useParams();

  const { displayToast } = useToast();

  useEffect(() => {
    const data = {
      id,
      email,
    };

    const postData = async () => {
      try {
        const response = await axios.post(
          `https://fameflownetwork-server.vercel.app/api/v1/payment/order/${id}/user/${email}`,
        );

        const { token, user } = response.data;
        if (response.status === 204) {
          displayToast({
            status: 'error',
            message: response.data.message,
          });
        }
        if (user?.email) {
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: token,
              user: user,
              id: user._id,
            }),
          );
        }
      } catch (error) {
        // setLoading(false);
      }
    };

    postData();
  }, [id, email]);
  const navigation = useNavigate();
  return (
    <div>
      <Container>
        <div className="grid_center success_pay mt-5 pt-5">
          <CheckCircleIcon className="" />
          <Typography variant="h5">Successfully pay</Typography>
          <button
            className="button-next mt-5 mb-5"
            onClick={(e) => navigation('/user-dashboard/profile')}
          >
            Go to your profile
          </button>
        </div>
      </Container>
    </div>
  );
}
