-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "tea" DOUBLE PRECISION NOT NULL,
    "tep" DOUBLE PRECISION NOT NULL,
    "initioalPayment" DOUBLE PRECISION NOT NULL,
    "payment" DOUBLE PRECISION NOT NULL,
    "mortgageLifeInsurance" DOUBLE PRECISION NOT NULL,
    "allRiskInsurance" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "years" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
