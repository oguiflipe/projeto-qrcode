async function permitedCharacteres() {
    let permited = [];

    if(process.env.UPPERCASE_LETTERS === "true") permited.push( ... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if(process.env.LOWERCASE_LETTERS === "true") permited.push( ... "abcdefghijklmnopqrstuvwxyz");

    if(process.env.NUMBERS === "true") permited.push( ... "12345678910");

    if(process.env.SPECIAL_CHARACTERES === "true") permited.push( ... `!?+-*/%=<>()[]{}'"@_ `);

    return permited; 
}

export default permitedCharacteres;