namespace Aufgab2 {
    interface Sushi {
        selection: Selection;
        filling: Filling;
        extras: Extras;
    }
    interface Selection {
        type: string;
        typePicture: string;
        numberofpiecees: number;
        price: number;
    }
    interface Filling {
        type: string;
        typePicture: string;
        price: string;
    }
    interface Extras {
        extra1: string;
        extra2: string;
        extra3: string;
        price: number;
    }
}