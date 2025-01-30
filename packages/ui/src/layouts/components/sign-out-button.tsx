import Button from "@mui/material/Button";

type Props = {
  onClick: () => Promise<void>;
}
export function SignOutButton({ onClick }: Props) {
  return (
    <Button
      fullWidth
      size="large"
      color="error"
      onClick={onClick}
    >
      Logout
    </Button>
  );
}
