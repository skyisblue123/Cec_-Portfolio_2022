//點擊選單滑到指定區域
// 透過offset取得.about這個區塊距離頂部的值，假設把animate()拿掉，會直接跳到.about這個區塊，而不是用滑動的方式，後面800是滑動速度。
$(document).ready(function(){
   $('.about-btn').click(function(){
        $('html,body').animate({scrollTop:$('.about').offset().top},800);
    });
   $('.skill-btn').click(function(){
        $('html,body').animate({scrollTop:$('.skill').offset().top},800);
    });
 $('.works-btn').click(function(){
        $('html,body').animate({scrollTop:$('.works').offset().top},800);
    });
 $('.contact-btn').click(function(){
        $('html,body').animate({scrollTop:$('.contact').offset().top},800);
    });
});

//回到頂部
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});