interface FileReaderEventTarget extends EventTarget {
  result: ArrayBuffer;
}

export interface FileReaderEvent extends ProgressEvent {
  target: FileReaderEventTarget;
  getMessage(): string;
}
