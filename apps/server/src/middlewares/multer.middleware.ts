const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req: Request, file: any, cb: any) {
    cb(null, path.join(__dirname, "../temp/my-upload"));
  },
  filename: function (req: Request, file: any, cb: any) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

export const multerUpload = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});
