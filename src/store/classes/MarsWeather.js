export default class MarsWeather {
    constructor(averageTemp, samplesTemp, minimumTemp, maximumTemp,
                averageWind, samplesWind, minimumWind, maximumWind,
                averagePressure, samplesPressure, minimumPressure, maximumPressure,
                season){

        this._averageTemp = averageTemp;
        this._samplesTemp = samplesTemp;
        this._minimumTemp = minimumTemp;
        this._maximumTemp = maximumTemp;
        this._averageWind = averageWind;
        this._samplesWind = samplesWind;
        this._minimumWind = minimumWind;
        this._maximumWind = maximumWind;
        this._averagePressure = averagePressure;
        this._samplesPressure = samplesPressure;
        this._minimumPressure = minimumPressure;
        this._maximumPressure = maximumPressure;
        this._season = season;
    }

    get averageTemp() {
        return this._averageTemp;
    }

    set averageTemp(value) {
        this._averageTemp = value;
    }

    get samplesTemp() {
        return this._samplesTemp;
    }

    set samplesTemp(value) {
        this._samplesTemp = value;
    }

    get minimumTemp() {
        return this._minimumTemp;
    }

    set minimumTemp(value) {
        this._minimumTemp = value;
    }

    get maximumTemp() {
        return this._maximumTemp;
    }

    set maximumTemp(value) {
        this._maximumTemp = value;
    }

    get averageWind() {
        return this._averageWind;
    }

    set averageWind(value) {
        this._averageWind = value;
    }

    get samplesWind() {
        return this._samplesWind;
    }

    set samplesWind(value) {
        this._samplesWind = value;
    }

    get minimumWind() {
        return this._minimumWind;
    }

    set minimumWind(value) {
        this._minimumWind = value;
    }

    get maximumWind() {
        return this._maximumWind;
    }

    set maximumWind(value) {
        this._maximumWind = value;
    }

    get averagePressure() {
        return this._averagePressure;
    }

    set averagePressure(value) {
        this._averagePressure = value;
    }

    get samplesPressure() {
        return this._samplesPressure;
    }

    set samplesPressure(value) {
        this._samplesPressure = value;
    }

    get minimumPressure() {
        return this._minimumPressure;
    }

    set minimumPressure(value) {
        this._minimumPressure = value;
    }

    get maximumPressure() {
        return this._maximumPressure;
    }

    set maximumPressure(value) {
        this._maximumPressure = value;
    }

    get season() {
        return this._season;
    }

    set season(value) {
        this._season = value;
    }
}