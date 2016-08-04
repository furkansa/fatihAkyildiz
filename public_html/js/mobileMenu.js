/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Close NavMenu if click out of menu
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


//Close NavMenu if resize
$(window).resize(function () {
    if ($(window).width() < 960 && $("#mobileNav").is(":visible") === true) {
        $("#mobileNav").hide();
        $("#mobileNavButtonI").removeClass("fa-close");
        $("#mobileNavButtonI").addClass("fa-bars");
    }
});


//Toggle NavMenu
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


//MobileNav Sub Buttons
function openMobileNavSideBar(val) {
    switch (val) {
        case 'Women':
            $("#menSubMenu").slideUp();
            $("#childSubMenu").slideUp();
            if ($("#womenSubMenu").is(":visible") === false) {
                $("#womenSubMenu").slideDown();
            } else {
                $("#womenSubMenu").slideUp();
            }
            break;
        case 'Men':
            $("#womenSubMenu").slideUp();
            $("#childSubMenu").slideUp();
            if ($("#menSubMenu").is(":visible") === false) {
                $("#menSubMenu").slideDown();
            } else {
                $("#menSubMenu").slideUp();
            }
            break;
        case 'Child':
            $("#womenSubMenu").slideUp();
            $("#menSubMenu").slideUp();
            if ($("#childSubMenu").is(":visible") === false) {
                $("#childSubMenu").slideDown();
            } else {
                $("#childSubMenu").slideUp();
            }
            break;
    }
}



