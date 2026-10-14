import multer from 'multer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const publicFolder = path.resolve(__dirname, "../../public");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, publicFolder)
    },
    filename: (req, file, cb) => {
        const hash = crypto.randomBytes(12).toString('hex')
        const extensao = path.extname(file.originalname)

        cb(null, `${hash}${extensao}`)
    }
})

export const upload = multer({storage})