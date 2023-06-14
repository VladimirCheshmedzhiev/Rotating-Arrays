function rotateArray(input) {

    let lastNumber = '';
    for (let i = input.length - 1; i > input.length - 2; i--) {
        lastNumber += input[i];
        lastNumber = Number(lastNumber);
    }

    input.pop();
    for (let i = 0; i < lastNumber; i++) {
        
        let lastElement = input.pop()
        input.unshift(lastElement)
    }
    console.log(input.join(' '))
}


rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15'])
rotateArray(['1', '2', '3', '4', '2'])