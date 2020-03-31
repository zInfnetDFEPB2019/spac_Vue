export default class CometDetail {
    constructor(id, absoluteMagnitude, name, estimatedDiameterAvg,
                potentiallyHazardous, sentryObject, closeApproach) {
        this._id = id;
        this._name = name;
        this._absoluteMagnitude = absoluteMagnitude;
        this._estimatedDiameterAvg = estimatedDiameterAvg;
        this._potentiallyHazardous = potentiallyHazardous;
        this._sentryObject = sentryObject;
        this._closeApproach = closeApproach;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get absoluteMagnitude() {
        return this._absoluteMagnitude;
    }
    set absoluteMagnitude(value) {
        this._absoluteMagnitude = value;
    }

    get estimatedDiameterAvg() {
        return this._estimatedDiameterAvg;
    }
    set estimatedDiameterAvg(value) {
        this._estimatedDiameterAvg = value;
    }

    get potentiallyHazardous() {
        return this._potentiallyHazardous;
    }
    set potentiallyHazardous(value) {
        this._potentiallyHazardous = value;
    }

    get sentryObject() {
        return this._sentryObject;
    }
    set sentryObject(value) {
        this._sentryObject = value;
    }

    get closeApproach() {
        return this._closeApproach;
    }
    set closeApproach(value) {
        this._closeApproach = value;
    }

    static hazardLevel(String){
        let classification;

        if (String === "true") {
            classification = "DANGER";
        } else {
            classification = "SAFE";
        }
        return classification;
    }

    static hitChanceNext100Years(String){
        let possibility;

        if (String === "true") {
            possibility = "MAYBE";
        } else {
            possibility = "SAFE";
        }
        return possibility;
    }

    static correctNullValue(String){
        if (String === null || String === "null"){
            return "Unknown"
        }
    }
}