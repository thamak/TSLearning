import mongodb = require("mongodb");

let server = new mongodb.Server("localhost", 2701, { socketOptions: { autoReconnect: true } });
let db = new mongodb.Db("tsdb", server, { w: 1 });
db.open();

export interface User {
    _id: string;
    username: string;
    email: string;
}

export function getUsers(callback: (user: User[]) => void) {
    db.collection("usercollection", (error, usercollection) => {
        if (error) {
            console.error(error); return;
        }
        usercollection.find({}).toArray((error2, userobjs) => {
            if (error2) {
                console.error(error2); return;
            }
            callback(userobjs);
        });
    });
}