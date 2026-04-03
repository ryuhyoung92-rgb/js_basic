// 반복문 for
// for(초기변수생성(i, j, k, m, n)과 초기값대입; 조건식; 증감식){반복실행문}

// 자바스트립트 10번 반복 출력(반복문 이용)
// DOM요소(li[index]) 20개 1~20 기준으로 생각해서 숫자데이터로 생각해야함.
for(let i=0; i<10; i++){
    console.log('자바스트립트');
}

// "CSS" 5번 반복 출력
for(let i=0; i<=4; i++){console.log('CSS');}

// "HTML" 20번 반복 출럭
for(let i=0; i<20; i++){console.log(`HTML${i+1}`);}//('HTML'+i);}

// 구구단 2단 반복 출력 "2x1=2"
function dan2(){
    let num = 2;
    let result = '';
    result += `${num}x1=${num*1}`;
    result += `${num}x2=${num*2}`;
    result += `${num}x3=${num*3}`;
    return result;
}
// 반복문 활용 2단
// 1 시작한 예시
const dan = document.querySelectorAll('.dan');
const danResult = document.querySelectorAll('.dan .result');
console.log(dan, danResult);

// for(let i=1; i<=9; i++){console.log(`2x${i}=${2*i}`);}
for(let i=1; i<=9; i++){
    let result = `2x${i}=${2*i}<br>`
    // console.log(result);
    // dan2Result.textContent += result;
    danResult[0].innerHTML += result;
    result = `3x${i}=${3*i}<br>`
    danResult[1].innerHTML += result;
    result = `4x${i}=${4*i}<br>`
    danResult[2].innerHTML += result;
}
console.log('------------');
for(let i=0; i<9; i++){
    console.log(`2x${i+1}=${2*(i+1)}`);
}
// 3단
// for(let i=0; i<9; i++){
//     let result = `3x${i+1}=${3*(i+1)}<br>`
//     console.log(result);
//     danResult[1].innerHTML += result;
// }
// // 4단
// for(let i=1; i<=9; i++){
//     let result = `4x${i}=${4*i}<br>`
//     console.log(result);
//     danResult[2].innerHTML += result;
// }

// 자바스트립트 10번 반복 출력(반복문 없을 때)
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');
console.log('자바스트립트');

// 자바스트립트를 이용한 태그 생성
const target = document.querySelector('.target');
// 태그 생성 목적의 변수(저장소)
const ul = document.createElement('ul');
ul.innerHTML = '<li>목록</li>';
console.log(ul);
//target.innerHTML = ul;
target.appendChild(ul); //createElement로 생성한 태그삽입방법
//console.log('target');
/* target.innerHTML = '<ul>'
target.innerHTML += '<li>목록1</li>'
target.innerHTML += '<li>목록2</li>'
target.innerHTML += '</ul>' */