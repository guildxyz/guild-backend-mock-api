import { Router } from "express";
import { param } from "express-validator";
import validators from "../validators";
import * as guildController from "../../controllers/guildController";

const router: Router = Router();

export default (app: Router) => {
  app.use("/guild", router);

  router.post(
    "/",
    validators.authentication(),
    validators.createGuild(),
    guildController.createGuild
  );

  router.get("", guildController.getGuilds);

  router.get(
    "/access/:guildId/:address",
    validators.paramIdValidator("guildId"),
    validators.paramStringLengthValidator("address", 42, false, 42),
    guildController.getUserAccessesForGuild
  );

  router.get(
    "/member/:guildId/:address",
    validators.paramIdValidator("guildId"),
    validators.paramStringLengthValidator("address", 42, false, 42),
    guildController.getUserMemberAccessForGuild
  );

  router.get(
    "/:guildId",
    param("guildId").isLength({ min: 1 }),
    guildController.getGuild
  );

  router.patch(
    "/:guildId",
    validators.authentication(),
    validators.updateGuild(),
    guildController.updateGuild
  );

  router.delete(
    "/:guildId",
    validators.authentication(),
    validators.paramIdValidator("guildId"),
    guildController.deleteGuild
  );
};
