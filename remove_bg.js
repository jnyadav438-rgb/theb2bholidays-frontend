const Jimp = require('jimp');
Jimp.read('d:/theb2bHolidaysProject/b2bFrontend/public/logo.png').then(img => {
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    var red = this.bitmap.data[idx + 0];
    var green = this.bitmap.data[idx + 1];
    var blue = this.bitmap.data[idx + 2];
    if (red > 240 && green > 240 && blue > 240) {
      this.bitmap.data[idx + 3] = 0;
    }
  });
  img.write('d:/theb2bHolidaysProject/b2bFrontend/public/logo.png');
  console.log('Done');
});
