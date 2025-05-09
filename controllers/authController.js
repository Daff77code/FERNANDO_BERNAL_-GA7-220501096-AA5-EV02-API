const fs = require('fs');
const path = './data/users.json';

// Registro
exports.register = (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(path));

  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Usuario ya existe' });
  }

  users.push({ username, password });
  fs.writeFileSync(path, JSON.stringify(users, null, 2));
  res.status(201).json({ message: 'Usuario registrado con éxito' });
};

// Login
exports.login = (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(path));

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Autenticación satisfactoria' });
  } else {
    res.status(401).json({ message: 'Error en la autenticación' });
  }
};
