import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  await sleep(2000);
  return <div>HomaPage</div>;
};

export default page;
