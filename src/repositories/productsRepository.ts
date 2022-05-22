import { prisma } from "../database.js";

export async function getDrinksList() {
	const drinks = await prisma.products.findMany({
        where: {
            categoryId: 1
        }
    });
    return drinks;
}

export async function getDrink(name: string) {
	const drink = await prisma.products.findMany({
        where: {
            categoryId: 1,
            name: name
        }
    });
    return drink;
}