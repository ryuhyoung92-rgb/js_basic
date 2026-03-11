// function.js
// function 함수명(전달인자){반복실행내용;} //세미콜론은 중괄호 안에서만 표기
//반복 함수 준비
function story1(){ //사용자정의함수
    story2(); //콜백함수
    let a = '조약돌 수집';
    a += '조약돌 떨어뜨리기'; //기존이야기에 더하기 +=
    a += '조약돌 따라 집 찾아오기';
    console.log(a);
}
function story2(){
    let b = '부모는 먹을 것이 없어 ';
    b += '계모가 아이들을 숲에 버리자고 제안한다';
    console.log(b);
}

// 반복 함수 실행(함수밖)
story1();

// 카패 키오스크 함수
function kiosk(){
    let cafe = '주문하기';
    cafe += '커피 메뉴 창 실행';
    cafe += '장바구니에 커피 담기';
    cafe += '결제하기';
    cafe += '결제 방식 선택 창 실행';
    cafe += '결제완료';
    cafe += '영수증 출력 메세지';
    cafe += '주문완료';
    console.log(cafe);
}
kiosk(); //함수선언 밖 함수 실행