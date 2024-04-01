import { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
const PdfDisplay = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  let blobURL;

  useEffect(() => {
    // const blob = JSON.parse(window.sessionStorage.getItem("pdfbuffer"));
    blobURL = localStorage.getItem("file");
    document.getElementById("pdfViewer").src = blobURL;
    // console.log(base64);
    // blobURL = URL.createObjectURL(blob);
    // blobURL = window.sessionStorage.getItem("pdfbuffer");
    // blob = pdfbuffer;
    // blobURL =
    // "https://scholar.harvard.edu/files/schwartz/files/5-thermodynamics.pdf";
    // console.log(blobURL);
  }, []);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center border-2 border-white bg-white">
      <div className="text-white">
        {/* <Document
          file={blobURL}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{}}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p> */}
        <iframe
          // src={blobURL}
          className="w-screen h-screen"
          id="pdfViewer"
        />
      </div>
    </main>
  );
};

export default PdfDisplay;
