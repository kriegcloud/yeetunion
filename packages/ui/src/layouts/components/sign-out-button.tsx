import Button from "@mui/material/Button";

// ----------------------------------------------------------------------

export function SignOutButton() {
  return (
    <Button
      fullWidth
      size="large"
      color="error"
      onClick={() => console.log("TODO IMPLEMENT LOGOUT")}
    >
      Logout
    </Button>
  );
}
