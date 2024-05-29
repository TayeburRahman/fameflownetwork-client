import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

const Sorry = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      if (count < 12) {
        setMessage((prevMessages) => [...prevMessages, 'sorry']);
        count += 1;
      } else {
        setDone(true);
        clearInterval(intervalId);
      }
    }, 10000 / 12); // 12 times in one second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container
      className="container mt-5 f-flex-c"
      style={{
        display: 'grid',
        justifyItems: 'center',
      }}
    >
      {message.map((msg, index) => (
        <p className="accordion_head" key={index}>
          {msg}
        </p>
      ))}
      {done && (
        <>
          <p>DONE</p>
        </>
      )}
    </Container>
  );
};

export default Sorry;
