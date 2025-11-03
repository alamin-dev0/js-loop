// continue -- > skip this iteration 
// break -- > i am  done with this loop. loop end 


// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         continue
//     }
//     console.log(i)

// }


let a = 0
while (a < 50) {
    a++
    if (a % 5 !== 0) {
        continue
    }
    console.log(a)
    
}