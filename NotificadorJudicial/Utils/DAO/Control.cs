using NotificadorJudicial.Utils.Objetos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NotificadorJudicial.Utils.DAO
{
    /// <summary>
    /// Clase de Control para acceso a DAO de Factory (nivel intermedio de acceso)
    /// </summary>
    public class Control
    {
        private Factory _dtFac = new Factory();

        public List<ObjetoMenu> MenuUsuario(int idUsuario)
        {
            return _dtFac.MenuUsuario(idUsuario);
        }

    }
}