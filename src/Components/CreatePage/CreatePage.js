import React from "react";
import { useParams } from "react-router-dom";

export default function CreatePage() {
  let { PNumber } = useParams();

  return <div>CreatePage {PNumber} </div>;
}
