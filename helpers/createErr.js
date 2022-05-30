const statusMessages = {
    404: 'Not found',
    500: 'Server ERROR'
  };
  
  const createError = (status, message = statusMessages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
  };
  module.exports = createError;