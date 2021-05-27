"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //port setzen für heroku; port wie hafen?
    if (!port)
        port = 8100;
    let server = Http.createServer(); //erschaffen server
    server.addListener("request", handleRequest); //dasselber wie addeventlistener
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); // wie head in HTML; unsichtbarer Teil; enthält Sachen wie meta,...
        _response.setHeader("Access-Control-Allow-Origin", "*"); //bestimmt wer alles die Antwort empfangen darf
        _response.write(_request.url);
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map