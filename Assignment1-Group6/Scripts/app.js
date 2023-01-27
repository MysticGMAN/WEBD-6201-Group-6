/*
Name: Conner Tamane (100754614) & Grayson Closs (100597686)
Date Completed: January 27, 2023,
Course: WEBD6201
Description: This is the app.js file for our Web Development Work. It Includes links to all of our pages, including
and about us page, a services page, and a Contact
*/
"use strict";


//IIFE - Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("App Started")
    }
    window.addEventListener("load", Start);
    if (document.title === "Home") {IndexPage();}
    // window.addEventListener("load", IndexPage);
    window.addEventListener("load", SiteWide);
    if (document.title === "Home") { DisplayPage(); }
})();

//Function that listens for the click of the About Us button on the index.html page
function DisplayPage(){

    let ContactUsBtn = document.getElementById("ContactUsBtn");
    let ServicesBtn = document.getElementById("ServicesBtn");
    let ProductsBtn = document.getElementById("ProductsBtn");
    let AboutUsButton = document.getElementById("AboutUsBtn");
    document.getElementById("AboutUsBtn").addEventListener("click", function(){
        location.href = "about.html";
    });
    ProductsBtn.addEventListener("click", function(){
        location.href = "projects.html";
    });
    ServicesBtn.addEventListener("click", function(){
        location.href = "services.html";
    });
    ContactUsBtn.addEventListener("click", function(){
        location.href = "contact.html";
    });

}
// Function that display contents of index page
function IndexPage (){
    let mainContent = document.getElementsByTagName("main")[0];
    let indexWelcomeMsg = document.createElement("h1");
    let indexWelcomeText = "Welcome to Assignment 1 - Group 6!";
    indexWelcomeMsg.textContent = indexWelcomeText;
    mainContent.prepend(indexWelcomeMsg);

    let bodyText = "This is the home page for Grayson & Conner Inc. Here you can navigate to our Projects, Services, " +
        "About Us, and Contact Us pages. More work coming soon...";
    document.getElementById("bodyTxt").innerText = bodyText;
}

function ProjectPage(){

}

function SiteWide (){
    console.log("i am here in sitewide");
    let background = document.getElementsByTagName("body")[0];
    background.setAttribute("id", "body");
    background.setAttribute("class", "background");


    let ulHeader = document.getElementsByTagName("ul")[0];
    let hrTag = document.createElement("li");
    hrTag.setAttribute("id", "humanResources");
    hrTag.setAttribute("class", "nav-item");
    ulHeader.getElementsByTagName("li")[3].insertAdjacentElement("afterend", hrTag);

    let hrGuts = "<a class=\"nav-link\" href=\"hr.html\"><i class=\"fa-solid fa-people-group\"></i> Human Resources</a>";
    hrTag.innerHTML = hrGuts;

    let footer = document.getElementsByTagName("main")[0];
    let footerGuts = "<footer class=\"footer mt-auto bg-dark fixed-bottom\">\n" +
        "  <div class=\"container justify-content-end\">\n" +
        "    <span id=\"footer\" class=\"text-muted\">© 2023 CG, Inc. All rights reserved.</span>\n" +
        "  </div>\n" +
        "</footer>";
    footer.insertAdjacentHTML("afterend", footerGuts);
    let currentDate = new Date().toLocaleDateString();
    document.getElementById("footer")[0].innerText(currentDate);
}