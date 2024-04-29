import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

let path = "";
let img = '<img src="/220.svg" alt="Loading..." className="w-20 h-20">';
const ReadPdf = () => {
  useEffect(() => {
    path = JSON.parse(sessionStorage.getItem("path") as string).absPath;
    console.log("readpdf front", path);
  }, []);

  // const [playerState, setPlayerState] = useState<string | null>(null);

  const readHandler = () => {
    // setPlayerState("play");
    console.log(path);

    const k = document.getElementById("readBtn");
    if (k) k.innerHTML = img;
    invoke("readpdf", { path: path }).then((e) => {
      console.log(e);
      if (k) k.textContent = "Start Reading";
    });
  };

  // const pauseHandler = () => {
  //   if (playerState === "play") {
  //     invoke("pausepdf").then((e) => {
  //       setPlayerState("pause");
  //       console.log("paused");
  //     });
  //   }
  // };
  // const [parsedPdf, setParsedPdf] = useState<string>();
  return (
    <div className="flex flex-row gap-5">
      <div>
        <button
          className="border-2 rounded-lg px-2 border-amber-200 bg-amber-500 hover:bg-amber-600"
          onClick={readHandler}
          id="readBtn"
        >
          Read
        </button>
      </div>
      {/* <div>
        <button
          className="border-2 rounded-lg px-2 border-amber-200 bg-amber-500 hover:bg-amber-600"
          onClick={pauseHandler}
          id="pauseBtn"
        >
          Pause
        </button>
      </div> */}
    </div>
  );
};

export default ReadPdf;
