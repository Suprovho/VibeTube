// useVideos.js
import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getVideoData } from "../utils/store/videoSlice";

const useVideos = (ids) => {
  const dispatch = useDispatch();
  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids.join(
        ","
      )}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    dispatch(getVideoData(json.items));
  };

  useEffect(() => {
    if (ids.length > 0) {
      getVideos();
    }
  }, [dispatch, ids]);
};

export default useVideos;
