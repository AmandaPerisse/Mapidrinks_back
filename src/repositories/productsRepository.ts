import { prisma } from "../database.js";

export async function getDrinksList() {
	const drinks = await prisma.products.findMany({
        where: {
            categoryId: 1
        }
    });
    return drinks;
}