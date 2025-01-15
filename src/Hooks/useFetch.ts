import axios from "axios";
import { useEffect, useReducer, useState } from "react";

interface IData {
  data: any;
  error: any;
  loading: boolean;
}

interface IPayload {
  type: string;
  payload: any;
}

const ACTIONS = {
  API_REQ: "api-request",
  FETCH_DATA: "fetch-data",
  FETCH_ERROR: "fetch-error",
};

const initialState: IData = {
  data: [],
  error: null,
  loading: false,
};

function reducer(state: IData, { type, payload }: IPayload) {
  switch (type) {
    case ACTIONS.API_REQ:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
  }
}

const useFetch = (url: string = "") => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = (url: string) => {
    return axios.get(url);
  };

  useEffect(() => {
    if (url !== "" && url) {
      fetchData(url)
        .then((res) => {
          dispatch({ type: ACTIONS.API_REQ });
        })
        .catch((err) => {})
        .finally(() => {});
    }
  }, [url]);

  return state;
};

export default useFetch;
