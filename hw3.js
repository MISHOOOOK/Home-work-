function checkProbabilityTheory(count) {
    let evenCount = 0, oddCount = 0;
    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 901) + 100;
        num % 2 === 0 ? evenCount++ : oddCount++;
    }
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
    console.log('_'.repeat(60));
}
checkProbabilityTheory(100);
checkProbabilityTheory(200);
checkProbabilityTheory(300);
checkProbabilityTheory(400);
checkProbabilityTheory(500);
checkProbabilityTheory(600);
checkProbabilityTheory(700);
checkProbabilityTheory(800);
checkProbabilityTheory(900);
checkProbabilityTheory(1000);
