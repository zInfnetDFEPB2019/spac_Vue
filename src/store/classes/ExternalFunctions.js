export default class ExternalFuntions {
    constructor() { }

    static correctNullValue(String) {
        if (String === null || String === "null"){
            return "Unknown"
        } else {
            return String;
        }
    }

    static ceilValue(value){
        return Math.ceil(value);
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

