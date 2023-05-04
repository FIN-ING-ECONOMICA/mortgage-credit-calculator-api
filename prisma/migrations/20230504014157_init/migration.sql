-- CreateEnum
CREATE TYPE "BANK" AS ENUM ('INTERBANK', 'BBVA', 'BCP');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "homeAdress" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealSate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isBoughtById" TEXT NOT NULL,

    CONSTRAINT "RealSate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "initialPayment" DOUBLE PRECISION NOT NULL,
    "bank" "BANK" NOT NULL,
    "isBorrowedById" TEXT NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bonus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "isAppliedToId" TEXT NOT NULL,

    CONSTRAINT "Bonus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RealSate_isBoughtById_key" ON "RealSate"("isBoughtById");

-- CreateIndex
CREATE UNIQUE INDEX "Loan_isBorrowedById_key" ON "Loan"("isBorrowedById");

-- CreateIndex
CREATE UNIQUE INDEX "Bonus_isAppliedToId_key" ON "Bonus"("isAppliedToId");

-- AddForeignKey
ALTER TABLE "RealSate" ADD CONSTRAINT "RealSate_isBoughtById_fkey" FOREIGN KEY ("isBoughtById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_isBorrowedById_fkey" FOREIGN KEY ("isBorrowedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bonus" ADD CONSTRAINT "Bonus_isAppliedToId_fkey" FOREIGN KEY ("isAppliedToId") REFERENCES "Loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
