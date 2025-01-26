// "use client";
//
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useBoolean } from "@ye/utils/hooks";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z as zod } from "zod";
//
// import LoadingButton from "@mui/lab/LoadingButton";
// import Alert from "@mui/material/Alert";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import Link from "@mui/material/Link";
//
// import { Link as RouterLink, useRouter } from "@ye/i18n";
//
// import { Field, Form, FormHead, Iconify } from "../../components";
//
// import { useAuthCtx } from "./Provider";
// import { FormDivider, FormSocials, SignUpTerms } from "./components";
//
// // ----------------------------------------------------------------------
//
// export type SignUpSchemaType = zod.infer<typeof SignUpSchema>;
//
// export const SignUpSchema = zod.object({
//   firstName: zod.string().min(1, { message: "First name is required!" }),
//   lastName: zod.string().min(1, { message: "Last name is required!" }),
//   email: zod
//     .string()
//     .min(1, { message: "Email is required!" })
//     .email({ message: "Email must be a valid email address!" }),
//   password: zod
//     .string()
//     .min(1, { message: "Password is required!" })
//     .min(6, { message: "Password must be at least 6 characters!" }),
// });
//
// // ----------------------------------------------------------------------
//
// export function SignUp() {
//   const router = useRouter();
//
//   const showPassword = useBoolean();
//
//   const [errorMessage, _setErrorMessage] = useState<string | null>(null);
//
//   const methods = useForm<SignUpSchemaType>({
//     resolver: zodResolver(SignUpSchema),
//   });
//
//   const auth = useAuthCtx();
//
//   const {
//     handleSubmit,
//     formState: { isSubmitting },
//   } = methods;
//
//   const onSubmit = handleSubmit(async () => {
//     try {
//       // await signUp({
//       //   email: data.email,
//       //   password: data.password,
//       //   firstName: data.firstName,
//       //   lastName: data.lastName,
//       // });
//       // await checkUserSession?.();
//
//       router.refresh();
//     } catch (error) {
//       console.error(error);
//       // const feedbackMessage = getErrorMessage(error);
//       // setErrorMessage(feedbackMessage);
//     }
//   });
//
//   const renderForm = () => (
//     <Box sx={{ gap: 3, display: "flex", flexDirection: "column" }}>
//       <Box
//         sx={{
//           display: "flex",
//           gap: { xs: 3, sm: 2 },
//           flexDirection: { xs: "column", sm: "row" },
//         }}
//       >
//         <Field.Text
//           name="firstName"
//           label="First name"
//           slotProps={{ inputLabel: { shrink: true } }}
//         />
//         <Field.Text
//           name="lastName"
//           label="Last name"
//           slotProps={{ inputLabel: { shrink: true } }}
//         />
//       </Box>
//
//       <Field.Text
//         name="email"
//         label="Email address"
//         slotProps={{ inputLabel: { shrink: true } }}
//       />
//
//       <Field.Text
//         name="password"
//         label="Password"
//         placeholder="6+ characters"
//         type={showPassword.value ? "text" : "password"}
//         slotProps={{
//           inputLabel: { shrink: true },
//           input: {
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={showPassword.onToggle} edge="end">
//                   <Iconify
//                     icon={
//                       showPassword.value
//                         ? "solar:eye-bold"
//                         : "solar:eye-closed-bold"
//                     }
//                   />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           },
//         }}
//       />
//
//       <LoadingButton
//         fullWidth
//         color="inherit"
//         size="large"
//         type="submit"
//         variant="contained"
//         loading={isSubmitting}
//         loadingIndicator="Create account..."
//       >
//         Create account
//       </LoadingButton>
//     </Box>
//   );
//
//   return (
//     <>
//       <FormHead
//         title="Get started absolutely free"
//         description={
//           <>
//             {`Already have an account? `}
//             <Link
//               component={RouterLink}
//               href={"/auth/login"}
//               variant="subtitle2"
//             >
//               Get started
//             </Link>
//           </>
//         }
//         sx={{ textAlign: { xs: "center", md: "left" } }}
//       />
//
//       {!!errorMessage && (
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {errorMessage}
//         </Alert>
//       )}
//
//       <Form methods={methods} onSubmit={onSubmit}>
//         {renderForm()}
//       </Form>
//
//       <SignUpTerms />
//
//       <FormDivider />
//       <FormSocials
//         signInWithTwitter={auth.signInWithTwitter}
//         signInWithLinkedIn={auth.signInWithLinkedIn}
//         signInWithDiscord={auth.signInWithDiscord}
//         signInWithGoogle={auth.signInWithGoogle}
//       />
//     </>
//   );
// }
