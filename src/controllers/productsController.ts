import { Request, Response } from "express";
import { getDrinksList, getDrink } from '../repositories/productsRepository.js';

export async function getDrinks(req: Request, res: Response){

    const drinks = await getDrinksList();
    res.send(drinks);
}

export async function getSpecificDrink(req: Request, res: Response){

    const { name } = req.body;
    const drink = await getDrink(name);
    res.send(drink);
}