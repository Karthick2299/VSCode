const person = {
    f_name : "karthick",
    l_name : "selvam",

    full_name : function(){
        return this.f_name + " " + this.l_name;
    }
};

console.log(person.full_name());