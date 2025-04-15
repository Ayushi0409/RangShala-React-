import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = ({ successMessage, errorMessage, message }) => {
  if (successMessage) {
    toast.success(successMessage);
  }
  if (errorMessage) {
    toast.error(errorMessage);
  }
  if (message) {
    toast.success(message);
  }

  return <ToastContainer />;
};


export default Alert;
