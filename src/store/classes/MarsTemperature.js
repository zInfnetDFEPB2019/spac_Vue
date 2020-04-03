export default class MarsTemperature {
    constructor(dateEarth,sol,averageTemp,maximumTemp,minimumTemp,samplesTemp){
        this._dateEarth = dateEarth;
        this._sol = sol;
        this._averageTemp = averageTemp;
        this._samplesTemp = samplesTemp;
        this._minimumTemp = minimumTemp;
        this._maximumTemp = maximumTemp;
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

    get averageTemp() {
        return this._averageTemp;
    }
    set averageTemp(value) {
        this._averageTemp = value;
    }

    get maximumTemp() {
        return this._maximumTemp;
    }
    set maximumTemp(value) {
        this._maximumTemp = value;
    }

    get minimumTemp() {
        return this._minimumTemp;
    }
    set minimumTemp(value) {
        this._minimumTemp = value;
    }

    get samplesTemp() {
        return this._samplesTemp;
    }
    set samplesTemp(value) {
        this._samplesTemp = value;
    }
}