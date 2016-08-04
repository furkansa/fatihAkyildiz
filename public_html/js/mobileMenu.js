/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('body').on("click touchend", function (e) {
        if ($(window).width() < 960) {
            if ($('#mobileNav').is(':visible')) {
                if (e.target.nodeName === "DIV") {
                    mobileNavButton();
                }
            }
        }
    });
});

$(window).resize(function () {
    if ($(window).width() < 960 && $("#mobileNav").is(":visible") === true) {
        $("#mobileNav").hide();
        $("#mobileNavButtonI").removeClass("fa-close");
        $("#mobileNavButtonI").addClass("fa-bars");
    }
});

function mobileNavButton() {
    $("#mobileNav").slideToggle(function () {
        if ($("#mobileNav").is(":visible") == true) {
            $("#mobileNavButtonI").removeClass("fa-bars");
            $("#mobileNavButtonI").addClass("fa-close");
        } else {
            $("#mobileNavButtonI").addClass("fa-bars");
            $("#mobileNavButtonI").removeClass("fa-close");
        }

    });
}



