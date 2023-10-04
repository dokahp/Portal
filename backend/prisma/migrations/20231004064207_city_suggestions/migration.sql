/*
  Warnings:

  - You are about to drop the column `answer` on the `City` table. All the data in the column will be lost.
  - Added the required column `suggestions` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" RENAME COLUMN "answer" TO "suggestions";
