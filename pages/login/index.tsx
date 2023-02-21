import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-48">
      <Box
        component="form"
        autoComplete="false"
        className="flex flex-col justify-center gap-2 p-3 border w-full md:w-1/2 xl:w-1/3"
      >
        <TextField
          id="username"
          type="email"
          label="Username"
          variant="outlined"
          placeholder="email@example.com"
          required
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          variant="outlined"
          placeholder="********"
          required
        />

        <Button type="submit" variant="outlined" size="large">
          Log In
        </Button>
      </Box>

      <Box className="flex justify-center mt-3 p-2 border w-full md:w-1/2 xl:w-1/3">
        <Link href="/signup" className="normal-case no-underline text-blue-500">
          Create an account
        </Link>
      </Box>
    </section>
  );
};

export default Login;
