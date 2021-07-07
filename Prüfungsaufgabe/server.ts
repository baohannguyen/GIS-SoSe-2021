import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";

export namespace Admin {
    interface Pictures {
        link: string;
    }

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let mongoURL: string = "mongodb+srv://user_10:password234@gis-cluster.ggwu7.mongodb.net/Memory?retryWrites=true&w=majority"; //Port von der Datenbank
    let mongoClient: Mongo.MongoClient = undefined; //mongoClient wurde erzeugt, hat aber noch keinen Wert
    console.log(mongoClient);

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest); //wenn der Server eine request erhält, wird dann die Funktion handleRequest aufgerufen
    server.addListener("listening", handleListen); //das Gleiche für listening
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> { //IncomingMessage = das was reinkommt bei der Request; ServerResponse = die Antwort, die wir kriegen; Antwort ist schon da, aber sie ist noch leer
        await connectToMongoDB(mongoURL);

        let reqURL: url.UrlWithParsedQuery = url.parse(_request.url, true); //true sorgt dafür dass man es besser lesen kann 
        let queryData: ParsedUrlQuery = reqURL.query;

        _response.setHeader("Access-Control-Allow-Origin", "*"); // bestimmt wer alles die Antwort empfangen darf
        _response.setHeader("content-type", "text/html; charset=utf-8");

        switch (reqURL.pathname) {
            case "/getPicture": //soll die Bilderlinks aus der Datenbank holen ?
                let picMemory: Mongo.Collection = mongoClient.db("Memory").collection("Bildlinks");
                let pictureURL: Pictures[] = await picMemory.find().toArray();
                // let cursor: Mongo.Cursor = example.find(); //Cursor greif auf die Beispieldaten zu 
                // let pictureURL: Pictures[] = await example.find().toArray();
                console.log(pictureURL);
                _response.write(JSON.stringify(pictureURL)); // wird mir als JSON in der Konsole ausgegeben 
                break;
            case "/insertURL":
                console.log(queryData);
                let loadPic: Pictures = { link: queryData["newPicture"].toString() };
                picMemory.insertOne(loadPic);
                break;
        }
        _response.end();
    }

    async function connectToMongoDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true }; //MongoClientOptions = Interface; Einstellungen für unsere Verbindung zur Datenbank;
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //verbindet mongoclient mit der Datenbank
    }
    connectToMongoDB("mongodb://localhost:27017");
}


