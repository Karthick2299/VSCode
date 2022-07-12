function Employee(name){
    this.name = name;

    this.say = function(){
        console.log("I am Employee " + name);
    };
}

function EmployeeFactory(){
    this.create = function(name){
        return new Employee(name);
    };
}

function Vendor(name){
    this.name = name;

    this.say = function(){
        console.log("I'm Vendor " + name);
    };
}

function VendorFactory(){
    this.create = function(name){
        return new Vendor(name);
    };
}

function run(){
    var persons = [];

    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();
    persons.push(employeeFactory.create("karthick"));
    persons.push(vendorFactory.create("Thanos"));

    var len = persons.length;

    for(var i = 0; i < len; i++){
        persons[i].say();
    };

}

run();