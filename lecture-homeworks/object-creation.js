
// Lecture hmw2

//var TransportationsList=["Boeing 737", "Airbus A319", "Mig 29", "AH-64 Apache"];
var Accident=Object.create(Object.prototype);
var Accident=Object.defineProperties(Accident,{
                date: {value: new Date(), writable: true, enumerable: true, configurable: true},
//                 TransportationsInvolved : { 
//                                         value: {
//                                                 list: [];
//                                                 checkValidity: function(transport){
//                                                     return TransportationsList.search(transport)!==-1;
//                                                 },
//                                                 addNewTransport: function(transport){
//                                                     return checkValidity(transport) && (this.list[list.length]=transport);
//                                                 },
// },
//                                         enumerable: true,
//                                         configurable: true,
//                 },
                numOfDamPeople : {value: 0, writable: true, enumerable: true, configurable: true},
                reason : { value: "", writable: true, enumerable: true, configurable: true},
                toString : { value: function(){
                                    return "Crush happened in "+this.date.toLocaleDateString()+",\n"+
                                            "Reason: "+this.reason+",\n"+
                                            "Number of damaged people: "+this.numOfDamPeople+",\n"
//                                          "Transportations involved: "+this.TransportationsInvolved.toString();
                            }, 
                            writable: true, 
                            enumerable: true, 
                            configurable: true},
                hasInfo : { value: function(information){
                                        return !!(this.date.toLocaleDateString().search(information) || 
                                               this.reason.search(information))
//                                             || this.TransportationsInvolved.toString().search(information));
                                   },
                            writable: true, 
                            enumerable: true, 
                            configurable: true,
                },
    });

var AviationAccident=Object.create(Accident);
AviationAccident=Object.defineProperty(AviationAccident,"altitude",{ value : 0,
                                                                     writable: true,
                                                                     enumerable: false,
                                                                     configurable: true});

var CivAviationAccident=Object.create(AviationAccident);
CivAviationAccident=Object.defineProperty(CivAviationAccident,"AirlineName",{ value : "",
                                                                     writable: true,
                                                                     enumerable: false,
                                                                     configurable: true});

var MilAviationAccident=Object.create(AviationAccident);
MilAviationAccident=Object.defineProperties(MilAviationAccident,{
                                                                    Country :{value: ""},
                                                                    CountriesInvolved: {value: [""]},
});


