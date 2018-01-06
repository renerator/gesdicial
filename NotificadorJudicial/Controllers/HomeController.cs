using NotificadorJudicial.Models.Filters;
using System;
using System.Collections;
using System.Drawing;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NotificadorJudicial.Controllers
{
    public class HomeController : Controller
    {
        //[SessionFilter]
        //[SessionReceptor]
        public ActionResult Index()
        {
         
            try
            {
                ViewBag.Message = HttpContext.Session["usuario"].ToString();
            }
            catch (Exception ex)
            {
                return ErrorPage(ex.Message);
            }
            return View();         
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        
        [SessionFilter]
        public ActionResult MiPerfil()
        {
            return View();
        }
        //[SessionFilter]
        //[SessionReceptor]
        public ActionResult MisClientes()
        {
            return View();
        }
        //[SessionFilter]
        //[SessionAbogado]
        public ActionResult MisEncargos()
        {
            return View();
        }
        public ActionResult AccessDenied()
        {
            return View();
        }
        //[SessionFilter]
        public ActionResult ErrorPage(string error)
        {
            ViewBag.Message = error + " desde el sitio controlado";
            return View("Error");
        }
    }
}