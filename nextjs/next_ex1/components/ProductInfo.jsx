import React from "react";
import styles from "./ProductInfo.module.css";
import Image from "next/image";

function ProductInfoPage({ productDetail }) {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={productDetail.imageUrl}
          width={250}
          height={250}
          alt={productDetail.name}
        />
      </div>
      <div className={styles.description}>
        <p>{productDetail.name}</p>
        <p>{productDetail.price}</p>
      </div>
    </div>
  );
}

export default ProductInfoPage;
