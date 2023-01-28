"use strict";

// Function to obtain form data and log it to console
function ContactForm(event){
    event.preventDefault();

    let form = [document.getElementById("fullName"), document.getElementById("contactNumber"),
        document.getElementById("emailAddress"), document.getElementById("message")];
    for(let i = 0; i < form.length; i++) {
        console.log(form[i].value);
    }
    // After submit button is clicked, current page will redirect to home page
    setTimeout(() => { location.href = "index.html"}, 3000);


}

class Contact {



    constructor( fullName = "", contactNumber = "", emailAddress = "") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    //Getters and Setters
    get FullName(){
        return this.FullName;
    }

    get ContactNumber(){
        return this.ContactNumber;
    }

    get EmailAddress(){
        return this.EmailAddress;
    }

    set FullName(fullName){
        this.m_fullName = fullName;
    }

    set ContactNumber(contactNumber){
        this.m_contactNumber = contactNumber;
    }

    set EmailAddress(emailAddress){
        this.m_emailAddress = emailAddress;
    }

    toString(){
        return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n 
        Email Address: ${this.EmailAddress}`;
    }

    serialize(){
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
            return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
        }
        console.error("One or more of the properties of the Contact object are missing or invalid");
        return null;
    }

    deserialize(data){
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

}
