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
    if (document.title === "Projects") {ProjectsPage();}
    if (document.title === "Services") {ServicesPage();}
    if (document.title === "About") {AboutPage();}
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

function ProjectsPage(){
    let welcomeH3 = document.getElementById("projectsH3");
    let projectWelMsg = "Welcome to Projects";
    welcomeH3.innerText = projectWelMsg;
    let projBody = document.getElementById("projMainPara");
    let projMsg = "Here you can see some of the projects we're most proud of!";
    projBody.innerText = projMsg;
    let connerCol = document.getElementById("connerCol");
    let graysonCol = document.getElementById("graysonCol");

    let cMsg = "The first picture on the left is my Java assignment for WEBD Enterprise. The one below is my WEB Development Site using PHP. And finally, the third is my Net Development" +
        "application using C#.";
    let gMsg = "the first picture on your right is my cobol very cool. The next is my comrade calc, to calculate our comrades pay. And lastly is the first java program i wrote, but just one file.";

    connerCol.innerText = cMsg;
    graysonCol.innerText = gMsg;
}

function ServicesPage(){
    let welServices = document.getElementById("welServices");
    let paraServices = document.getElementById("servicesPara");

    let welMsg = "Welcome to services!";
    welServices.innerText = welMsg;

    let servicesMsg = "We offer many services such as Web and Mobile Development as well as Custom Programming. We also provide " +
        "full stack development. Please send us a message using our <a href=\"contact.html\">'Contact Us'</a> page to see if we can be of service.";
    paraServices.innerHTML = servicesMsg;
}

function AboutPage(){
    let welAbout = document.getElementById("welAbout");
    let gAboot = document.getElementById("graysonColAbout");
    let cAboot = document.getElementById("connerColAbout");



    let aboutWelMsg = "Aboot Us!";
    welAbout.innerText = aboutWelMsg;

    let aboutMsgC = "Hi, I'm Conner. Currently a Computer Programming Student at Durham College. I've always been fascinated by programming and how it's used in so many of our everyday items. " +
    "It's one of the things I've never lost passion for since I was a kid and growing up only piqued my interest more. " +
    "I'm always interested in solving problems in a strategic way and am always keeping track of time to maintain progress and productivity. " +
        "I enjoy working with teams and meeting new people but am also great at working individually.";
    cAboot.innerText = aboutMsgC;


    let aboutMsgG = "Hi, I'm Grayson. Ever since I was 14, I've been doing mechanic work and general labour. " +
        "It was hard work, but it taught me the important value of hard work, and how I do not want to do this for the rest of my life. " +
        "So, I took my hobby and love for all things tech and started making it into my future career. " +
        "I started my journey into programming at Durham college and hope to finish my 2-year programming course soon. I may even do the 3-year analyst program.";
    gAboot.innerText = aboutMsgG;
}

function SiteWide (){

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

