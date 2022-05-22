import { Request, Response } from "express";
import { getDrinksList } from '../repositories/productsRepository.js';

export async function getDrinks(req: Request, res: Response){

    const drinks = await getDrinksList();
    res.send(drinks);
}