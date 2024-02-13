var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",
    price: function() {
        let total = 0;
        for (let service in this) {
            if (!isNaN(parseInt(this[service]))) { // перевірка, чи значення є числом
                total += parseInt(this[service]);
              }
            }
            return total;











}