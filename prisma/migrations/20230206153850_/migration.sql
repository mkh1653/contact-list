/*
  Warnings:

  - You are about to drop the column `email` on the `Contact` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL
);
INSERT INTO "new_Contact" ("birthDate", "id", "image", "name", "number") SELECT "birthDate", "id", "image", "name", "number" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
