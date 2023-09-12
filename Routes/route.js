const { Router } = require("express");
const router = Router();
const {
  getPerson,
  getAllPersons,
  postPerson,
  updatePerson,
  deletePerson,
} = require("../Controllers/personController");

router.route("/:user_id").get(getPerson);
router.route("/").get(getAllPersons);
router.route("/").post(postPerson);
router.route("/:user_id").patch(updatePerson);
router.route("/:user_id").delete(deletePerson);

module.exports = router;
