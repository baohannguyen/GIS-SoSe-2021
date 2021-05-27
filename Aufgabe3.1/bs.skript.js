"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http"); //*= Alles; importieren alles von der klasse http und das wird Http genannt
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); //wird in der Konsole des Servers ausgegeben
    let port = Number(process.env.PORT); // neue Variable wird initialisiert und process.env.PORT wird getypcast zum type number
    //port des servers (heroku) wird in eine Variable gespeichert 
    if (!port) // wenn der port nicht gesetzt ist...
        port = 8100; //port = Schnittstelle; ... setzt er den port auf 8100
    let server = Http.createServer(); //neue server wird erstellt
    server.addListener("request", handleRequest); //dem server wird einem event listener für request hinzugefügt
    server.addListener("listening", handleListen); // das gleiche für listening
    server.listen(port); // er "hört" ob requests kommen/ auf dem definierten port
    function handleListen() {
        console.log("Listening"); //wenn er was hört gibt er listening in der konsole aus
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // wie head in HTML; unsichtbarer Teil; enthält Sachen wie meta,...
        _response.setHeader("Access-Control-Allow-Origin", "*"); //bestimmt wer alles die Antwort empfangen darf
        _response.write(_request.url); //Antwort, was im text steht; request.url -> die antwort wird an der url angehängt
        _response.end(); //finished die response
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=bs.skript.js.map