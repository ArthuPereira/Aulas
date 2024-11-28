import fastify from "fastify";

const app = fastify()

app.get("/", function (request, reply) {
    return "Olá, Mundo!"
})

app.listen({ port: 3000 }).then(() => {
    console.log("Servidor no ar!")
})