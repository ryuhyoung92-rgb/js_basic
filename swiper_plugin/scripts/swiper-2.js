// swiper-2.js
const heroBnr = document.querySelector('.hero_bnr');
const barBg = document.querySelector('.bar_bg');
const bestItem = document.querySelector('.best_swiper');
const newItem = document.querySelector('.new_swiper')
console.log(heroBnr, barBg, bestItem, newItem);

const newSwiper = new Swiper(newItem, {

})
const bestSwiper = new Swiper(bestItem, {
    // 한 화면 기준 보이는 슬라이드 개수(총 슬라이드 개수보단 적어야 함)
    slidesPerView:3.5,
    // 슬라이드 사이 여백(px 기준)
    spaceBetween:20,
    // 슬라이드 한 번에 전환되는 개수(기본 1개)
    slidesPerGroup:2,
    loop:true,
    speed:2000,
    autoplay:{delay:2000,},
    centeredSlides:true, //양 끝이 반씩 보일때 센터를 옮기는 옵션. 만약 적용이 안된다면 슬라이드 갯수를 추가하여 적용하기
})

const heroSwiper = new Swiper(heroBnr,{
    autoplay:{delay:3000,},
    loop:true,
    //슬라이드 변경 실행 함수
    on:{
        //처음 시작할때 실행 함수
        init:function(){
            //부모요소에 active클래스 적용하는 법
            barBg.classList.add('active');
        },
        slideChangeTransitionStart:function(){ //슬라이드전환시 시작함수
            barBg.classList.remove('active');
        },
        slideChangeTransitionEnd:function(){ //슬라이드전환종료후 시작함수
            barBg.classList.add('active');
        },
    },
    //페이지번호 사용자 함수
    pagination:{
        el:'.hero_bnr .pg',
        type:'fraction',
        // swiper-pagination-current
        // swiper-pagination-total
        // 위 고유 클래스명 활용 custom javascript - renderFraction
        // swiper고유옵션:function(매개변수){return}
        renderFraction:function(current, total){
            console.log(current, total)
            let customPg = `<span class=${current}></span>`; //${} 템플릿
            // customPg += `<span>💕</span>`;
            customPg += `<span class=${total}></span>`;
            return customPg;
        }
    },
});