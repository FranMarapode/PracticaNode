import express from "express";
const app = express()
app.use(express.json());
const port = 3000
const usuario = {
    nombre: "Ana",
    edad: 25
}
const materias = [{ nombre: "Lengua"}, {nombre: "Matematica"}]
const personas = []
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

app.get('/personas', (req, res) => {
  res.json(personas);
});

// POST - Agregar una persona
app.post('/personas', (req, res) => {
  const persona = req.body;
  console.log(persona);
  if (!persona) return res.status(400).json({ error: 'Faltan datos de la persona.' });

  personas.push(persona);
  res.status(201).json({ mensaje: 'Persona agregada.', personas });
});

// DELETE - Eliminar una persona
app.delete('/personas/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);
  if (isNaN(indice) || !personas[indice]) {
    return res.status(404).json({ error: 'No es posible eliminar la persona debido a que no existe.' });
  }
  const eliminado = personas.splice(indice, 1);
  res.json({ mensaje: `Persona eliminada: ${eliminado[0].nombre}`, personas });
}); 

app.use((req, res, next) => {
  res.redirect('https://http.cat/404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});