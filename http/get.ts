import { RouteOptions } from "fastify"

export const options: RouteOptions = {
  method: "GET",
  url: "/",
  handler: async () => {
    const users = await prisma.user.findMany()

    return users
  },
}
