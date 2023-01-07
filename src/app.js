import express from "express";
import cors from "cors";
//const msg = "Teste";

const server = express();
server.use(express.json());
server.use(cors());

const users = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

server.post("/sign-up", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
});

const PORT = 5023;
server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
