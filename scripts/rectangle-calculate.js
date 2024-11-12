function rectangleCalculate(){

    const rectangleInputw = document.getElementById('rectangleInputWidth')

    const rectangleInputValuew = rectangleInputw.value 
    const width =parseFloat(rectangleInputValuew)

   

    const rectangleInputL = document.getElementById('rectangleInputLength')

    const rectangleInputValuel = rectangleInputL.value

    const length = parseFloat(rectangleInputValuel)

    const area = width * length;
    console.log(area)

    const recarea = document.getElementById('rectangleArea')
    recarea.innerText = area
}