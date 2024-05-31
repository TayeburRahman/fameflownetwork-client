import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type PropsPay = {
  checked: any;
  setValue: any;
};

export default function SuccessPayment() {
  const navigation = useNavigate();
  return (
    <div>
      <Container>
        <div className="grid_center success_pay mt-5 pt-5">
          <CheckCircleIcon className="" />
          <Typography variant="h5">Successfully pay</Typography>
          <button
            className="button-next mt-5 mb-5"
            onClick={(e) => navigation('/')}
          >
            Go to Home page
          </button>
        </div>
      </Container>
    </div>
  );
}
