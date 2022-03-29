"use strict";


$(document).ready(function () {
// alert("test")

    // window.addEventListener("scroll", () => {
    //
    //     console.log("user scrolled")
    //     const scrolled = window.scrollY;
    //     const docHeight = document.documentElement.scrollHeight;
    //     const winHeight = window.innerHeight;
    //     const sweetSpot = 265
    //     console.log(scrolled);
    //
    //     if (Math.ceil(scrolled) >= sweetSpot) {
    //         var photo = document.getElementById("profile-photo-nav" )
    //         photo.classList.remove("reveal")
    //     } else {
    //         var photo = document.getElementById("profile-photo-nav")
    //         photo.classList.add("reveal")
    //     }
    // });

    $(document).on("scroll", function () {

        const scrolled = window.scrollY;
        const sweetSpot = 550        // console.log(scrolled);

        if (Math.ceil(scrolled) >= sweetSpot) {
            var photo = document.getElementById("profile-photo-nav")
            var name = document.getElementById("reveal-name")
            photo.classList.remove("reveal")
            name.classList.remove("reveal")
        } else {
            var photo = document.getElementById("profile-photo-nav")
            var name = document.getElementById("reveal-name")
            photo.classList.add("reveal")
            name.classList.add("reveal")
        }
    })

    var toggleBtn = document.getElementById("btn-trigger")
    console.log(toggleBtn);

    toggleBtn.addEventListener("click", function () {

        var name = document.getElementById("image")
            name.classList.toggle("hidden-profile");

        // if (toggleBtn === true) {
        //     var name = document.getElementById("image")
        //     name.classList.add("hidden-profile");
        //
        // } else {
        //     var name = document.getElementById("image")
        //     name.classList.remove("hidden-profile")
        // }

    })


})