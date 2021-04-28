namespace Aufgabe1 {
    function min(_firstnumber: number, _secondnumber: number, _thirdnumber: number): number {
        if (_firstnumber < _secondnumber) {
            return _firstnumber;
        } else if (_secondnumber < _thirdnumber) {
            return _secondnumber;
        } else {
            return _thirdnumber;
        }
    }
    let minnumber: number = min(0, 1, 5);
    console.log(minnumber);
}
