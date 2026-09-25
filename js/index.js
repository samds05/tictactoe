function value() {
var r = document.getElementById("r");
var s  = document.getElementById("s");
var t = document.getElementById("t");
var u = document.getElementById("u");
var v = document.getElementById("v");
var w = document.getElementById("w");
var x = document.getElementById("x");
var y  = document.getElementById("y");
var z = document.getElementById("z");
var json = {
r : r.getAttribute("title") , 
s : s.getAttribute("title") , 
t : t.getAttribute("title") , 
u : u.getAttribute("title") , 
v : v.getAttribute("title") , 
w : w.getAttribute("title") , 
x : x.getAttribute("title") , 
y : y.getAttribute("title") , 
z : z.getAttribute("title")};
return json;};
var tapt=0;
var mesaag="Touched";
var zxcvbnm="";
var mnbvcxz="";
var turn = "";
var pl1="Player1";
var pl2="Player2";
var num=0;
var clicksta="0";
var bgdiv="black";
//const timg = ["11":{"p":"plus.png","n":"-.png"},"f2":{"p":"q.png","n":"k.png"},"f3":{"p":"q.png","n":"k.png"},"f4":{"p":"q.png","n":"k.png"},"f5":{"p":"q.png","n":"k.png"},"f6":{"p":"q.png","n":"k.png"}]
function result(id) {
$(document).ready(function() {
num = num + 1;
if (num==9) {
reset();
mess("Match Drawn",500,"5","img/t.png");
}
if (turn=="+") {
$("#"+id).attr({"title":"+"})
$("#sd").css("background",'yellow');
blinkc("as","sd","blue",false)
$("#as").css("background",'#F5FF8F');
$("#"+id+" > .p").fadeIn(200);
$("#"+id+" > .p").attr("h","in");
turn = "-";
status("-");
} else if (turn=="-") {
blinkc("sd","as","red",false);
$("#"+id).attr({"title":"-"});
$("#"+id+" > .n").fadeIn(200);
$("#"+id+" > .n").attr("h","in");
$("#as").css("background",'yellow');
$("#sd").css("background",'#F5FF8F');
turn = "+";
status("+")
}
});};


function win(json) {
$(document).ready(function() {
num=0;
document.getElementById("aclii").play();
json = JSON.parse(json);
if (turn=="+") {
$("#"+json.a+" > .p").attr("h","on");
$("#"+json.b+" > .p").attr("h","on");
$("#"+json.c+" > .p").attr("h","on");
$("#"+json.a).attr("title","+")
$("#"+json.a+" , "+"#"+json.b+" , "+"#"+json.c).css("background","yellow");
$("#"+json.a+" > .p").css("display","inline");
$("img[h='in']").css({"display":"none"});
blinkc("a","a","a",true);
$("#scr").text(Number($("#scr").text())+1);
error("",{"type":"w","p":0,"n":pl1});
setTimeout(function() {
reset();mess(pl1,1500,"0",$("#as img").attr("src"));},200);
} else if (turn=="-") {
$("#"+json.a+" , "+"#"+json.b+" , "+"#"+json.c).css("background","yellow");
$("#"+json.a+" > .n").attr("h","on");
$("#"+json.b+" > .n").attr("h","on");
$("#"+json.c+" > .n").attr("h","on");
$("#"+json.a).attr("title","-")
$("#acr").text(Number($("#acr").text())+1);
$("#"+json.a+" > .n").css("display","inline");
blinkc("a","a","a",true);
$("img[h='in']").css("display","none");
error("",{"type":"w","p":1,"n":pl2});
setTimeout(function() {
reset();mess(pl2,1500,"1",$("#sd img").attr("src"));
},200);
};
});
};


