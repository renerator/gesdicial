using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace NotificadorJudicial.Models.Filters
{
    /// <summary>
    /// Clase de filtro de sesión, permite controlar que el contenido que no es publico, no se pueda ver, deb enviar a alguna página de control de acceso o al home público.
    /// Creada por: René Quiroz.
    /// Empresa: Produce Software Ltda.
    /// </summary>
    public class SessionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if ((HttpContext.Current.Session["usuario"] == null))
            {
                var redirectTargetDictionary = new RouteValueDictionary
                                                                    {
                                                                        {"action", "Login"},
                                                                        {"controller", "Account"},
                                                                        {"area", ""}
                                                                    };

                filterContext.Result = new RedirectToRouteResult(redirectTargetDictionary);
            }

            base.OnActionExecuting(filterContext);
        }
    }
}