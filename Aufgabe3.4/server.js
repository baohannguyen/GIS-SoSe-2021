"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Serverport
    let databaseUrl = "mongodb+srv://user_10:password234@gis-cluster.ggwu7.mongodb.net/Test?retryWrites=true&w=majority"; //Port von der Datenbank
    let mongoClient = undefined;
    console.log(mongoClient);
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        await connectToMongoDB(databaseUrl);
        let students = mongoClient.db("Test").collection("Students"); //Die collections Students wird in eine variable gespeichert
        let requestUrl = url.parse(_request.url, true); //hier wurde die url von request genommen
        let queryData = requestUrl.query; //die ganzen daten die man mitschickt stehen im query
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "application/json; charset=utf-8");
        switch (requestUrl.pathname) {
            case "/insert": //Sachen die wir in der Datenabnk schreiben
                console.log(queryData);
                let student = { name: queryData["name"].toString(), birthday: queryData["birthday"].toString(), email: queryData["email"].toString() }; //aus der querydata nehmen wir die Werte raus
                students.insertOne(student);
                break;
            case "/get": //holt die Daten aus der Datenbank
                let cursor = students.find(); //Cursor greift aud die Studenten zu
                let allStudent = await cursor.toArray();
                _response.write(JSON.stringify(allStudent)); //Array allstudent wurde in einem json konvertiert
                break;
        }
        _response.end();
    }
    async function connectToMongoDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true }; //MongoClientOptions = Interface; Einstellungen für unsere Verbindung zur Datenbank
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //verbindet mongoclient mit der Datenbank
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=server.js.map