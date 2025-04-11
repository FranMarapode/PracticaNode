import express from "express";
const app = express()
const port = 3000
const usuario = {
    nombre: "Ana",
    edad: 25
}

const materias = [{ nombre: "Lengua"}, {nombre: "Matematica"}]
    


const productos = ["Mouse", "Teclado", "Monitor"]
    
app.get('/', (req, res) => {
  res.send('Bienvenido a mi sevidor')
})

app.get('/saludo', (req, res) => {
    res.send('¡Hola Mundo!');
  });

app.get('/numero', (req, res) => {
    res.send('42');
  });

app.get('/usuario', (req, res) => {
    res.json(usuario);
  });

app.get('/productos', (req, res) => {
    res.json(productos);
  });

app.get('/materias', (req, res) => {
    res.json(materias);
  });


  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
