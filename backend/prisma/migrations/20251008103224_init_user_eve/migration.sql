-- CreateTable
CREATE TABLE "PUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "PUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eve" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "autonomie" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Eve_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PUser_email_key" ON "PUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PUser_phone_key" ON "PUser"("phone");

-- AddForeignKey
ALTER TABLE "Eve" ADD CONSTRAINT "Eve_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "PUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
