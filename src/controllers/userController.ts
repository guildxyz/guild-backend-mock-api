import { Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import { ValidateResult } from "../types";
import logger from "../utils/logger";
import { createErrorResponse } from "../utils/utils";

const getUserMemberships = async (
  req: Request,
  res: Response
): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const userMemberships = [
        {
          guildId: 13,
          roleids: [397],
        },
        {
          guildId: 21,
          roleids: [1175],
        },
        {
          guildId: 1533,
          roleids: [2339, 2015],
        },
      ];
      res.status(200).json(userMemberships);
    } catch (error: any) {
      logger.warn(error.message);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};
const join = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const joinResponse: ValidateResult[] = [
        { roleId: 22, access: true },
        { roleId: 33, access: false },
      ];
      res.status(200).json(joinResponse);
    } catch (error: any) {
      logger.warn(error.message);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

export { getUserMemberships, join };
