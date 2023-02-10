//HTML elements
let dayOfTheWeek = document.getElementById('dayOfTheWeek')
let longDate = document.getElementById('month')
let dayNumber = document.getElementById('dayNumber')
let button = document.getElementById('giveMeMyQuote')
let quote = document.getElementById('randomQuote')

//arrays
let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let quotes = [
    "I guess the nicest thing about being, I won't say famous but being popular is a more proper word for me to use would be that if you've got a recognizable name, a lot of times you can get people to do things for you ordinarily that you wouldn't get done.", 

    "The greatest difficulties lie where we are not looking for them.",

    "How long was I in the army? Five foot eleven.",

    "Sex IS power. Identity is power. In western culture, there are no nonexploitative relationships. Everyone has killed in order to live",

    "The perfection of our union, especially our commitment to equality of opportunity, has been a story of constant striving to live up to our Founding principles. This is what Abraham Lincoln meant when he said, 'In giving freedom to the slave, we assure freedom to the free - honorable alike in what we give, and what we preserve.'",

    "I have a problem with too much money. I can't reinvest it fast enough, and because I reinvest it, more money comes in. Yes, the rich do get richer.",

    "The increased global linkages promote economic growth in the world through two key mechanisms: the division of labor and the international spillovers of knowledge."
]

//finding the day of the week and assinging it to HTML element
let d = new Date()
let day = d.getDay()
dayOfTheWeek.innerHTML = daysOfTheWeek[day]

//finding the month and assinging it to HTML element
let month = d.getMonth()
longDate.innerHTML = months[month]

//finding the dayNumber and assingig it to HTML element
let dateNumber = d.getDate()
dayNumber.innerHTML = dateNumber



//something happens when the button gets clicked
button.addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * 7 + 2)
    quote.innerHTML = quotes[randomNum - 2]
})

