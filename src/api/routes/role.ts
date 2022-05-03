import { Router } from "express";
import { body } from "express-validator";
import validators from "../validators";
import * as roleController from "../../controllers/roleController";

const router: Router = Router();

export default (app: Router) => {
  app.use("/role", router);

  router.get(
    "/:roleId",
    validators.paramIdValidator("roleId"),
    roleController.getRole
  );

  router.post(
    "/",
    validators.authentication(),
    [
      validators.bodyIdValidator("payload.guildId"),
      validators.bodyStringLengthValidator("payload.name", 1, false, 50),
      validators.bodyStringLengthValidator(
        "payload.description",
        0,
        true,
        1000
      ),
      validators.bodyStringLengthValidator("payload.imageUrl", 0, true, 500),
      validators.bodyRoleLogicValidator("payload.logic"),
      validators.roleRequirementsValidator("payload.requirements"),
      body("payload.platform").optional().isIn(["DISCORD", "TELEGRAM"]),
      validators.bodyStringLengthValidator("payload.platformId", 1, true),
      validators.bodyStringLengthValidator("payload.channelId", 1, true),
      ...validators.roleGatedChannels,
    ],
    roleController.createRole
  );

  router.patch(
    "/:roleId",
    validators.authentication(),
    [
      validators.paramIdValidator("roleId"),
      validators.bodyStringLengthValidator("payload.name", 1, false, 50),
      validators.bodyStringLengthValidator(
        "payload.description",
        0,
        true,
        1000
      ),
      validators.bodyStringLengthValidator("payload.imageUrl", 0, true, 500),
      validators.bodyRoleLogicValidator("payload.logic"),
      validators.roleRequirementsValidator("payload.requirements"),
      validators.bodyStringLengthValidator("payload.platformId", 1, true),
      validators.bodyStringLengthValidator("payload.channelId", 1, true),
      ...validators.roleGatedChannels,
    ],
    roleController.updateRole
  );

  router.delete(
    "/:roleId",
    validators.authentication(),
    validators.paramIdValidator("roleId"),
    validators.bodyDeleteFromDiscordValidator,
    roleController.deleteRole
  );
};
