/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React, {useState} from "react";
import { RequestAddress } from "./RequestAddress";
import { RequestConfig } from "./RequestConfig";
import { Alert } from "components/Layout/Dialog";
import { getHeadersOf, getQueryParamsOf } from "utils";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {headersState, methodState, paramsState} from "stores/requestStore";
import axios from 'axios';
import {responseState} from "../../../stores/responseStore";

const titleStyle = css`
  font-size: 21px;
  margin: 0;
  padding: 15px;
  font-weight: 400;
`;

export const RequestContainer: React.FC = () => {

  const [alertMessage, setAlertMessage] = useState('');
  const setResponse = useSetRecoilState(responseState);

  const params = useRecoilValue(paramsState);
  const headers = useRecoilValue(headersState);
  const method = useRecoilValue(methodState);

  const submitRequest = (requestURL: string) => {
    const url = `${requestURL}${getQueryParamsOf(params)}`;

    axios({ url, method, headers: getHeadersOf(headers) })
      .then(data => {
        setResponse(data);
      })
      .catch(e => {
        console.error(e.response);
        setAlertMessage(`${e}`);
      });
  }

  return (
    <section>
      <h2 css={titleStyle}>Request</h2>
      <RequestAddress
        submitRequest={submitRequest}
      />
      <RequestConfig/>
      { alertMessage.length > 0 &&
        <Alert onClose={() => setAlertMessage('')}>
          { alertMessage }
        </Alert>
      }
    </section>
  );
};