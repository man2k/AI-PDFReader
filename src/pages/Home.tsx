// type Props = {}
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect } from "react";
import { writeTextFile, BaseDirectory, writeFile } from "@tauri-apps/api/fs";

import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const navigate = useNavigate();

  const onDrop = useCallback(async (acceptedFiles: Array<Blob>) => {
    console.log(acceptedFiles[0]);
    let reader = new FileReader();

    reader.onload = function (e) {
      const base64 = e.target?.result as string;
      sessionStorage.setItem("file", base64);
      writeTextFile("pdfData", base64, {
        dir: BaseDirectory.AppConfig,
      });
      navigate("/pdfDisplay");
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [],
      },
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
