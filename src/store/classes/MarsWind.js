export default class MarsWind {
    constructor(dateEarth,sol,averageWind,maximumWind,minimumWind,samplesWind){
        this._dateEarth = dateEarth;
        this._sol = sol;
        this._averageWind = averageWind;
        this._samplesWind = samplesWind;
        this._minimumWind = minimumWind;
        this._maximumWind = maximumWind;
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

    get averageWind() {
        return this._averageWind;
    }
    set averageWind(value) {
        this._averageWind = value;
    }

    get maximumWind() {
        return this._maximumWind;
    }
    set maximumWind(value) {
        this._maximumWind = value;
    }

    get minimumWind() {
        return this._minimumWind;
    }
    set minimumWind(value) {
        this._minimumWind = value;
    }

    get samplesWind() {
        return this._samplesWind;
    }
    set samplesWind(value) {
        this._samplesWind = value;
    }
}