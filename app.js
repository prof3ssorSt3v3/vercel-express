import express from 'express';

const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  //handle root
  res.set({
    'Content-Type': 'application/json',
  });
  const KEY = process.env.KEY ?? 'DEFAULTKEY';
  let data = { message: 'good news. The API is online', key: KEY };
  let content = JSON.stringify(data);
  res.send(content);
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log('ERROR', err);
  }
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`); //local dev
});
