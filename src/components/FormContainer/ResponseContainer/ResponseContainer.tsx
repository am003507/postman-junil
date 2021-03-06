/** @jsx jsx **/
import { jsx } from '@emotion/core';
import React from "react";
import { responseContainerStyles, responseTitleStyles, noneBlockStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { responseState } from "stores/responseStore";
import Highlight from "react-highlight";

export const ResponseContainer: React.FC = () => {

  const response = useRecoilValue(responseState);

  return (
    <section css={responseContainerStyles}>
      <h2 css={responseTitleStyles}>Response</h2>
      {
        response !== null ?
          <Highlight>
            { JSON.stringify(response.data, null, 4) }
          </Highlight> :
          <p css={noneBlockStyles}>아직 Request를 보내지 않았습니다.</p>
      }
    </section>
  );
}
