import type {BoxProps} from '@mui/material/Box';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import {DiscordIcon, GoogleIcon, LinkedinIcon, TwitterIcon} from '../../../icons';

// ----------------------------------------------------------------------

type FormSocialsProps = BoxProps & {
  signInWithGoogle?: () => void;
  signInWithDiscord?: () => void;
  signInWithTwitter?: () => void;
  signInWithLinkedIn?: () => void;
};

export function FormSocials({
                              sx,
                              signInWithGoogle,
                              signInWithDiscord,
                              signInWithTwitter,
                              signInWithLinkedIn,
                              ...other
                            }: FormSocialsProps) {
  return (
    <Box
      sx={[
        () => ({
          gap: 1.5,
          display: 'flex',
          justifyContent: 'center',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <IconButton color="inherit" onClick={signInWithGoogle}>
        <GoogleIcon width={22}/>
      </IconButton>
      <IconButton color="inherit" onClick={signInWithLinkedIn}>
        <LinkedinIcon width={22}/>
      </IconButton>
      <IconButton color="inherit" onClick={signInWithTwitter}>
        <TwitterIcon width={22}/>
      </IconButton>
      <IconButton color="inherit" onClick={signInWithDiscord}>
        <DiscordIcon width={22}/>
      </IconButton>
    </Box>
  );
}
