import type { Breakpoint } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import RouterLink from "next/link";

import { Logo } from "../../components/logo";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Minimal",
    children: [
      { name: "About us", href: "/about" },
      { name: "Contact us", href: "/contact" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and condition", href: "#" },
      { name: "Privacy policy", href: "#" },
    ],
  },
  {
    headline: "Contact",
    children: [{ name: "support@yeetunion.com", href: "#" }],
  },
];

// ----------------------------------------------------------------------

const FooterRoot = styled("footer")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.vars.palette.background.default,
}));

export type FooterProps = React.ComponentProps<typeof FooterRoot>;

export function Footer({
  sx,
  layoutQuery = "md",
  ...other
}: FooterProps & { layoutQuery?: Breakpoint }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Divider />

      <Container
        sx={(theme) => ({
          pb: 5,
          pt: 10,
          textAlign: "center",
          [theme.breakpoints.up(layoutQuery)]: { textAlign: "unset" },
        })}
      >
        <Logo />

        <Grid
          container
          sx={[
            (theme) => ({
              mt: 3,
              justifyContent: "center",
              [theme.breakpoints.up(layoutQuery)]: {
                justifyContent: "space-between",
              },
            }),
          ]}
        >
          <Grid size={{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={(theme) => ({
                mx: "auto",
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: "unset" },
              })}
            >
              Yeet Union ©
            </Typography>

            <Box
              sx={(theme) => ({
                mt: 3,
                mb: 5,
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.up(layoutQuery)]: {
                  mb: 0,
                  justifyContent: "flex-start",
                },
              })}
            >
              {/*{_socials.map((social) => (*/}
              {/*  <IconButton key={social.label}>*/}
              {/*    {social.value === 'twitter' && <TwitterIcon />}*/}
              {/*    {social.value === 'facebook' && <FacebookIcon />}*/}
              {/*    {social.value === 'instagram' && <InstagramIcon />}*/}
              {/*    {social.value === 'linkedin' && <LinkedinIcon />}*/}
              {/*  </IconButton>*/}
              {/*))}*/}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, [layoutQuery]: 6 }}>
            <Box
              sx={(theme) => ({
                gap: 5,
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: "row" },
              })}
            >
              {LINKS.map((list) => (
                <Box
                  key={list.headline}
                  sx={(theme) => ({
                    gap: 2,
                    width: 1,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    [theme.breakpoints.up(layoutQuery)]: {
                      alignItems: "flex-start",
                    },
                  })}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: FooterProps) {
  return (
    <FooterRoot
      sx={[
        {
          py: 5,
          textAlign: "center",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: "caption" }}>
          © All rights reserved.
          <br /> made by
          <Link href="https://yeetunion.com/"> yeetunion.com </Link>
        </Box>
      </Container>
    </FooterRoot>
  );
}