function check(id) {
$(document).ready(function() {
var json = value();
var state = turn;
if (id=="r") {
console.log("r");
if (state==json.u && state==json.x) {
win('{"a" : "r" , "b" : "u" , "c" : "x"}');
} else if (state==json.s && state==json.t) {
win('{"a" : "r" , "b" : "s" , "c" : "t"}');
} else if (state==json.v && state==json.z) {
win('{"a" : "r" , "b" : "v" , "c" : "z"}');
} else {
result("r");
 return false;

};
} else if (id=="s") {
console.log("s");
if (state==json.r && state==json.t) {
win('{"a" : "s" , "b" : "r" , "c" : "t"}');
} else if (state==json.v && state==json.y) {
win('{"a" : "s" , "b" : "v" , "c" : "y"}');
} else {
result("s");
 return false;
}
} else if (id=="t") {
console.log("t");
if (state==json.v && state==json.x) {
win('{"a" : "t" , "b" : "v" , "c" : "x"}');
} else if (state==json.w && state==json.z) {
win('{"a" : "t" , "b" : "w" , "c" : "z"}');
} else if (state==json.s && state==json.r) {
win('{"a" : "t" , "b" : "s" , "c" : "r"}');
} else {
result("t");
 return false;
}
} else if (id=="u") {
console.log("u");
if (state==json.r && state==json.x) {
win('{"a" : "u" , "b" : "r" , "c" : "x"}');
} else if (state==json.w && state==json.v) {
win('{"a" : "u" , "b" : "w" , "c" : "v"}');
} else {
result("u");
 return false;
}
} else if (id=="v") {
console.log("v");
if (state==json.y && state==json.s) {
win('{"a" : "v" , "b" : "y" , "c" : "s"}');
} else if (state==json.w && state==json.u) {
win('{"a" : "v" , "b" : "w" , "c" : "u"}');
} else if (state==json.z && state==json.r) {
win('{"a" : "v" , "b" : "z" , "c" : "r"}');
} else if (state==json.t && state==json.x) {
win('{"a" : "v" , "b" : "t" , "c" : "x"}');
} else {
result("v");
 return false;
}
} else if (id=="w") {
console.log("w");
if (state==json.z && state==json.t) {
win('{"a" : "w" , "b" : "z" , "c" : "t"}');
} else if (state==json.v && state==json.u) {
win('{"a" : "w" , "b" : "v" , "c" : "u"}');
} else {
result("w");
 return false;
}
} else if (id=="x") {
console.log("x");
if (state==json.y && state==json.z) {
win('{"a" : "x" , "b" : "y" , "c" : "z"}');
} else if (state==json.v && state==json.t) {
win('{"a" : "x" , "b" : "v" , "c" : "t"}');
} else if (state==json.u && state==json.r) {
win('{"a" : "x" , "b" : "u" , "c" : "r"}');
} else {
result("x");
 return false;
}
} else if (id=="y") {
console.log("y");
if (state==json.v && state==json.s) {
win('{"a" : "y" , "b" : "v" , "c" : "s"}');
} else if (state==json.z && state==json.x) {
win('{"a" : "y" , "b" : "z" , "c" : "x"}');
} else {
result("y");
 return false;
}
} else if (id=="z") {
console.log("z");
if (state==json.y && state==json.x) {
win('{"a" : "z" , "b" : "y" , "c" : "x"}');
} else if (state==json.v && state==json.r) {
win('{"a" : "z" , "b" : "v" , "c" : "r"}');
} else if (state==json.w && state==json.t) {
win('{"a" : "z" , "b" : "w" , "c" : "t"}');
} else {
result("z");
 return false;
}
};});};

function reset() {
$(document).ready(function() {
num=0;
$(".f").css("display","none");
$("div[title='+']").attr({"title":"n","click":"n"});
$("div[title='-']").attr({"title":"n","click":"n"});
$("div > img[h='']").attr("h","");
$(".imblo").css("background",bgdiv);
return false;
});
};
function status(s) {
$(document).ready(function() {
if (s=="+") {
$("#asd , #scr").css({"color":"green","font-weight":"bold"})
$("#asf , #acr").css({"color":"black","font-weight":"none"})
} else if (s=="-") {
$("#asf , #acr").css({"color":"green","font-weight":"bold"})
$("#asd , #scr").css({"color":"black","font-weight":"none"})
};
});
};

