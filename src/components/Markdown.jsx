import React, { useState } from "react";
import { Editor } from "primereact/editor";

export function Markdown() {
  return (
    <div className="card">
      <Editor

        style={{ maxHeight: "250px", border: "none", height: "130px" ,  fontSize: "1rem" }}
      />
    </div>
  );
}
