import { ErrorResult } from "../types";

const createErrorResponse = (errorMsg: string): ErrorResult => ({
  errors: [
    {
      msg: errorMsg,
    },
  ],
});

// eslint-disable-next-line import/prefer-default-export
export { createErrorResponse };
