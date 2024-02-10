const asyncHandler = (requstHandler) => {
  return (req, res, next) => {
    Promise.resolve(requstHandler(req, res, next)).catch((err) => next(err));
  };
};

// HOC synctax const hosFn = (fn) => () => {}
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(res, req, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       succes: false,
//       message: err.message,
//     });
//   }
// };

export { asyncHandler };
