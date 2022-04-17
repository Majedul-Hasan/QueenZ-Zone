import React from "react";
import { useParams } from "react-router-dom";

export default function SingleProdductPage() {
  let { Category, PNAME, PID } = useParams();

  console.log(Category, PNAME, PID);

  return <div>SingleProdductPage</div>;
}
