"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    Aufgabe2.dataSushi = {
        selection: [
            { type: "Hoso-Maki", typePicture: "maki.jpg", price: 0.70 },
            { type: "Nigiri", typePicture: "nigiri.jpg", price: 1 },
            { type: "Temaki", typePicture: "temaki.jpg", price: 3.50 }
        ],
        filling: [
            { type: "Lachs", typePicture: "lachs.jpg", price: 0.50 },
            { type: "Avocado", typePicture: "avocado.png", price: 0.20 },
            { type: "Thunfisch", typePicture: "thunfisch.jpg", price: 0.50 }
        ],
        extras: [
            { type: "Vegan", typePicture: "vegan.jpg", price: 0.50 },
            { type: "Scharf", typePicture: "scharf.jpg", price: 0.50 },
            { type: "Frittiert", typePicture: "frittiert.jpg", price: 0.50 }
        ]
    };
    Aufgabe2.dataJSON = JSON.stringify(Aufgabe2.dataSushi); // wandelt Objekt in JSON um
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=data.js.map