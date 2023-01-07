import express from "express";
import cors from "cors";
import { usePatternFormat } from "react-number-format";

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

server.get("/tweets", (req, res) => {
  const lastTenTweets = tweets.slice(-10);
  const tweetsWithAvatar = lastTenTweets.map(tweet => {
    const user = users.find(user => user.username === tweet.username);
    return { ...tweet, avatar: user.avatar };
  });

  return res.send(tweetsWithAvatar);
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
