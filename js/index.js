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
    //************************************************
    // $(document).on("scroll", function () {
    //
    //     const scrolled = window.scrollY;
    //     const sweetSpot = 550        // console.log(scrolled);
    //
    //     if (Math.ceil(scrolled) >= sweetSpot) {
    //         var photo = document.getElementById("profile-photo-nav")
    //         var name = document.getElementById("reveal-name")
    //         photo.classList.remove("reveal")
    //         name.classList.remove("reveal")
    //     } else {
    //         var photo = document.getElementById("profile-photo-nav")
    //         var name = document.getElementById("reveal-name")
    //         photo.classList.add("reveal")
    //         name.classList.add("reveal")
    //     }
    // })
    //*******************************************
    //*************************************************
    // var toggleBtn = document.getElementById("btn-trigger")
    // console.log(toggleBtn);
    //
    // toggleBtn.addEventListener("click", function () {
    //
    //     var name = document.getElementById("image")
    //         name.classList.toggle("hidden-profile");
    //
    //     // if (toggleBtn === true) {
    //     //     var name = document.getElementById("image")
    //     //     name.classList.add("hidden-profile");
    //     //
    //     // } else {
    //     //     var name = document.getElementById("image")
    //     //     name.classList.remove("hidden-profile")
    //     // }
    //
    // })
    //****************************************************
    // const smallProfileImg = document.querySelectorAll(".reveal")
    //
    // const smallProfileIgmOptions = {
    //     root: null
    // };
    //
    // const smallProfileImgObserver = new IntersectionObserver(entries => {
    //     // const smallProfileImg = entries[0]
    //     entries.forEach(entry => {
    //         entry.target.classList.toggle("reveal", entry.isIntersecting)
    //     })
    // }, smallProfileIgmOptions);
    //
    // smallProfileImgObserver.observe(smallProfileImg[0]);


    //*****************************************************

    const largeProfileImg = document.querySelectorAll(".intro-line")

    const largeProfileImgObserver = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if (!entry.isIntersecting){
                return;
            }
            entry.target.classList.toggle("large-photo", entry.isIntersecting)
        })
        console.log(entries)
    }, {
        root: null,
        threshold: .50
        // rootMargin: "350px"

    } );
    largeProfileImgObserver.observe(largeProfileImg[0])

    //-----------------------ONSCROLL LINE ANIMATIONS TOGGLE----------------------
    const aniLines = document.querySelectorAll(".divider")

    const lineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            entry.target.classList.toggle("divider", entry.isIntersecting)
        })
        // console.log(entries)
    }, {
        threshold: 1,
    } )
    lineObserver.observe(aniLines[0])



    const aniLines2 = document.querySelectorAll(".divider-2")

    const lineObserver2 = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            entry.target.classList.toggle("divider-2", entry.isIntersecting)
        })
        // console.log(entries)
    }, {
        threshold: 1,
    } )
    lineObserver2.observe(aniLines2[0])


})