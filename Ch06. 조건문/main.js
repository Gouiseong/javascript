/*
조건문
 - 조건에 따라 다른 문장을 실행하는 명령문
 - if, switch
*/

/*
if 문
 - if : 조건이 true인 경우 명령문을 실행합니다.
 - else : false인 경우 명령문을 실행합니다.
 - else if : 다중조건을 의미하고, 여러개의 조건을 확인할 수 있다.
*/
let condition = true;
if(condition){
    console.log("참 입니다.");
} else{
    console.log("거짓 입니다.");
}

let number =10;
if (number ==10){
    console.log("첫 번째 블록");
} else if(number == 20){
    console.log("두 번째 블록");
} else if(number == 30){
    console.log("세 번째 블록");
} else{89
    console.log("네 번째 블록");
}

// if문 연습
// 논리 연산자 사용
// let score = prompt("점수를 입력해주세요");
// let isPass = score >= 60;
// if(isPass&& score>=90){
//     console.log("A학점");
// } else if(isPass && score>=80){
//     console.log("B학점");
// } else{
//     console.log("퇴학");
// }

// 다중 조건문
let passwordCheck = true;
let userRole = "admin";
let adminRole ="a";
if(passwordCheck){
    if(userRole === "admin"){
        console.log("관리자로 로그인 합니다.");
    } else if(userRole ==="user"){
        console.log("사용자로 로그인 합니다.");
    } else{
        console.log("페이지 접근이 제한되었습니다.");
    }
} else{
    console.log("비밀번호를 잘못 입력했거나 없는 아이디입니다.");
}

/* 
switch 문
 - switch문의 값이 case조건과 일치할 경우 해당 case절의 명령문 수행
 - case절의 명령문을 수행한 후 break를 만나면 switch문을 종료
 - 일치하는 case절이 없으면 default절의 명령문을 수행
*/
let subject = "javascript";
switch(subject){
    case "javascript":
        console.log("자바스크립트 수업입니다.");
        break;
    case "css":
        console.log("css 수업입니다.");
        break;
    case "html":
        console.log("html 수업입니다.");
        break;    
    default:70
        console.log("모든 case절과 일치하지 않음");
}

// switch문 연습
let score = prompt("점수를 입력해라");
let value = Math.floor(score/10);
switch(value){
    case 10:
        console.log("만점이다");
        break;
    case 9:
        console.log("90점이다");
        break;
    case 8:
    case 7:
        console.log("c학점이다");
        break;
    default:
        console.log("똥점이다");
}