console.log("안녕하새우");

/*
데이터 타입
 - 값의 종류를 의미하고, 기본 타입과 객체 타입으로 나뉜다.
*/

/*
기본 타입
 - 값을 하나만 가지며 원시값이라고도 불린다.
 - number(숫자), string(문자열), boolean, null, undefined, symbol

객체 타입
 - 기본 타입을 제외한 값은 모두 객체 타입이다.
 - Object(객체), Array(배열), Function(함수) 등 다양한 객체가 있다.

 typeof
  - 피연산자의 데이터 타입을 문자열로 반환합니다.
 */
console.log(typeof 12);
console.log(typeof "안녕");

/*
숫자 
 - number 타입이라고 합니다
 - 자바나 다른 언어는 정수, 데이터 크기에 따라 키워드가 다양하지만 
   자바스크립트는 그냥 숫자만 적으면 된다.

 - 숫자 타입에서 특별한 값 
    - Infinity : 양수를 0으로 나눈 경우
    - -Infinity : 음수를 0으로 나눈 경우
    - NaN : 문자열을 나눈 경우 
*/

let number1 = 1;
const number2 = 4/0;
console.log(number2);

/*
문자열
 - string 타입이라고 합니다.
 - 문자열을 표현할 땐 작은따옴표('), 큰따옴표("), 백틱(`) 사용
 - 백틱(`)은 ES6버전에서 도입되었다.

백틱(`)
 - 여러줄 표현이 가능하다.
 - 템플릿 문자열을 더 편리하게 사용이 가능하다.

템플릿 문자열 
 - 값과 문자열을 + 기호를 사용하여 연결한다.
 - 백틱을 사용하면 더 편리하게 연결이 가능하다.

*/

let nameA = '홍길동';
let nameB = "고의성";
let nameC = `김의성`;

console.log(nameA);
console.log(nameB);
console.log(nameC);

// 백틱은 여러줄 표현 가능
let temp1 = `아아아
ㅁㄴㅇ
ㅁㄻ
ㅁㄴㅇ`;
console.log(temp1);

// 템플릿 문자열
let nameD = "고의성";
let age = 99;
console.log("내 이름은 "+nameD+"입니다. 나이는 "+age+"살입니다.");

// 백틱 사용시
console.log(`내 이름은 ${nameD}입니다. 나이는 ${age}살입니다.`);

/*
이스케이프 표현
 - 일반적인 문자 외에 특수 ㅜㅁㄴ자는 이스케이프 표현을 사용한다
 - \n 줄바꿈
 - \\ 백스페이스
 - \" 큰따옴표
 - \' 작은따옴표
 - \t 탭
*/
console.log("안녕하세요\t반갑습니다.");

/*
불린(boolean)
 - true와 false 두 가지 값만 가지는 논리형 데이터 타입이다.
*/

let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);
console.log(typeof isFalse);

/*
심볼
 - 유일한 값을 나타내기 위해 ES6버전에서 도입한 데이터 타입이다.
 - 고유한 식별자가 필요할 때 사용한다.
*/

let key1 = Symbol("abc");
let key2 = Symbol("abc");
console.log(key1== key2);

/*
null, undefined
 - 둘 다 값이 비어있는 상태이다.
 - null : 값이 없는 상태
 - undefined : 값을 할당하지 않은 상태
*/

let message1 = null;    // 값이 빈 상태의 변수를 표현 
let message2;

console.log(message1);
console.log(message2); 
