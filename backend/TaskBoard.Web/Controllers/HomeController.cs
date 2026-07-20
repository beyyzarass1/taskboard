using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TaskBoard.Web.Models;

namespace TaskBoard.Web.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
{
    List<TaskItem> tasks = new()
    {
        new TaskItem { Id = 1, Title = "ASP.NET MVC Öğren", IsCompleted = false },
        new TaskItem { Id = 2, Title = "TaskBoard Projesini Geliştir", IsCompleted = true },
        new TaskItem { Id = 3, Title = "GitHub'a Commit At", IsCompleted = false }
    };

    return View(tasks);
}

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
