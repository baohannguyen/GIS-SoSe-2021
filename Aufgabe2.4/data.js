"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    Aufgabe2.data = ["Selection+Hoso-Maki+maki.jpg+0.70+1", "Selection+Nigiri+nigiri.jpg+1.0+1", "Selection+Temaki+temaki.jpg+3.50+1.0",
        "Filling+Lachs+lachs.jpg+0.50", "Filling+Avocado+avocado.png+0.20", "Filling+Thunfisch+thunfisch.jpg+0.50",
        "Extras+vegan.jpg+0.50", "Extras+scharf.jpg+0.50", "Extras+frittiert.jpg+0.50"];
    Aufgabe2.dataSushi = {
        selection: [{ type: "Hoso-Maki", typePicture: "maki.jpg", numberOfPieces: 1, price: 0.70 },
            { type: "Nigiri", typePicture: "nigiri.jpg", numberOfPieces: 1, price: 1 },
            { type: "Temaki", typePicture: "temaki.jpg", numberOfPieces: 1, price: 3.50 }],
        filling: [{ type: "Lachs", typePicture: "lachs.jpg", price: 0.50 },
            { type: "Avocado", typePicture: "avocado.png", price: 0.20 },
            { type: "Thunfisch", typePicture: "thunfisch.jpg", price: 0.50 }],
        extras: [{ extra: "vegan.jpg", price: 0.50 },
            { extra: "scharf.jpg", price: 0.50 },
            { extra: "frittiert.jpg", price: 0.50 }]
    };
    Aufgabe2.dataJSON = JSON.stringify(Aufgabe2.dataSushi); // wandelt Objekt in JSON um
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=data.js.map