import express from 'express';
import cors from "cors";
import { createCeleb, getCeleb} from './source/celebrities.js'

const app = express();
// SCREAM SNAKE CASE PORT
const PORT = 5004;
app.use(cors())
app.use(express.json());

app.get('/celebrities', getCeleb)
app.post('/celebrities', createCeleb)

app.listen(PORT, () => {
    console.log(`listening on http://localhost: ${PORT}...`)
})