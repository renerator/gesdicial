using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NotificadorJudicial.Utils.Objetos
{
    public class ObjetoRegion
    {
        private int _idRegion;
        private string _numeroRegion;
        private string _nombreRegion;

        public int IdRegion
        {
            get { return _idRegion; }
            set { _idRegion = value; }
        }

        public string NumeroRegion
        {
            get { return _numeroRegion; }
            set { _numeroRegion = value; }
        }
        public string NombreRegion
        {
            get { return _nombreRegion; }
            set { _nombreRegion = value; }
        }

    }

    public class Provincia
    {
        private int _idProvincia;
        private string _nombreProvincia;

        public int IdProvincia
        {
            get { return _idProvincia; }
            set { _idProvincia = value; }
        }

        public string NombreProvincia
        {
            get { return _nombreProvincia; }
            set { _nombreProvincia = value; }
        }
    }

    public class Comunas
    {
        private int _idComuna;
        private string _nombreComuna;

        public int IdComuna
        {
            get { return _idComuna; }
            set { _idComuna = value; }
        }

        public string NombreComuna
        {
            get { return _nombreComuna; }
            set { _nombreComuna = value; }
        }
    }
}