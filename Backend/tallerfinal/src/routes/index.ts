import { UsuarioRoutes } from "./usuarioRoutes";
import { LibroRoutes } from "./libroRoutes";
import { EjemplarRoutes } from "./ejemplarRoutes";
import { PrestarRoutes } from "./prestarRoutes";

export class Routes {
   public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes()
   public libroRoutes: LibroRoutes = new LibroRoutes()
   public ejemplarRoutes: EjemplarRoutes = new EjemplarRoutes()
   public prestarRoutes: PrestarRoutes = new PrestarRoutes()
}