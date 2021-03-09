var context = wx.createCanvasContext("canvas")
var app=getApp()
Page({
  data:{
    score:0,
  },
  onReady: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2,
      r: 150,
      a:230,
      b:230,
      c:285,
    }
     //this.drawBall()
    this.interval = setInterval(this.drawBall, 100)
  },
  rightjump: function () {
    if(this.position.r<235){
      this.position.r = this.position.r +85
      this.drawBall()
    }
  },
  leftjump: function () {
    if(this.position.r>65){
      this.position.r = this.position.r - 85
      this.drawBall()
    }
  },
  drawBall: function () {
    var p = this.position
    p.x += p.vx
    p.y += p.vy
    p.a += p.vx
    p.b += p.vy;
    this.setData({score:this.data.score+1})
    app.globaldata.score=this.data.score+1
    if(this.data.score>100&&this.data.score<200){
      p.vx=3
      p.vy=3
    }
    if (this.data.score >=200&&this.data.score<=300) {
      p.vx=4
      p.vy=4
    }
    if (this.data.score > 300) {
      p.vx=5
      p.vy=5
    }
    if (p.x >= 300) {
      p.x=150;
    }
    if (p.y >= 300) {
      p.y=150
    }
    if (p.a >=300) {
      p.a = 150;
    }
    if (p.b >=300) {
      p.b = 150
    }
    function ball(x, y) {
      context.arc(x, y, 0, 0, Math.PI * 2)
      context.setFillStyle('#1aad19')
      context.stroke()
    }
    //1号三角形
     context.moveTo(p.x + 20,150)
     ball(p.x + 20,150)
     ball(p.x+20, p.y+20)
     ball(170, p.y+20)
     context.lineTo(p.x + 20, 150)
     //2号三角形
     context.moveTo(280-p.a,150)
     ball(280-p.a,150)
     ball(280-p.a,p.b+20)
     ball(130,p.b+20)
     context.lineTo(280-p.a , 150)
     //背景方框
    function rect(x,y,a,b){
      context.rect(x,y,a,b)
       context.setFillStyle('#1aad19')
      context.stroke()
    }
    rect(130,130,40,40)
     context.lineTo(0,0)
     context.moveTo(130,170)
     context.lineTo(0,300)
     context.moveTo(130,170)
     context.lineTo(50,520)
     context.moveTo(170,170)
     context.lineTo(320,320)
    context.moveTo(170, 170)
    context.lineTo(250,520)
    context.moveTo(170,130)
    context.lineTo(300,0)
  //外层方框
    context.moveTo(124,124)
    rect(124,124,52,52)
    context.moveTo(112,112)
    rect(112,112,76,76)
    context.moveTo(90,90)
    rect(90,90,120,120)
    context.moveTo(50,50)
    rect(50,50,200,200)
    //可操作小圆
       context.moveTo(p.r,285)
       context.setLineWidth(2)
       context.arc(p.r, p.c, 30, 0, 2 * Math.PI,true)
       context.stroke()
    //碰撞
    this.crash()
    //画图
      context.draw()
  },
  crash(){
    let myleft=this.position.r-30;
    let myright=this.position.r+30;
    let mytop=this.position.c-30;
    let mybottom=this.position.c+30;
    if(this.position.y>mytop&&this.position.y<mybottom)
    {
      if (myright < 170)
      {
        // console.log('ok');
      }
      else
      {
        clearInterval(this.interval);
        // console.log('no');
        wx.redirectTo({
          url: "../end/end"
        })
      }
    }
    if (this.position.b > mytop && this.position.b < mybottom) {
      if (myleft>130) {
        // console.log('ok');
      }
      else {
        clearInterval(this.interval);
        // console.log('no');
        wx.redirectTo({
          url: "../end/end"
        })
      }
    }
  }
})
