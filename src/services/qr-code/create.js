import prompt from 'prompt';
import qrCodeSchemaPrompt from "../../prompts-schema/prompt-schema-qrcode.js"
import handle from './handle.js';


async function createQRCode(){
    prompt.get(qrCodeSchemaPrompt, handle);
}


export default createQRCode;