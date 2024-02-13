var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
      let total = 0;
      for (let service in this) {
        if (!isNaN(parseInt(this[service]))) { 
          total += parseInt(this[service]);
        }
      }
      return total;
    },
    minPrice: function() {
      let min = Infinity;
      for (let service in this) {
        if (!isNaN(parseInt(this[service]))) {
          min = Math.min(min, parseInt(this[service]));
        }
      }
      return min;
    },
    maxPrice: function() {
      let max = -Infinity;
      for (let service in this) {
        if (!isNaN(parseInt(this[service]))) {
          max = Math.max(max, parseInt(this[service]));
        }
      }
      return max;
    }
  };
  
  
  //services['Розбити скло'] = "200 грн"; //Теж саме що і в першому файлі, не зрозумів чи я повинен написати чи ні, но якщо я, то написав) 
  

  console.log("Загальна вартість послуг:", services.price(), "грн");
  console.log("Мінімальна вартість послуг:", services.minPrice(), "грн");
  console.log("Максимальна вартість послуг:", services.maxPrice(), "грн");
  