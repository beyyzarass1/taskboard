using TaskBoard.Console.Models;

namespace TaskBoard.Console.Services;



public class TaskService
{
    private List<TaskItem> tasks = new();

    public void Add(TaskItem task)
{
    bool exists = tasks.Any(t => t.Title == task.Title);

    if (!exists)
    {
        tasks.Add(task);
    }
}

    public List<TaskItem> GetAll()
    {
        return tasks;
    }

    public List<TaskItem> GetByStatus(TaskBoard.Console.Models.TaskStatus status)
{
    return tasks.Where(t => t.Status == status).ToList();
}

    public void Remove(int id)
    {
        TaskItem? task = tasks.FirstOrDefault(t => t.Id == id);

        if (task != null)
        {
            tasks.Remove(task);
        }
    }

    public void MarkAsDone(int id)
    {
        TaskItem? task = tasks.FirstOrDefault(t => t.Id == id);

        if (task != null)
        {
            task.Status = TaskBoard.Console.Models.TaskStatus.Done;
        }
    }
}