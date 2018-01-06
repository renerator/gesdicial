using NotificadorJudicial.Utils.Objetos;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace NotificadorJudicial.Utils.DAO
{
    /// <summary>
    /// Clase interna de Factory para conexion a la BD.
    /// </summary>
    internal class Factory
    {
        /// <summary>
        /// Metodo Menu
        /// Segun el ID del usuario, carga el menu para la aplicacion, siendo Abogado o Receptor.
        /// </summary>
        /// <param name="idUsuario">ID del usuario Logueado</param>
        /// <returns>Lista de Menú a ser consumida por Helper Menú</returns>
        public List<ObjetoMenu> MenuUsuario(int idUsuario)
        {
            var listadoMenu = new List<ObjetoMenu>();
            var data = new DBConector().EjecutarProcedimientoAlmacenado("SP_GET_ListaMenu", new System.Collections.Hashtable()
                                                                                            {
                                                                                                {"idTipoRegistro", idUsuario}
                                                                                            });

            if (data.Rows.Count > 0)
            {
                for (var i = 0; i < data.Rows.Count; i++)
                {
                    var validador = new object();
                    var resultadoListado = new ObjetoMenu();
                    validador = data.Rows[i].Field<object>("idMenu");
                    resultadoListado.IdMenu = validador != null ? data.Rows[i].Field<int>("idMenu") : -1;

                    validador = data.Rows[i].Field<object>("Clase");
                    resultadoListado.Clase = validador != null ? data.Rows[i].Field<string>("Clase") : "NO ASIGNADO";

                    validador = data.Rows[i].Field<object>("PieMenu");
                    resultadoListado.PieMenu = validador != null ? data.Rows[i].Field<string>("PieMenu") : "NO ASIGNADO";

                    validador = data.Rows[i].Field<object>("Titulo");
                    resultadoListado.Titulo = validador != null ? data.Rows[i].Field<string>("Titulo") : "NO ASIGNADO";

                    validador = data.Rows[i].Field<object>("Action");
                    resultadoListado.Accion = validador != null ? data.Rows[i].Field<string>("Action") : "NO ASIGNADO";

                    validador = data.Rows[i].Field<object>("Controler");
                    resultadoListado.Controller = validador != null ? data.Rows[i].Field<string>("Controler") : "NO ASIGNADO";


                    listadoMenu.Add(resultadoListado);
                }
            }
            return listadoMenu;
        }
    }
}