namespace Aufgabe2 {
        export interface Sushi {
                selection: Option[];
                filling: Option[];
                extras: Option[];
        }
        export interface Option {
                type: string;
                typePicture: string;
                price: number;
        }

        export let dataSushi: Sushi = {
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

        export let dataJSON: string = JSON.stringify(dataSushi); // wandelt Objekt in JSON um
}