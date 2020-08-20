import React from "react";
import {SerializedStyles} from "@emotion/core";

export { Alert } from './Alert';
export { Dialog } from './Dialog';


export interface IDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  overrideCss?: SerializedStyles
  wrapperCss?: SerializedStyles
}
