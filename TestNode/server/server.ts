import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT); //port setzen für heroku; port wie hafen?
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer(); //erschaffen server
    server.addListener("request", handleRequest); //dasselber wie addeventlistener
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //kümmert sich um Anfragen
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); // wie head in HTML; unsichtbarer Teil; enthält Sachen wie meta,...
        _response.setHeader("Access-Control-Allow-Origin", "*"); //bestimmt wer alles die Antwort empfangen darf
        _response.write(_request.url);
        _response.end();
    }
}