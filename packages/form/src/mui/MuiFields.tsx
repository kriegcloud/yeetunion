import { RHFCode, RHFEditor, RHFSlider } from "@ye/ui/components";
import { Layer, pipe } from "effect";
import React from "react";
import type { FormFramework } from "../core";
import { type AllFields } from "../fields";
import {
  Checkbox,
  CheckboxButtonGroup,
  CheckboxButtonGroupElement,
  Code,
  Editor,
  MultiSelect,
  MultiSelectElement,
  Password,
  PasswordFieldElement,
  PasswordRepeat,
  PasswordRepeatElement,
  Slider,
  Switch,
  SwitchElement,
  TextField,
  Textarea,
  TextareaElement,
} from "../fields";
import type { CheckboxButtonGroupProps } from "../fields/CheckboxButtonGroup/Element";

import { RHFTextField } from "@ye/ui/components";
import { RHFCheckbox } from "@ye/ui/components";

export const layer: Layer.Layer<AllFields, never, FormFramework.FormFramework> =
  pipe(
    Layer.mergeAll(
      Code.layerControlled(({ ...props }) => <RHFCode {...props} />),
      Editor.layerControlled(({ ...props }) => <RHFEditor {...props} />),
      MultiSelect.layerControlled(({ ...props }) => (
        <MultiSelectElement {...props} />
      )),
      Password.layerControlled(({ ...props }) => (
        <PasswordFieldElement {...props} />
      )),
      PasswordRepeat.layerControlled(({ ...props }) => (
        <PasswordRepeatElement {...props} />
      )),
      Slider.layerControlled(({ ...props }) => (
        <RHFSlider {...props} value={undefined} />
      )),
      Switch.layerControlled(SwitchElement),
      Textarea.layerControlled(({ ...props }) => (
        <TextareaElement {...props} />
      )),
      TextField.layerControlled(({ ...props }) => (
        <RHFTextField {...props} value={undefined} />
      )),
      Checkbox.layerControlled(({ ...props }) => <RHFCheckbox {...props} />),
      CheckboxButtonGroup.layerControlled(
        React.forwardRef(
          (
            { options, name, ...props },
            ref: React.ForwardedRef<HTMLDivElement>,
          ) => (
            <CheckboxButtonGroupElement
              {...(props as CheckboxButtonGroupProps)}
              name={name}
              ref={ref}
              options={options}
            />
          ),
        ),
      ),
    ),
  );
