//array to define the ten tallest mountains in the United States
const mountains = [
    {rank:1, name:'Denali', Range:'Alaska Range', Elevation:'20,310 ft.', photo:'images/Denali.jpg'},
    {rank:2, name:'Mount Saint Elias', Range:'Saint Elias Mountains', Elevation:'18,009 ft.', photo:'images/Mount-Saint-Elias.jpg'},
    {rank:3, name:'Mount Foraker', Range:'Alaska Range', Elevation:'17,400 ft.', photo:'images/Mount-Foraker.jpg'},
    {rank:4, name:'Mount Bona', Range:'Saint Elias Mountains', Elevation:'16,500 ft.', photo:'images/Mount-Bona.jpg'},
    {rank:5, name:'Mount Blackburn', Range:'Wrangell Mountains', Elevation:'16,390 ft', photo:'images/Mount-Blackburn.jpg'},
    {rank:6, name:'Mount Sanford', Range:'Wrangell Mountains', Elevation:'16,237 ft.', photo:'images/Mount-Sanford.jpg'},
    {rank:7, name:'Mount Fairweather', Range:'Saint Elias Mountains', Elevation:'15,325 ft.', photo:'images/Fairweather.jpg'},
    {rank:8, name:'Mount Hubbard', Range:'Saint Elias Mountains', Elevation:'14,951 ft.', photo:'images/Mount-Hubbard.jpg'},
    {rank:9, name:'Mount Bear', Range:'Saint Elias Mountains', Elevation:'14,831', photo:'images/Mount-Bear.jpg'},
    {rank:10, name:'Mount Hunter', Range:'Alaska Range', Elevation:'14,573 ft.', photo:'images/Mount-Hunter.jpg'}
]


//for loop to display the mountains array
let html = ' ';

for ( let i = 0; i < mountains.length; i++ ) {
    let mount = mountains[i];
    html += `
    <div>
    <h2>${mount.rank}. ${mount.name}</h2>
    <h3>Mountain Range: ${mount.Range}</h3>
    <h3>Elevation: ${mount.Elevation}</h3>
    <img src="${mount.photo}">
    </div>
    `;
}

document.querySelector('article').insertAdjacentHTML('beforeend', html);


//function to validate email address
//mailFormat variable defines regular expression that assesses email address validity
//if-else statement executes different outcomes based on valid or invalid email submission
//valid email submission will activate the document.querySelector method displaying a "thank you" message which replaces the form element
//invalid email submission will activate the document.write method used to display invalid email message and a link to the home page
function validateEmail(inputText) {
    const mailFormat = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if(inputText.value.match(mailFormat)) {
        let message =`<h2>Thank you for subscribing!</h2>`;
        document.querySelector('form').innerHTML = message;
        } else {
        document.write(`<h2>That is not a valid email address</h2>`);
        document.write(`<a href="index.html">back to home</a>`);
        return false;
    }
}












