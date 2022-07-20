const obj_one = {
    name: "karthick",
    age: 22
};

const obj_two = {
    name:"Steffi",
    age: 22
};

console.log(JSON.stringify(obj_one) === JSON.stringify(obj_two));