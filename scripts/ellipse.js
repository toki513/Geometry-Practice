
function ellipsecalculate(){

    const a = getEleById('ellipseInputa')
    const b = getEleById('ellipseInputb')

    const area = 3.1416 * a * b

    console.log(area)

     sarea(area)
}

function getEleById(inputValue){
    const v1 = document.getElementById(inputValue)
    const v2 = v1.value 

    const v3 = parseFloat(v2)
    return v3
}

function sarea(showarea){
    const Area = document.getElementById('ellipsearea')

    Area.innerText = showarea
}