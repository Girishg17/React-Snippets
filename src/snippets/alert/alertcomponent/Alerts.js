import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Alert = ({ message, onClose, type }) => {
  const successAlert = (message, onClose) => {
    MySwal.fire({
      title: 'Success',
      text: message,
      icon: 'success',
      confirmButtonText: 'Ok',
      willClose: onClose
    });
  };

  const errorAlert = (message, onClose) => {
    MySwal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok',
      willClose: onClose
    });
  };

  const warningAlert = (message, onClose) => {
    MySwal.fire({
      title: 'Warning',
      text: message,
      icon: 'warning',
      confirmButtonText: 'Ok',
      willClose: onClose
    });
  };

  const infoAlert = (message, onClose) => {
    MySwal.fire({
      title: 'Info',
      text: message,
      icon: 'info',
      confirmButtonText: 'Ok',
      willClose: onClose
    });
  };

  switch (type) {
    case 'success':
      return successAlert(message, onClose);
    case 'error':
      return errorAlert(message, onClose);
    case 'warning':
      return warningAlert(message, onClose);
    case 'info':
      return infoAlert(message, onClose);
    default:
      return infoAlert(message, onClose);
  }
};

export default Alert;
