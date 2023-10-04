-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "answer" JSONB NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);
