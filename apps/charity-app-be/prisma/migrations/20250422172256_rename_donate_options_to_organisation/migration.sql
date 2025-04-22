/*
  Warnings:

  - You are about to drop the column `donationOptionId` on the `DonationItem` table. All the data in the column will be lost.
  - You are about to drop the `DonationOption` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `organisationId` to the `DonationItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DonationItem" DROP CONSTRAINT "DonationItem_donationOptionId_fkey";

-- AlterTable
ALTER TABLE "DonationItem" DROP COLUMN "donationOptionId",
ADD COLUMN     "organisationId" TEXT NOT NULL;

-- DropTable
DROP TABLE "DonationOption";

-- CreateTable
CREATE TABLE "Organisation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "suggestedAmount" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "stripePriceId" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonationItem" ADD CONSTRAINT "DonationItem_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
