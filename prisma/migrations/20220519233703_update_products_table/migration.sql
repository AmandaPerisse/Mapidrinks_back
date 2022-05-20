/*
  Warnings:

  - Added the required column `image` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preparation` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "products_price_key";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "preparation" TEXT NOT NULL;
