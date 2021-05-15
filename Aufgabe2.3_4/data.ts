namespace Aufgabe2 {
        export let data: string[] = ["Selection+Hoso-Maki+maki.jpg+0.70+1", 
                                     "Selection+Nigiri+nigiri.jpg+1.0+1",
                                     "Selection+Temaki+temaki.jpg+3.50+1.0",
                                     "Filling+Lachs+lachs.jpg+0.50",
                                     "Filling+Avocado+avocado.png+0.20",
                                     "Filling+Thunfisch+thunfisch.jpg+0.50",
                                     "Extras+Vegan+Scharf+Frittiert+0.50",
                                     "Extras+Vegan+none+Frittiert+0.50",
                                     "Extras+None+Scharf+Frittiert+0.50"];

        export interface Sushi {
                selection: Selection[];
                filling: Filling[];
                extras: Extras[];
        }
        export interface Selection {
                type: string;
                typePicture: string;
                numberOfPieces: number;
                price: number;
        }
        export interface Filling {
                type: string;
                typePicture: string;
                price: number;
        }
        export interface Extras {
                extra1: string;
                extra2: string;
                extra3: string;
                price: number;
        }
        
        export let datas: Sushi = {
                selection: [ { type: "Hoso-Maki", typePicture: "maki.jpg", numberOfPieces: 1, price: 0.70},
                             { type: "Nigiri", typePicture: "nigiri.jpg", numberOfPieces: 1, price: 1},
                             { type: "Temaki", typePicture: "temaki.jpg", numberOfPieces: 1, price: 3.50} ],
                filling: [ { type: "Lachs", typePicture: "lachs.jpg", price: 0.50},
                           { type: "Avocado", typePicture: "avocado.png", price: 0.20},
                           { type: "Thunfisch", typePicture: "thunfisch.jpg", price: 0.50} ],
                extras: [ { extra1: "Vegan", extra2: "None", extra3: "None", price: 0.50},
                          { extra1: "None", extra2: "Scharf", extra3: "None", price: 0.50},
                          { extra1: "None", extra2: "None", extra3: "Frittiert", price: 0.50}]
        };

//         export let dataJSON: string = `{"selection": [ { "type": "Hoso-Maki", "typePicture": "hoso-maki.jpg", "numberOfPieces": 1, "price": 0.70},
//                                                        { "type": "Nigiri", "typePicture": "nigiri.jpg", "numberOfPieces": 1, "price": 1}.
//                                                        { "type": "Temaki", "typePicture": "temaki.jpg", "numberOfPieces": 1, "price": 3.50}],
//                                         "fillings": [ { "type": "Lachs", "typePicture": "lachs.jpg", "price": 0.50},
//                                                       { "type": "Avocado", "typePicture": "avocado.jpg", "price": 0.20},
//                                                       { "type": "Thunfisch", "typePicture": "thunfisch.jpg", "price": 0.50}],
//                                         "extras": [ { "extra1": "Vegan", "extra2": "None", "extra3": "None", "price": 0.50},
//                                                     { "extra1": "None", "extra2": "Scharf", "extra3": "None", "price": 0.50},
//                                                     { "extra1": "None", "extra2": "None", "extra3": "Frittiert", "price": 0.50}]
// }
//                                         `;
        export let dataJSON: string = JSON.stringify(datas);


}