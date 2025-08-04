const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ error: 'No token provided. Access denied.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded.user; // ✅ Use decoded.user if your payload was { user: { id: ... } }
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    console.error('JWT Verification Error:', err.message); // helpful in dev
    res.status(401).json({ error: 'Invalid token' });
  }
};
