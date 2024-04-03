import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

let path = "";
const ReadPdf = () => {
  useEffect(() => {
    path = JSON.parse(sessionStorage.getItem("path") as string).absPath;
    console.log("readpdf front", path);
  }, []);
  const readHandler = () => {
    console.log(path);
    const k = document.getElementById("readBtn");
    if (k) k.textContent = "Reading..";
    invoke("readpdf", { path: path }).then((e) => {
      console.log(e);
      if (k) k.textContent = "Start Reading";
    });
  };
  const [parsedPdf, setParsedPdf] = useState<string>();
  return (
    <div>
      <div>
        <button
          className="border-2 rounded-lg px-2 border-amber-400 bg-amber-800 hover:bg-amber-900"
          onClick={readHandler}
          id="readBtn"
        >
          Start Reading
        </button>
      </div>
    </div>
  );
};

export default ReadPdf;
