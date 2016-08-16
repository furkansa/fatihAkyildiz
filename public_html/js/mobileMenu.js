/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//close NavMenu if clicked out of menu or button
$(document).on("click touchend", function (e) {
    if (e.target.nodeName === "DIV" || e.target.nodeName === "P" || e.target.nodeName === "H2" || e.target.nodeName === "FOOTER" || e.target.nodeName === "H1" || e.target.nodeName === "HTML") {
        if ($(window).width() < 960 && $('#mobileNav').is(':visible') === true) {
            closeMobileNav();
        }
    }

});


//Close NavMenu if resize
$(window).resize(function () {
    if ($(window).width() < 960 && $("#mobileNav").is(":visible") === true) {
        closeMobileNav();
    }
});


//Toggle NavMenu
function mobileNavButton() {
    if ($("#mobileNav").is(":visible") === true) {
        closeMobileNav();
    } else {
        openMobileNav();
    }
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

function closeAllSubMenus() {
    $("#womenSubMenu").hide();
    $("#menSubMenu").hide();
    $("#childSubMenu").hide();
}


function closeMobileNav() {
    $('#mobileNav').slideUp();
    closeAllSubMenus();
    $("#mobileNavButtonI").removeClass("fa-close");
    $("#mobileNavButtonI").addClass("fa-bars");
}

function openMobileNav() {
    $('#mobileNav').slideDown();
    $("#mobileNavButtonI").removeClass("fa-bars");
    $("#mobileNavButtonI").addClass("fa-close");
}


