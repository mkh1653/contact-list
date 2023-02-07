import { PrismaClient } from "@prisma/client";
import moment from "moment-jalaali";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = await prisma.contact.findMany();
  data.map((d) => {
    d.birthDate = moment(d.birthDate).format("jYYYY/jMM/jDD");
  });
  res.status(200).json(data);
}
