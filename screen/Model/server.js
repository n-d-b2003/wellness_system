// Express Server
const express = require('express');
const gradio = require('@gradio/client');

const app = express();
const gradioApp = gradio.client("http://127.0.0.1:7865/");

app.use(express.json());

app.post('/predict', async (req, res) => {
    console.log("jeb "+req.body);
  try {
    const result = await gradioApp.predict('/predict', req.body);
    res.json(result);
  } catch (error) {
    console.error('Error making Gradio API request:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
