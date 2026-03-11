// operator2.js
// 증감연산자 ++, --
let x = 5; //x 변수생성 -> 숫자5를 x로 대입
//let y = ++x; //y 변수생성 -> 1증가한 x를 대입
let y = x++; //y 변수생성 -> x를 대입하고 나중에 x를 1증가
console.log(x, y);

let a;
let b;
let c;
let d;
//변수만 생성하고 값이 정의안된 상태(undefined)
a = 1;
b = 2;
c = 3;
d = 4;
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`);//a=1, b=2, c=3, d=4 템플릿문자열
/* ++, -- */
a = --c;
b = a++;
c = --d;
d = b++;
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`);//a=3, b=3, c=3, d=2 템플릿문자열

//----------------------------------------증감연산자결과예측 문제
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
console.log(`num1=${num1}, num2=${num2}, num3=${num3}, num4=${num4}`) //num1=10, num2=20, num3=30, num4=40
num1++; //대입연산자가 없으면 증감연산자 앞뒤 의미없음
num2--;
num3++;
num4--;
console.log(`num1=${num1}, num2=${num2}, num3=${num3}, num4=${num4}`) //num1=11, num2=19, num3=31, num4=39
num1 = ++num2; //전위(먼저처리)
num2 = num1++; //후위(나중에처리)
console.log(`num1=${num1}, num2=${num2}, num3=${num3}, num4=${num4}`) //num1=21, num2=20, num3=31, num4=39
num3 = num1+num2;
num4 = ++num3; //전위
console.log(`num1=${num1}, num2=${num2}, num3=${num3}, num4=${num4}`) //num1=21, num2=20, num3=42, num4=42
num1 = ++num3 + 10;
num2 = --num4 + 1;
console.log(`num1=${num1}, num2=${num2}, num3=${num3}, num4=${num4}`) //num1=53, num2=42, num3=43, num4=41

//----------------------------------------증감연산자 + 질문답변함수
//const는 변경할 수 없음 -> let 변경
//prompt 문자로 데이터 인식 -> Number() 숫자 변환
//num++ 증가전 값이 plus 인식 -> 전위연산 ++num
// let num = Number(prompt('구입 수량을 입력하세요.'));
let num = Number('1');
let plus = ++num;
let result = `1+1 행사로 총 구입수량은 ${plus}개입니다.`
console.log(result);

//----------------------------------------복합대입연산자
//증감연산자는 1 증감 처리시 사용
//복합대입연산자는 1 이상 큰 숫자를 -,*,/,% 등에 활용
//복합대입연산자는 새로운값이 아닌 기존값을 활용해서 추가대입
//키 140 -> 145
let height = 140
//height = 5; //X (새로운 값 5만 대입됨)
//height = height + 5; //기존 140에 +5를 더해서 대입
height += 5; //위와 뜻 동일(코드 간결화)

//빼기 복합
height = 10; //새로운 값 대입
//height = height - 5;
height -= 5;
console.log(height);

//곱하기 복합
height = 20;
//height = height * 2;
height *= 2;
console.log(height);

//나누기 복합
height = 50;
height /= 10;
console.log(height);

//나머지 복합
height = 10;
height %= 5;
console.log(height);

//----------------------------------------복합대입연산자 예제
//용돈기입장 앱
//기존에 지갑에 있는 돈 + 이번달에 받은 용돈 = 결과
let wallet = 10000;
// let month = Number(prompt('이번 달 용돈을 얼마 받았나요?'));
let month = Number('5000');
wallet += month; //wallet = wallet + month;
let total = `용돈을 더해서 총 ${wallet}원이 되었습니다.`;
console.log(total);

wallet = 10000; //지갑 10000 준비
//편의점에서 물건을 구입할때 지갑의 돈이 나가는 상황
//삼각김밥 2000, 아이스크림 3000, 과자 4000, 남은 돈
let kimbab = 2000;
let iceCream = 3000;
let snack = 4000;
//결과형태) 편의점 총 구입비는 00000원이고, 남은 돈은 0000원입니다.
total = kimbab + iceCream + snack;
wallet -= kimbab
result = `현재 남은 돈은 ${wallet}원입니다.`;
console.log(result);
wallet -= iceCream
result = `현재 남은 돈은 ${wallet}원입니다.`;
console.log(result);
wallet -= snack
result = `현재 남은 돈은 ${wallet}원입니다.`;
console.log(result);
result = `총 구입비는 ${total.toLocaleString('ko-kr')}원이고, 남은 돈은 ${wallet.toLocaleString('ko-kr')}원입니다.`
console.log(result);