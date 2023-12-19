import {
  GET_SERVANTS_NICE,
  GET_SERVANT,
  GET_SERVANT_RANDOM,
  GET_SERVANTS_BASIC
} from "./types";
import axios from "axios";

export const GetAllServantsNice = () => {
  return async (dispatch) => {
    try {
      // const res = await api.get("/airmob");
      const res = await axios({
        url: "https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json",
        method: "get",
      });

      dispatch({
        payload: res.data,
        type: GET_SERVANTS_NICE,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAllServantsBasic = (number) => {
  return async (dispatch) => {
    try {
      // const res = await api.get("/airmob/" + number);
      const res = await axios({
        url: "https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json",
        method: "get",
      });
      dispatch({
        payload: res.data,
        type: GET_SERVANTS_BASIC,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const GetOneServant = (id) => {
  return async (dispatch) => {
    try {
      // const res = await api.get("/airmob/dataUsage/" + number + "/" + start + " 00:00:00/" + end + " 00:00:00");
      const res = await axios({
        url: "https://api.atlasacademy.io/nice/NA/servant/" + id + "?lore=false",
        method: "get",
      });

      dispatch({
        payload: res.data,
        type: GET_SERVANT,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const GetRandomServant = (id) => {
  return async (dispatch) => {
    try {


      const res2 = await axios({
        url: "https://api.atlasacademy.io/nice/NA/servant/" + id + "?lore=true",
        method: "get",
      });

      dispatch({
        payload: res2.data,
        type: GET_SERVANT_RANDOM,
      });


      return res2.data;
    } catch (e) {
      console.log(e);
    }
  };
};
