var SpriteAnimation = function (spritesheet, frames) {
    this.spritesheet = spritesheet;
    this.width = this.spritesheet.width / frames;
    this.height = this.spritesheet.height;
    this.frames = frames;
    this.frameCount = 0;
    this.playing = false;
}



SpriteAnimation.prototype.play = function (x, y, loop, framerate, w, h) {
    // plays the animation. It can either loop or stop on the last frame
    // if it is not set to loop, it returns true when the last frame has been played
    // the speed of the animation is divided by framerate
    if (framerate == null) {
        framerate = 1;
    }
    if (h == null) {
        if (w == null) {
            w = this.width;
            h = this.height;
        } else {
            h = w * this.height;
            w = w * this.width;
        }
    }

    if (this.playing === false) {
        // reset the frame counter if it's the first frame
        this.frameCount = 0;
        this.playing = true;
    }

    image(this.spritesheet, x, y, w, h, this.width * (Math.floor(this.frameCount / framerate) % this.frames), 0, this.width, this.height);

    if (loop || this.frameCount < this.frames - 1) {
        this.frameCount++;
    } else {
        // if the function is not set to loop and has reached the last frame, return true
        return true;
    }
}



SpriteAnimation.prototype.drawFrame = function (x, y, frame, w, h) {
    // draws a specific frame of the animation
    if (h == null) {
        if (w == null) {
            w = this.width;
            h = this.height;
        } else {
            h = w * this.height;
            w = w * this.width;
        }
    }

    image(this.spritesheet, x, y, w, h, this.width * frame, 0, this.width, this.height);
}



