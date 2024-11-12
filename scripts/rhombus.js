

function rhombuscalculate(){
    const d1 = getInputValueByID('rhombusInputd1')

    const d2 = getInputValuebyID('rhombusInputd2')

    const area = 0.5 * d1 *d2
    console.log(area)

    const areashow = showv(area)
    
}

function getInputValueByID(inputValueId){
    const inputValue = document.getElementById(inputValueId)

    const invalue = inputValue.value 
    const value = parseFloat(invalue)

    return value
}

function showv(showvalue){
    const v = document.getElementById('rhombusarea')
    v.innerText = showvalue
}