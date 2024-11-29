import permitedCharacteres from "./utils/permited-characters.js";

async function handlePass(){

    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGHT;

    characters = await permitedCharacteres();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index]; 
    }
    return password;

}

export default handlePass;