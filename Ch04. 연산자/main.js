/*
연산자
 - 어떠한 연산을 기호를 사용하여 수행한다.
*/

/*
문자열 병합
 - 문자열은 + 연산자를 사용하여 병합할 수 있다.
*/

console.log("안녕"+"하세요");
console.log(typeof("1"+2)); //문자열과 병합 시 number도 string이 된다.
console.log("1"+2+3);
console.log(1+2+"3");

/*
산술 연산자
 + : 덧셈
 - : 뺄셈
 * : 곱셈
 / : 나눗셈
 % : 나머지
*/
let x = 10; 
let y = 20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

/*
증감 연산자 
++x : 전위 증가 (x에 1을 증가시킨 후에 명령문 수행)
x++ : 후위 증가 (현재 명령문을 수행 후 x에 1을 증가)
--x : 전위 감소 (x에 1을 감소시킨 후에 명령문 수행)
x-- : 후위 감소 (현재 명령문을 수행 후 x에 1을 감소)
*/
x=1;
y=1;

let result = ++x +y++;
console.log(result);
console.log(x);
console.log(y);

/* 
비교 연산자 
a > b : a가 b보다 크다
a < b : a가 b보다 작다
a >= b : a가 b보다 크거나 같다 
a <= b : a가 b보다 작거나 같다 
a == b : a와 b는 같다
a === b : a와 b는 같다(데이터 타입 까지)
a != b : a와 b는 같지 않다
a !== b : a와 b는 같지않다(데이터 타입 까지)
*/

let a = 2;
let b = '2';

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a===b);
// console.log(a==b);

/*
할당 연산자
 x += y : (x=x+y)
 x -= y : (x=x-y)
 x *= y : (x=x*y)
 x /= y : (x=x/y)
*/

let i = 10;
let j = 20;
// i = i+j;
// console.log(i);
i+=j;
console.log(i);

/*
논리 연산자
 - 논리 연산자는 boolean값만 다를 수 없지만 자바스크립트에서만 
   모든 타입의 값을 받을 수 있고 결과 역시 모든 타입이 될 수 있다
 - null, 0, NaN, 빈 문자열(""), undefined는 false로 간주한다
AND 연산자 (&&)
 - 피연산자가 모두 true일 경우에 true를 반환하고 나머지는 false를 반환
OR 연산자 (||)
 - 피연산자가 하나라도 true면 true를 반환하고 나머지는 false를 반환
NOT 연산자 (!)
 - true면 false를 반환하고, false면 true를 반환한다.

단축 평가
 - AND 연산자에서 앞쪽 피연산자가 false일 때,
  OR 연산에서 앞쪽 피연산자가 true일 때 나머지 피연산자의 평가를 
  생략하고 그대로 반환한다
*/

let a1 = true && true;
let a2 = false && false;
let a3 = true && 3==4;
let a4 = 111 && 222;
let a5 = 111 && false;
let a6 = null && undefined;
console.log(a6);

let o1 = true || false;
let o2 = false || false;
let o3 = true || 3==4;
let o4 = 111 || 222;
let o5 = false || 222;
let o6 = null || undefined;
console.log(o6);

let n1 = true != true;
let n2 = false != false;
let n3 = true != 3==4;
let n4 = 111 != 222;
let n5 = 111 && false;
let n6 = null && undefined;
console.log(n3);

/*
삼항 연산자
 - 조건식 ? 값1 : 값2
 - 조건식이 true이면 값1을 반환하고, false이면 값2를 반환한다.
*/
let number = 11;

let result2= number%2==1?"홀수입니다." : "짝수입니다.";

console.log(result2);