using Microsoft.AspNetCore.Mvc;
using TaskBoard.Web.ViewModels;

namespace TaskBoard.Web.Controllers;

[ApiController]
[Route("api/tasks")]
public class TasksApiController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok("API çalışıyor");
    }

   [HttpPost]
public IActionResult Create([FromBody] CreateTaskRequest request)
{
    return Ok(request);
}
}