var validTransportationList = { 
        CivilAviationAccident: ["Boeing 737","Airbus A319"],
        MilitaryAviationAccident: ["MiG-29","AH-64 Apache"],
        AviationAccident: ["Boeing 737","Airbus A319","MiG-29","AH-64 Apache"],
        CarAccident: ["Audi A3","Ford F-150"],
        Accident: ["Boeing 737","Airbus A319","MiG-29","AH-64 Apache","Audi A3","Ford F-150"],
};

function UserException(message) {
   this.message = message;
   this.name = 'UserException';
}

function Accident(name, date, num, trans, reason) {
    this.name = name || "Accident";
    this.date = date || new Date();
    this.numOfDamagedPeople = num || 0;
    this.__transortationInvoloved = trans || [];
    this.reason = reason || "";
}

Accident.prototype.addTransport = function(transport) {
    for(var i = 0, length = arguments.length; i < length; i++) {
        if(validTransportationList[this.name].indexOf(arguments[i]) !== -1) {
            this.__transortationInvoloved.push(arguments[i]);
        }
        else {
            throw new UserException('Invalid transportation name');
            }
        }
}

Accident.prototype.toString = function() {
    return "Crush date: " + this.date.toLocaleDateString() + "\n" +
        "Reason: " + this.reason + "\n" +
        "Number of damaged people: " + this.numOfDamagedPeople + "\n" +
        "Transportations involved: " + this.__transortationInvoloved.toString() + "\n";
}

function AviationAccident(name, date, num, trans, reason, altitude) {
    Accident.call(this, name, date, num, trans, reason)
    this.altitude = altitude || 0;
}

AviationAccident.prototype = Object.create(Accident.prototype, {
    constructor: {
        value: AviationAccident,
    }
});

AviationAccident.prototype.toString = function() {
    return Accident.prototype.toString.call(this) +
        "Altitude: " + this.altitude + "\n";
}

function CivilAviationAccident(name, date, num, trans, reason, altitude, airlineName) {
    AviationAccident.call(this, name, date, num, trans, reason)
    this.airlineName = airlineName || "";
}

CivilAviationAccident.prototype = Object.create(AviationAccident.prototype, {
    constructor: {
        value: CivilAviationAccident,
    }
});

CivilAviationAccident.prototype.toString = function() {
    return AviationAccident.prototype.toString.call(this) +
        "Name of airline: " + this.airlineName + "\n";
}

function MilitaryAviationAccident(name, date, num, trans, reason, altitude, country, countriesInvolved) {
    AviationAccident.call(this, name, date, num, trans, reason)
    this.country = country || "";
    this.countriesInvolved = countriesInvolved || [];
}

MilitaryAviationAccident.prototype = Object.create(AviationAccident.prototype, {
    constructor: {
        value: MilitaryAviationAccident,
    }
});

MilitaryAviationAccident.prototype.toString = function() {
    return AviationAccident.prototype.toString.call(this) +
        "Country: " + this.country + "\n" +
        "Countries involved: " + this.countriesInvolved.toString() + "\n";
}

function CarAccident(name, date, num, trans, reason, address, propertyDamageInAMD, InsuranceAgency) {
    Accident.call(this, name, date, num, trans, reason)
    this.address = address || "";
    this.propertyDamageInAMD = propertyDamageInAMD || 0;
    this.InsuranceAgency = InsuranceAgency || "";
}

CarAccident.prototype = Object.create(Accident.prototype, {
    constructor: {
        value: CarAccident,
    }
});

CarAccident.prototype.toString = function() {
    return Accident.prototype.toString.call(this) +
        "Address: " + this.address + "\n" +
        "Damaged property in AMD: " + this.propertyDamageInAMD + "\n" +
        "Insurance agency involved: " + this.InsuranceAgency + "\n";
}

var acciden1 = new Accident();
acciden1.date = new Date(2010,8,9);
var acciden2 = new CivilAviationAccident();
acciden2.date = new Date(2011,8,9);
var acciden3 = new MilitaryAviationAccident();
acciden3.date = new Date(2012,8,9);
var acciden4 = new CarAccident();
acciden4.date = new Date(2013,8,9);
var arr = [acciden1,acciden2,acciden3,acciden4];

arr.toString();
arr.sort(function(a,b){return a.date.valueOf()-b.date.valueOf();})
arr.join("\n");
