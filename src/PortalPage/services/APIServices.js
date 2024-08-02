import axios from "axios"
import { REACT_APP_SERVER_URL } from "../Constants/envs"


export const getExecomMemberData = async () => {
   const res = await axios({
     method: "get",
     url: "/execommembers",
     baseURL: REACT_APP_SERVER_URL,
   });

    return res
}


export const getMedia = async (limit) => {
    const res = await axios({
      method: "get",
      url: "/media",
      baseURL: REACT_APP_SERVER_URL,
      params: {
        limit: limit,
      },
    });

    return res
}