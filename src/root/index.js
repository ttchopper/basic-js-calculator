
(function() {
let calculator = document.querySelector('.calculator');
let newLine;
let str = '';
let lastNumber = '';
let entries = [];
let c;
let ce = 0;
// Using delegation 
calculator.onclick = function() {

    let element = event.target;
    let display = this.querySelector('.calculator-display');
    // Find button element
    if (element.className === 'key') {
        switch(element.value) {
            case 'AC':
                display.innerHTML = '0';
                str = '';
                lastNumber = '';
                return;

            case 'CE':
                display.innerHTML = '0';
                str += lastNumber;
                str = str.replace(lastNumber, '');
                return;

            case '=':
                str += display.innerHTML;
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
                str = '';
                c = true;
                newLine = true;
                lastNumber = '' + calculated;
                return;

            case '.':
                if (!(~display.innerHTML.indexOf('.'))) {
                    display.innerHTML += element.value;
                }
                return;

            case '-':
                c = false;
                str += lastNumber;
                lastNumber = '';
                if(isNaN(str[str.length - 1]) && str[str.length - 1] === '+') {
                    str = str.replace(str[str.length - 1], '-');
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '-') {
                    return;
                }
                else {
                    str += element.value;
                    newLine = true;
                    lastNumber = element.value;
                }
                entries.push(lastNumber);
                lastNumber = '';
                return;

            case '+':
                c = false;
                str += lastNumber;
                lastNumber = ''
                if(isNaN(str[str.length - 1]) && str[str.length - 1] === '-') {
                    str = str.replace(str[str.length - 1], '+');
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '+') {
                    return;
                }
                else {
                    str += element.value;
                    lastNumber = element.value;
                    newLine = true;
                }
                entries.push(lastNumber);
                lastNumber = '';
                return;

            case '÷':
                c = false;
                str += lastNumber;
                lastNumber = '';
                if(isNaN(str[str.length - 1]) && str[str.length - 1] !== '÷') {
                    str = str.replace(str[str.length - 1], '÷');
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '÷') {
                    return;
                }
                else {
                    str += element.value;
                    lastNumber = element.value;
                    newLine = true;
                }
                entries.push(lastNumber);
                lastNumber = '';
                return;

            case '*':
                c = false;
                str += lastNumber;
                lastNumber = '';
                if(isNaN(str[str.length - 1]) && str[str.length - 1] !== '*') {
                    str = str.replace(str[str.length - 1], '*');
                } 
                else if(isNaN(str[str.length - 1]) && str[str.length - 1] === '*') {
                    return;
                }
                else {
                    str += element.value;
                    lastNumber = element.value;
                    newLine = true;
                }
                entries.push(lastNumber);
                lastNumber = '';
                return;
                
            default:
                if (display.innerHTML === '0' || newLine)  {
                    display.innerHTML = element.value;
                    newLine = false;
                    lastNumber = display.innerHTML;
                    if (c) {
                        lastNumber = display.innerHTML;
                        c = false;
                    }
                } else {
                    if (display.innerHTML.length === 12) return;
                    display.innerHTML += element.innerHTML; 
                    lastNumber = display.innerHTML;
                }
                return;
        }
    }
};
})();


