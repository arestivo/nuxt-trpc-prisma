import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'First Post',
      text: 'Vivamus lorem turpis, cursus a posuere rutrum, dapibus et dolor. Proin in pulvinar ex. Praesent aliquet purus felis, sollicitudin consectetur metus molestie vitae. Nullam fermentum enim ut purus bibendum fringilla. Suspendisse aliquet mi ut ipsum rhoncus, non blandit dolor scelerisque. Sed interdum orci non auctor aliquam. Maecenas vulputate commodo congue. Cras luctus interdum ante, id tristique ante fringilla a. Donec mollis, ipsum id mollis lobortis, nulla mauris faucibus risus, ut efficitur urna tellus vel turpis. Mauris in elit vel tortor posuere luctus. Donec vitae bibendum purus, non ornare sapien.',
    },
  })

  await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Second Post',
      text: 'Nulla faucibus massa vitae lacus gravida condimentum. Nullam auctor ipsum vehicula leo laoreet porttitor. Nulla facilisi. Phasellus imperdiet porta tellus, eu placerat est gravida et. In congue erat urna, tempor dignissim justo mollis at. Duis sit amet pharetra nisi. Donec malesuada at augue eget sagittis. Sed sed sagittis est. Donec vestibulum pretium fringilla. Vestibulum volutpat a nibh ut egestas. Curabitur luctus volutpat metus egestas iaculis.',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
