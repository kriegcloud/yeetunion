
import {
  AutocompleteElement,
  CheckboxButtonGroup,
  CheckboxElement,
  TextFieldElement,
  MultiSelectElement,
  PasswordElement,
  PasswordRepeatElement,
  RadioButtonGroup,
  SelectElement,
  SliderElement,
  SwitchElement,
  TextareaAutosizeElement,
  ToggleButtonGroupElement,
} from "react-hook-form-mui"
import { RHFCode } from "./rhf-code";
import { RHFCountrySelect } from "./rhf-country-select";
import { RHFDatePicker, RHFMobileDateTimePicker } from "./rhf-date-picker";
import { RHFEditor } from "./rhf-editor";
import { RHFNumberInput } from "./rhf-number-input";
import { RHFPhoneInput } from "./rhf-phone-input";
import { RHFRating } from "./rhf-rating";
import { RHFMultiSwitch } from "./rhf-switch";
import { RHFUpload, RHFUploadAvatar, RHFUploadBox } from "./rhf-upload";

// ----------------------------------------------------------------------

export const Field = {
  Code: RHFCode,
  Editor: RHFEditor,
  Select: SelectElement,
  Upload: RHFUpload,
  Switch: SwitchElement,
  Slider: SliderElement,
  Password: PasswordElement,
  PasswordRepeat: PasswordRepeatElement,
  Rating: RHFRating,
  Text: TextFieldElement,
  TextareaAutosizeElement: TextareaAutosizeElement,
  Phone: RHFPhoneInput,
  Checkbox: CheckboxElement,
  UploadBox: RHFUploadBox,
  RadioGroup: RadioButtonGroup,
  DatePicker: RHFDatePicker,
  NumberInput: RHFNumberInput,
  MultiSelect: MultiSelectElement,
  MultiSwitch: RHFMultiSwitch,
  UploadAvatar: RHFUploadAvatar,
  ToggleButtonGroup: ToggleButtonGroupElement,
  Autocomplete: AutocompleteElement,
  CheckboxButtonGroup: CheckboxButtonGroup,
  CountrySelect: RHFCountrySelect,
  MobileDateTimePicker: RHFMobileDateTimePicker,
};
