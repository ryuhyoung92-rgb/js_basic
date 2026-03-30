// if.js
let data1 = ''; //변수생성과 빈문자열 대입
//1. typeResult 변수 생성
//2. Boolean내장함수 활용 data1 변수에 들어간 논리데이터종류 확인
//3. typeResult 대입
let typeResult = Boolean(data1);
console.log(`data1의 데이터타입은 : ${typeResult}`);
data1 = 'ABC'; //data1 문자 'ABC' 재대입
typeResult = Boolean(data1); //변경된 data1을 내장함수로 재대입
console.log(`data1의 데이터타입은 : ${typeResult}`); //출력

data1 = -5;
typeResult = Boolean(data1);
console.log(`data1의 데이터타입은 : ${typeResult}`); //출력

let data2; //undefined
typeResult = Boolean(data2);
console.log(`data2의 데이터타입은 : ${typeResult}`); //출력

//false, null, NaN
let data3;

data3 = false; //false 논리키워드 false =/= 'false(''를 쓸 경우 문자열로 인식하여 값이 true로 나옴)
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`); //출력

data3 = null; //null 값을 삭제할때 대입하는 키워드
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`); //출력

data2 = '가나다라';
data3 = data2 * 10; //NaN (Not a Number)
console.log(data3);
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`); //출력

data2 = [0,1,2]; // 3배열
date3 = []; 
// 빈 배열 new Array(); 내장함수가 있다로 구분
// 빈 문자열은 거짓 ''
typeResult = Boolean(data2);
console.log(`data2의 데이터타입은 : ${typeResult}`); //출력
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`); //출력

// 조건문
// if(조건식){조건식이 참일때 실행되는 실행문}
// if(조건식){조건식이 참일때}else{조건식이 거짓일때 실행}

let x = 10;
let y = 20;
let result = x == y; // =(대입) ==(피연산자와 같은지 비교영상)

if(result) console.log(`result'는 참`); //실행이 한줄이면 중괄호 생략가능
//if(result){console.log(`rsulst는 참);}

//비교연산자
//일치연산 : ==, ===
//부등연산 : !=, !==
//크다, 작다 : <, >
//크거나 작다, 같거나 같다 : <=, >=

x = '5';
y = 5;
if( x==y ) console.log('x와 y는 같다');
x = Number(x);
if( x===y ) console.log('x와 y는 데이터타입까지 같다');

let w = 1920;
let h = 1080;
if( w!=h ) console.log('w와 h는 다르다')
if( w>h ) console.log('w와 h는 크다')
w -= h; // w = w-h;
if( w<h ) console.log('w와 h는 작다')
if( w<=h ) console.log('w와 h는 작거나 같다')

// 인쇄하기 버튼 클릭 시 확인/취소 묻는 창이 실행
// 퐉인 누르면 -> 인쇄창 실행
// 취소 누르면 -> 인쇄가 취소되었습니다. 메세지 실행
const prtBtn = document.querySelector('#prt_btn');
console.log(prtBtn);

prtBtn.addEventListener('click',function(){
    let user = confirm('인쇄하시겠습니까?');
    console.log(user);
    // if(user) print();
    if(user==true) print();
    if(user!=false) print();
})
// -------------------------------------------성인인증 버튼에 따른 조건 결과
const adBtn = document.querySelector('#ad_btn');
console.log(adBtn);
adBtn.addEventListener('click',function(){
    let user = confirm('당신은 성인이십니까?') //지역함수이기 때문에 변수명 중복가능
    console.log(user);
    if(user==true) location.href = 'https://google.com';
    /* else alert('성인이 아니면 접속이 불가능합니다.');
    if(user){
        location.href = '주소'; //2줄 이상일땐 중괄호 처리
    }else{
        alert('메세지')
    } */
})