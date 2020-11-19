// Keeps the state of the remember me checkbox
var remember_me = false;

// When the remember me checkbox is clicked
$(".login_remember_checkbox").click(function() {
    if (!remember_me) {
        $(".check").css("animation", "dash-check .5s ease-in forwards");
        remember_me = true;
    }
    else {
        $(".check").css("animation", "dash-check-reverse .35s ease-out forwards");
        remember_me = false;
    }
})