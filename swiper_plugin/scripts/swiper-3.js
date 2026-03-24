// swiper-3.js
const ssf = document.querySelector('.ssf_hero');
const nike = document.querySelector('.brand_slide');
console.log(ssf, nike);

const ssfSwiper = new Swiper(ssf,{
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    spaceBetween:0, //슬라이드 사이 여백
    loop:true,
    autoplay:{delay:2000,},
    // pagination:{el:'',},
    navigation:{
        prevEl:'.ssf_hero .prev',
        nextEl:'.ssf_hero .next',
    },
})

const brandSwiper = new Swiper(nike,{
    slidesPerView:3,
    spaceBetween:10,
    loop:true,
    navigation:{
        prevEl:'.brand_slide ~ .prev', // ~ 그 주변에 있다
        nextEl:'.brand_slide ~ .next',
    },
})