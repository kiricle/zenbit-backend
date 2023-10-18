-- CreateTable
CREATE TABLE "deals" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "daysLeft" INTEGER NOT NULL,
    "sold" INTEGER NOT NULL,
    "yield" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "deals_pkey" PRIMARY KEY ("id")
);
