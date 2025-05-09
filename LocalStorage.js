localStorage.setItem("check","data present");
localStorage.getItem("check");
localStorage.removeItem("check");

const studentBioData = {
    name:"Arslan",
    lastname:"Akbar",
    age:32,
    gender:"male",
    course:["JS","tailwindcsss"],
    address:{
        street:"7",
        house:"276",
        Block:"D",
    }
}

localStorage.setItem("objectData",JSON.stringify(studentBioData));
