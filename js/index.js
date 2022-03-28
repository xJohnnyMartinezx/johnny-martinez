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
        const sweetSpot = 500        // console.log(scrolled);

        if (Math.ceil(scrolled) >= sweetSpot) {
            var photo = document.getElementById("profile-photo-nav")
            photo.classList.remove("reveal")
        } else {
            var photo = document.getElementById("profile-photo-nav")
            photo.classList.add("reveal")
            photo.classList.add("revealAni")
        }
    })

    $(document).on("scroll", function () {

        const scrolled = window.scrollY;
        const sweetSpot = 500
        // console.log(scrolled);

        if (Math.ceil(scrolled) >= sweetSpot) {
            var name = document.getElementById("navbar-name")
            name.classList.remove("navbar-brand");

        } else {
            var name = document.getElementById("navbar-name")
            name.classList.add("navbar-brand")
        }

    })


})