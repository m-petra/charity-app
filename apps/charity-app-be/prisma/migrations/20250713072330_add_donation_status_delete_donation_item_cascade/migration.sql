-- AlterEnum
ALTER TYPE "DonationStatus" ADD VALUE 'PAYMENT_REQUIRED';

-- DropForeignKey
ALTER TABLE "DonationItem" DROP CONSTRAINT "DonationItem_donationId_fkey";

-- AddForeignKey
ALTER TABLE "DonationItem" ADD CONSTRAINT "DonationItem_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "Donation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
