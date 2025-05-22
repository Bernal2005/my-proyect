import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
  const saySomeThing = () => {
    console.log("Di algo");
    alert("GAAAAA");
  }
  return (
    <>
      <HeaderComponent />
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3, bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
        <h1>Presiona el boton</h1>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={saySomeThing}
        >
          Pulsa Click
        </Button>
      </Box>
    </>
  )
}

export default HomePage