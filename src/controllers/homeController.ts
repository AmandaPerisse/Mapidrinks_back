import { Request, Response } from "express";
import { getCategoriesList } from '../repositories/homeRepository.js';

export async function getCategories(req: Request, res: Response){

    const categories = await getCategoriesList();
    res.send(categories);
}