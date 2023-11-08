import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface UserRequest {
 name: string;
 email: string;
 password: string;
}

class CreateUserService {
 async execute({ name, email, password }: UserRequest) {
  if (!email) {
   throw new Error("email incorrect");
  }

  const userAlreadyExists = await prismaClient.user.findFirst({
   where: {
    email: email,
   },
  });

  if (userAlreadyExists) {
   throw new Error("user already exists");
  }

  const passwordHash = await hash(password, 8)

  const user = await prismaClient.user.create({
   data: {
    nome: name,
    email: email,
    password: passwordHash,
   },
   select: {
    id: true,
    nome: true,
    email: true,
   },
  });

  return user;
 }
}

export { CreateUserService };