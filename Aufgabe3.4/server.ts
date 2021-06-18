import * as Http from "http";
import * as url from "url";
import { ParsedUrlQuery } from "querystring";
import * as Mongo from "mongodb";

export namespace P_3_4Server {
    interface Student {
        name: string;
        birthday: string;
        email: string;
    }
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100; //Serverport

    let databaseUrl: string = "mongodb+srv://user_10:password234@gis-cluster.ggwu7.mongodb.net/Test?retryWrites=true&w=majority"; //Port von der Datenbank
    let mongoClient: Mongo.MongoClient = undefined;
    console.log(mongoClient);
    

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);


    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        await connectToMongoDB(databaseUrl);
        let students: Mongo.Collection = mongoClient.db("Test").collection("Students"); //collections students wird in eine variable gespeichert

        let requestUrl: url.UrlWithParsedQuery = url.parse(_request.url, true); //hier wurde die url von request genommen
        let queryData: ParsedUrlQuery = requestUrl.query; //die ganze daten die man mitschickt stehen im query

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "application/json; charset=utf-8");

        switch (requestUrl.pathname) {
            case "/insert": //Sachen die wir in der Datenabnk schreiben
                console.log(queryData);

                let student: Student = { name: queryData["name"].toString(), birthday: queryData["birthday"].toString(), email: queryData["email"].toString()}; //aus der querydata will ich den namen haben
                students.insertOne(student);
                break;
            case "/get": //holt die Daten aus der Datenbank
                let cursor: Mongo.Cursor = students.find(); //Cursor greift aud die Studenten zu
                let allStudent: Student[] = await cursor.toArray();
                _response.write(JSON.stringify(allStudent)); //Array allstudent wurde in einem json konvertiert
                break;
        }
        _response.end();
    }

    async function connectToMongoDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true }; //MongoClientOptions = Interface; Einstellungen für unsere Verbindung zur Datenbank
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //verbindet mongoclient mit der Datenbank
    }

}