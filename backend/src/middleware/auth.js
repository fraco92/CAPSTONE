//TODO protect routes with auth middleware that need the user to be authenticated

export function authMiddleware(req, res, next) {
  const tokenHeaderKey = 'jwt-token'
  const { token } = req.headers.get(tokenHeaderKey)
  if (!token) {
    return res.status(401).json({ message: 'Token non esistente' });
  }

  try {
    const decoded = jwt.verify(token, JWTSecretKey)
    console.info('decoded', decoded)
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({status: 'invalid auth', message: "Token non valido"})
  }
}