using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Hosting;
using System.Web;


namespace ProModelAutodeskEdition.Help.Controllers
{
	public class HelpController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Topic(string page)
		{
			ViewData["page"] = page;
			return View();
		}

		public IActionResult Error()
		{
			return View();
		}
	}
}
