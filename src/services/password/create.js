import chalk from "chalk"
import handlePass from "./handle.js";

async function createPassword() {
    console.log(chalk.yellowBright("Password"))
    const password = await handlePass();
    console.log(password)
}

export default createPassword;