import type { StepIconProps } from "@mui/material/StepIcon";

import classnames from "classnames";

import styles from "./styles.module.css";

const StepperCustomDot = (props: StepIconProps) => {
  const { active, completed, error } = props;

  if (error) {
    return <i className="ri-alert-fill text-xl scale-[1.2] text-error" />;
  }
  if (completed) {
    return (
      <div
        className={classnames(
          styles.stepperCustomDot,
          "flex items-center justify-center",
          {
            completedStepperCustomDot: completed,
          },
        )}
      >
        <i className="ri-check-line text-sm text-white" />
      </div>
    );
  }
  return (
    <div
      className={classnames(styles.stepperCustomDot, {
        activeStepperCustomDot: active,
      })}
    />
  );
};

export default StepperCustomDot;
