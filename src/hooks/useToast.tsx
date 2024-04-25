import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const useToast = () => {
  const showToast = (text: string) => {
    Toastify({
      text: text,
      position: 'right',
      backgroundColor:
        'radial-gradient(862px at 6% 18%, rgb(21, 219, 149) 9.4%, rgb(26, 35, 160) 83.6%)',
    }).showToast();
  };

  const displayToast = ({
    status,
    message,
  }: {
    status: string;
    message: string;
  }) => {
    Toastify({
      text: message,
      gravity: 'bottom',
      position: 'right',
      backgroundColor:
        status === 'success'
          ? 'radial-gradient(862px at 6% 18%, rgb(21, 219, 149) 9.4%, rgb(26, 35, 160) 83.6%)'
          : 'red',
    }).showToast();
  };

  return {
    showToast,
    displayToast,
  };
};

export default useToast;
