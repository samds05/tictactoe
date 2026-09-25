eruda.init();
function show() {
$(document).ready(function () {
$("#menu1,.mg").css({"display":"block"});
$("#mmmm").attr({"alt":"Manu","src":"img/close.png","onclick":"hide()"});
});};

function hide() {
$(document).ready(function () {
$("#menu1,.mg").css({"display":"none"});
$("#mmmm").attr({"src":"img/menu.png","onclick":"show()"});
});};

$(document).ready(function() {
$("#user").click(function() {
$.get("/etc/cookie.php","",function(data) {
var json=JSON.parse(data);
if (json.result=="True") {
$.post("/etc/account.php","",function(data){
$("#account").html(data);
});

} else if (json.result!="True") {
$("#account").html(json.html);


};
});
});
});

setInterval(function() {
$(document).ready(function() {
//$.get("/etc/name.php","",function(data) {
//$("#datea").html(data);
//});
let d = new Date();
let date=d.getDate();
let month=d.getMonth()+1;
let year=d.getFullYear();
let fd = date+"/"+month+'/'+year;
//+date.getMonth+1+"/"+date.getFullYear();
let time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
$("#datea").html("<br />"+fd+" "+time+"<br />");
});
},1000);




function logout() {
$(document).ready(function () {
$.get("/etc/logout.php",function(data) {
 });
location.reload();


});
};

function hello() {
    alert("Hello");
};


function error(m,e) {
console.log(e);
$(document).ready(function() {
if (e.type=="e") {
$("#error").text(m);
$("#al, #ml, #zl").fadeOut(300,function() {
$("#al, #ml, #zl").css({"display":"none"});
$("#error").css({"display":"block"});
$("#error").fadeIn(50);
});
setTimeout (function() {
$("#error").fadeOut(300,function() {
$("#error").css({"display":"none"});
$("#al, #ml, #zl").css({"display":"inline"});
$("#al, #ml, #zl").fadeIn(50);
});
},1000);






} else if (e.type=="w") {
console.log("consition applied")
console.log(e.p);
$("#mdiv").removeClass("bgimg1").addClass("bgimg2");
$("#mmmm").animate({"opacity":"0"},100,function() {

if (e.p==0) {
$("#mmmm").attr({"src":$("#as img").attr("src"),"height":"35px","width":"35px"}).animate({"opacity":"1"},100);
setTimeout(function() {
$("#mmmm").animate({"opacity":"0"},100,function() {
$(this).attr({"src":"img/menu.png","width":"35px","height":"25px"});
$(this).animate({"opacity":"1"},100);
});
},1500);

} else if (e.p==1) {
$("#mmmm").attr({"src":$("#sd img").attr("src"),"height":"35px","width":"35px"}).animate({"opacity":"1"},100);
setTimeout(function() {
$("#mmmm").animate({"opacity":"0"},100,function() {
$(this).attr({"src":"img/menu.png","width":"35px","height":"25px"});
$(this).animate({"opacity":"1"},100);
});
},1500);


}

});
$("#user").animate({"opacity":"0"},100, function() {
setTimeout(function () {
$("#user").animate({"opacity":"1"},100);
},1650);
});



$("#al a").animate({'opacity':"0"},100, function() {
$(this).text(e.n).animate({"opacity":"1"},100, function() {


//$("#mdiv").addClass("bgimg2");
setTimeout(function() {
$("#al a").animate({"opacity":"0"},100, function() {
$(this).text("Tic-Tac-Toe");
$("#mdiv").removeClass("bgimg2").addClass("bgimg1");
}).animate({"opacity":"1"},100)
},1450);

});

})




}
});
};

function mess(m,t,c,src) {
$(document).ready(function() {
$("#abaa , #abaaa").css("display","block");
if (c==0 || c==1) {
$("#abaaa").html('<img height="60" width="60" src="'+src+'" />'+'<h3 style="margin-top: -10px;" id="helal"> <h2>'+m+'</h2><h3 style="margin-top: -20px;">WON</h3></h3><img src="img/trophy.gif" width="94" height="100" style="display:block;margin: 0 auto;" />');
} else {
$("#abaaa").html('<img height="60" width="60" src="'+src+'" />'+'<h3 style="margin-top: -10px;" id="helal"> <h2>'+m+'</h2><h3 style="margin-top: -20px;"></h3></h3><img src="'+src+'" width="94" height="100" style="display:block;margin: 0 auto;" />');
}
if (c==1) {
setTimeout(function() {
$("#abaaa").animate({"opacity":"0"},200,
function() {

$("#abaaa , #abaa").css({"display":"none","opacity":"1"});
blinkc("as","sd","blue",false);
//blinkc("sd","as","red",false);







});
},t);
} else if (c==0) {
setTimeout(function() {
$("#abaaa").animate({"opacity":"0"},200,
function() {



$("#abaaa , #abaa").css({"display":"none","opacity":"1"});

//'blinkc("as","sd","blue",false);
blinkc("sd","as","red",false);

});
},t);
} else {
setTimeout(function() {
$("#abaa , #abaaa").css("display","none");
},t);}








});
}



/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  } else {
  	error("Fullscreen Not Supported!",{"type":"e"});
  	}
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}



$(document).ready(function() {
$("#scrs").click(function() {
var a = $("#stoggg").attr("status");
if (a=="n") {
openFullscreen();
$("#stoggg").attr("status","f");
$("#scrs").attr("src","img/minis.png");
} else if (a=="f") {
closeFullscreen()
$("#stoggg").attr("status","n");
$("#scrs").attr("src","img/fulls.png");
}
});
});




