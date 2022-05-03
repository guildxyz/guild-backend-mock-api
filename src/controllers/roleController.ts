import { Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import logger from "../utils/logger";
import { createErrorResponse } from "../utils/utils";

const getRole = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const role = {
        imageUrl: "/guildLogos/107.svg",
        name: "Member",
        description: "",
        logic: "AND",
        requirements: [
          {
            type: "ERC20",
            address: "0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79",
            alue: "1",
            chain: "ETHEREUM",
          },
        ],
      };
      res.status(200).json(role);
    } catch (error) {
      res.status(204).send();
    }
  }
};

const createRole = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const role = {
        imageUrl: "/guildLogos/107.svg",
        name: "Member",
        description: "",
        logic: "AND",
        requirements: [
          {
            type: "ERC20",
            address: "0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79",
            value: "1",
            chain: "ETHEREUM",
          },
        ],
      };
      res.status(201).json(role);
    } catch (error: any) {
      logger.warn(`createRole - ${error.message}`);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

const updateRole = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const updatedRole = {
        imageUrl: "/guildLogos/107.svg",
        name: "Member",
        description: "",
        logic: "AND",
        requirements: [
          {
            type: "ERC20",
            address: "0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79",
            value: "1",
            chain: "ETHEREUM",
          },
        ],
      };
      res.status(200).json(updatedRole);
    } catch (error: any) {
      logger.warn(`updateGuild - ${error.message}`);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

const deleteRole = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      res.status(200).json({ success: true });
    } catch (error: any) {
      logger.warn(`deleteRole - ${error.message}`);
      res.status(400).json(createErrorResponse("You can't delete this role."));
    }
  }
};

export { getRole, createRole, updateRole, deleteRole };
