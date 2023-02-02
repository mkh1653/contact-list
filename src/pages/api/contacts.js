import { PrismaClient } from "@prisma/client";
import moment from "moment";
const prisma = new PrismaClient();

const Query = async () => {
  const result = await prisma.contact.findMany();
  return result;
};

export default async function handler(req, res) {
  const data = await Query();
  data.map((d) => {
    d.birthDate = moment(d.birthDate).format("YYYY MM DD");
  });
  res.status(200).json(data);
}
