"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
async function connectToDB(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options); // stellt Verbindung zum Datenbanksystem her (wie wenn man lokal mit mongod eine Verbindung herstellt)
    await mongoClient.connect(); // liefert eine Promise
    let students = mongoClient.db("Test").collection("Students");
    let cursor = students.find();
    console.log(cursor);
    // let s: Student = {name: "Max Mustermann", matrikel: 666};
    // students.insertOne(s);
    // let cursor: Mongo.Cursor = students.find({ name: "Andreas Reich hallo" });
    // let result: Student[] = await cursor.toArray();
    // console.log(result);
    // let s: Student = await students.findOne({ matrikel: 123456 });
    // console.log(s);
    // students.deleteOne({ matrikel: 666 });
}
connectToDB("mongodb://localhost:27017");
// interface Student {
//     name: string;
//     matrikel: number;
// }
//# sourceMappingURL=dbtest.js.map