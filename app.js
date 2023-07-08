var form = document.querySelector("form")
var userInput = document.querySelector(".userInput")
var btnSubmit = document.querySelector(".btn-submit")
var resultYear = document.querySelector(".result-year")
var resultMonth = document.querySelector(".result-month")
var resultDay = document.querySelector(".result-day")

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

btnSubmit.addEventListener('click', ()=>{
    var dob = new Date(userInput.value)

    if(userInput.value==null || userInput.value==""){
        confirm("Please Enter a valid Date!!!")
        (confirm) ? reload() : reload();
    }else{
        var dobYear = dob.getFullYear()
        var dobMonth = dob.getMonth()
        var dobDay = dob.getDay()
    }
    
    var now = new Date()
    
    var currentYear = now.getFullYear()
    var currentMonth = now.getMonth()
    var currentDay = now.getDay()
    
    yearAge = currentYear - dobYear
    
    if(currentMonth>=dobMonth){
        var monthAge = currentMonth - dobMonth
    }else{
        yearAge--
        var monthAge = 12 + currentMonth - dobMonth
    }
    
    if(currentDay>=dobDay){
        var dateAge = currentDay - dobDay
    }else{
        monthAge--
        var dateAge = 31 + currentDay - dobDay
    }
    
    if(monthAge<0){
        monthAge = 11
        yearAge--
    }

    (yearAge<10) ? resultYear.innerText = `0${yearAge}` : resultYear.innerText = `${yearAge}`;
    if(yearAge<0){resultYear.innerText = yearAge}

    (monthAge<10) ? resultMonth.innerText = `0${monthAge}` : resultMonth.innerText = `${monthAge}`;
    if(monthAge<0){resultMonth.innerText = monthAge}

    (dateAge<10) ? resultDay.innerText = `0${dateAge}` : resultDay.innerText = `${dateAge}`;
    if(dateAge<0){resultDay.innerText = dateAge}
})