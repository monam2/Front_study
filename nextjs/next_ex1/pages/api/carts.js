import { removeCartsItem } from "@/api";

// http://localhost:3000/api/carts
export default async function handler(req, res) {
  const id = req.body.id;
  const { data } = await removeCartsItem(id);
  console.log(`아이디는 ${id}임`);
  res.status(200).send(`${data.name}이(가) 삭제되었습니다.`);
}
