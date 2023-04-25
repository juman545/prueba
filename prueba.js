let cardio = ["corazón de AMOR", "sistole", "diastole"]
let comer = ["100kg diarios", "50kg diarios", "25kg diarios"]
console.log("CAMBIOS:", cardio +" "+ 2 )
console.log(cardio, comer)

function forEachprueba(value, index) {
    console.log(cardio)
    console.log(comer)
    console.log(cardio + comer)

cardio.forEach(forEachprueba)
}
console.log("cardio")
//get fullyear
const getMethodsDate = new Date()
console.log("año completo:", getMethodsDate.getFullYear())
console.log("mes completo:", getMethodsDate.getMonth())//se empieza desde 0 = enero
console.log("día completo:", getMethodsDate.getDay())
console.log("día exacto del mes:", getMethodsDate.getDate())
console.log("hora exacta:", getMethodsDate.getHours())
console.log("minuto exacta:", getMethodsDate.getMinutes())
console.log("segundo exacto:", getMethodsDate.getSeconds())
//fecha normal
const datetoday = new Date()
console.log("fecha normal:", datetoday)
console.log("Día UTC:", datetoday.getUTCDate())
console.log("Año UTC:", datetoday.getUTCFullYear())
console.log("Mes UTC:", datetoday.getTimezoneOffset())
const datetodayepoch = Date.now()
//console.log("fecha normal:", datetodayepoch.getFullYear())
const currentDate = new Date()
const startdate = new Date(currentDate.getFullYear(), 0, 1)

//día exacto del año
let days = Math.floor((currentDate - startdate)/(86400*1000))
console.log("fecha exacta:", days )

//
let weknumber = Math.ceil(days/7)
console.log("Weeknumber", weknumber)
const months = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "October", "November", "December"]
console.log("Month of:", months[getMethodsDate.getMonth()])
