/*
DOM (document object model)
 - 웹 문서(HTML)를 객체화 함으로써 제어할 수 있다.
*/

/*
HTML 요소 선택하기
 get 메서드, 쿼리 메서드

get 메서드
 - document.getElementById
   : HTML에서 고유한 id를 이용하여 요소를 찾는다
 - document.getElementsByClassName
   : HTML에서 클래스명으로 요소를 찾는다
 - document.getElementsByTagName
   : HTML에서 태그명으로 요소를 찾는다.
쿼리 메서드
 - document.querySelector
   : CSS 선택지를 사용하여 HTML 내 첫 번째 요소를 찾는다
 - document.querySelectorAll
   : CSS 선택자를 사용하여 HTML 내 일치하는 모든 요소를 찾는다.
   */
//get 메서드
document.getElementById("title");
document.getElementsByClassName("item");
console.log(document.getElementsByClassName("item"));
document.getElementsByTagName("li");
console.log(document.getElementsByTagName("li"));

//쿼리 메서드
document.querySelector("title");
document.querySelectorAll(".item");
console.log(document.querySelectorAll(".item"));