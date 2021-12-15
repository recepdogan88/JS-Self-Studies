//Javascript codes that print numbers divisible by 3 and 5 and the sum of these numbers-(up to 100)

let sayac =0
let sum=0
for (let i=0;i<101;i++){
    if(i%15===0){
        console.log(i)
        sayac++
        sum+=i
    }
}console.log("3 e 5 e bolunen"+" "+sayac+" "+"sayi vardir")
console.log("sayilarin toplami"+" "+"="+ sum)