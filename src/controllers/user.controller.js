import { asyncHandler } from "../utils/asyncHandlers.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(500).json({
    message: "Ok uday !",
  });
});

export { registerUser };
