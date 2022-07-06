
const input = 'TTCCAAXX';
const result = new Set();
    for (let i = 0; i <= input.length; i++) {
        switch (input[i]) {
            case 'T':
                result.add('C');
                continue;
            case 'C':
                result.add('T');
                continue;
            case 'A':
                result.add('D');
                continue;
            case 'X':
                result.add('Y');
                continue;
        }

        console.log(result);
    }