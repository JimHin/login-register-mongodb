import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            next: req.params
        })
    } catch (error: any) {
        return res.sendStatus(400).send(error.errors);
    }
}

export default validate;