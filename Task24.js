function convert() {
    let singulars = [null,'I','II','III','IV','V','VI','VII','VIII','IX'];
    let teens = [null,'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX','XC'];
    let hundreds = [null,'C','CC','CCC','CD','D','DC','DCC','DCCC','CM'] ;

    let inputEl = document.querySelector('input').value;
    let RomanNum;

    if(inputEl == '0' || isNaN(inputEl)) {
        document.querySelector('span').textContent = 'Enter only number'
    } else {
        if(inputEl<=0 || inputEl > 1000) {
            document.querySelector('span').textContent = 'Enter number between 0 and 1001'
        } else {
                    if(inputEl > 0 && inputEl < 10) {
        RomanNum = singulars[inputEl];
    } else if(inputEl >= 10 && inputEl < 100) {
        if(inputEl % 10 == 0) {
            RomanNum = teens[inputEl / 10];
        } else {
            RomanNum = `${teens[Math.floor(inputEl /10)]}${singulars[inputEl % 10]}`
        }
    } else if(inputEl >= 100 && inputEl < 1000) {
        if(inputEl % 100 == 0){
            RomanNum = hundreds[inputEl/100];
        } else if(inputEl % 10 == 0 && inputEl % 100 != 0) {
            RomanNum = `${hundreds[Math.floor(inputEl/100)]}${teens[(inputEl % 100)/10]}0`;
        } else if(inputEl % 10 != 0 && inputEl % 10 != 0)
            RomanNum = `${hundreds[Math.floor(inputEl/100)]}${teens[Math.floor((inputEl % 100)/10)]}${singulars[inputEl % 10]}`;
    } else if(inputEl == '1000') {
        RomanNum = 'M';
    }
    else {
        RomanNum = 'Please enter a number less than 1001'
    }
    document.querySelector('span').textContent = `${inputEl} is represented as:${RomanNum}`
        }
    }
    }