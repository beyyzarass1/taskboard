using Microsoft.AspNetCore.Mvc;
using TaskBoard.Web.ViewModels;

namespace TaskBoard.Web.Controllers;

public class TasksController : Controller
{
    [HttpGet]
    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Create(CreateTaskViewModel model)
    {
        if (!ModelState.IsValid)
        {
            return View(model);
        }

        return RedirectToAction("Index", "Home");
    }
}