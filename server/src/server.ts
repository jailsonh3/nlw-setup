import fastify from "fastify";
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = fastify();

app.register(cors);

const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  const habits = await prisma.habit.findMany({
    where: { 
      title: {
        startsWith: 'estudar'
      }
    }
  })

  return habits;
});

app.listen({
  port: 3333
}).then(() => console.log('running server!'));
