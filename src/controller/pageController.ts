import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('home no Controller')
    //res.render('pages/search');
};

export const dogs = (req: Request, res: Response) => {
    res.send('dogs no Controller')
    //res.render('pages/search');
};

export const cats = (req: Request, res: Response) => {
    res.send('cats no Controller')
    //res.render('pages/search');
};

export const fishes = (req: Request, res: Response) => {
    res.send('fishes no Controller')
    //res.render('pages/search');
};