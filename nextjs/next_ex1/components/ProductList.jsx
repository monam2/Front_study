import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProductList.module.css";
import Link from "next/link";
import { fetchProducts } from "@/api";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li className={styles.item} key={product.id}>
              <Link href={`/products/${product.id}`}>
                <div>
                  {/* <img src="" alt="" /> */}
                  <Image src={product.imageUrl} width={300} height={250} alt={product.name}></Image>
                </div>
                <div>{product.name}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
