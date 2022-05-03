import { body, param } from "express-validator";

const paramTrimmer = (fieldName: string) =>
  param(fieldName).trim().isLength({ min: 1 });

const bodyTrimmer = (
  fieldName: string,
  optional: boolean = false,
  nullable: boolean = false
) => {
  if (optional) {
    return body(fieldName).optional({ nullable }).trim().isLength({ min: 1 });
  }
  return body(fieldName).trim().isLength({ min: 1 });
};

const bodyStringLengthValidator = (
  fieldName: string,
  min: number,
  optional: boolean = false,
  max?: number
) => {
  if (!max) {
    if (optional) {
      return body(fieldName).optional().trim().isLength({ min });
    }
    return body(fieldName).trim().isLength({ min });
  }
  if (optional) {
    return body(fieldName).optional().trim().isLength({ min, max });
  }
  return body(fieldName).trim().isLength({ min, max });
};

const paramStringLengthValidator = (
  fieldName: string,
  min: number,
  optional: boolean = false,
  max?: number
) => {
  if (!max) {
    if (optional) {
      return param(fieldName).optional().trim().isLength({ min });
    }
    return param(fieldName).trim().isLength({ min });
  }
  if (optional) {
    return param(fieldName).optional().trim().isLength({ min, max });
  }
  return param(fieldName).trim().isLength({ min, max });
};

const bodyIdValidator = (fieldName: string, optional: boolean = false) => {
  if (optional) {
    return body(fieldName)
      .optional()
      .trim()
      .isLength({ min: 1 })
      .isNumeric()
      .toInt();
  }
  return body(fieldName).trim().isLength({ min: 1 }).isNumeric().toInt();
};

const paramIdValidator = (fieldName: string, optional: boolean = false) => {
  if (optional) {
    return param(fieldName)
      .optional()
      .trim()
      .isLength({ min: 1 })
      .isNumeric()
      .toInt();
  }
  return param(fieldName).trim().isLength({ min: 1 }).isNumeric().toInt();
};

const paramDiscordIdValidator = (fieldName: string) =>
  param(fieldName).trim().isLength({ min: 1 }).isNumeric();

const bodyDiscordIdValidator = (fieldName: string) =>
  body(fieldName).trim().isLength({ min: 1 }).isNumeric();

const bodyIsArrayValidator = (fieldName: string, min: number) =>
  body(fieldName).isArray({ min });

const roleRequirementsValidator = (fieldName: string) =>
  body(fieldName)
    .isArray({ min: 1 })
    .custom((requirements: any[]) => {
      requirements.forEach((requirement: any) => {
        if (
          ![
            "ERC20",
            "ERC721",
            "ERC1155",
            "COIN",
            "SNAPSHOT",
            "ALLOWLIST",
            "POAP",
            "MIRROR",
            "UNLOCK",
            "JUICEBOX",
            "FREE",
          ].includes(requirement.type)
        ) {
          throw new Error("Not valid requirement type");
        }
      });
      return true;
    });

const bodyRoleLogicValidator = (fieldName: string) =>
  body(fieldName)
    .optional()
    .trim()
    .isIn(["AND", "OR", "NAND", "NOR"])
    .isLength({ min: 1, max: 4 });

const bodyBooleanValidator = (fieldName: string) =>
  body(fieldName).optional().isBoolean();

const bodyAdminsValidator = [
  body("payload.admins").optional().isArray(),
  body("payload.admins.*")
    .optional()
    .trim()
    .isLength({ min: 42, max: 42 })
    .toLowerCase(),
];

const authentication = () => [
  bodyStringLengthValidator(`validation.address`, 42, false, 42),
  bodyStringLengthValidator(`validation.addressSignedMessage`, 132, false, 132),
  bodyStringLengthValidator(`validation.nonce`, 66, false, 66),
  bodyStringLengthValidator(`validation.random`, 16, false, 128),
  bodyStringLengthValidator(`validation.hash`, 66, true, 66),
  bodyStringLengthValidator(`validation.timestamp`, 13, false, 13),
  body("payload").isObject(),
];

const createGuild = () => [
  bodyStringLengthValidator("payload.name", 1, false, 50),
  bodyStringLengthValidator("payload.urlName", 1, true, 64),
  bodyStringLengthValidator("payload.description", 0, true, 1000),
  bodyStringLengthValidator("payload.imageUrl", 0, true, 500),
  body("payload.theme").optional().isObject(),
  bodyIsArrayValidator("payload.roles", 1),
  bodyStringLengthValidator("payload.roles.*.name", 1, true, 50),
  bodyStringLengthValidator("payload.roles.*.description", 0, true, 1000),
  bodyStringLengthValidator("payload.roles.*.imageUrl", 0, true, 500),
  bodyStringLengthValidator("payload.roles.*.imageUrl", 0, true, 500),
  bodyRoleLogicValidator("payload.roles.*.logic"),
  roleRequirementsValidator("payload.roles.*.requirements"),
  body("payload.platform").isIn(["DISCORD", "TELEGRAM"]).optional(),
  bodyStringLengthValidator("payload.platformId", 1).optional(),
  bodyStringLengthValidator("payload.channelId", 1, true).optional(),
  bodyBooleanValidator("payload.showMembers"),
  bodyBooleanValidator("payload.hideFromExplorer"),
  ...bodyAdminsValidator,
  bodyBooleanValidator("isGuarded"),
  bodyBooleanValidator("grantAccessToExistingRoles"),
];

const updateGuild = () => [
  paramIdValidator("guildId"),
  bodyStringLengthValidator("payload.name", 1, true, 50),
  bodyStringLengthValidator("payload.description", 0, true, 1000),
  bodyStringLengthValidator("payload.imageUrl", 0, true, 500),
  body("payload.theme").optional().isObject(),
  bodyRoleLogicValidator("logic").optional(),
  roleRequirementsValidator("payload.*.requirements").optional(),
  bodyBooleanValidator("payload.showMembers"),
  bodyBooleanValidator("payload.hideFromExplorer"),
  ...bodyAdminsValidator,
  bodyBooleanValidator("isGuarded"),
  bodyBooleanValidator("grantAccessToExistingRoles"),
];

const roleGatedChannels = [
  body("gatedChannels.categories.*").isLength({ min: 1 }).optional(),
  body("gatedChannels.channels.*").isLength({ min: 1 }).optional(),
];

export default {
  paramTrimmer,
  paramStringLengthValidator,
  paramIdValidator,
  bodyTrimmer,
  bodyStringLengthValidator,
  bodyIdValidator,
  paramDiscordIdValidator,
  bodyDiscordIdValidator,
  bodyIsArrayValidator,
  bodyRoleLogicValidator,
  bodyBooleanValidator,
  roleRequirementsValidator,
  bodyThemeValidator: body("theme").optional().isObject(),
  bodyPlatformValidator: body("platform").isIn(["DISCORD", "TELEGRAM"]),
  bodyDeleteFromDiscordValidator: body("payload.deleteFromDiscord")
    .optional()
    .isBoolean(),
  bodyPlatformWEBValidator: body("platform")
    .trim()
    .isIn(["TELEGRAM", "DISCORD", "WEB"]),
  bodyTriggerKickValidator: body("triggerKick")
    .default("true")
    .isBoolean()
    .toBoolean(),
  authentication,
  createGuild,
  updateGuild,
  roleGatedChannels,
};
