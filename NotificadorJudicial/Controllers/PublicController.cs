using NotificadorJudicial.Utils.Objetos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NotificadorJudicial.Controllers
{
    public class PublicController : Controller
    {
        // GET: Public
        public ActionResult Index()
        {
            HttpContext.Session.Clear();
            HttpContext.Session.Abandon();
            return View();
        }

        public ActionResult Ingreso()
        {
            HttpContext.Session["usuario"] = "Login";
            HttpContext.Session["Receptor"] = "Usuario Receptor";
            HttpContext.Session["Abogado"] = null;
            var region = new ObjetoRegion();
            var provincia = new Provincia();
            var comuna = new Comunas();
            /*
             Realizar la validacion del usuario contra la BD, enviar perfil y cargar el menú, según corresponda.
             envia a la vista de control del receptor por defecto, si es abogado, debiese enviar a la pagina que corresponde al Abogado.
             */

            return Redirect(Url.Content("~/Home/Index"));

        }
    }
}
