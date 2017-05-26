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

var Accident = {
        name: "Accident",
        date: new Date(),
        numOfDamagedPeople: 0,
        __transortationInvoloved: [],
        reason: "",
        addTransport: function(transport) {
            for(var i = 0; i<arguments.length;i++) {
                if(validTransportationList[this.name].indexOf(arguments[i])!==-1) {
                    this.__transortationInvoloved.push(arguments[i]);
                }
                else {
                    throw new UserException('Invalid transportation name');
                }
            }
        },
        toString: function() {
            return "Crush date: "+this.date.toLocaleDateString()+"\n"+
                   "Reason: "+this.reason+"\n"+
                   "Number of damaged people: "+this.numOfDamagedPeople+"\n"+
                   "Transportations involved: "+ this.__transortationInvoloved.toString()+"\n";
        },
        hasInfo: function(information){
            return !!((this.date.toLocaleDateString().search(information)+1) || 
                    (this.reason.search(information)+1) ||
                    (this.__transortationInvoloved.toString().search(information)+1)||
                    (this.numOfDamagedPeople.toString().search(information)+1));
        }
};

var AviationAccident=Object.create(Accident);
Object.defineProperties(AviationAccident,{
        altitude:{value: 0} ,
        toString:{value: function(){
            return Accident.toString.call(this)+
                   "Altitude: "+this.altitude+"\n";
            },
        },
        hasInfo: {value: function(information){
             return !!(Accident.hasInfo.call(information)||
                      (this.altitude.toString().search(information)+1));
             },
        },
});

var CivilAviationAccident=Object.create(AviationAccident);
Object.defineProperties(CivilAviationAccident,{
        airlineName:{value:""},
        toString: {value: function(){
            return AviationAccident.toString.call(this)+
                   "AirlineName: "+this.airlineName+"\n";
            },
        },
        hasInfo: {value: function(information){
            return !!(AviationAccident.hasInfo.call(information)||
            (this.airlineName.search(information)+1));
            },
        },
});

var MilitaryAviationAccident=Object.create(AviationAccident);
Object.defineProperties(MilitaryAviationAccident,{
        country: {value: ""},
        countriesInvolved: {value: []},
        toString: {value: function(){
            return AviationAccident.toString.call(this) +
                   "Country: " + this.country + "\n"+
                   "countries Involved: "+this.countriesInvolved.toString()+"\n";
            },
        },
        hasInfo: {value: function(information){
            return !!(AviationAccident.hasInfo.call(information)||
                     (this.country.search(information)+1)||
                     (this.countriesInvolved.toString().search(information)+1));
            },
        },
});

var CarAccident = Object.create(Accident);
Object.defineProperties(CarAccident,{
        address: {value: ""},
        propertyDamageInAMD:{ value: 0},
        InsuranceAgency: {value: ""},
        toString: {value: function(){
            return Accident.toString.call(this)+
                   "address: "+this.address+"\n"+
                   "Damaged property in AMD: "+this.propertyDamageInAMD+"\n"+
                   "Insurance Agency in Involved: "+this.InsuranceAgency+"\n";
            },
        },
        hasInfo: {value: function(information){
            return !!(Accident.hasInfo.call(information)||
                     (this.propertyDamageInAMD.toString().search(information)+1)||
                     (this.address.search(information)+1)||
                     (this.InsuranceAgency.search(information)+1));
            },
        },
});


var acciden1=Object.create(Accident);
acciden1.date=new Date(2010,8,9);
var acciden2=Object.create(AviationAccident);
acciden2.date=new Date(2011,8,9);
var acciden3=Object.create(MilitaryAviationAccident);
acciden3.date=new Date(2012,8,9);
var acciden4=Object.create(Accident);
acciden4.date=new Date(2013,8,9);
var arr=[acciden1,acciden2,acciden3,acciden4];

arr.toString();
arr.sort(function(a,b){return a.date.valueOf()-b.date.valueOf();})
arr.join("\n");
