// import type { FormFramework } from "../core";
// import {
//   AllFields,
//   Checkbox,
//   NumberInput,
//   TextArea,
//   TextInput,
// } from "../fields";
// import { Layer, pipe } from "effect";
// import * as Mui from "@mui/material";
//
// export const layer: Layer.Layer<AllFields, never, FormFramework.FormFramework> = pipe(
//   Layer.mergeAll(
//     TextInput.layerUncontrolled(Mui.TextField),
//     TextArea.layerUncontrolled(Mui.TextareaAutosize),
//     NumberInput.layerControlled(Mui.TextField),
//     TextArea.layerUncontrolled(Mui.TextareaAutosize),
//     Checkbox.layerUncontrolled(Mui.Checkbox),
//   )
// )