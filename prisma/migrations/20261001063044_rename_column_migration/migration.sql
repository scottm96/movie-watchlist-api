/*
  Warnings:

  - You are about to drop the column `postUrl` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" RENAME COLUMN "postUrl" TO  "posterUrl";
