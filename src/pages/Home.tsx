// type Props = {}
import { open } from "@tauri-apps/api/dialog";
import { listen } from "@tauri-apps/api/event";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
    const unlisten = listen("tauri://file-drop", (event) => {
      //@ts-ignore
      console.log(event);
      //@ts-ignore
      sessionStorage.setItem(
        "path",
        JSON.stringify({
          //@ts-ignore
          webPath: convertFileSrc(event.payload[0]),
          //@ts-ignore
          absPath: event.payload[0],
        })
      );
      // sessionStorage.setItem("absPath", event.payload[0]);
      // console.log(sessionStorage.getItem("path"));
      navigate("/pdfDisplay");
    });
    return () => {
      unlisten.then(() => {});
    };
  }, []);

  const openFileEvent = async () => {
    const selected = await open({
      directory: false,
      multiple: false,
      filters: [
        {
          name: "Pdf",
          extensions: ["pdf"],
        },
      ],
    });
    console.log(selected);
    // sessionStorage.setItem("path", convertFileSrc(selected as string));
    sessionStorage.setItem(
      "path",
      JSON.stringify({
        //@ts-ignore
        webPath: convertFileSrc(selected),
        //@ts-ignore
        absPath: selected,
      })
    );
    navigate("/pdfDisplay");
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-10">
      <h1 className="text-orange-700 text-8xl font-mono font-semibold">
        AI PDF READER
      </h1>
      <h1 className="bg-green-300 text-center rounded-xl p-2 px-10">
        Drag and Drop Your PDF below!
      </h1>

      <div
        className="h-20 w-60 bg-purple-300 hover:bg-purple-500 border-red-500 border-2 border-dashed rounded-md"
        onClick={openFileEvent}
      >
        <div className="font-mono flex justify-center h-full w-full">
          <p className="mt-6">Click to Select</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
