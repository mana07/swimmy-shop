window.onload=function(){
  const spinner=document.getElementById('loader');
  spinner.classList.add('loaded');
}

//星

// window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars");

  // 星を生成する関数
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; // 星の最小サイズを指定
    const maxSize = 3; // 星の最大サイズを指定
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  // for文で星を生成する関数を指定した回数呼び出す
  for (let i = 0; i <= 150; i++) {
    createStar();
  }
// });

//タイトルの動き(一文字ずつ跳ねるように表示される)

// ①テキストを1文字ずつspanで囲む
const texts = document.querySelectorAll('.text');


texts.forEach((text) => {
  let html = '';
  const strs = text.textContent.split('');
  
  strs.forEach((str) => {
    const replacedStr = str.replace(/\s|&nbsp;/g, '&nbsp;');
    html += `<span>${replacedStr}</span>`;
  });
  text.innerHTML = html;
});


const setObserver = () => {
  // スクロールで実行する関数
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      };
    });
  };
  // 関数を実行する位置の設定
  const options = {
    rootMargin: '0% 0% -25% 0%'
  };
  // 監視対象の要素
  const targets = document.querySelectorAll('.js-observerTarget');
  // IntersectionObserverのインスタンスを作成
  const observer = new IntersectionObserver(callback, options);
  
  targets.forEach((target) => {
    observer.observe(target);
  });
};


setObserver();

// スクロールのドラッグ有効化
jQuery.prototype.mousedragscrollable = function () {
  let target;
  $(this).each(function (i, e) {
    $(e).mousedown(function (event) {
      event.preventDefault();
      target = $(e);
      $(e).data({
        down: true,
        move: false,
        x: event.clientX,
        y: event.clientY,
        scrollleft: $(e).scrollLeft(),
        scrolltop: $(e).scrollTop(),
      });
      return false;
    });
    $(e).click(function (event) {
      if ($(e).data("move")) {
        return false;
      }
    });
  });
  $(document)
    .mousemove(function (event) {
      if ($(target).data("down")) {
        event.preventDefault();
        let move_x = $(target).data("x") - event.clientX;
        let move_y = $(target).data("y") - event.clientY;
        if (move_x !== 0 || move_y !== 0) {
          $(target).data("move", true);
        } else {
          return;
        }
        $(target).scrollLeft($(target).data("scrollleft") + move_x);
        $(target).scrollTop($(target).data("scrolltop") + move_y);
        return false;
      }
    })
    .mouseup(function (event) {
      $(target).data("down", false);
      return false;
    });
};
$(".scroll").mousedragscrollable();

$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 50;
    var speed = 1200;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// $(function(){
//   $('a[href^="#"]').click(function(){
//     var adjust = 100;
//     var speed = 1200;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top + adjust;
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });
// });

$(window).scroll(function(){
  var scrollAnimationElm=document.querySelectorAll('.scroll-up,.scroll-left,.scroll-right,.zoomIn,.whiteline-box,.whiteline-box2');
  var scrollanimationFunc=function(){
    for(var i=0;i<scrollAnimationElm.length;i++){
      var triggermargin=100;
      if(window.innerHeight>scrollAnimationElm[i].getBoundingClientRect().top+triggermargin){
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load',scrollanimationFunc);
  window.addEventListener('scroll',scrollanimationFunc);
});

$(".openbtn").click(function () {
  $(this).toggleClass('active');
});

const backBtn2=document.getElementById('back-btn');

window.addEventListener('scroll',function(){
  const scrollValue=this.document.scrollingElement.scrollTop;

  if(scrollValue >=100){
    backBtn2.style.display='inline';
  }

  else{
    $('#back-btn').fadeOut();
  }
});


$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
        $(".start").css("display","none")
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(function() {
        setTimeout(function(){
          $('#opening').fadeIn(1600);
        },500); //0.5秒後にロゴをフェードイン!
        setTimeout(function(){
          $('.start').fadeOut(500);
        },3500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
      });
    }
  }
  webStorage();
});