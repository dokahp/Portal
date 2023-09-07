-- CreateTable
CREATE TABLE "Currency" (
    "Cur_ID" INTEGER NOT NULL,
    "Cur_ParentID" INTEGER NOT NULL,
    "Cur_Code" INTEGER NOT NULL,
    "Cur_Abbreviation" TEXT NOT NULL,
    "Cur_Name" TEXT NOT NULL,
    "Cur_Name_Bel" TEXT NOT NULL,
    "Cur_Name_Eng" TEXT NOT NULL,
    "Cur_QuotName" TEXT NOT NULL,
    "Cur_QuotName_Bel" TEXT NOT NULL,
    "Cur_QuotName_Eng" TEXT NOT NULL,
    "Cur_NameMulti" TEXT NOT NULL,
    "Cur_Name_BelMulti" TEXT NOT NULL,
    "Cur_Name_EngMulti" TEXT NOT NULL,
    "Cur_Scale" INTEGER NOT NULL,
    "Cur_Periodicity" INTEGER NOT NULL,
    "Cur_DateStart" TIMESTAMP(3) NOT NULL,
    "Cur_DateEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("Cur_ID")
);
