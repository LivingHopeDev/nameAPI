const handleErrors = (err) => {
  let errs = {};

  if (err.code === 11000 && err.keyPattern.name) {
    errs = "Name already exist";
  } else if (err.error === "ENOTFOUND") {
    errs = "Connection lost";
  }

  return errs;
};

module.exports = { handleErrors };
