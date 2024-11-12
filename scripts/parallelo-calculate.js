

function parallelocalculate(){
    const base = getInputValuebyID('paralleloInputb')

    const height = getInputValuebyID('paralleloInputh')

    const area = base * height;

    console.log(area)

    const seen = setInnerTextById(area)
}

function getInputValuebyID(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value 
    const inputValue = parseFloat(inputValueText)

    return inputValue;

}

function setInnerTextById(elementId){
    const areafocus = document.getElementById('paralleloarea')
    areafocus.innerText = elementId;
}