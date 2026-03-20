// swiper-1.js
const wrap = document.querySelector('#wrap');
const web = document.querySelector('.web');
const graphic = document.querySelector('.graphic');
const wrapSwiper = new Swiper(wrap,{
    //옵션:값, 옵션:{옵션:값,},
    mousewheel:true,
    speed:1000,
    direction:'horizontal',
});
const webSwiper = new Swiper(web,{
    effect:'fade',
    loof:true,
    autoplay:{
        delay:2000,
        pauseOnMouseEnter:true,
        nested:true,
    },
    pagination:{
        /* 페이지대상HTML연결, 모양, 동적옵션 */
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구문해주기
        type:'fraction', //bullets:점모양(기본값), fraction:현재번호/총번호
        // dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});
const graphicSwiper = new Swiper(graphic,{
    effect:'fade',
    loof:true,
    autoplay:{delay:2000,},
    pagination:{
        el:'.project2 .group .page',
        nested:true,
        dynamicBullets:true,
    },
});
console.log(wrap, web, graphic);