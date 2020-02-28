$(window).scroll(function (evt) {
  if ($(window).scrollTop() > 0) {
    $(".navbar").removeClass("navbar-top");
    $(".navbar").addClass("navbar-dark ");
  } else {
    $(".navbar").addClass("navbar-top");
    $(".navbar").removeClass("navbar-dark ");
  }
});

var s = skrollr.init();

var vm = new Vue({
  el: "#web-area",
  data: {
    works: [{
      img: "./img/sea-pic.jpg",
      link: "https://kou120418.github.io/demo-sea/dist/index",
      title: "Bootstrap應用：餘光，啟航",
      info: "使用 Bootstrap 進行切版，製作主題頁面",
      tools: "html, css, Bootstrap"
    }, {
      img: "./img/printing-pic.jpg",
      link: "https://kou120418.github.io/demo-printing/dist/index",
      title: "捲動式網頁製作：印刷術的故事",
      info: "使用 Bootstrap 製作 navbar，並結合 Scrollr 製作網頁互動效果",
      tools: "html, css, javascript, Bootstrap",
    }, {
      img: "./img/momo-pic.jpg",
      link: "https://kou120418.github.io/demo-momo/dist/index",
      title: "電商一頁式網站仿製：momo購物網",
      info: "將 momo 購物網的現有素材，結合 RWD 響應式設計、活動幻燈片、側邊導覽列……等功能進行練習實作",
      tools: "html, css, javascript"
    }]
  }
});

const webpics = document.querySelectorAll('.web-pics');
const weblink = document.querySelectorAll('.link')

function showLink() {
  this.classList.add('dark-blur');
  weblink.classList.remove('opacity-none');
};

function dontShowLink() {
  this.classList.remove('dark-blur');
  weblink.classList.add('opacity-none');
};

webpics.forEach(function (webpic) {
  return webpic.addEventListener('mouseenter', showLink);
});
webpics.forEach(function (webpic) {
  return webpic.addEventListener('mouseleave', dontShowLink);
});