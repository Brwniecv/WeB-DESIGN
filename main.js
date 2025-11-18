$(document).ready(function () {

    // Get everything after the last "#"
    var page_id = window.location.hash.replace("#", "");

    // If there is no hash, stop the script
    if (!page_id) return;

    // Build the selector we want to scroll to
    var target = $("#scroll-" + page_id);

    // Make sure the target exists
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 20
        }, 1000);
    }

});