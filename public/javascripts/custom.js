var elInner, duration;
var t0 = document.getElementsByClassName('top-container');
var f1 = document.getElementsByClassName('FjordTop');
var f2 = document.getElementsByClassName('FjordCase01');
var f3 = document.getElementsByClassName('FjordCase02');
var f4 = document.getElementsByClassName('FjordMember');
var i1 = document.getElementsByClassName('IMJTop');
var i2 = document.getElementsByClassName('IMJCase01');
var i3 = document.getElementsByClassName('IMJCase02');
var i4 = document.getElementsByClassName('IMJMember');
var g1 = document.getElementsByClassName('GBDTop');
var g2 = document.getElementsByClassName('GBDCase01');
var g3 = document.getElementsByClassName('GBDCase02');
var g4 = document.getElementsByClassName('GBDMember');
var d1 = document.getElementsByClassName('D5Top');
var d2 = document.getElementsByClassName('D5Case01');
var d3 = document.getElementsByClassName('D5Member01');
var d4 = document.getElementsByClassName('D5Member02');
var m1 = document.getElementsByClassName('MVTop');
var m2 = document.getElementsByClassName('MVCase01');
var m3 = document.getElementsByClassName('MVCase02');
var m4 = document.getElementsByClassName('MVMember');
var l1 = document.getElementsByClassName('Library01');
var l2 = document.getElementsByClassName('Library02');
var l3 = document.getElementsByClassName('Library03');
var sduration = 30;
var IntroDuration = 20;
var F_Case1_Duration = 45;
var F_Case2_Duration = 28;
var I_Case1_Duration = 104;
var I_Case2_Duration = 109;
var G_Case1_Duration = 111;
var G_Case2_Duration = 67;
var D_Case1_Duration = 120;
var M_Case1_Duration = 26;
var M_Case2_Duration = 53;
var MemberDuration = 30;
var LibraryDuration = 60;
var counter = 0;
var orgs = ['fjord','IMJ','GBD','D5','MV'];
// var pastOrgs = [];

function arrRemove(arr,value){
  return arr.filter(function(ele){
    return ele != value;
  });
}

function shuffleContent(container) {
    var content = container.find("> *");
    var total = content.length;
    content.each(function() {
      content.eq(Math.floor(Math.random() * total)).prependTo(container);
    });
  }
  $(function() {
    shuffleContent($(".top-container"));
  });
    
    
document.addEventListener('keydown',e =>{
  console.log(e);
  if(e.code === 'ArrowDown'){
    window.location.href = '/Library_1';
    // var url = location.href
    // var head_url = location.href.substring(22,url.length -2);
    // var num_url = url.slice(-1);
    // var num_int = parseInt(num_url);
    // if(num_int < 4){
    //   var next_page = num_int += 1;
    //   console.log(next_page); 
    //   window.location.href = head_url+'_'+next_page.toString();
    // }else if(num_int == 4){
    //   var next_page = 1;
    //   var cloneOrgs = arrRemove(orgs,head_url);
    //   var org = cloneOrgs[Math.floor(Math.random()*cloneOrgs.length)];
    //   window.location.href = org+'_'+next_page.toString();
    // }
  }
  if(e.code === 'ArrowUp'){
    var next_page = 2;
    var org = orgs[Math.floor(Math.random()*orgs.length)];
    window.location.href = org+'_'+next_page.toString();
    // window.location.href = '/fjord_2';
  }
  if(e.code === 'ArrowRight'){
    window.location.href = '/test';
  }
  if(e.code === 'ArrowLeft'){
    var next_page = 2;
    var org = orgs[Math.floor(Math.random()*orgs.length)];
    window.location.href = org+'_'+next_page.toString();
  }
});


if(t0.length) {
  setTimeout(function () {
      // window.location.href = '/fjord_1';
      window.location.href = '/fjord_2';
  }, IntroDuration*1000)
};

if(f1.length) {
    setTimeout(function () {
        console.log('boo1')
        window.location.href = '/fjord_2';
    }, IntroDuration*1000)
};

if(f2.length) {
    setTimeout(function () {
        console.log('boo2')
        window.location.href = '/fjord_3';
    }, F_Case1_Duration*1000)
};

if(f3.length) {
    setTimeout(function () {
        // window.location.href = '/fjord_4';
        window.location.href = '/IMJ_2';
    }, F_Case2_Duration*1000)
};

if(f4.length) {
    setTimeout(function () {
        window.location.href = '/IMJ_1';
    }, IntroDuration*1000)
};

if(i1.length) {
  setTimeout(function () {
      window.location.href = '/IMJ_2';
  }, IntroDuration*1000)
};

if(i2.length) {
  setTimeout(function () {
      window.location.href = '/IMJ_3';
  }, I_Case2_Duration*1000)
};

if(i3.length) {
  setTimeout(function () {
      // window.location.href = '/IMJ_4';
      window.location.href = '/GBD_2';
  }, I_Case2_Duration*1000)
};

if(i4.length) {
  setTimeout(function () {
      window.location.href = '/GBD_1';
  }, IntroDuration*1000)
};

if(g1.length) {
  setTimeout(function () {
      window.location.href = '/GBD_2';
  }, IntroDuration*1000)
};

if(g2.length) {
  setTimeout(function () {
      window.location.href = '/GBD_3';
  }, G_Case1_Duration*1000)
};

if(g3.length) {
  setTimeout(function () {
      // window.location.href = '/GBD_4';
      window.location.href = '/D5_2';
  }, G_Case2_Duration*1000)
};

if(g4.length) {
  setTimeout(function () {
      window.location.href = '/D5_1';
  }, IntroDuration*1000)
};

if(d1.length) {
  setTimeout(function () {
      window.location.href = '/D5_2';
  }, IntroDuration*1000)
};

if(d2.length) {
  setTimeout(function () {
      // window.location.href = '/D5_3';
      window.location.href = '/MV_2';
  }, D_Case1_Duration*1000)
};

if(d3.length) {
  setTimeout(function () {
      window.location.href = '/D5_4';
  }, IntroDuration*1000)
};

if(d4.length) {
  setTimeout(function () {
      window.location.href = '/MV_1';
  }, IntroDuration*1000)
};

if(m1.length) {
  setTimeout(function () {
      window.location.href = '/MV_2';
  }, IntroDuration*1000)
};

if(m2.length) {
  setTimeout(function () {
      window.location.href = '/MV_3';
  }, M_Case1_Duration*1000)
};

if(m3.length) {
  setTimeout(function () {
      // window.location.href = '/MV_4';
      // window.location.href = '/fjord_2';
      window.location.href = '/Library_1';
  }, M_Case2_Duration*1000)
};

if(m4.length) {
  setTimeout(function () {
      window.location.href = '/';
  }, IntroDuration*1000)
};

if(l1.length) {
  setTimeout(function () {
      window.location.href = '/Library_2';
  }, LibraryDuration*1000)
};
if(l2.length) {
  setTimeout(function () {
      window.location.href = '/Library_3';
  }, LibraryDuration*1000)
};
if(l3.length) {
  setTimeout(function () {
      window.location.href = '/fjord_2';
  }, LibraryDuration*1000)
};



// define canvas element 
var canvas = document.getElementById('draw-area');

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();


// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);


// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  // ctx.beginPath();
  // ctx.fillStyle = "#101810";
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = "#101810";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// //clear canvas
// function clear(){
//   ctx.clearRect(0,0,canvas.width, canvas.height);
// }
// const clearButton = document.getElementById('clear-button');
// clearButton.addEventListener('click',clear);

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#b7b5b5';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

