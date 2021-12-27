$(document).ready(function () {
  // let h1 = document.querySelector("#myh1");
  // console.log($("h1"))
  // let lis = document.querySelectorAll(".myli li");
  // for (const item of lis) {
  //     item.addEventListener("click",function(){
  //         alert("okay")
  //     })
  // }
  // console.log($(".myli li"));
  //   $(".myli li").click(function () {
  //     // alert("okay");
  //     // $("#myp").show();
  //     // $("#myp").hide();
  //     // $("#myp").toggle();
  //   });
  //   $("#myinput").keyup(function () {
  //     console.log($("#myinput").val());
  //   });
  //   $(document).on("click", ".myli li", function () {
  //     $(this).hide("slow", function () {
  //       $(this).show("slow");
  //     });
  //   });
  //   $("button").click(function () {
  //     let nl = $("<li>new li</li>");
  //     $(".myli").append(nl);
  //   });
  //   $(".myli li").click(function () {
  //     alert("salam");
  // });
  //   $(document).on("dblclick", "#changingBtn", function () {
  //     $("#changingIn").val("dbl click");
  //   });
  //   $(document).on("click", "#changingBtn", function () {
  //     $("#changingIn").val("one click");
  //   });
  //   $(document).on("keyup", "#changingIn", function () {
  //     console.log("keyup oldu");
  //   });
  //   $(document).on("change", "#changingIn", function () {
  //     console.log("change oldu");
  //   });
  //   $(document).on("click", "#changeStyleBtn", function () {
  //     $(".squareDiv").css("background-color", "red");
  //     $(".squareDiv").css("border-radius", "10px");
  //     $(".squareDiv").css({
  //       "background-color": "red",
  //       "border-radius": "10px",
  //       transform: "scale(1.1)",
  //     });
  //   });
  //   $(document).on("click", "#showBtn", function () {
  //     // $(".squareDiv").fadeIn("slow",function () {
  //     //     $(this).css("background-color","blue");
  //     // });
  //     // $(".squareDiv").show(300);
  //     // $(".squareDiv").fadeToggle(300);
  //     // $(".squareDiv").slideDown(1000, function () {
  //     //   $(this).css("border-radius", "100%");
  //     // });
  //     $(".squareDiv").slideToggle(1000);
  //   });
  //   $(document).on("click", "#hideBtn", function () {
  //     // $(".squareDiv").fadeOut("slow");
  //     // $(".squareDiv").hide(300);
  //     // $(".squareDiv").slideUp(300);
  //   });
  //   $(document).on("click", "#stopAnimation", function () {
  //     $(".squareDiv").stop();
  //     // $(".squareDiv").slideToggle(1000);
  //   });
  //   $(document).on("click", "#animateBtn", function () {
  //     $(".squareDiv").animate({
  //         marginTop:"100px",
  //         borderRadius:'50px'
  //     },3000,function () {
  //         alert("Animation Done")
  //     });
  //   });
  // console.log($("#myh1").text("<i>Necesen</i>"));
  // console.log($("#myh1").html("<i>Necesen</i>"));
  // console.log($("#myh1").attr("data-id",10));
  // console.log($("#myh1").data("name"));
  // $("#myh1").attr("test",21);
  // $("#myin").val("test salam");
  // console.log($("#myin").val())
  //   let item = $("<p>New paragraph</p>");
  //   let item2 = $("<p>New paragraph</p>");
  //   $(".myDiv").append(item);
  //   $(".myDiv").prepend(item);
  //   $(".myDiv").before(item);
  //   $(".myDiv").after(item);
  //   $(".myDiv").prepend(item);
  //   $(".myDiv").after(item2);
  //    $(".myDiv").remove();
  // $(".myDiv").empty();
  //   $(".myDiv p").remove();
  //   $(".myDiv").addClass("bg-red");
  //   $(".myDiv").removeClass("bg-red");
  //   $(document).on("click", function () {
  //     $(".myDiv").toggleClass("bg-red");
  //   });
  //   console.log($(".myDiv").width());
  //   console.log($(".myDiv").height());
  // console.log($(".myDiv").width());
  // console.log($(".myDiv").innerWidth());
  // console.log($(".myDiv").outerWidth());
  // console.log($(".myDiv").outerWidth(true));
  //   console.log($("p#myinnerp").parent());
  //   console.log($("p#myinnerp").parents());
  //   console.log($(".myDiv").parents());
  //   console.log($(".myDiv").children());
  //   $(".myDiv")
  //     .children()
  //     .click(function () {
  //       console.log(this);
  //     });
  //   $(".myDiv").click(function () {
  //     alert($(this).find("span").text());
  //   });
  //   console.log($(".myDiv p").siblings());
  //   console.log($(".myDiv p").next());
  //   console.log($(".myDiv p").nextAll());
  //   console.log($(".myDiv p").prev());
  //   console.log($(".myDiv p").prevAll());
  //   $.ajax({
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //     type: "get",
  //     success: function (result) {
  //       console.log(result);
  //     },
  //     error: function () {
  //       alert("problem");
  //     },
  //   });

  $(document).on("click", ".accordion-head", function () {
    $(this).next().slideToggle().removeClass("d-none");
  });
});
