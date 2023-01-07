import express from "express";
import cors from "cors";

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

const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
  },
];

server.post("/sign-up", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  console.log(users);
  res.send("OK");
});

server.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  const userExists = users.find(user => user.username === username);

  if (!userExists) {
    return res.status(401).send("UNAUTHORIZED");
  }

  const newTweet = { username, tweet };
  tweets.push(newTweet);
  console.log(tweets);
  return res.send("OK");
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
