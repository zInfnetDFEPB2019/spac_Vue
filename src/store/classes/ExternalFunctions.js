import MarsTemperature from "@/store/classes/MarsTemperature";
import MarsWind from "@/store/classes/MarsWind";
import MarsPressure from "@/store/classes/MarsPressure";
import CometDetail from "@/store/classes/CometDetail";
import CloseApproach from "@/store/classes/CloseApproach";

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
    
    static createCometObject(response) {
        let
            id = String((response)["id"]),
            absoluteMagnitude = String((response)["absolute_magnitude_h"]),
            name = String((response)["name"].replace("(", "").replace(")", "")),
            estimatedDiameterAvg = String(((((response)["estimated_diameter"]["meters"]["estimated_diameter_max"]
                + (response)["estimated_diameter"]["meters"]["estimated_diameter_min"]) / 2)).toFixed(2)),
            potentiallyHazardous = CometDetail.hazardLevel((response)["is_potentially_hazardous_asteroid"]),
            sentryObject = CometDetail.hitChanceNext100Years(String((response)["sentry_object"])),
            closeApproach = CloseApproach.getApproachDates(response);

        let
            comet = new CometDetail(
                id,
                absoluteMagnitude,
                name,
                estimatedDiameterAvg,
                potentiallyHazardous,
                sentryObject,
                closeApproach
            );

        let arrayDetails = Array();
        arrayDetails.push(comet);

        return arrayDetails;
    }

    static createMarsWeatherObject(response) {
        let
            weatherConditions = Array(),
            marsTemp = Array(),
            marsWind = Array(),
            marsPressure = Array();

        for (let i = response.sol_keys[0]; i <= response.sol_keys[6]; i++) {
            let
                dateEarth = new Date(response[i]["First_UTC"]).toLocaleDateString(),
                sol = String(Number([i])),

                averageTemp = response[i]["AT"]["av"].toFixed(2),
                samplesTemp = response[i]["AT"]["ct"],
                minimumTemp = response[i]["AT"]["mn"].toFixed(2),
                maximumTemp = response[i]["AT"]["mx"].toFixed(2),

                averageWind = response[i]["HWS"]["av"].toFixed(2),
                samplesWind = response[i]["HWS"]["ct"],
                minimumWind = response[i]["HWS"]["mn"].toFixed(2),
                maximumWind = response[i]["HWS"]["mx"].toFixed(2),

                averagePressure = response[i]["PRE"]["av"].toFixed(2),
                samplesPressure = response[i]["PRE"]["ct"],
                minimumPressure = response[i]["PRE"]["mn"].toFixed(2),
                maximumPressure = response[i]["PRE"]["mx"].toFixed(2);

            marsTemp.push(new MarsTemperature(dateEarth,sol,averageTemp,maximumTemp,minimumTemp,samplesTemp));
            marsWind.push(new MarsWind(dateEarth,sol,averageWind,maximumWind,minimumWind,samplesWind));
            marsPressure.push(new MarsPressure(dateEarth,sol,averagePressure,maximumPressure,minimumPressure,samplesPressure));
        }
        let season = response[response.sol_keys[6]]["Season"];
        season = season.charAt(0).toUpperCase() + season.slice(1);
        weatherConditions.push(marsTemp,marsWind,marsPressure,season);
        return weatherConditions;
    }

    static getMonthYear() {
        let sysDate = new Date(),
            sysMonth = String(sysDate.getMonth() + 1),
            sysYear = String(sysDate.getFullYear());

        const month = sysMonth;
        const findTerm = (term) => {
            if (month.includes(term)){
                return month;
            }
        };

        switch (month){
            case findTerm("1"):
                return String(sysYear + ".1");
            case findTerm("2"):
                return String(sysYear + ".1");
            case findTerm("3"):
                return String(sysYear + ".2");
            case findTerm("4"):
                return String(sysYear + ".3");
            case findTerm("5"):
                return String(sysYear + ".4");
            case findTerm("6"):
                return String(sysYear + ".5");
            case findTerm("7"):
                return String(sysYear + ".6");
            case findTerm("8"):
                return String(sysYear + ".7");
            case findTerm("9"):
                return String(sysYear + ".8");
            case findTerm("10"):
                return String(sysYear + ".9");
            case findTerm("11"):
                return String(sysYear + ".10");
            case findTerm("12"):
                return String(sysYear + ".10");
            default:
                return String(sysYear);
        }
    }
}
