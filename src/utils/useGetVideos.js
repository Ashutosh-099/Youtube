import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from "./constants";
import { setYoutubeVideos } from "../store/videoSlice";

export const useGetVideos = () => {
    const code = useSelector(store => store.app.countryCode);
    const dispatch = useDispatch();

    const getVideos = async () => {
        const code_key = `&regionCode=${code}&key=${YOUTUBE_API_KEY}`;
        const response = await fetch(YOUTUBE_API_URL + code_key);
        const data = await response.json();
        dispatch(setYoutubeVideos(data["items"]));
    }

    getVideos();
}