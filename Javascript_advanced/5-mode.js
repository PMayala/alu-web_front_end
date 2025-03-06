function changeMode(size, weight, transform, background, color) {

    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Create new paragraph element
    let para = document.createElement('p');

    // Set the text of the paragraph
    para.textContent = 'Welcome Holberton!';

    // Append the paragraph to the body of the page
    document.body.appendChild(para);

    // Spooky Button
    let spookyButton = document.createElement('button');
    // Set the text of the button
    spookyButton.textContent = 'Spooky';
    // create click event for button
    spookyButton.onclick = spooky;
    // Append the button to the body of the page
    document.body.appendChild(spookyButton);

    // Dark Mode Button
    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark Mode';
    darkModeButton.onclick = darkMode;
    document.body.appendChild(darkModeButton);

    // Scream Mode Button
    let screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream Mode';
    screamModeButton.onclick = screamMode;
    document.body.appendChild(screamModeButton);
}

main();
