let user = {
    name : "Misha",
    age : 30,
    student : "yes",
    sName : "Butenko",
    yerOfStud : "first",
    gender : 'male',
    getInfo : function {
        for (let word in this){
        if (typeof this[word] !== 'function'){
              console.log(word + '' + this[word]);

        }
    }
    }
};
user getInfo();
