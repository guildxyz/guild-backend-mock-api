import { Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import { guildPlatformData } from "../static";

const getGuilds = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guild = [guildPlatformData];
      res.status(200).json(guild);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const getGuild = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guild = guildPlatformData;
      res.status(200).json(guild);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const join = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guild = guildPlatformData;
      res.status(200).json(guild);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const leave = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guild = guildPlatformData;
      res.status(200).json(guild);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const access = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guilds = [guildPlatformData];
      res.status(200).json(guilds);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const member = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guilds = [guildPlatformData];
      res.status(200).json(guilds);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const status = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guilds = [guildPlatformData];
      res.status(200).json(guilds);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const membership = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guilds = [guildPlatformData];
      res.status(200).json(guilds);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

const connect = async (req: Request, res: Response): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const guilds = {
        connectLink: "https://guild.xyz/connect/sjfuvasodifjsdfk",
        alreadyConnected: false,
      };
      res.status(200).json(guilds);
    } catch (error: any) {
      res.status(204).send();
    }
  }
};

export {
  getGuild,
  getGuilds,
  join,
  leave,
  access,
  status,
  connect,
  member,
  membership,
};
