import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const insertUser = async(email: string, password: string, firstName: string, lastName: string) => {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}

insertUser("admin", "12345", "Dhiru", "Gupta");