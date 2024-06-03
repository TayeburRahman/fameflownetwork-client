import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { useEffect, useState } from 'react';

type props = {
  setStatus: any;
  id: any;
  type: any;
  order: any;
  colorB: string;
};

export default function UpdateSelector({
  setStatus,
  id,
  type,
  order,
  colorB,
}: props) {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState<number | string>('');
  const [oderStatus, setOrderStatus] = useState({});
  const [oderPayment, setPayment] = useState({});
  const [typeUpdate, setApiStatus] = useState({});

  useEffect(() => {
    const updateData = async () => {
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/payment/order/${typeUpdate}/update/${id}/`;
        const response = await axios.put(apiUrl, { oderStatus, oderPayment });
        console.log('response.data', response?.data);
        if (response.data.status === 'success') {
          console.log(
            'response?.data?.order?.payment',
            response?.data?.order?.payment,
          );

          setStatus((e: boolean) => !e);
        } else {
        }
      } catch (error: any) {
        console.error(
          'Submission error:',
          error.response?.data || error.message,
        );
      }
    };

    updateData();
  }, [oderStatus, oderPayment]);

  const handleChangeStatus = (event: SelectChangeEvent<typeof age>) => {
    setOrderStatus(event.target.value);
    setApiStatus('status');
  };

  const handleChangePayment = (event: SelectChangeEvent<typeof age>) => {
    setPayment(event.target.value);
    setApiStatus('payment');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string,
  ) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        style={{
          backgroundColor: colorB,
          color: 'white',
        }}
      >
        {' '}
        {type === 'payment' ? order?.payment : order?.status}
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>
          {type === 'payment' ? 'Update Payment' : 'Update Status'}
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              {type === 'payment' && (
                <Select
                  native
                  value={order?.payment ? order?.payment : 'Loading..'}
                  onChange={handleChangePayment}
                  input={<OutlinedInput id="demo-dialog-native" />}
                >
                  <option value="UnPaid">A. Un Paid</option>
                  <option value="Paid">B. Paid </option>
                </Select>
              )}
              {type === 'status' && (
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={order?.status}
                  onChange={handleChangeStatus}
                  input={<OutlinedInput />}
                >
                  <MenuItem value="Pending">A. Pending</MenuItem>
                  <MenuItem value="Processing">B. Processing</MenuItem>
                  <MenuItem value="Compted">C. Compted</MenuItem>
                </Select>
              )}
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
