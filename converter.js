
let input = 'TTCCAAXX';

convert(input);

function convert(string) {
    let result;
    for (let i = 0; i < string.lenght; i++) {
        switch (string[i]) {
            case 'T':
                result.push = 'C';
                break;
            case 'C':
                result.push = 'T';
                break;
            case 'A':
                result.push = 'D';
                break;
            case 'X':
                result.push = 'Y';
                break;
        }

        console.log(result);
    }
}