import { Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import logger from "../utils/logger";
import { createErrorResponse } from "../utils/utils";
import { getGuildResponse } from "../static";

const getGuild = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guild = getGuildResponse;
      res.status(200).json(guild);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const getGuilds = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guilds = [getGuildResponse];
      res.status(200).json(guilds);
    } catch (error) {
      res.status(204).send();
    }
  }
};

const createGuild = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guild = {
        id: 2244,
        name: "api-test",
        urlName: "api-test",
        description: "",
        imageUrl: "/guildLogos/145.svg",
        createdAt: "2022-03-09T17:28:52.153Z",
        showMembers: true,
      };
      res.status(201).json(guild);
    } catch (error: any) {
      logger.warn(`createGuild - ${error.message}`);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

const updateGuild = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      logger.verbose({ message: `updateGuild controller`, meta: req.params });
      const guild = {
        id: 2244,
        name: "api-test",
        urlName: "api-test",
        description: "",
        imageUrl: "/guildLogos/145.svg",
        createdAt: "2022-03-09T17:28:52.153Z",
        showMembers: true,
      };
      res.status(201).json(guild);
    } catch (error: any) {
      logger.warn(`updateGuild - ${error.message}`);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

const deleteGuild = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      res.status(200).json({ success: true });
    } catch (error: any) {
      logger.warn(`deleteGuild - ${error.message}`);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

const getUserAccessesForGuild = async (
  req: Request,
  res: Response
): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const accesses = [
        {
          roleId: 2339,
          access: true,
        },
        {
          roleId: 2015,
          access: true,
        },
        {
          roleId: 99,
          access: false,
        },
      ];
      res
        .status(accesses.some((a) => a.access === null) ? 500 : 200)
        .json(accesses);
    } catch (error: any) {
      logger.warn(`getUserAccessesForGuild - ${error.message}`);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

const getUserMemberAccessForGuild = async (
  req: Request,
  res: Response
): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const memberAccesses = [
        {
          roleId: 1034,
          access: false,
        },
        {
          roleId: 1031,
          access: false,
        },
        {
          roleId: 1175,
          access: true,
        },
      ];
      res.status(200).json(memberAccesses);
    } catch (error: any) {
      logger.warn(`getUserMemberAccessForGuild - ${error.message}`);
      res.status(400).json(createErrorResponse(error.message));
    }
  }
};

export {
  getGuild,
  getGuilds,
  createGuild,
  updateGuild,
  deleteGuild,
  getUserAccessesForGuild,
  getUserMemberAccessForGuild,
};
