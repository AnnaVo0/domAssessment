// Main reference
let main = document.querySelector("main");

// Jokes
let joke1 = "Guess what? Chicken butt.";
let joke2 = "What do you call a fish with no eyes? A fsh.";
let joke3 = "What kind of shoes does a lazy person wear? Loafers."; 

// Template literal
let template = `
    <h1>My Jokes</h1>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;

// Sets inner HTML of main tag
main.innerHTML = template;

// Paragraph element
let p = document.createElement("p");
p.textContent = "That's all folks!";
document.body.appendChild(p);