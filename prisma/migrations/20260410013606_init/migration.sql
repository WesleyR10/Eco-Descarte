-- CreateTable
CREATE TABLE "CollectionPoint" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'MG',
    "phone" TEXT,
    "hours" TEXT,
    "type" TEXT NOT NULL,
    "distance" TEXT,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "CollectionPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcceptedItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "collectionPointId" TEXT NOT NULL,

    CONSTRAINT "AcceptedItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WasteCategory" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tip" TEXT NOT NULL,
    "recyclable" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "WasteCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryExample" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CategoryExample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscardStep" (
    "id" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "DiscardStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Danger" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Danger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizResult" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "bestStreak" INTEGER NOT NULL DEFAULT 0,
    "timeSpent" INTEGER,

    CONSTRAINT "QuizResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'feedback',
    "read" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WasteCategory_slug_key" ON "WasteCategory"("slug");

-- AddForeignKey
ALTER TABLE "AcceptedItem" ADD CONSTRAINT "AcceptedItem_collectionPointId_fkey" FOREIGN KEY ("collectionPointId") REFERENCES "CollectionPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryExample" ADD CONSTRAINT "CategoryExample_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WasteCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscardStep" ADD CONSTRAINT "DiscardStep_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WasteCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Danger" ADD CONSTRAINT "Danger_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WasteCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
