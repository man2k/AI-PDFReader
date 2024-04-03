import { useEffect, useState } from "react";
import ReadPdf from "../components/ReadPdf";

const PdfDisplay = () => {
  const [pdfFilePath, setPdfFilePath] = useState<string>("");
  useEffect(() => {
    const pp = JSON.parse(sessionStorage.getItem("path") as string);
    setPdfFilePath(pp.webPath as string);
  }, []);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center border-2 border-white bg-white">
      <div className="text-white">
        <iframe
          src={pdfFilePath}
          className="w-screen h-screen"
          id="pdfViewer"
        />
      </div>
      <ReadPdf />
    </main>
  );
};

export default PdfDisplay;
