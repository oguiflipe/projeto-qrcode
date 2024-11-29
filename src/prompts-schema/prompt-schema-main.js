import chalk from "chalk"

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.blueBright.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.redBright.italic("Escolha entre 1 e 2."),
        required: true
    }
]

export default promptSchemaMain;