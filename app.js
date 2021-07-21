// alert('hello');
// console.log(2+5);
// console.log(2/5);
// console.log(5/2);
// console.log(2*5);

// const a = 5;
// const b = 2;

// console.log(a * b);
// console.log(a + 4);
// console.log(a - b);
// console.log(a / 2);

let myName = "sum";   //javascript는 camelCase 
                        //파이썬은 my_name 형식으로 snake_case 라고 함 그리고 파이썬은 const 선언 안해도 됨 
                        
                        //const 는 constant 상수라는 뜻으로, 바뀌지 않는 수를 의미 바꿔야 되는 변수는 let을 사용하자	
                        
console.log("my name is " + myName);
myName = "min"; //이렇게 사용 가능 let으로 선언 해 놔서 따로 let을 쓸 필요 없음.
console.log("hello your name is " + myName + "!");

// const myName = "sumin";
                        
// console.log("my name is " + myName);
// myName = "sumsum"; //이건 안됨!!
// const myName = "minsu"; //이것도 안됨!!
// console.log("hello your name is " + myName + "!");

// const mon = 'mon';
// const tue = 'tue';
// const wed = 'wed';
// const thu = 'thu';
// const fri = 'fri';
// const sat = 'sat';
// const sun = 'sun';

// const dayOfWeek = [mon, tue, wed, thu, fri, sat, sun];

// console.log(dayOfWeek);
// console.log(dayOfWeek[4]);

// // Add one more day to the array
// dayOfWeek.push('min');

// console.log(dayOfWeek);

// const toBuy = ["tofu", "potato", "onion", "meat"];
// console.log(toBuy);
// toBuy.push("salt");
// console.log(toBuy);
// console.log(toBuy[3]);

// const player = {
//     name: 'sum',
//     height: 176,
//     average: 78,
//     number: 11,
// };

// console.log(player.name, player.number);

// player.fat = true;

// console.log(player);

// player.fat = false;

// console.log(player);

// player.height = player.height + 15;

// console.log(player);

// function sayHello(name, age) {
//     console.log("Hello! my name is " + name + "and i am " + age + " years old.");
// }

// console.log()
// sayHello("sum", 27);
// sayHello("june", 30);
// sayHello("yoo", 42);

// function plus(a, b) {
//     console.log(a + b);
// }

// plus(32, 7);

// const player = {
//     name: "sumin",
//     age: 27,
//     sayHello : function(otherPeople) {
//         console.log("helloo! " + otherPeople);
//     }
// }

// console.log(player.name);
// player.sayHello("Ryu");

// function plusFive(targetto) {
//     console.log(targetto - 5);
// }

// plusFive(1, 8, 12, 30, 27, 64); //arg가 하나뿐 맨 앞 1에서 5를 뺀 값만 출력됨

const calculate = {
    add: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
}

const added = calculate.add(6, 3);
const minuss = calculate.minus(6, 3);
const divided = calculate.divide(6, 3);
const powered = calculate.power(6, 3);

console.log(added +" "+ minuss +" "+ divided +" "+ powered)

const age = 32;

function koreanAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = koreanAge(age);

document.write(krAge);
