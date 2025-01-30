// "use client";
//
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z as zod } from "zod";
//
// import LoadingButton from "@mui/lab/LoadingButton";
// import Box from "@mui/material/Box";
//
// import { PasswordIcon } from "../../icons";
//
// import { Field, Form } from "../../components/hook-form";
//
// import { FormHead } from "../../components/form-head";
// import { FormReturnLink } from "./components";
//
// // ----------------------------------------------------------------------
//
// export type ResetPasswordSchemaType = zod.infer<typeof ResetPasswordSchema>;
//
// export const ResetPasswordSchema = zod.object({
//   email: zod
//     .string()
//     .min(1, { message: "Email is required!" })
//     .email({ message: "Email must be a valid email address!" }),
// });
//
// // ----------------------------------------------------------------------
//
// export function ResetPassword() {
//   const defaultValues: ResetPasswordSchemaType = {
//     email: "",
//   };
//
//   const methods = useForm<ResetPasswordSchemaType>({
//     resolver: zodResolver(ResetPasswordSchema),
//     defaultValues,
//   });
//
//   const {
//     handleSubmit,
//     formState: { isSubmitting },
//   } = methods;
//
//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 500));
//       console.info("DATA", data);
//     } catch (error) {
//       console.error(error);
//     }
//   });
//
//   const renderForm = () => (
//     <Box sx={{ gap: 3, display: "flex", flexDirection: "column" }}>
//       <Field.Text
//         name="email"
//         label="Email address"
//         placeholder="example@gmail.com"
//         autoFocus
//         slotProps={{ inputLabel: { shrink: true } }}
//       />
//
//       <LoadingButton
//         fullWidth
//         size="large"
//         type="submit"
//         variant="contained"
//         loading={isSubmitting}
//         loadingIndicator="Send request..."
//       >
//         Send request
//       </LoadingButton>
//     </Box>
//   );
//
//   return (
//     <>
//       <FormHead
//         icon={<PasswordIcon />}
//         title="Forgot your password?"
//         description={`Please enter the email address associated with your account and we'll email you a link to reset your password.`}
//       />
//
//       <Form methods={methods} onSubmit={onSubmit}>
//         {renderForm()}
//       </Form>
//
//       <FormReturnLink href={"/auth/login"} />
//     </>
//   );
// }
