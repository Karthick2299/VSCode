// function EmployeeDetails(f_Name, s_Name, age, designation){
//     this.f_Name = f_Name;
//     this.s_Name = s_Name;
//     this.age = age;
//     this.designation = designation;

//     displayEmployeeDetails(f_Name,s_Name,age,designation);

// }

// function displayEmployeeDetails(first, second, age, designation){
//     console.log("FirstName : " + first);
//     console.log("SurName : " + second);
//     console.log("Age : " + age);
//     console.log("Designation : " + designation);
// }

// const Employee_One = new EmployeeDetails("karthick", "PanneerSelvam", 22, "Software Developer");



//Example 2 - by using JS Objects.

function displayDetails(F_name, age, designation){
    this.F_name = F_name;
    this.age = age;
    this.designation = designation;

    this.name = () => {
        return this.F_name;
    };
}

const newDetail = new displayDetails("karthick",22,"software Developer");
console.log(newDetail.F_name);
console.log(newDetail.name());

