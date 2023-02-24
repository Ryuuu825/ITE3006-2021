/**
* Author: Ken, Ben
 * Group: 01
 * Assignment: EA2
 * Module: ITE3006
 * Course: IT114105
 * 
 * File: profile.js
 * Description: The script file of the profile.html
 * Create Date: 04-MAR-2022
 */


// Ask the user before leaving the page
function askForward(id)
{
    var tag = document.getElementsByClassName("askable")[id];
    return confirm(`Are you sure go to ${tag.href}?`);
}

// Calcualate the price of watame member
function calculatePrice()
{
    var price;
    // to jpy
    var region = document.getElementById("input").value;
    switch (region)
    {
        case "Hong Kong":
            price = 28;
            break;
        case "Taiwan":
            price = 92.74;
            break;
        case "Japan":
            price = 400;
            break;
        default:
            price = "";
            break;
    }

    var output = document.getElementById("output");
    output.innerText = price;
}