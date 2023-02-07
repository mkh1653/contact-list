import { PrismaClient } from "@prisma/client";
import formidable from "formidable";
import fs from "fs";

const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/images";

  form.parse(req, async (err, fields, files) => {
    if (err) {
      throw err;
    }
    // fields
    const { name, number, birthDate } = fields;
    // image
    let imageDb = "";
    if (Object.keys(files).length) {
      const oldpath = files.image.filepath;
      const newpath = "./public/images/" + files.image.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
      });
      imageDb = "images/" + files.image.originalFilename;
    }
    prisma.contact
      .create({
        data: {
          name,
          number,
          image: imageDb,
          birthDate: new Date(birthDate),
        },
      })
      .then((error) => {
        throw error;
      });
  });
  form.keepExtensions = true;
};
