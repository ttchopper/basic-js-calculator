let calculator = document.querySelector('.calculator');
let newLine;
// let str = '';
let str = '';
let lastNumber = '';
let currNumber;
let entries = [];
let c;
let ce = 0;
// Using delegation 
calculator.onclick = function() {

    let element = event.target;

    // Find button element
    if (element.className === 'key') {
        console.log(entries);
        let display = this.querySelector('.calculator-display');
        switch(element.value) {
            /*case '0':
                console.log(str[0]);
                if (str[str.length - 1] === '0') {
                    console.log(str);
                    
                } 
                else {
                    if (newLine) {
                        display.innerHTML = '0';
                    } else {
                        display.innerHTML += '0';
                        
                    }
                    str += '0';
                    console.log(str);
                }
                return;*/
            case 'AC':
                display.innerHTML = '0';
                str = '';
                 console.log(str);
                return;
            case 'CE':
                display.innerHTML = '0';
                str += lastNumber;
                // entries.push(lastNumber);
                // str = str.replace(lastNumber, '');
                console.log(str);
                str = str.replace(lastNumber, '');
                console.log(entries);
                console.log(str);
                return;
            case '=':
                // let calculated = +eval(str.replace('÷', '/')).toFixed(10) ? '111' : 'Error';
                str += display.innerHTML;
                // str = str.replace(lastNumber, parseInt(lastNumber).toString());
                console.log(str);
                if (isNaN(str[str.length - 1])) {
                    display.innerHTML = 'ERROR';
                    setTimeout(function() {
                        display.innerHTML = '0';
                        str = '';
                    }, 2000);
                    return;
                }
                let calculated = +eval(str.replace('÷', '/')).toFixed(10);
                if (calculated > 999999999999) {
                    display.innerHTML = 'ERROR';
                    setTimeout(function() {
                        display.innerHTML = '0';
                    }, 2000);
                } else {
                    display.innerHTML = calculated;
                }
                // str = '' + calculated;
                str = ''
                c = true;
                console.log(str);
                newLine = true;
                lastNumber = '' + calculated;
                return;
            case '.':

                if (!(~display.innerHTML.indexOf('.'))) {
                    display.innerHTML += element.value;
                    // str += element.value;

                    console.log(str);
                }
                return;
            case '-':
                c = false;
                entries.push(lastNumber);
                str += lastNumber;
                console.log(lastNumber);
                // str = str.replace(lastNumber, parseInt(lastNumber).toString());
                console.log(str);
                lastNumber = '';
                if(isNaN(str[str.length - 1]) && str[str.length - 1] === '+') {
                    str = str.replace(str[str.length - 1], '-');
                    console.log(str);
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '-') {
                    console.log(str);
                    return;
                }
                else {
                    str += element.value;
                    lastNumber = element.value;
                    newLine = true;
                    console.log(str);
                }
                entries.push(lastNumber);
                console.log(entries);
                lastNumber = '';
                return;
            case '+':
                c = false;
                entries.push(lastNumber);
                str += lastNumber;
                // str = str.replace(lastNumber, parseInt(lastNumber).toString());
                console.log(str);
                lastNumber = ''
                if(isNaN(str[str.length - 1]) && str[str.length - 1] === '-') {
                    str = str.replace(str[str.length - 1], '+');
                    console.log(str);
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '+') {
                    console.log(str);
                    return;
                }
                else {
                    str += element.value;
                    lastNumber = element.value;
                    newLine = true;
                    console.log(str);
                }
                entries.push(lastNumber);
                console.log(entries);
                lastNumber = '';
                return;
            case '÷':
                c = false;
                entries.push(lastNumber);
                str += lastNumber;
                //str = str.replace(lastNumber, parseInt(lastNumber).toString());
                lastNumber = '';
                if(isNaN(str[str.length - 1]) && str[str.length - 1] !== '÷') {
                    str = str.replace(str[str.length - 1], '÷');
                    console.log(str);
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '÷') {
                    console.log(str);
                    return;
                }
                else {
                    str += element.value;
                    lastNumber = element.value;
                    newLine = true;
                    console.log(str);
                }
                entries.push(lastNumber);
                console.log(entries);
                lastNumber = '';
                return;
            case '*':
                c = false;
                entries.push(lastNumber);
                str += lastNumber;
                // str = str.replace(lastNumber, parseInt(lastNumber).toString());
                lastNumber = '';
                if(isNaN(str[str.length - 1]) && str[str.length - 1] !== '*') {
                    str = str.replace(str[str.length - 1], '*');
                    console.log(str);
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '*') {
                    console.log(str);
                    return;
                }
                else {
                    str += element.value;
                    lastNumber = element.value;
                    newLine = true;
                    console.log(str);
                }
                entries.push(lastNumber);
                console.log(entries);
                lastNumber = '';
                return;
                // str = str.replace(str.[str.length - 2], '*')
                // if(str[str.length - 2] === '*' || str[str.length - 2] === '÷'){
                //     console.log(str);
                   
                // }
                // if (~str.indexOf('-') || 
                //     ~str.indexOf('+') || 
                //     ~str.indexOf('÷') || 
                //     ~str.indexOf('*')) {
                   
                // }
                
                str += element.value;
                 console.log(str);
                return;
            default:
                if (display.innerHTML === '0' || newLine/* || c*/)  {
                    // if (str[0] === '0') {
                    // console.log(str);
                   
                    // } else {
                    //     display.innerHTML += '0';
                    //     str += '0';
                    //     console.log(str);
                    // }
                    
                   
                    //console.log(lastNumber);
                    display.innerHTML = element.value;
                     // lastNumber += element.innerHTML;
                    // lastNumber += display.innerHTML;
                    // str += element.value;
                    newLine = false;
                    // if (display.innerHTML === '0' && element.value === '0') {
                    //     display.innerHTML = element.innerHTML;
                    //     str += '';
                    //     console.log(str);
                    // } else {
                    //     if (str[str.length - 1] === '0') {
                    //         str += ''
                    //         str += element.value;
                    //     } else {
                    //         str += element.value;
                    //     }
                    // }

                    // if (newLine) {
                    //     display.innerHTML = element.innerHTML;
                    //     newLine = false;
                    // }
                    // str = '';
                    // if (newLine) {
                    //     str = '';
                    // }
                    // if (str[str.length - 1] === '0') {
                    //     str = str.replace(str[str.length - 1], element.value);
                    //     console.log(str);
                    //     // return;
                    // } 
                    lastNumber = display.innerHTML;
                    if (c) {
                        // str = element.value;
                        // lastNumber = element.value;
                        lastNumber = display.innerHTML;
                        c = false;
                    }
                    //display.innerHTML = element.innerHTML;
                    /*if (str[0] === '0') {
                        str += ''; 
                    } else {
                        str += element.innerHTML;
                    }*/
                    // str += ''; 
                    // newLine = false;
                     console.log(lastNumber);
                } else {
                    if (display.innerHTML.length === 12) return;
                   
                    console.log(lastNumber);
                    display.innerHTML += element.innerHTML; 
                    // lastNumber += element.innerHTML;
                    lastNumber = display.innerHTML;
                    // if (str[str.length - 1] === '0') {
                    //     str = str.replace(str[str.length - 1], element.value);
                    //     console.log(str);
                    //     return;
                    // }
                    
                   
                    // str += element.innerHTML;
                     console.log(str);
                }
        }

        // if (element.value === '-' || element.value === '*' || 
        //     element.value === '+' || element.value === '÷') {
        //     str += element.value;
        //     newLine = true;
        //     return;
        // }        

        // if (display.innerHTML === '0' || caclulated)  {
        //     caclulated = false;
        //     display.innerHTML = element.innerHTML;
        //     str += element.innerHTML;
        // } else {
        //     if (display.innerHTML.length === 12) return; 
        //     display.innerHTML += element.innerHTML; 
        //     str += element.innerHTML;
        // }
    }
};

