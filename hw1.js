let user = {
    name : "Misha",
    age : 18,
    student : "yes",
    sName : "Butenko",
    yerOfStud : "first",
    gender : 'male',
    getInfo: function() {
        for (let word in this){
        if (typeof this[word] !== 'function') {
              console.log(word + ':' + this[word]);

        }
    }
    }
};
user.getInfo();

/**user.somethingNew = 'NEW';

user.getInfo();*/
// Не до кінця зрозумів чи я повинен додати щось нове, чи ви, при тесті, але якщо я то ось, також додав) 