function checkProbabilityTheory(count) {
    let evenCount = 0, oddCount = 0;
    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 901) + 100;
        num % 2 === 0 ? evenCount++ : oddCount++;
    }
}