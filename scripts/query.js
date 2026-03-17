// query.js
//tag : header, nav, ul, li, a
//class : gnb, lnb

//변수 생성 태그5개, 클래스2개
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('.gnb > li');
const li2 = document.querySelectorAll('.gnb li li');
//const li2 = document.querySelectorAll('.lnb li');
const gnbA = document.querySelectorAll('.gnb > li > a'); //2
const lnbA = document.querySelectorAll('.lnb > li a'); //3
const gnbCls = document.querySelector('.gnb');
const lnbCls = document.querySelector('.lnb');

//콘솔확인(오류 조기 확인)
console.log(header, nav, ul[0], ul[1], li, li2, gnbA, lnbA, gnbCls, lnbCls);

let disCount = '';
console.log(disCountfunc(24990));
alert(disCountfunc(85100));

function disCountfunc(price){
    disCount = `5%할인 : ${price * 0.95}원,`;
    disCount += `10%할인 : ${price * 0.9}원,`;
    disCount += `20%할인 : ${price * 0.8}원,`;
    disCount += `30%할인 : ${price * 0.7}원,`;
    //console.log(disCount);
    return disCount; //함수 밖으로 disCount 값만 내보낸다.(함수호출할때) 
    //함수의 결과값은 다양한 함수로 실행할 수 있어야 하기 때문에 함수 내부에서 실행함수를 정하는 것이 아닌 리턴으로 값만 내보내고 함수밖에서 실행함수를 정한다.
}