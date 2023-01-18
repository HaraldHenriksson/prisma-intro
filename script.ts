import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Harald",
            age: 25,
            email: "Harald@test.com",
            UserPreference: {
                create: {
                    emailUpdates: true,
                },
            },
        },
        include: {
            UserPreference: true,
        }
    })

    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })