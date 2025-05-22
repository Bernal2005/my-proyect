import HeaderComponent from "../components/HeaderComponent"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function BlogPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("El formulario se ha enviado")
  }
  return (
    <>
      <HeaderComponent />
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3, bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Formulario - Tu opinión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Nombre"
            id="userName"
            name="userName"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Comentario"
            id="comentario"
            name="comentario"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={3}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Enviar
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default BlogPage