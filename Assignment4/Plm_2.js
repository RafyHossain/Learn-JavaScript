function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== ' ') {
            if (char >= 'a' && char <= 'z') {
                result += char.toUpperCase();
            } else {
                result += char;
            }
        }
    }
    return result;
}

console.log(onlyCharacter(true ));