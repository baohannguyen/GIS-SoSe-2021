import * as Http from "http"; //*= Alles; importieren alles von der klasse http und das wird Http genannt

export namespace P_3_1Server {
    console.log("Starting server"); //wird in der Konsole des Servers ausgegeben
    let port: number = Number(process.env.PORT); // neue Variable wird initialisiert und process.env.PORT wird getypcast zum type number
    //port des servers (heroku) wird in eine Variable gespeichert 
    if (!port) // wenn der port nicht gesetzt ist...
        port = 8100; //port = Schnittstelle; ... setzt er den port auf 8100

    let server: Http.Server = Http.createServer(); //neue server wird erstellt
    server.addListener("request", handleRequest); //dem server wird einem event listener für request hinzugefügt
    server.addListener("listening", handleListen); // das gleiche für listening
    server.listen(port); // er "hört" ob requests kommen/ auf dem definierten port

    function handleListen(): void {
        console.log("Listening"); //wenn er was hört gibt er listening in der konsole aus
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // wie head in HTML; unsichtbarer Teil; enthält Sachen wie meta,...
        _response.setHeader("Access-Control-Allow-Origin", "*"); //bestimmt wer alles die Antwort empfangen darf
        _response.write(_request.url); //Antwort, was im text steht; request.url -> die antwort wird an der url angehängt
        _response.end(); //finished die response
    }
}