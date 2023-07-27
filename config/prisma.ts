import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: conf.DATABASE_URL,
    },
  },
})

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var prisma: PrismaClient
}

global.prisma = prisma
