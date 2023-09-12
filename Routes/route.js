const { Router } = require("express");
const router = Router();
const {
  getPerson,
  getAllPersons,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../Controllers/personController");

router.route("/:user_id").get(getPerson);
router.route("/").get(getAllPersons);
router.route("/").post(createPerson);
router.route("/:user_id").patch(updatePerson);
router.route("/:user_id").delete(deletePerson);

module.exports = router;
