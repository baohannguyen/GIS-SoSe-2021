"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    Aufgabe2.data = ["Selection+Hoso-Maki+hosomaki.jpg+0.70+1",
        "Selection+Nigiri+nigiri.jpg+1.0+1",
        "Selection+Temaki+temaki.jpg+3.50+1.0",
        "Filling+Lachs+lachs.jpg+0.50",
        "Filling+Avocado+avocado.jpg+0.20",
        "Filling+Thunfisch+thunfisch.jpg+0.50",
        "Extras+Vegan+Scharf+Frittiert+0.50",
        "Extras+Vegan+none+Frittiert+0.50",
        "Extras+None+Scharf+Frittiert+0.50"];
    Aufgabe2.datas = {
        selection: [{ type: "Hoso-Maki", typePicture: "hoso-maki.jpg", numberOfPieces: 1, price: 0.70 },
            { type: "Nigiri", typePicture: "nigiri.jpg", numberOfPieces: 1, price: 1 },
            { type: "Temaki", typePicture: "temaki.jpg", numberOfPieces: 1, price: 3.50 }],
        filling: [{ type: "Lachs", typePicture: "lachs.jpg", price: 0.50 },
            { type: "Avocado", typePicture: "avocado.jpg", price: 0.20 },
            { type: "Thunfisch", typePicture: "thunfisch.jpg", price: 0.50 }],
        extras: [{ extra1: "Vegan", extra2: "None", extra3: "None", price: 0.50 },
            { extra1: "None", extra2: "Scharf", extra3: "None", price: 0.50 },
            { extra1: "None", extra2: "None", extra3: "Frittiert", price: 0.50 }]
    };
    Aufgabe2.dataJSON = `{"selection": [ { "type": "Hoso-Maki", "typePicture": "hoso-maki.jpg", "numberOfPieces": 1, "price": 0.70},
                                                       { "type": "Nigiri", "typePicture": "nigiri.jpg", "numberOfPieces": 1, "price": 1}.
                                                       { "type": "Temaki", "typePicture": "temaki.jpg", "numberOfPieces": 1, "price": 3.50}],
                                        "fillings": [ { "type": "Lachs", "typePicture": "lachs.jpg", "price": 0.50},
                                                      { "type": "Avocado", "typePicture": "avocado.jpg", "price": 0.20},
                                                      { "type": "Thunfisch", "typePicture": "thunfisch.jpg", "price": 0.50}],
                                        "extras": [ { "extra1": "Vegan", "extra2": "None", "extra3": "None", "price": 0.50},
                                                    { "extra1": "None", "extra2": "Scharf", "extra3": "None", "price": 0.50},
                                                    { "extra1": "None", "extra2": "None", "extra3": "Frittiert", "price": 0.50}]
}
                                        `;
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=data.js.map