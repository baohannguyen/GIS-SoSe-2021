"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http"); //Es werden die Funktionalitäten von der Klasse "http" importiert und das wird Http genannt
const url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    console.log("Starting server"); //wird in der Konsole des Servers ausgegeben
    let port = Number(process.env.PORT); // neue Variable wird initialisiert und process.env.PORT wird getypcast zum type number
    //port des Servers (heroku) wird in eine Variable gespeichert 
    if (!port) // Bedingung ist, wenn der port nicht gesetzt wird, dann setzt er den port auf 8100
        port = 8100; //port = Schnittstelle; 
    let server = Http.createServer(); //neuer Server wird erstellt
    server.addListener("request", handleRequest); //dem Server wird einem Event Listener für "request" hinzugefügt
    server.addListener("listening", handleListen); // das Gleiche für "listening"
    server.listen(port); // der Server "hört" ob requests kommen
    function handleListen() {
        console.log("Listening"); //wenn er was "hört" gibt er "Listening" in der Konsole aus
    }
    function handleRequest(_request, _response) {
        let q = url.parse(_request.url, true);
        let queryData = q.query; // Werte werden gespeichert
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //bestimmt wer alles die Antwort empfangen darf
        if (q.pathname == "/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8"); // wie head in HTML; unsichtbarer Teil; enthält die Meta-Informationen
            let htmlString = "";
            for (let key in queryData) { // key = wert der unser string durchgeht
                htmlString += "<p>" + key + ":" + queryData[key] + "</p>";
            }
            _response.write(htmlString);
        }
        else if (q.pathname == "/json") {
            _response.setHeader("content-type", "application/json; charset=utf-8");
            let jsonData = JSON.stringify(queryData); // das Ganze wurde als string umgewandelt
            _response.write(jsonData); //Antwort, die im Text steht; request.url -> die Antwort wird an der URL angehängt
        }
        _response.end(); //beendet die response
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=server.js.map