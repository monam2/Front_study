const $ul = document.querySelector("ul");
const $msgForm = document.querySelector("#message");
const $nickForm = document.querySelector("#nick");

const socket = new WebSocket(`ws://${window.location.host}`);

function msgToJson(type, payload) {
  return JSON.stringify({ type, payload });
}

socket.addEventListener("open", () => {
  console.log(">>>>> 서버와 연결됨");
});

socket.addEventListener("message", ({ data }) => {
  const li = document.createElement("li");
  li.innerText = data;
  $ul.append(li);
});

socket.addEventListener("close", () => {
  console.log(">>>>> 서버와 연결 해제됨");
});

$msgForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $msgForm.querySelector("input");
  socket.send(msgToJson("new_message", input.value));
  input.value = "";
  input.focus();
});

$nickForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $nickForm.querySelector("input");
  socket.send(msgToJson("nickname", input.value));
  input.value = "";
  input.focus();
});
