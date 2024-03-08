-- CreateTable
CREATE TABLE "orders" (
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

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orders_rel_service_key" ON "orders"("rel_service");
