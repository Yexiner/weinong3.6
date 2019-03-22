$(".lr .lr-0 .lr-2").click(function () {
    $(".lr  .img2").show("slow");
    $(".lr  .img1").hide("slow");
    $(".lr  .img3").hide("slow");
})
$(".lr .lr-0 .lr-1").click(function () {
    $(".lr  .img1").show("slow");
    $(".lr  .img2").hide("slow");
    $(".lr  .img3").hide("slow");
})
$(".lr .lr-0 .lr-3").click(function () {
    $(".lr  .img3").show("slow");
    $(".lr  .img1").hide("slow");
    $(".lr  .img2").hide("slow");
})
$("#nav ul li").click(function(){
    $(this).css({
        backgroundColor:"red"
    })
    $(this).siblings().css({
        backgroundColor:"#FFCC99"
    })
})
$(".left-bank").hover(function(){
    $(".online1").css({
        display:"block"
    })}
)