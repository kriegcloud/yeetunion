import { Layer, pipe } from "effect";
import type { FormFramework } from "../core";
import {
  AllFields,
  Checkbox,
  Select,
  Textarea,
  TextField,
} from "../fields";
import * as Inputs from "./inputs";
import React from "react";


export const layer: Layer.Layer<AllFields, never, FormFramework.FormFramework> = pipe(
  Layer.mergeAll(
    Checkbox.layerControlled(Inputs.Checkbox),
    Select.layerControlled(
      React.forwardRef(
        (
          { options, name, ...props },
          ref: React.ForwardedRef<HTMLInputElement>
        ) => <Inputs.Select {...props} name={name} ref={ref} options={options} />
      )
    ),
    Textarea.layerControlled(React.forwardRef(
      (
        { name, ...props },
          ref: React.ForwardedRef<HTMLInputElement>
      ) => <Inputs.Textarea {...props} name={name} ref={ref} />
    )),
    TextField.layerControlled(React.forwardRef(
      (
        { name, ...props },
        ref: React.ForwardedRef<HTMLInputElement>
      ) => <Inputs.TextField {...props} name={name} ref={ref} />
    )),
  )
)