import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export interface LoginProps {
  email: string;
  password: string;
}

export interface ValidateProps {
  email: boolean;
  password: boolean;
}

export default function SignIn() {
  const [user, setUser] = React.useState<LoginProps>({
    email: '',
    password: '',
  });
  const [validate, setValidate] = React.useState<ValidateProps>({
    email: false,
    password: false,
  });

  const [disabled, setDisabled] = React.useState<boolean>(true);

  const handleSubmit = () => {
    axios
      .post('http://localhost:8080/users/login', {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem('TOKEN', res.data.token);
        if (localStorage.getItem('TOKEN')) {
          window.location.href = '/';
        } else {
          alert('유효하지 않은 사용자입니다./n다시 로그인을 시도해주세요.');
          window.location.href = '/login';
        }
      })
      .catch((err) => alert(err));
  };

  const handleInputValue = (e: any) => {
    //validation check input
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    if (!user.email || !user.password) return false;

    if (!user.email.includes('@') || !user.email.includes('.')) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    if (user.password.length < 8) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputValue}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputValue}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
