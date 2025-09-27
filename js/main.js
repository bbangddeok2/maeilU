$(document).ready(function () {
  $(".family_btn").click(function () {
    $(this).siblings(".family_menu").slideToggle(200);
    $(this).find(".arrow i").toggleClass("rotated");
  });
});
