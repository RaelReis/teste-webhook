const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4003;

app.use(cors(), bodyParser.text());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

app.post("/webhook", (req, res) => {
  try {
    // Os dados em formato de string estarão disponíveis em req.body
    const dataString = req.body;
    // Agora você pode tentar analisar a string em um formato de objeto
    // Nota: Isso é apenas uma simulação, e a conversão real pode depender da sintaxe real dos dados
    const dataObject = JSON.parse(dataString);

    console.log(dataObject); // Aqui você terá o objeto JavaScript com os dados

    res.status(200).json({ message: "Dados recebidos com sucesso!" });
  } catch (error) {
    console.error("Erro ao processar os dados:", error);
    res.status(400).json({ message: "Erro ao processar os dados", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});