function game() {
$(document).ready(function() {
var radio = document.getElementsByName("start");
for (var i = 0; i < radio.length ; i++) {
            if (radio[i].checked) {
            var r = radio[i].value;
}}
if (r==undefined) {
error("Select Start With!",{"type":"e"});
} else if (r!=undefined) {
turn=r;

if ($("#fpl").val().length==0) {
$("#asd").text("Player1");
} else if ($("#fpl").val().length!=0) {
$("#asd").text($("#fpl").val());
};
if ($("#spl").val().length==0) {
$("#asf").text("Player2");
} else if ($("#spl").val().length!=0) {
$("#asf").text($("#spl").val());
};
$("#start").css("display","none");
$("#seca , #secb").css("display","none");
$("#tttt").css("display","block");
document.getElementById("audio").pause();
if (turn=="+") {
blinkc("sd","as","red",false);
status("+");
$("#as").css("background","yellow");
} else if (turn=="-") {
blinkc("as","sd","blue",false);
status("-");
$("#sd").css("background","yellow");
};
$("#r").click(function(event) {
click(event);
});

$("#s").click(function(event) {
click(event);
});

$("#t").click(function(event) {
click(event);
});

$("#u").click(function(event) {
click(event);
});

$("#v").click(function(event) {
click(event);
});

$("#w").click(function(event) {
click(event);
});

$("#x").click(function(event) {
click(event);
});

$("#y").click(function(event) {
click(event);
});

$("#z").click(function(event) {
click(event);
});

};
});
};

function click(event) {
$(document).ready(function() {
st = $(event.target).attr("click");
if (st=="n") {
if (tapt==0) {
document.getElementById("acli").play();
audio=1;
} else {
document.getElementById("acl").play();
audio=0;
};
let id = $(event.target).attr("id");
check(id)
$(event.target).attr("click","y");
return false;
} else if (st=="y") {
return false;
};
});
};



$(document).ready(function() {
$("#stogg").click(function() {
if ($("#stogg").attr("status")=="0") {
$("#stogg").attr("status","1");
$("#stogg span").text("OFF");
document.getElementById("audio").pause();
$("#stogg span").css({"color":"red","":""});
} else if ($("#stogg").attr("status")=="1") {
$("#stogg").attr("status","0");
$("#stogg span").text("ON");
document.getElementById("audio").pause();
$("#stogg span").css({"color":"#AFFF00","":""});
}
});
});


function blinkc(azx,xza,c,a) {
$(document).ready(function() {
if (a) {
clearInterval(zxcvbnm);
clearTimeout(mnbvcxz);
} else {
$("#"+azx).css("border-color","#F5FF8F");
clearInterval(zxcvbnm);
clearTimeout(mnbvcxz);
zxcvbnm = setInterval(function() {
$("#"+xza).css("border-color",c);
setTimeout(function() {
mnbvcxz = $("#"+xza).css("border-color","#F5FF8F");
},200)
},400);
}
});
};

$(document).ready(function() {
$("#zl").hover(function() {
$("#ttt").css("pointer-events","none");
},function() {
setTimeout(function() {
$("#ttt").css("pointer-events","auto");
$("#changetheme").hide();
$("#mainst").show();
$("#tchang").attr("onclic","a");
},600);
});
});

$(document).ready(function() {
$("#tchanga").click(function() {
console.log("First Change Theme clicked");
a=$("#tchang").attr("onclic");
if (a="a") {
$("#mainst").fadeOut(1000,"swing");
$("#changetheme").fadeIn(1000);

$("#tchang").attr("onclic","b");
} else if (a="b") {
$("#changetheme").hide();
$("#mainst").show();
$("#tchang").attr("onclic","a");
}
});
});



$(document).ready(function() {
$(".cdivid").click(function() {
$(".clik").css("background","none").removeClass("clik");
$("#"+$(this).attr("id")+" > img").css({"background":"grey"}).addClass("clik");
$("#tchang").attr({"apth":$(this).attr("id"),"c":"y"});
});
});


$(document).ready(function() {
$(".bdivid").click(function() {
$(".clik").css("background","none").removeClass("clik");
$("#"+$(this).attr("id")+" > img").css("background","grey").addClass("clik");
$("#tchang").attr({"apth":$(this).attr("id"),"c":"y"});
});
});

$(document).ready(function() {
eruda.init();
//mess(pl2,1500000000000,"1",$("#sd img").attr("src"));
$("#tchang").click(function() {
if ($(this).attr("c")=="y") {
//alert("Hello");
var imp = $(this).attr("apth");
console.log(imp)
img1 = "#"+imp+"1";
img2 = "#"+imp+"2";
m1 = $(img1);
m2 = $(img2);

$("#as > img , .pua , #seca > img").attr("src",m1.attr("src"));
$("#sd > img , .nua , #secb > img").attr("src",m2.attr("src"));
console.log(m2.attr("src"));
console.log(m1.attr("src"));



} else {



};




});



});

