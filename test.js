let total = 0
for (i = 0; i <= 100; i++) {
    if (i % 5 === 0){
        console.log(i)
        total = total + i
    }
}
console.log(total)