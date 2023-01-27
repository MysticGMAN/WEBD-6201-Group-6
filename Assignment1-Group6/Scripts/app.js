"use strict";


//IIFE - Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("App Started")
    }
    window.addEventListener("load", Start)
    if (document.title === "Home") { DisplayPage(); }
})();

//Function that listens for the click of the About Us button on the index.html page
function DisplayPage(){

    let MainContent = document.getElementsByTagName("main")[0];
    let MainParagraph = document.createElement("p");
    let FirstString = "This is";
    let SecondString = `${FirstString} the first javascript variable`;
    MainParagraph.setAttribute("id", "MainParagraph");
    MainParagraph.setAttribute("class", "mt-3");
    MainParagraph.textContent = SecondString;
    MainContent.appendChild(MainParagraph);


    //let Article = document.createElement("article");
    //let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
    //Article.setAttribute("class", "container");
    //Article.innerHTML = ArticleParagraph;
    //document.body.appendChild(Article);

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
<<<<<<< Updated upstream
=======
}

function IndexPage (){
    let mainContent = document.getElementsByTagName("main")[0];
    let indexWelcomeMsg = document.createElement("h1");
    let indexWelcomeText = "Welcome to Assignment 1 - Group 6!";
    indexWelcomeMsg.textContent = indexWelcomeText;
    mainContent.prepend(indexWelcomeMsg);

    let bodyText = "This is the home page for Grayson & Conner Inc. Here you can navigate to our Projects, Services, " +
        "About Us, and Contact Us pages. More work coming soon...";
    document.getElementById("bodyTxt").innerText = bodyText;



>>>>>>> Stashed changes
}