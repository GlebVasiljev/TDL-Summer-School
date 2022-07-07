const convert = function (str) {
    let temp = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'T':
                temp.push('C');
                continue;
            case 'C':
                temp.push('T');
                continue;
            case 'A':
                temp.push('D');
                continue;
            case 'X':
                temp.push('Y');
                continue;
        }
    }
    console.log(temp);
    return temp;
}
let input = 'TTCCAAXX';
let result = convert(input);
let result2 = convert('TTGG');


