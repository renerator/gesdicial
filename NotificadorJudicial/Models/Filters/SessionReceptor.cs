using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace NotificadorJudicial.Models.Filters
{
    public class SessionReceptor : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if ((HttpContext.Current.Session["Receptor"] == null))
            {
                var redirectTargetDictionary = new RouteValueDictionary
                                                                    {
                                                                        {"action", "AccessDenied"},
                                                                        {"controller", "Home"},
                                                                        {"area", ""}
                                                                    };

                filterContext.Result = new RedirectToRouteResult(redirectTargetDictionary);
            }

            base.OnActionExecuting(filterContext);
        }
    }
}