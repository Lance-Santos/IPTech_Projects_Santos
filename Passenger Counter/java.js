var valueInc = document.getElementById("counter[]");
var saver = document.getElementById('saver');
var count = 0;
function funnyInc() {
    console.log('Pressed');
    count += 1;
    console.log(count);
    valueInc.textContent = count;
}
function save() {
    let countStr = count;
    if(parseInt(saver.textContent.length) > 2){
        saver.textContent = "";
        saver.textContent += countStr;
    }
    else {
        saver.textContent += countStr;
    }
    console.log(saver)
    valueInc.textContent = 0;
    count = 0;
}