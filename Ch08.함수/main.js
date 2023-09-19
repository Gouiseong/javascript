/*
함수
 - 하나의 단위로 실행할 수 있도록 명령문을 그룹화한 것이다.
*/

/*
함수 생성
 - 함수 선언식, 함수 표현식 두 가지가 있다.

함수 선언식 
 - function키워드, 함수이름(),함수블록{...}으로 이루어져 있다.

함수 표현식
 - 함수를 변수에 담아 생성한다
*/

//함수 선언식 
function hello(){
    console.log("안녕하세요");
    console.log("반갑습니다");
};
hello();

//함수 표현식
let hello2 = function(){
    console.log("안녕하세요");
    console.log("반갑습니다");
};
hello2();

/*
파라미터
 - 괄호() 안에 파라미터(매개변수)를 선언하여 함수 호출 시 값을 전달할 수 있다.
 - ES6에서 파라미터에 기본값을 지정하는 기능이 추가되었다.
*/
function person(name, age = 5){
    console.log("내 이름은: "+name);
    console.log("내 나이는: "+age);
};
person("고의성",99);

/*
반환
 - return 키워드를 사용하여 함수에서 값을 변환할 수 있다.
*/
function sum(num1,num2){
    let num = num1 + num2;
    return num;
}
let result = sum(3,5);
console.log(result);

/*
함수 스코프
 - 전역 스코프 : 최상단에 선언된 함수
 - 블록 스코프 : 블록 단위로 선언된 함수
 - 같은 블록 안의 변수만 사용이 가능하다.
 - 자식은 부모것을 사용할 수 있다.
 */
function aBlock(){
    let name = "고의성";
    function bBlock(){
        let age = "100";
        console.log(age);
        console.log(name);
    }
    //console.log(age); //자식 변수는 사용 불가
}
aBlock();

/*
Arrow Function
 - ES6에서 추가된 화살표 표기법이다.
 - function 예약어를 생략할 수 있다.
 - 함수에 파라미터(매개변수)가 하나뿐이면 괄호를 생략할 수 있다.
 - 함수 블록안에 표현식이 하나라면 중괄호와 return도 생략할 수 있다.
*/
let f1 = function(){
    console.log("f1");
};
let f2 = () => {
    console.log("f2");
};
f1();
f2();

let f3 = function(name){
    console.log(name);
};
let f4 = name => console.log(name);
f3("홍길동");
f4("홍길순");

let f5 = function(a,b){
    return a+b;
};
let f6 = (a,b) => a+b;
let result2 = f6(2,3);
console.log(result2);

/*
콜백함수
 - 다른 함수가실행을 끝낸 뒤 다시 호출되는 함수
*/
function func(){
    console.log("수행");
    callBack();
}
function callBack(){
    console.log("콜백함수");
}
func();

//함수 연습
//배열 요소의 평균값을 구하는 함수
function calculateAverage(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
let calculate = [1,3,6,7,8,2];
console.log(calculateAverage(calculate));

//계산기 함수
function calculate2(num1,num2,operator){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;            
        case '/':
            return num1/num2;
        default:
            return "잘못된 연산자입니다";       
    }
}
let result3 = calculate2(10,5,"+");
console.log(result3);

//배열값에서최대값 구하기 함수
function getMaxValue(array){
    let max = array[0];
    for(let i = 1;i<array.length;i++){
        if(array[i]>max){
        max = array[i];
        }
    }
    return max;
}
let array2 = [10,5,3,1,15,30,19];
console.log(getMaxValue(array2));