import express from 'express';
import hymnScrapper from './routes/hymnScrapper.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hymn Chooser Server is running');
});

app.use('/api/hymns', hymnScrapper)



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});