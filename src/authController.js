const auth = require('./firebase');

exports.getRegister = (req, res) => { res.render('register', { error: null }); };
exports.getLogin = (req, res) => { res.render('login', { error: null }); };

exports.postRegister = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Ahora llamamos directamente a auth.createUser porque ya importamos el servicio de autenticación
        await auth.createUser({ email, password });
        res.redirect('/login');
    } catch (error) {
        res.render('register', { error: 'Error al registrar usuario: ' + error.message });
    }
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Ahora llamamos directamente a auth.getUserByEmail
        const userRecord = await auth.getUserByEmail(email);
        res.redirect(`/home?email=${userRecord.email}&uid=${userRecord.uid}`);
    } catch (error) {
        res.render('login', { error: 'Credenciales incorrectas o usuario no encontrado.' });
    }
};

exports.getHome = (req, res) => {
    const { email, uid } = req.query;
    if (!email) return res.redirect('/login');
    res.render('home', { email, uid });
};
