const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("application")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/leads/");
  },
  filename: (req, file, cb) => {
    cb(null, `00-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage
    /* , fileFilter: imageFilter  */
});
module.exports = uploadFile;