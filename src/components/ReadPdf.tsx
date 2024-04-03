import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

const ReadPdf = () => {
  let path = "";
  useEffect(() => {
    path = JSON.parse(sessionStorage.getItem("path") as string).absPath;
    console.log("readpdf front", path);
    invoke("readpdf", { path: path }).then((e) => {
      console.log(e);
    });
  }, []);

  const [parsedPdf, setParsedPdf] = useState<string>();
  return <div>{parsedPdf}</div>;
};

export default ReadPdf;
