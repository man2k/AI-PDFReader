import { useEffect, useState } from "react";
// import { invoke } from "@tauri-apps/api";

const PdfDisplay = () => {
  // const [pdfFile, setPdfFile] = useState<ArrayBuffer>();
  // const [pdfUrl, setPdfUrl] = useState<string>();
  const [pdfFilePath, setPdfFilePath] = useState<string>("");
  useEffect(() => {
    const pp = sessionStorage.getItem("path");
    setPdfFilePath(pp as string);
    // invoke("load_file", { path: pp })
    //   .then((contents: any) => {
    // console.log(contents);
    // var length = contents.length;
    // var buffer = new ArrayBuffer(length * 2);
    // var view = new Uint8Array(buffer);
    // for (var i = 0; i < length; i++) {
    //   view[i] = contents[i];
    // }
    // console.log(buffer);
    // const pdfBlob = new Blob([buffer], {
    //   type: "application/pdf",
    // });
    // setPdfUrl(URL.createObjectURL(pdfBlob));
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    // readBinaryFile(pdfFilePath).then((e) => {
    // console.log(e);
    //   const blob = new Blob([e], { type: "application/pdf" });
    //   setPdfUrl(URL.createObjectURL(blob));
    // });
    // const pdfIframeElement = document.getElementById(
    //   "pdfViewer"
    // ) as HTMLIFrameElement;
    // if (pdfFile !== null && pdfFile !== "" && pdfFile !== undefined) {
    //   pdfIframeElement.src = pdfFile as string;
    //   console.log("loaded pdf");
    // }
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
    </main>
  );
};

export default PdfDisplay;
