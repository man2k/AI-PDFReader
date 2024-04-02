import { useEffect, useState } from "react";

const PdfDisplay = () => {
  const [pdfFile, setPdfFile] = useState<string>(
    sessionStorage.getItem("file") as string
  );

  useEffect(() => {
    setPdfFile(sessionStorage.getItem("file") as string);
    const pdfIframeElement = document.getElementById(
      "pdfViewer"
    ) as HTMLIFrameElement;
    if (pdfFile !== null && pdfFile !== "" && pdfFile !== undefined) {
      pdfIframeElement.src = pdfFile as string;
      console.log("loaded pdf");
    }
  }, [pdfFile]);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center border-2 border-white bg-white">
      <div className="text-white">
        <iframe
          onChange={() => {
            console.log("changed");
          }}
          className="w-screen h-screen"
          id="pdfViewer"
        />
      </div>
    </main>
  );
};

export default PdfDisplay;
