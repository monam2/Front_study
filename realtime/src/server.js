import http from "http";
import { WebSocketServer } from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");
app.use("/public", express.static("src/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
const handleListen = () => console.log("Listening on http://localhost:3000");

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const sockets = [];

function handleConnection(socket) {
  sockets.push(socket);
  socket["nickname"] = "annonymous";
  console.log(">>>>> 브라우저와 연결됨");
  socket.send("hello");

  socket.on("close", () => {
    console.log(">>>>> 브라우저와 연결 해제됨");
  });

  socket.on("message", (message) => {
    const { type, payload } = JSON.parse(message);
    switch (type) {
      case "new_message":
        sockets.forEach((sckt) => sckt.send(`${socket.nickname} : ${payload}`));
        break;
      case "nickname":
        socket["nickname"] = payload;
        break;
    }

    // if (parsed.type === "new_message") {
    //   sockets.forEach((sckt) => sckt.send(parsed.payload));
    // } else if (parsed.type === "nickname") {
    //   console.log(parsed.payload);
    // }
  });
}

wss.on("connection", handleConnection);
server.listen(3000, handleListen);
