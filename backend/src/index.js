const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3005;

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'example', // Cambia esto si tienes un usuario diferente
    password: 'example', // Cambia esto por tu contraseña
    database: 'movie_db'
});

// Conectar a MySQL
db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

// Obtener todos los películas
app.get('/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});


// Obtener todos los actores
app.get('/casting', (req, res) => {
    db.query('SELECT * FROM casting', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});


// Obtener todos las categorías
app.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Obtener todos las sagas
app.get('/sagas', (req, res) => {
    db.query('SELECT * FROM saga', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});


app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});
/*
// Obtener todos los usuarios
app.get('/users', (req, res) => {
    db.query('SELECT u.id AS user_id, u.name AS user_name, u.email, ml.id AS music_list_id, ml.name AS music_list_name, ml.description, ml.created_at AS list_created_at FROM users u LEFT JOIN music_lists ml ON u.id = ml.user_id', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Obtener un usuario por ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT u.id AS user_id, u.name AS user_name, u.email, ml.id AS music_list_id, ml.name AS music_list_name, ml.description, ml.created_at AS list_created_at FROM users u LEFT JOIN music_lists ml ON u.id = ml.user_id WHERE u.id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        res.json(results[0]);
    });
});
*/

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
