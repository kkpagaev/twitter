import { RouteOptions } from "fastify"

export const options: RouteOptions = {
  method: "GET",
  url: "/",
  handler: async (req, reply) => {
    return reply.view("index", { text: "text" })
  },
}
