export default class Comet {
    constructor(id, name, absoluteMagnitude, estimatedDiameterAvg, potentiallyHazardous,
                closeApproach, relativeVelocity, missDistance, sentryObject) {
        this._id = id;
        this._name = name;
        this._absoluteMagnitude = absoluteMagnitude;
        this._estimatedDiameterAvg = estimatedDiameterAvg;
        this._potentiallyHazardous = potentiallyHazardous;
        this._closeApproach = closeApproach;
        this._relativeVelocity = relativeVelocity;
        this._missDistance = missDistance;
        this._sentryObject = sentryObject;
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

    get closeApproach() {
        return this._closeApproach;
    }
    set closeApproach(value) {
        this._closeApproach = value;
    }

    get relativeVelocity() {
        return this._relativeVelocity;
    }
    set relativeVelocity(value) {
        this._relativeVelocity = value;
    }

    get missDistance() {
        return this._missDistance;
    }
    set missDistance(value) {
        this._missDistance = value;
    }

    get sentryObject() {
        return this._sentryObject;
    }
    set sentryObject(value) {
        this._sentryObject = value;
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
}
