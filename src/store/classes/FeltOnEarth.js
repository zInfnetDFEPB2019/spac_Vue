export default class FeltOnEarth {
    constructor(id,fall,lat,long,mass,name,year) {
        this._id = id;
        this._fall = fall;
        this._lat = lat;
        this._long = long;
        this._mass = mass;
        this._name = name;
        this._year = year;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get fall() {
        return this._fall;
    }
    set fall(value) {
        this._fall = value;
    }

    get lat() {
        return this._lat;
    }
    set lat(value) {
        this._lat = value;
    }

    get long() {
        return this._long;
    }
    set long(value) {
        this._long = value;
    }

    get mass() {
        return this._mass;
    }
    set mass(value) {
        this._mass = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }

    static checkMassValue(value){
        value = Number(value);
        if (String(value) === "NaN"){
            return "Unknown"
        } else {
            value = Math.ceil(value);
            return String(value);
        }
    }
}
