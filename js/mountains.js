//object array to define the ten tallest mountains in the United States
const mountains = [
    {rank:1, name:'Denali', Range:'Alaska Range', Elevation:'20,310 ft.', photo:'images/painted-bill.jpg'},
    {rank:2, name:'Mount Saint Elias', Range:'Saint Elias Mountains', Elevation:'18,009 ft.', photo:'images/painted-bill.jpg'},
    {rank:3, name:'Mount Foraker', Range:'Alaska Range', Elevation:'17,400 ft.', photo:'images/painted-bill.jpg'},
    {rank:4, name:'Mount Bona', Range:'Saint Elias Mountains', Elevation:'16,500 ft.', photo:'images/painted-bill.jpg'},
    {rank:5, name:'Mount Blackburn', Range:'Wrangell Mountains', Elevation:'16,390 ft', photo:'images/painted-bill.jpg'},
    {rank:6, name:'Mount Sanford', Range:'Wrangell Mountains', Elevation:'16,237 ft.', photo:'images/painted-bill.jpg'},
    {rank:7, name:'Mount Fairweather', Range:'Saint Elias Mountains', Elevation:'15,325 ft.', photo:'images/painted-bill.jpg'},
    {rank:8, name:'Mount Hubbard', Range:'Saint Elias Mountains', Elevation:'14,951 ft.', photo:'images/painted-bill.jpg'},
    {rank:9, name:'Mount Bear', Range:'Saint Elias Mountains', Elevation:'14,831', photo:'images/painted-bill.jpg'},
    {rank:10, name:'Mount Hunter', Range:'Alaska Range', Elevation:'14,573 ft.', photo:'images/painted-bill.jpg'}
]








function validateEmail(inputText) {
    const mailformat = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if(inputText.value.match(mailformat)) {
        alert('your email is valid!');
        return true;
    } else {
        alert('You have entered an invalid email!');
        return false;
    }
}
