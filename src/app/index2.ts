import * as express from "express";
import * as db from "../app/database/db";

export function index(req: express.Request, res: express.Response) {
    db.getUsers((users) => {
        console.dir(users);
        res.render("index", { title: "Mongo Discovery", users: users });
    });
}