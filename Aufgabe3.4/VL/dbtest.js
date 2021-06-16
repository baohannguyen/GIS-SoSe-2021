"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
async function connectToDB(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options); // stellt Verbindung zum Datenbanksystem her (wie wenn man lokal mit mongod eine Verbindung herstellt)
    await mongoClient.connect(); // liefert eine Promise
    let students = mongoClient.db("Test").collection("Students"); //Collecetion die wir angelegt haben
    // let s: Student = {name: "Max Mustermann", matrikel: 666};
    // students.insertOne(s);
    let cursor = students.find(); //Cursor = Zeiger auf Elemente, die an auslesen kann
    let result = await cursor.toArray(); // eine Möglichkeit, um aus dem Cursor die gefundenen Elemente rauszukriegen; cursor gibt uns eine Promise zurück
    console.log(result);
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
//# sourceMappingURL=dbtest.js.map