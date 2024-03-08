import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const useOrdersOpen = async () => {
  const itensOrdersOpen = await db.ordersOpen.findMany();
  return itensOrdersOpen;
};