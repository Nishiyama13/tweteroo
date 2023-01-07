import express from "express";
//import cors from "cors"

const server = express();
server.get("/teste", (req, res) => {
  res.send("Teste");
});
const PORT = 5000;
server.listen(PORT, () => console.log(`Servidor rodando na porta: ${5000}`));
