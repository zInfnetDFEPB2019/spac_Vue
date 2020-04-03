export default class CloseApproach {
    constructor(closeApproachDate, relativeVelocity, missDistance, orbitingBody) {
        this._closeApproachDate = closeApproachDate;
        this._relativeVelocity = relativeVelocity;
        this._missDistance = missDistance;
        this._orbitingBody = orbitingBody;
    }

    get closeApproachDate() {
        return this._closeApproachDate;
    }
    set closeApproachDate(value) {
        this._closeApproachDate = value;
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

    get orbitingBody() {
        return this._orbitingBody;
    }
    set orbitingBody(value) {
        this._orbitingBody = value;
    }

    static getValidDate(response,dataPath,iterator){
        let
            fullDate = String(dataPath[iterator]["close_approach_date_full"]),
            shortDate = String(dataPath[iterator]["close_approach_date"]);

        if ((fullDate === null || fullDate === "null") && (shortDate !== null || shortDate !== "null")){
            return shortDate;
        }
        else if ((fullDate === null || fullDate === "null") && (shortDate === null || shortDate === "null")){
            return "Unknown"
        }
        else {
            return fullDate;
        }
    }

    static getApproachDates(response){
        let
            approachDatesComplete = Array(),
            dataPath = (response)["close_approach_data"];

        for (let iterator = 0; iterator < dataPath.length; iterator++){
            let
                closeApproachDate = String(CloseApproach.getValidDate(response,dataPath,iterator)),
                relativeVelocity = String(Number((dataPath[iterator]["relative_velocity"]["kilometers_per_hour"])).toFixed(2)),
                missDistance = String(Number((dataPath[iterator]["miss_distance"]["kilometers"])).toFixed(2)),
                orbitingBody = CloseApproach.correctOrbitingBodyName(String(dataPath[iterator]["orbiting_body"]));

            let cometApproach = new CloseApproach(
                closeApproachDate,
                relativeVelocity,
                missDistance,
                orbitingBody
            );
            approachDatesComplete.push(cometApproach);
        }
        return approachDatesComplete;
    }

    static correctOrbitingBodyName(String) {
        const planet = String;
        const findTerm = (term) => {
            if (planet.includes(term)){
                return planet;
            }
        };

        switch (planet){
            case findTerm("Merc"):
                return "Mercury";
            case findTerm("Jup"):
                return "Jupiter";
            case findTerm("Sa"):
                return "Saturn";
            case findTerm("Ur"):
                return "Uranus";
            case findTerm("Ne"):
                return "Neptune";
            default:
                return String;
        }
    }

}