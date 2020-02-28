$(window).scroll(function () {
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

const webContainers = document.querySelectorAll('.web-container');

function showLink(webPic, webLink) {
  webPic.classList.add('dark-blur');
  webLink.classList.remove('opacity-none');
}

function hideLink(webPic, webLink) {
  webPic.classList.remove('dark-blur');
  webLink.classList.add('opacity-none');
}

webContainers.forEach(function (webContainer) {
  const webPic = webContainer.querySelector('.web-pics');
  const linkEl = webContainer.querySelector('.link');

  webContainer.addEventListener('mouseenter', function () {
    showLink(webPic, linkEl);
  });
  webContainer.addEventListener('mouseleave', function () {
    hideLink(webPic, linkEl);
  });
});

function jumpAlert() {
  alert('您好，感謝您的使用，此表單僅為前端展示用途，若需聯繫請透過上方email，造成不便敬請見諒。');
}