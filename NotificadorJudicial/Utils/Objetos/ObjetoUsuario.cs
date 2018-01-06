using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NotificadorJudicial.Utils.Objetos
{
    public class ObjetoUsuario
    {
        private int _idRegistroUsuario;
        private int _idTipoRegistro;
        private string _nombreUsuario;
        private string _rutUsuario;
        private string _claveUsuario;
        private string _emailUsuario;
        private string _telefonoUsuario;

        public int IdRegistroUsuario
        {
            get { return _idRegistroUsuario; }
            set { _idRegistroUsuario = value; }
        }
        public int IdTipoRegistro
        {
            get { return _idTipoRegistro; }
            set { _idTipoRegistro = value; }
        }

        public string NombreUsuario
        {
            get { return _nombreUsuario; }
            set { _nombreUsuario = value; }
        }

        public string RutUsuario
        {
            get { return _rutUsuario; }
            set { _rutUsuario = value; }
        }

        public string ClaveUsuario
        {
            get { return _claveUsuario; }
            set { _claveUsuario = value; }
        }

        public string EmailUsuario
        {
            get { return _emailUsuario; }
            set { _emailUsuario = value; }
        }

        public string TelefonoUsuario
        {
            get { return _telefonoUsuario; }
            set { _telefonoUsuario = value; }
        }

    }
}