function pentagoncalculate(){

    const p = getelementbyId('pentagonInputp')

    const b = getelementbyId('pentagonInputb')

    const area = 0.5 * p * b

    console.log(area)

    areacalc(area)

}

function getelementbyId(inputValueID){
    const value1 = document.getElementById(inputValueID)

    const value2 = value1.value
    const value3 = parseFloat(value2)

    return value3
}

function areacalc(showvalue){
    const svalue = document.getElementById('pentagonarea')

    svalue.innerText = showvalue;
}