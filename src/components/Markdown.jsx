import React, { useState } from "react";
import { Editor } from "primereact/editor";

export function Markdown({ text }) {
  return (
    <div className="card">
      <Editor
        className=" h-[180px] md:h-[250px]"
        style={{ fontSize: "1rem" }}
      />
    </div>
  );
}
