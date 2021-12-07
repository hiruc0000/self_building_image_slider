//画像の枚数
const imageQuantity = 4;
const mainImageElement = document.querySelector('#hero-image');
const imageListElement = document.querySelector('.image-list');

//最初の画像ナンバー
let currentNumber = 1;

//heroイメージのソース場所を設定と初期表示画像
mainImageElement.setAttribute('src', `./image/hero${currentNumber}.jpg`);


//5秒おきに画像を切り替える処理
setInterval(imageSlide, 5000);

function imageSlide() {
    if (currentNumber >= imageQuantity) {
        currentNumber = 1;
        mainImageElement.setAttribute('src', `./image/hero${currentNumber}.jpg`);
    } else {
        currentNumber++;
        mainImageElement.setAttribute('src', `./image/hero${currentNumber}.jpg`);
    }
}


//サムネイル生成・及びサムネイルクリックの挙動
//画像の数だけサムネイルを作る
for (let i = 1; i <= imageQuantity; i++) {
    const liElement = document.createElement('li');
    liElement.style.backgroundImage = `url(./image/hero${i}.jpg)`;

    //クリックしたら画像を切り替える処理
    liElement.addEventListener('click', () => {
        currentNumber = i;
        mainImageElement.setAttribute('src', `./image/hero${i}.jpg`);
    });

    imageListElement.appendChild(liElement);
}