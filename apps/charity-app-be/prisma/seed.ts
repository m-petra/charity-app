import { PrismaClient } from "../src/generated/prisma/default";
import { organisations } from "./organisations";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Check existing organisations
  const existingOrganisations = await prisma.organisation.findMany({
    select: { stripePriceId: true },
  });
  const existingPriceIds = new Set(
    existingOrganisations.map((p:any) => p.stripePriceId)
  );

  console.log({ existingOrganisations });

  console.log({ organisations });

  // Create only products that don't exist
  for (const organisation  of organisations) {
    const { ...organisationData } = organisation ;
    if (!existingPriceIds.has(organisationData.stripePriceId)) {
      await prisma.organisation.create({
        data: {
          name: organisationData.name,
          description: organisationData.description,
          suggestedAmount: organisationData.suggestedAmount,
          image: organisationData.image,
          stripePriceId: organisationData.stripePriceId,
          isFeatured: organisationData.isFeatured,
          createdAt: organisationData.createdAt,
          updatedAt: organisationData.updatedAt,
        },
      });
      console.log(`Created organisation: ${organisationData.name}`);
    } else {
      console.log(`Skipping existing organisation: ${organisationData.name}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
