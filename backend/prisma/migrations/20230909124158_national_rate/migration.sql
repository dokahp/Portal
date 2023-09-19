-- CreateTable
CREATE TABLE "NationalRate" (
    "id" SERIAL NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Cur_OfficialRate" DECIMAL(65,30) NOT NULL,
    "currencyCur_ID" INTEGER,

    CONSTRAINT "NationalRate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NationalRate" ADD CONSTRAINT "NationalRate_currencyCur_ID_fkey" FOREIGN KEY ("currencyCur_ID") REFERENCES "Currency"("Cur_ID") ON DELETE SET NULL ON UPDATE CASCADE;
