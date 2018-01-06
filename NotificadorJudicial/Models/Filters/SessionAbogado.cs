using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace NotificadorJudicial.Models.Filters
{
    public class SessionAbogado : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if ((HttpContext.Current.Session["Abogado"] == null))
            {
                var redirectTargetDictionary = new RouteValueDictionary
                                                                    {
                                                                        {"action", "Index"},
                                                                        {"controller", "Error"},
                                                                        {"error", "403"}
                                                                    };

                filterContext.Result = new RedirectToRouteResult(redirectTargetDictionary);
            }

            base.OnActionExecuting(filterContext);
        }
    }
}