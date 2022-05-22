import { prisma } from "../database.js";

export async function getCategoriesList() {
	const categories = await prisma.categories.findMany({
        select: {
            name: true
        }
    });
    return categories;
}