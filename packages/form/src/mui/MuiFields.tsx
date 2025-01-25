import * as Mui from "@mui/material";
import {Layer, pipe} from "effect";
import React from "react";

import {type AllFields} from "../fields";
import type {FormFramework} from "../core";
import {
  Checkbox,
  CheckboxButtonGroup,
  CheckboxButtonGroupElement,
  TextField,
} from "../fields";
import type {CheckboxButtonGroupProps} from "../fields/CheckboxButtonGroup/Element";

import {RHFTextField} from "@ye/ui/components";

export const layer: Layer.Layer<AllFields, never, FormFramework.FormFramework> =
  pipe(
    Layer.mergeAll(
      TextField.layerControlled(
        ({...props}) => (
          <RHFTextField {...props} value={undefined} />
        )
      ),
      Checkbox.layerControlled(
        ({...props}) => (
          <Mui.FormControl {...props}>
            <Mui.Checkbox  />
          </Mui.FormControl>
        )
      ),
      CheckboxButtonGroup.layerControlled(
        React.forwardRef(
          ({options, name, ...props}, ref: React.ForwardedRef<HTMLDivElement>) => (
            <CheckboxButtonGroupElement {...props as CheckboxButtonGroupProps} name={name} ref={ref} options={options}/>
          )
        )
      ),
    ),
  );
