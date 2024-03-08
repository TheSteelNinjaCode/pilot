/*
  Warnings:

  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "orders";

-- CreateTable
CREATE TABLE "ordersopen" (
    "id" TEXT NOT NULL,
    "num_id" SERIAL NOT NULL,
    "order_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type_order" TEXT NOT NULL,
    "equipament" TEXT NOT NULL,
    "creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start_prog" TIMESTAMP NOT NULL,
    "end_prog" TIMESTAMP NOT NULL,
    "responsible" TEXT NOT NULL,
    "conditions" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "rel_service" TEXT NOT NULL,

    CONSTRAINT "ordersopen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ordersopen_rel_service_key" ON "ordersopen"("rel_service");
