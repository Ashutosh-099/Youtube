import { useDispatch, useSelector } from "react-redux";
import { GEOCODING_API_KEY } from "./constants";
import { setCountryCode } from "../store/appSlice";

export const useGetCountryInfo = () => {
    const code = useSelector(store => store.app.countryCode);
    const dispatch = useDispatch();

    const getCountryInfo = async () => {
        if (navigator.geolocation) {
            try {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;

                    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${GEOCODING_API_KEY}`);

                    if (!response.ok) {
                        throw new Error("Unable to fetch Location information!!");
                    }

                    const data = await response.json();
                    dispatch(setCountryCode(data.results[0].components["ISO_3166-1_alpha-2"]));
                })
            } catch (e) {
                console.error(e);
            }
        } else {
            dispatch(setCountryCode("IN"));
        }
    }
    if (code === "") {
        getCountryInfo();
    }
}   