"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Admin;
(function (Admin) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let mongoURL = "mongodb+srv://user_10:password234@gis-cluster.ggwu7.mongodb.net/Beispieldaten?retryWrites=true&w=majority"; //Port von der Datenbank
    let mongoClient = undefined; //mongoClient wurde erzeugt, hat aber noch keinen Wert
    console.log(mongoClient);
    let server = Http.createServer();
    server.addListener("request", handleRequest); //wenn der Server eine request erhält, wird dann die Funktion handleRequest aufgerufen
    server.addListener("listening", handleListen); //das Gleiche für listening
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        await connectToMongoDB(mongoURL);
        let example = mongoClient.db("Beispieldaten").collection("Katzen");
        let requestURL = url.parse(_request.url, true); //true sorgt dafür dass man es besser lesen kann 
        let queryData = requestURL.query;
        _response.setHeader("Access-Control-Allow-Origin", "*"); // bestimmt wer alles die Antwort empfangen darf
        _response.setHeader("content-type", "image/jpeg; charset=utf-8"); // image/jpeg von "https://developer.mozilla.org/en-US/docs/Web/API/Request/headers"; kp ob das richtig ist
    }
    async function connectToMongoDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true }; //MongoClientOptions = Interface; Einstellungen für unsere Verbindung zur Datenbank;
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //verbindet mongoclient mit der Datenbank
    }
})(Admin = exports.Admin || (exports.Admin = {}));
//# sourceMappingURL=server.js.map