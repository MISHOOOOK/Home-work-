    let strings = [
        "sdfpssjfksdfj",    
        "fjskdfjskdjaaaaaaa",   
        "254498sfsf878787",   
        "afdsadsaaaaaaaaaaaaaa",  
        "2658845238456+",     
        "ds4f5sdf98sdf7sfa6f54"     
    ];
      let RE = /^[^Aa]{6,}$/;
       strings.forEach(str => {
        if (RE.test(str)) {
            console.log(`"${str}" Відповідає умовам`);
        } else {
            console.log(`"${str}" Не відповідає умовам`);
        }
    });
    
