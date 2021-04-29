namespace Aufgabe1 {
    let minnumber: number[] = [1, 5, 7, 19, -30];
    function min(_a: number[]): number {
        let save: number = _a[0];
        for (let i: number = 0; i < _a.length; i++) {
            if (_a[i] < save) {
               save = _a[i];
               
            }
        }
        return save;
    }
    console.log(min(minnumber));
}
