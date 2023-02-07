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
    // fields
    const { name, number, birthDate, id } = fields;
    const contact = await prisma.contact.update({
      where: { id: id },
      data: {
        name,
        number,
        birthDate: new Date(birthDate),
      },
    });
    console.log(contact);
    // image
    if (Object.keys(files).length) {
      const oldpath = files.image.filepath;
      const newpath = "./public/images/" + files.image.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
      });
      const contactImage = await prisma.contact.update({
        where: { id: id },
        data: {
          image: "images/" + files.image.originalFilename,
        },
      });
    }
  });
  form.keepExtensions = true;
};
