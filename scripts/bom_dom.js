// bom_dom.js
// 함수기초연습
function calc(num2){
    let num1 = 2;
    let total = num1 + num2;
    console.log(`total=>${total}`)
}
calc(1000);
calc(5);
calc('1');

// 1400px / 4 - 20px
// 1024px / 3 - 20px
// 420px / 2 - 20px
// 결과 예시) width:?px

function widthCalc(width, num){
    let calc = (width - 20) / num;
    let total = `width = ${calc.toFixed(1)}px`
    //반올림해서 소수점을 한자리까지 표시하라는 함수 toFixed()
    console.log(total);
}
widthCalc(1400, 4);
widthCalc(1024, 3);
widthCalc(420, 2);

// BOM 내장함수 종류
// window.함수(); //window. 최상위객체라 생략가능
// let bom1 = alert('경고 메세지');

document.write('메세지1')
document.write('메세지<br>2')
document.write('<h1>메세지3</h1>')

// DOM(document object model)
// 변수생성 -> 변수활용 연산자 또는 함수 진행
// DOM변수생성 -> 나머지 순서 동일
const h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag);
// js에 의해 동적으로 변경되는 결과에 따라 스타일변동을 위해 자바스트립트 안에서도 css를 작성할 수 있다.
// DOM객체.style.속성 = '값'; //스타일을 계속해서 쌓는다면 자바스트립트 표기법으로(이걸 더 많이 씀)
// DOM객체.style = '속성:값'; //단일속성으로만 쓴다면 css표기법으로
h1Tag[0].style.backgroundColor = '#ff0';
h1Tag[0].style.border = '1px, solid, #000';
// h1Tag[0].style = 'background-color:#ff0';
// h1Tag[0].style = 'border : 1px, solid, #000';

// 클래스 DOM 선택
const titleCls = document.getElementsByClassName('title');
console.log(titleCls);

titleCls[1].style.borderBottom = '2px dashed #f00';
titleCls[1].style.backgroundColor = '#ddd';
titleCls[0].style.color = 'rgb(201, 85, 50)';
titleCls[0].style.background = 'linear-gradient(rgb(255, 224, 215), rgb(240, 170, 149)';
titleCls[0].style.borderBottom = '2px solid rgb(248, 212, 201)';
titleCls[0].style.padding = '2px';

// 아이디 DOM
const txtId = document.getElementById('txt');
console.log(txtId);
txtId.style.border = '2px solid rgb(248, 212, 201)';
txtId.style.color = '#888';
txtId.style.textAlign = 'right';

// ES6ver DOM
// title 클래스 잡기
const titleClsQ = document.querySelector('.title');
console.log(titleClsQ);

// h1 태그 잡기
const h1TagQ = document.querySelector('h1');
console.log(h1TagQ);
// 보통 h1 태그를 잡으면 로고(h1태그)가 잡히기 때문에(가장 먼저 있는 태그) 다른 h1 태그를 잡고 싶다면 해당 영역(ex).box)을 같이 입력해줘야 함. querySelector('.box h1')

// 아이디 잡기
// 변수 생성 -> 스타일 적용
const txtIdQ = document.querySelector('#txt');
console.log(txtIdQ); //null, undefined 오류
txtIdQ.style.fontWeight = '900';
txtIdQ.style.textAlign = 'center';
txtIdQ.style.color = 'rgb(201, 85, 50)';

// All 키워드 활용 클래스 여러개 잡기
const titleAll = document.querySelectorAll('.box .title');
console.log(titleAll);
titleAll[1].style.backgroundColor = 'red';

// 스타벅스 카테고리/테마 메뉴 JS 만들기
// 특정 목표 달성을 위한 절차적 순서 흐름 계획
// 초기모습 -> 사용자의 동적 움직임에 따라 변화되는 모습
// HTML, CSS 준비된걸 기준으로 작성
//1. 테마 내용 숨기기
//2. 테마 제목 클릭
//3. 카테고리 내용 숨기기, 테마 내용 보이기
//4. 카테고리 제목 클릭
//5. 카테고리 내용 보이기, 테마 내용 숨기기

//1. 테마 내용 숨기기
//숨기기(동작) 실행하려면 테마내용(요소) 필요
//변수
const theme = document.querySelector('.theme');
const themeTitle = document.querySelector('.tab_title a:nth-child(2)');
const category = document.querySelector('.category');
const categoryTitle = document.querySelector('.tab_title a:first-child');
//변수 테스트(에러 조기 확인)
console.log(theme, themeTitle, category, categoryTitle);
theme.style.display = 'none';
//2. 테마 제목 클릭
themeTitle.addEventListener('click', themeShow);
//3. 카테고리 내용 숨기기, 테마 내용 보이기
function themeShow(){
    category.style.display = 'none';
    theme.style.display = 'block'; //이전에 디자인을 flex로 했다면 flex로 표기해야 함
}
//4. 카테고리 제목 클릭
categoryTitle.addEventListener('click', cateShow)
//5. 카테고리 내용 보이기, 테마 내용 숨기기
function cateShow(){
    theme.style.display = 'none';
    category.style.display = 'block';
}