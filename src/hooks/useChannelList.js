import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { getChannelData } from "../utils/store/videoSlice";
import { useDispatch } from "react-redux";

const useChannelList = (id) => {
  const dispatch = useDispatch();
  const channels = async () => {
    try {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
          id +
          "&key=" +
          GOOGLE_API_KEY
      );

      if (!data.ok) {
        throw new Error(`Failed to fetch channel data. Status: ${data.status}`);
      }

      const json = await data.json();
      dispatch(getChannelData(json.items));
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

  useEffect(() => {
    channels();
  }, [dispatch, id]);
};

export default useChannelList;
