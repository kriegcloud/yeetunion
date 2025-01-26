import type { Checkbox } from "./Checkbox";
import type { CheckboxButtonGroup } from "./CheckboxButtonGroup";
import type { Code } from "./Code";
import type { Editor } from "./Editor";
import type { MultiSelect } from "./MultiSelect";
import type { Password } from "./Password";
import type { PasswordRepeat } from "./PasswordRepeat";
import type { Slider } from "./Slider";
import type { Switch } from "./Switch";
import type { TextField } from "./TextField";
import type { Textarea } from "./Textarea";

export type AllFields =
  | Checkbox
  | CheckboxButtonGroup
  | Code
  | Editor
  | MultiSelect
  | Password
  | PasswordRepeat
  | Slider
  | Switch
  | Textarea
  | TextField;
