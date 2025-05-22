import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { Link } from "react-router-dom"

function HeaderComponent() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
          Bienvenido
        </Typography>
        <div>
          <IconButton
            component={Link}
            to="/"
            color="inherit"
            size="large"
            sx={{ mr: 1 }}
            aria-label="Home"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            component={Link}
            to="/blog"
            color="inherit"
            size="large"
            aria-label="Blog"
          >
            <AutoStoriesIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent