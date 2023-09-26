/*
  Warnings:

  - Added the required column `cantidad_empleados` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conoce_napsis` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `industria` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `informacion_napsis` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interes_legajo_digital` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plataforma_empresa` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sistema_integrado` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiene_recibo_digital` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "puntos" INTEGER,
    "empresa" TEXT NOT NULL,
    "cantidad_empleados" TEXT NOT NULL,
    "industria" TEXT NOT NULL,
    "conoce_napsis" TEXT NOT NULL,
    "tiene_recibo_digital" TEXT NOT NULL,
    "plataforma_empresa" TEXT NOT NULL,
    "sistema_integrado" TEXT NOT NULL,
    "interes_legajo_digital" TEXT NOT NULL,
    "informacion_napsis" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "name", "phone", "puntos") SELECT "email", "id", "name", "phone", "puntos" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
