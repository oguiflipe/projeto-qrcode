import chalk from "chalk"

const qrCodeSchemaPrompt = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR-Code")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo do QR-Code (1 - Normal ou ( 2 - Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.redBright.italic("Escolha apenas entre 1 e 2")
    }
]

export default qrCodeSchemaPrompt;