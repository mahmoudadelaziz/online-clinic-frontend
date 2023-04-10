import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const Navbar = ({ setDrawerOpen }) => {
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
            <Typography variant="h4" fontWeight="bold">
              Clinic
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};
