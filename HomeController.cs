using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Alumni()
        {
            return View();
        }

        public ActionResult Courses()
        {
            ViewBag.Message = "";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult Main()
        {
            ViewBag.Message = "Your Main page.";

            return View();
        }
        public ActionResult StudRegistration()
        {
            ViewBag.Message = "Your StudRegistration page.";

            return View();
        }
        public ActionResult Registration()
        {
            ViewBag.Message = "Your Registration page.";

            return View();
        }
    }
}
