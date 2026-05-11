const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Benvingut a l\'agència de viatges!');
});

// Endpoint per a la Fase 1 (Pas 2 de l'enunciat)
app.get('/api/destins', (req, res) => {
  res.json(['Barcelona', 'París', 'Londres', 'Tòquio']);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor funcionant a http://localhost:${PORT}`);
  });
}

module.exports = app; // Exportem per poder fer el test