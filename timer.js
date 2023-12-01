let futureDate = new Date(2622902938507);
let futereDateStr = futureDate.toISOString();

let tempDate;
let specificDate;

//console.log(futereDateStr);
//console.log(dateStr);

function endDate(tempDate) {
  //раскладка миллисекунд в нормальную дату
  let years = Math.floor(tempDate / 31536000000);
  //console.log(years);
  let months = Math.floor(tempDate / 2548800000);
  //console.log(months);
  let days = Math.floor(tempDate / 86400000);
  //console.log(days);
  let hours = Math.floor((tempDate / 3600000) % 24);
  //console.log(hours);
  let minutes = Math.floor(tempDate / 60000) % 60;
  //console.log(minutes);
  let seconds = Math.floor(tempDate / 1000) % 60;
  //console.log(seconds);

  specificDate = {
    Years: years,
    Months: months,
    Days: days,
    Hours: hours,
    Minutes: minutes,
    Seconds: seconds,
  };
}
function dateCycle() {
  for (let i = 0; i < 15; i++) {
    let date = new Date();
    let dateStr = date.toISOString();
    date = Date.parse(dateStr);

    console.log(date);

    futereDateStr = Date.parse(futereDateStr);
    console.log(futereDateStr);

    tempDate = futereDateStr - date;
    console.log(tempDate); //разница между датами в миллисекундах

    setTimeout(endDate(tempDate - i), 1000);
    console.log(specificDate);
  }
}

dateCycle();
