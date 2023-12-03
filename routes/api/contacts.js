const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { isValidId } = require("../../middlewares");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.postContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.putSchema),
  ctrl.patchContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.patchSchema),
  ctrl.putContact
);

module.exports = router;
