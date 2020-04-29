import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';

const AlertMessage = ({ message, color }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const alert = visible ? (
    <Alert color={color}>
      <p style={{ margin: 0 }}>{message}</p>
    </Alert>
  ) : null;

  return alert;
};

export default AlertMessage;
