import * as Mongo from "mongodb";

async function connectToDB(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options); // stellt Verbindung zum Datenbanksystem her (wie wenn man lokal mit mongod eine Verbindung herstellt)
    await mongoClient.connect(); // liefert eine Promise

    let students: Mongo.Collection = mongoClient.db("Test").collection("Students"); //Collecetion die wir angelegt haben
    
    // let s: Student = {name: "Max Mustermann", matrikel: 666};
    // students.insertOne(s);

    let cursor: Mongo.Cursor = students.find(); //Cursor = Zeiger auf Elemente, die an auslesen kann
    let result: Student[] = await cursor.toArray(); // eine Möglichkeit, um aus dem Cursor die gefundenen Elemente rauszukriegen; cursor gibt uns eine Promise zurück
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

interface Student {
    name: string;
    matrikel: number;
}