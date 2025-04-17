let bears = [];
let welcomeImage;

function preload() {
  // 載入圖片
  welcomeImage = loadImage('images/welcome.png'); // 確保圖片放在 images 資料夾中，並替換為實際檔名
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f4d58d'); // 設定背景顏色為 #f4d58d

  // 生成 40 隻熊，隨機位置、大小、顏色和旋轉角度
  for (let i = 0; i < 40; i++) {
    bears.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255), 50), // 設定透明度為 50
      shape: int(random(3)), // 隨機選擇形狀類型（0: 圓形, 1: 矩形, 2: 三角形）
      angle: random(TWO_PI), // 隨機旋轉角度
    });
  }

  // 顯示歡迎圖片和文字
  imageMode(CENTER);
  image(welcomeImage, width / 2, height / 4, 150, 150); // 調整圖片大小和位置
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text('歡迎光臨其中作業！', width / 2, height / 4 + 100); // 調整文字位置
}

function draw() {
  background('#f4d58d'); // 每次重繪時重設背景顏色

  // 繪製每隻熊
  for (let bear of bears) {
    fill(bear.color);
    noStroke();
    let size = bear.size + map(mouseX, 0, width, 20, 100); // 根據滑鼠位置調整大小

    // 使用 push 和 pop 保存和恢復繪圖狀態
    push();
    translate(bear.x, bear.y); // 將原點移動到形狀的位置
    rotate(bear.angle); // 旋轉形狀

    // 根據 shape 屬性繪製不同的形狀
    if (bear.shape === 0) {
      ellipse(0, 0, size); // 圓形
    } else if (bear.shape === 1) {
      rect(-size / 2, -size / 2, size, size); // 矩形
    } else if (bear.shape === 2) {
      triangle(
        0, -size / 2,
        -size / 2, size / 2,
        size / 2, size / 2
      ); // 三角形
    }

    pop(); // 恢復繪圖狀態
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}
