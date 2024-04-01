// type Props = {}
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const onDrop = useCallback(async (acceptedFiles: Array<Blob>) => {
    console.log(acceptedFiles[0]);
    // sessionStorage.setItem("pdf", JSON.stringify(acceptedFiles[0]));
    // console.log(sessionStorage.getItem("pdf"));
    // const blobURL = URL.createObjectURL(acceptedFiles[0]);
    // const buf = await acceptedFiles[0].arrayBuffer();

    // window.sessionStorage.setItem("pdfbuffer", JSON.stringify(buf));
    // console.log(blobURL);
    let reader = new FileReader();
    reader.onload = function (event) {
      // The file's text will be printed here
      var base64 = event.target.result;
      localStorage.setItem("file", base64);
    };
    reader.readAsDataURL(acceptedFiles[0]);
    navigate("/pdfDisplay");
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      // accept: {
      //   "application/pdf": [],
      // },
    });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-10">
      <h1 className="bg-green-300 text-center rounded-xl p-2 px-10">
        Drag and Drop Your PDF below!
      </h1>
      <div className="h-20 w-60 bg-purple-300  border-red-500 border-2 border-dashed rounded-md">
        <div
          {...getRootProps()}
          className="font-mono flex justify-center h-full w-full"
        >
          <input {...getInputProps()} />
          {/* <p className="mt-6">Drop the files here ... </p> */}
          {isDragActive ? (
            <p className="mt-6 ">Drop the files here ...</p>
          ) : (
            <p className="mt-6 ">Drag & Drop</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
