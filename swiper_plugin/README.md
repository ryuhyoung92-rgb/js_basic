# Swiper Jacascript Plugin
* 플러그인을 통해 쉽게 만드는 슬라이드 자바스트립트 동작
## Swiper 작성 준비
0. `head`태그 안 `title` 아래 Swiper 사용을 위한 CDN 연결
    `</title> **CDN연결파일들** reset, css, 개별js 등 연결마무리`
    <!--swiper 필수 css cdn 연결-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <!--swiper 필수 JS cdn 연결-->
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
1. `html`파일 내에서 슬라이드 삽입위치에 다음과 같이 태그 작성
    `div.swiper>div.swiper-wrapper>div.swiper-slide`
    `div.swiper` : swiper 플러그인 시작 위치(js 연결지점)
    `div.swiper-wrapper` : 슬라이드들 부모역할(flex 내장)
    `div.swiper-slide` : 개별 슬라이드들 `*숫자` 갯수생성
2. 1번에서 생성한 태그에 대상구분용의 별도 클래스 따로 생성
    `div.swiper.개별클래스명`
    -> `<div class="swiper 개별클래스명">`
    `div.swiper-slide.slide번호`
    -> `<div class="swiper-slide slide1">`
3. 프로젝트 디자인에 따라 필요한 추가 태그들을 작성
    `div.swiper-slide`안에 `a, h, p, table, form, div 등..`
4. CSS 선택자 준비(개별, 공통용 모두)
    * **주의사항**
    * `display, width, height, position` 적용하지 않기(부모를 따라가는 성질이 있기 때문에)
    * `swiper` 제일 바깥쪽 swiper시작태그한테만 크기 적용
    * `swiper-slide` 안 3번 목적으로 만든 태그들은 속성 자유
5. JS DOM 변수 준비 -> swiper 연결
    * `const 변수명 = document.querySelector(대상);`
    * `const 변수명 = new Swiper(스와이프적용변수명, {옵션:값, 옵션:값,});`
## swiper plugin 대표 CSS 내장속성:값
1. swiper - position, overflow
2. swiper-wrapper : flex
3. swiper-slide : position, transform
## Swiper {option:value,} 종류와 뜻
* `loop` : 슬라이드 끝 -> 시작 반복 true, false 두 가지 값이 올 수 있음(자바스트립트에 이미 있는 이름이기에 true와 false 사이에 ''가 붙지 않음)
* `direction` : 슬라이드가 넘어가는 방향 horizontal(수평방향-기본값) / vertical(수직방향)
* `effect` : fade, cube(큐브모양으로 슬라이드가 넘어감), flip(카드가 뒤집어지는 것처럼 슬라이드가 넘어감) 보통 많이 사용하는 옵션:값은 `direction:'horizontal'`, `effect:'fade'`
-> 제자리 나타나기/사라지기를 사용할때는 direction은 적용해제(direction과 effect를 동시에 사용하지 않음)
* `mousewheel` : 마우스휠 가능 옵션 -> 값은 true, false
* `autoplay` : 자동재생
    * `delay` : 1000초 == 1초
    * `pauseOnMouseEnter` : 마우스가 올라오면 일시정지
    * `disableOnInteraction` : 마우스 상호작용 후에 멈출건지(true), 움직일건지(false) 옵션
    * `autoplay:{옵션:값, 옵션:값, 옵션:값,},` 으로 표기
## Swiper 선택요소(페이지번호, 이전다음버튼, 스크롤바) 주의사항
* 기본 작성 위치는 `swiper-wrapper`의 다음 형제 위치
    * `swiper`의 첫번째 자식(swiper-wrapper) 두번째자식(선택요소들)
    * **절대 `swiper-slide`와 형제,자식,자손위치에 배치하지 않기**
* 기본 순서 : `html -> js swiper options세팅 -> (선택)css
* **아래 선택요소들 태그는 자식, 자손으로 다른 태크 삽입 금지**
    * `div.swiper-pagination`
    * `div.swiper-button-prev`
    * `div.swiper-button-next`
    * `div.swiper-scrollbar`
    * `<div class="swiper-pagination">내용금지</div>`
## Swiper 선택요소(pagination, prev, next, scrollbar) 디자인 규칙&주의사항
### 기존 Swiper-slide 겹치는 디자인을 하고 싶을 때
* 태그 위치 `div.swiper` 두번째 자식 위치로 생성
### 기존 Swiper-slide 외부 바깥쪽으로 안겹치는 디자인을 하고 싶을 때
* 태그 위치 `div.swiper` 다음 형제 위치로 생성
* `div.swiper`와 생성된 선택태그를 묶어주는 추가 태그 생성(디자인에 따라 다름)
### 교차 여부에 따라 위치를 다르게 해야하는 이유
* `div.swiper`에 기본CSS로 `overflow:hidden` 있으므로 그 값을 `visible`로 바꾸면 선택요소 뿐 아닌 `swiper-slide`들도 모두 보이기 때문에 원하는 레이아웃을 만들 수 없음.
## Swiper 안에 추가 Swiper 생성 시 안쪽 Swiper 마우스드래그안될때 해결방법
* 안쪽 Swiper js 옵션:값으로 아래와 같이 작성
    * `nested:true,`
    * 부모 swiper와 겹쳐있을 때 드래그 충돌방지 옵션:값