// "use client";
//
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z as zod } from "zod";
//
// import LoadingButton from "@mui/lab/LoadingButton";
// import Box from "@mui/material/Box";
//
// import { EmailInboxIcon } from "../../icons";
//
// import { Field, Form } from "../../components/hook-form";
//
// import { FormHead } from "../../components/form-head";
// import { FormResendCode, FormReturnLink } from "./components";
//
// // ----------------------------------------------------------------------
//
// export type VerifySchemaType = zod.infer<typeof VerifySchema>;
//
// export const VerifySchema = zod.object({
//   code: zod
//     .string()
//     .min(1, { message: "Code is required!" })
//     .min(6, { message: "Code must be at least 6 characters!" }),
//   email: zod
//     .string()
//     .min(1, { message: "Email is required!" })
//     .email({ message: "Email must be a valid email address!" }),
// });
//
// // ----------------------------------------------------------------------
//
// export function Verify() {
//   const defaultValues: VerifySchemaType = {
//     code: "",
//     email: "",
//   };
//
//   const methods = useForm<VerifySchemaType>({
//     resolver: zodResolver(VerifySchema),
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
//         slotProps={{ inputLabel: { shrink: true } }}
//       />
//
//       <Field.Code name="code" />
//
//       <LoadingButton
//         fullWidth
//         size="large"
//         type="submit"
//         variant="contained"
//         loading={isSubmitting}
//         loadingIndicator="Verify..."
//       >
//         Verify
//       </LoadingButton>
//     </Box>
//   );
//
//   return (
//     <>
//       <FormHead
//         icon={<EmailInboxIcon />}
//         title="Please check your email!"
//         description={`We've emailed a 6-digit confirmation code. \nPlease enter the code in the box below to verify your email.`}
//       />
//
//       <Form methods={methods} onSubmit={onSubmit}>
//         {renderForm()}
//       </Form>
//
//       <FormResendCode onResendCode={() => {}} value={0} disabled={false} />
//
//       <FormReturnLink href={"/auth/login"} />
//     </>
//   );
// }
