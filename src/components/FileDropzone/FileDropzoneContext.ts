import { createContext } from "react";
import { FileDropzoneState } from "./types";
import { Accept } from "../../utils";

export type FileDropzoneContext = {
  /** Indicates if file/s are curently over the FileDropzone */
  dropzoneState: FileDropzoneState;
  /** Can be called to open the file selector for the FileDropzone */
  openFileSelector: () => void;
  /** The file types that are accepted. Look at helper acceptsDisplayValue for a human readable string. */
  accept?: Accept;
  /** Whether or not the FileDropzone can handle multiple files */
  allowsMultiple: boolean;
};

export const FileDropzoneContext = createContext<
  FileDropzoneContext | undefined
>(undefined);

export const FileDropzoneProvider = FileDropzoneContext.Provider;