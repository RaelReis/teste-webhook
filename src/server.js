const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4003;

app.use(cors(), express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

app.post("/webhook", (req, res) => {
  // Lógica para processar os dados do webhook
  console.log("Recebido um webhook:", req.body);

  // Responda ao webhook
  res.status(200).json({
    message: "Success",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});
