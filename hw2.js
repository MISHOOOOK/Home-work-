let arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },  
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" 
    },
];
let RE = /[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)/;
let neededEmails = arr.reduce((a, obj) => {
    if (RE.test(obj.email)) {
        a.push(obj.email);
    }
    return a;
}, []);

console.log(neededEmails);
