using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NotificadorJudicial.Startup))]
namespace NotificadorJudicial
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
