// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI
const thick = 1;



function Drop() {
    this.x = random(-width/2*3, width/2);
    this.y = random(-500, -50);
    this.z = random(0, 10);
    this.len = map(this.z, 0, 10, 10, 20);
    this.yspeed = map(this.z, 0, 10, 1, 10);

    // let contentLeft = document.querySelector('.info-block').getBoundingClientRect().left;
    // let contentTop = document.querySelector('.info-block').getBoundingClientRect().top;
    // let contentRight = document.querySelector('.info-block').getBoundingClientRect().right;
    // let contentBottom = document.querySelector('.info-block').getBoundingClientRect().bottom;
    // console.log(document.querySelector('.info-block').getBoundingClientRect());
  
    this.fall = function() {
        this.y = this.y + this.yspeed;
        this.x = this.x + this.yspeed;
        let grav = map(this.z, 0, 10, 0, 0.2);
        this.yspeed = this.yspeed + grav;

        if (this.y > height || this.x > width) {
            // this.y = random(-200, -100);
            this.x = random(-width/2*3, width/2);
            this.y = random(-500, -50);
            this.yspeed = map(this.z, 0, 10, 4, 7);
        }
    };
  
    this.show = function() {
    //   let thick = map(this.z, 0, 20, 1, 2);
        
        
        newX = this.x + this.len;
        newY = this.y + this.len;
        // if (! (newY >= contentTop && newY <= contentBottom && 
        // newX >= contentLeft && newX <= contentRight)) {
            strokeWeight(thick);
            stroke(82,204,0);
            line(this.x, this.y, newX, newY);
        // }
    };
  }