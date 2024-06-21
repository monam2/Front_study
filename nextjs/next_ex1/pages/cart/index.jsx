import { fetchCarts } from "@/api";
import React from "react";
import CartHeader from "./../../components/cart/CartHeader";
import CartList from "../../components/cart/cart-list/CartList";

function CartPage({ carts }) {
  return (
    <div>
      <CartHeader />
      <CartList carts={carts} />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await fetchCarts();

  return {
    props: {
      carts: data,
    },
  };
}

export default CartPage;
