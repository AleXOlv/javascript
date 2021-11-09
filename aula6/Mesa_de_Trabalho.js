/*
1. !true
2. !false
3. !!false
4. !!true
5. !1
6. !!1
7. !0
8. !!0
9. !!""
10.let x = 5 ;
let y = 9;
a. x < 10 && x!==5
b. x>9 || x===5
c. !(x===y)
*/

console.log(!true) //False
console.log(!false) //True
console.log(!!false) //False
console.log(!!true) //True
console.log(!1) //False
console.log(!!1) //True
console.log(!0) //True
console.log(!!0) // False
console.log(!!"") //False

let x = 5;
let y = 9;
console.log(x < 10 && x!== 5); //False
console.log(x > 9 || x === 5); //True
console.log(!(x === y)); //True

/* 
1. let x=10
let y ="a"
y === "b" || x >= 10    TRUE

2. let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)         FALSE
                        false               true

3. let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)     FALSE
*/