export default class MarsPressure {
    constructor(dateEarth,sol,averagePressure,maximumPressure,minimumPressure,samplesPressure){
        this._dateEarth = dateEarth;
        this._sol = sol;
        this._averagePressure = averagePressure;
        this._maximumPressure = maximumPressure;
        this._minimumPressure = minimumPressure;
        this._samplesPressure = samplesPressure;
    }

    get dateEarth() {
        return this._dateEarth;
    }

    set dateEarth(value) {
        this._dateEarth = value;
    }

    get sol() {
        return this._sol;
    }

    set sol(value) {
        this._sol = value;
    }

    get averagePressure() {
        return this._averagePressure;
    }

    set averagePressure(value) {
        this._averagePressure = value;
    }

    get maximumPressure() {
        return this._maximumPressure;
    }

    set maximumPressure(value) {
        this._maximumPressure = value;
    }

    get minimumPressure() {
        return this._minimumPressure;
    }

    set minimumPressure(value) {
        this._minimumPressure = value;
    }

    get samplesPressure() {
        return this._samplesPressure;
    }

    set samplesPressure(value) {
        this._samplesPressure = value;
    }
}