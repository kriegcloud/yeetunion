'use client';

import {z as zod} from 'zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useBoolean} from '@ye/utils/hooks';
import {zodResolver} from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import {Link as RouterLink, useRouter} from '@ye/i18n';

import {Iconify} from '../../components/iconify';
import {Form, Field} from '../../components/hook-form';

import {FormHead} from '../../components/form-head';
import {FormSocials, FormDivider} from './components';
import { useAuthCtx } from "./Provider";

// ----------------------------------------------------------------------

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, {message: 'Email is required!'})
    .email({message: 'Email must be a valid email address!'}),
  password: zod
    .string()
    .min(1, {message: 'Password is required!'})
    .min(6, {message: 'Password must be at least 6 characters!'}),
  rememberMe: zod.boolean().optional(),
});

// ----------------------------------------------------------------------

export function Login() {
  const router = useRouter();

  const showPassword = useBoolean();

  const auth = useAuthCtx();

  const [errorMessage, _setErrorMessage] = useState<string | null>(null);

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const {
    handleSubmit,
    formState: {isSubmitting},
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await auth.signInWithEmail(
        data.email,
        data.password,
      )

      router.refresh();
    } catch (error) {
      console.error(error);
      // const feedbackMessage = getErrorMessage(error);
      // setErrorMessage(feedbackMessage);
    }
  });

  const renderForm = () => (
    <Box sx={{gap: 3, display: 'flex', flexDirection: 'column'}}>
      <Field.Text name="email" label="Email address" slotProps={{inputLabel: {shrink: true}}}/>

      <Box sx={{gap: 1.5, display: 'flex', flexDirection: 'column'}}>
        <Link
          component={RouterLink}
          href="#"
          variant="body2"
          color="inherit"
          sx={{alignSelf: 'flex-end'}}
        >
          Forgot password?
        </Link>

        <Field.Text
          name="password"
          label="Password"
          placeholder="6+ characters"
          type={showPassword.value ? 'text' : 'password'}
          slotProps={{
            inputLabel: {shrink: true},
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={showPassword.onToggle} edge="end">
                    <Iconify
                      icon={showPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Field.Checkbox label={"Remember me"} name="rememberMe" />
      </Box>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Sign in..."
      >
        Sign in
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <FormHead
        title="Sign in to your account"
        description={
          <>
            {`Don’t have an account? `}
            <Link component={RouterLink} href={"/auth/signup"} variant="subtitle2">
              Get started
            </Link>
          </>
        }
        sx={{textAlign: {xs: 'center', md: 'left'}}}
      />

      {!!errorMessage && (
        <Alert severity="error" sx={{mb: 3}}>
          {errorMessage}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm()}
      </Form>
      <FormDivider/>
      <FormSocials
        signInWithTwitter={auth.signInWithTwitter}
        signInWithLinkedIn={auth.signInWithLinkedIn}
        signInWithDiscord={auth.signInWithDiscord}
        signInWithGoogle={auth.signInWithGoogle}
      />
    </>
  );
}
