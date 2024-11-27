import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two clients
  const client1 = await prisma.client.upsert({
    where: { email: "john@gmail.com" },
    update: {},
    create: {
      firstName: "John",
      lastName: 'Doe',
      email: "john@gmail.com"
    },
  });

  const client2 = await prisma.client.upsert({
    where: { email: "brad@gmail.com" },
    update: {},
    create: {
      firstName: "Brad",
      lastName: 'pitt',
      email: "brad@gmail.com"
    },
  });

  const client3= await prisma.client.upsert({
    where: { email: "jack@gmail.com" },
    update: {},
    create: {
      firstName: "Jack",
      lastName: 'Sparrow',
      email: "jack@gmail.com"
    },
  });

  const client4 = await prisma.client.upsert({
    where: { email: "evan@gmail.com" },
    update: {},
    create: {
      firstName: "Evan",
      lastName: 'Spopovic',
      email: "evan@gmail.com"
    },
  });


  const property1 = await prisma.property.upsert({
    where: { address: "703-330 metcalfe" },
    update: {},
    create: {
      name: "Apt1",
      address: "703-330 metcalfe",
      clients: {
        connect: [
          { id: client1.id }, 
          { id: client2.id },
        ],
      },
    },
  });

  const property2 = await prisma.property.upsert({
    where: { address: "702-330 metcalfe" },
    update: {},
    create: {
      name: "Apt2",
      address: "702-330 metcalfe",
      clients: {
        connect: [
          { id: client1.id },
        ],
      },
    },
  });

  const property3 = await prisma.property.upsert({
    where: { address: "701-330 metcalfe" },
    update: {},
    create: {
      name: "Apt3",
      address: "701-330 metcalfe",
      clients: {
        connect: [
          { id: client3.id },
        ],
      },
    },
  });

  const property4 = await prisma.property.upsert({
    where: { address: "700-330 metcalfe" },
    update: {},
    create: {
      name: "Apt4",
      address: "700-330 metcalfe",
      clients: {
        connect: [
          { id: client4.id }, {id: client1.id}
        ],
      },
    },
  });


  const property5 = await prisma.property.upsert({
    where: { address: "604-330 metcalfe" },
    update: {},
    create: {
      name: "Apt5",
      address: "604-330 metcalfe",
      clients: {
        connect: [
          { id: client1.id}, {id: client2.id}, {id: client3.id}
        ],
      },
    },
  });



  console.log({ client1, client2, client3, client4, property1, property2, property3, property4, property5 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });