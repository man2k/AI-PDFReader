import { useEffect, useState } from "react";
import ReadPdf from "../components/ReadPdf";

const PdfDisplay = () => {
  const [pdfFilePath, setPdfFilePath] = useState<string>("");
  useEffect(() => {
    // const a = document.getElementById("pdfViewer");
    // console.log(a);
    const pp = JSON.parse(sessionStorage.getItem("path") as string);
    setPdfFilePath(pp.webPath as string);
  }, []);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-start border-2 border-white bg-black text-white">
      <div className="text-white">
        <iframe
          src={pdfFilePath}
          className="w-screen h-[560px] border-2 border-amber-500"
          id="pdfViewer"
        />
      </div>
      <ReadPdf />
    </main>
  );
};

export default PdfDisplay;
