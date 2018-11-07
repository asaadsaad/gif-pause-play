const gifFrames = require('gif-frames');
const fs = require('fs');

gifFrames({ url: 'loop.gif', frames: 0, outputType: 'jpg', quality: 100 }).then(function (frameData) {
    frameData[0].getImage().pipe(fs.createWriteStream('firstframe.jpg'));
});