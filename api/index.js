import app from "../server.js";

export default (req, res) => {
  // Esto asegura que Express maneje la petición correctamente
  return app(req, res);
};