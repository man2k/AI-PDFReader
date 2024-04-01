import { useEffect, useRef } from "react";

const PdfViewer = ({ file }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    (async function () {
      const pdfJS = await import("pdfjs-dist/build/pdf.worker.mjs");
      // import * as pdfjs from "pdfjs-dist/build/pdf.min.mjs";

      pdfJS.GlobalWorkerOptions.workerSrc = `../public/pdf.worker.min.mjs`;
      const pdf = await pdfJS.getDocument(file).promise;

      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = { canvasContext, viewport };
      page.render(renderContext);
    })();
  }, [file]);

  return <canvas ref={canvasRef} style={{ height: "100vh" }} />;
};

export default PdfViewer;
