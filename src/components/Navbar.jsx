import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Container, Grid,
  IconButton,
  Toolbar,
  // Link,
  Typography
} from "@mui/material";
import { useAuth } from "../AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ setDrawerOpen }) => {
  const obb = useAuth();
  const { authUser } = useAuth();
  const navigate = useNavigate();
  console.log(obb);
  const route = 'profile';
  return (
    <nav>
      <AppBar position="static">
        <Container maxWidth="xxl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Grid container spacing={5} justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  <Link to="/">
                    Clinic
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  onClick={() => navigate('/profile', { replace: true })}
                  sx={{ mr: 2 }}
                >
                  {/*<Typography variant="p" fontWeight="bold">*/}
                  <Link to={`${route}`}>
                    { authUser }
                  </Link>
                  {/*</Typography>*/}
                </IconButton>

              </Grid>

            </Grid>




          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};
