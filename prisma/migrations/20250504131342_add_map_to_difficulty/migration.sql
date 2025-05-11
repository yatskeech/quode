/*
  Warnings:

  - The values [easy,medium,hard] on the enum `Difficulty` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Difficulty_new" AS ENUM ('Лёгкая', 'Средняя', 'Сложная');
ALTER TABLE "Problem" ALTER COLUMN "difficulty" DROP DEFAULT;
ALTER TABLE "Problem" ALTER COLUMN "difficulty" TYPE "Difficulty_new" USING ("difficulty"::text::"Difficulty_new");
ALTER TYPE "Difficulty" RENAME TO "Difficulty_old";
ALTER TYPE "Difficulty_new" RENAME TO "Difficulty";
DROP TYPE "Difficulty_old";
ALTER TABLE "Problem" ALTER COLUMN "difficulty" SET DEFAULT 'Средняя';
COMMIT;

-- AlterTable
ALTER TABLE "Problem" ALTER COLUMN "difficulty" SET DEFAULT 'Средняя';
