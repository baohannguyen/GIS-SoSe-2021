import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace P_3_4Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseUrl: string = "mongodb://localhost:27017";

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);


    function handleListen(): void {
        console.log("Listening");
    }

    async function connectToMongoDB(_url: string): Promise<void> {
        let school: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, school);
        await mongoClient.connect();
        students = mongoClient.db("College").collection("Students");
    }

} 