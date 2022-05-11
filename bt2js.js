$(document).ready(function () {
  var mt1=0,mt2=0,mt3=0,mt4=0;
  lightning_1()
  lightning_2()
  lightning_3()
  $("head").click(function () {
    if (mt1<9){
      $("head").animate({left:"-=367px"},500);
      mt1+=1
    }
    else{
      $("head").animate({left:"0px"},500);
      mt1=0
    }
  });
  $("#eyes").click(function () {
    if(mt2<9){
      $("eyes").animate({left:"-=367px"},500);
      mt2+=1

    }
    else{
      $("eyes").animate({left:"0px"},500);
      mt2=0
    }
  })

  $("nose").click(function () {
    if(mt3<9){
      $("nose").animate({left:"-=367"},500);
      mt3+=1
    }
    else{
      $("nose").animate({left:"0px"},500)
      mt3=0
    }
  })

  $("mouth").click(function () {
    if(mt4<9){
      $("mouth").animate({left:"-=367px"},500)
      mt4+=1
    }
    else{
      $("mouth").animate({left:"0px"},500);
      mt4=0
    }

  })



})








function lightning_1() {
  $("#container #lightning1").fadeIn(250).fadeOut(250);
  setTimeout("lightning_1()", 4000);
}

function lightning_2() {
  $("#container #lightning2").fadeIn("fast").fadeOut("fast");
  setTimeout("lightning_2()", 5000);
}

function lightning_3() {
  $("#container #lightning3").fadeIn("fast").fadeOut("fast");
  setTimeout("lightning_3()", 7000);
}
