// This is a helper file that will be used to connect to the database
// We create the client only once here and then we import it in the modules where we need it
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma