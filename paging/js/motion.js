let btns;
let contentWrap;
let imgArr;
let title;
let pageNum = 0;
let totalNum = 0;

window.onload = function () {
  contentWrap = document.querySelectorAll('.contentWrap');
  totalNum = contentWrap.length; //전체 페이지 갯수

  buttons = Array.from(document.querySelectorAll('button'));

  imgArr = document.querySelectorAll('img');
  title = document.querySelectorAll('h1');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // button.innerText === 'PREV' ? prevFunc() : nextFunc();
      switch (button.innerText) {
        case 'PREV':
          prevFunc();
        case 'NEXT':
          nextFunc();
      }
    });
  });

  pageSetFunc();
};

function prevFunc() {
  if (pageNum > 0) {
    pageNum--;
  } else {
    pageNum = totalNum - 1;
  }
  pageSetFunc();
}

function nextFunc() {
  if (pageNum < totalNum - 1) {
    //pageNum 이 컨텐츠랩 갯수보다 작다면 계속 더해줘~!
    //pageNum 이 0부터 시작하니까 0 ~ 2 만 나와야해서 totalNum - 1을 해준겁니다.
    pageNum++;
  } else {
    pageNum = 0;
  }
  pageSetFunc();
}

function pageSetFunc() {
  // HTMLcollection은 Array가 아니므로 Arry.from으로 배열화
  const imgs = Array.from(contentWrap[pageNum].getElementsByTagName('img'));
  console.debug(pageNum);

  // 전체 리셋
  contentWrap.forEach(el => {
    el.classList.remove('active');
  });

  // 이미지 일단 전부 리셋
  imgArr.forEach(el => {
    el.classList.remove('active');
  });

  //선택된 컨텐츠랩 활성
  contentWrap[pageNum].classList.add('active');
  imgs.forEach(el => {
    el.classList.add('active');
  });

  //페이지 넘버 교체
  title[0].innerHTML = `PAGE : ${pageNum + 1}`;
}
