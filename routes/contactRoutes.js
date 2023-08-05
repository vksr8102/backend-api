const express = require("express");
const { getContacts, createContact, updateContact, deleteContact } = require("../controller/contactController");

const router = express.Router();

router.get("/",getContacts)
router.get("/:id",getContacts)
router.post("/",createContact)
router.put("/:id",updateContact)
router.delete("/:id",deleteContact);

module.exports = router;