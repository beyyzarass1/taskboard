using TaskBoard.Console.Models;
using TaskBoard.Console.Services;

TaskService service = new TaskService();




while (true)
{
    //Console.Clear();

    Console.WriteLine("==================================");
    Console.WriteLine("      TASKBOARD CONSOLE");
    Console.WriteLine("==================================");
    Console.WriteLine();

Console.WriteLine("1 - Görevleri Listele");
Console.WriteLine("2 - Yeni Görev Ekle");
Console.WriteLine("3 - Görev Sil");
Console.WriteLine("4 - Görevi Tamamlandı Olarak İşaretle");
Console.WriteLine("0 - Çıkış");

    Console.WriteLine();

    Console.Write("Seçiminiz: ");

    string choice = Console.ReadLine() ?? "";

    if (choice == "1")
{
    Console.WriteLine();

    if (service.GetAll().Count == 0)

   
    {
        Console.WriteLine("Henüz görev bulunmuyor.");
    }
    else
    {
        int index = 1;

foreach (TaskItem task in service.GetAll())
{
    Console.WriteLine($"{index}. {task.Title} - {task.Status}");
    index++;
}
    }

    Console.ReadLine();
}

if (choice == "2")
{
    Console.WriteLine();
    Console.Write("Görev Başlığı: ");

    string title = Console.ReadLine() ?? "";


    if (string.IsNullOrWhiteSpace(title))
{
    Console.WriteLine("Görev başlığı boş olamaz.");
    Console.ReadLine();
    continue;
}


    TaskItem task = new TaskItem
{
    Id = service.GetAll().Count + 1,
    Title = title
};

service.Add(task);

     Console.WriteLine();
    Console.WriteLine("Görev başarıyla eklendi.");


    Console.ReadLine();
}

if (choice == "3")
{
    Console.WriteLine();
    Console.Write("Silinecek görev numarası: ");

    string input = Console.ReadLine() ?? "";

    if (int.TryParse(input, out int taskNumber))
{
    if (taskNumber >= 1 && taskNumber <= service.GetAll().Count)
    {
        service.Remove(taskNumber);

        Console.WriteLine("Görev başarıyla silindi.");
    }
    else
    {
        Console.WriteLine("Geçersiz görev numarası.");
    }
}
else
{
    Console.WriteLine("Geçersiz numara girdiniz.");
}

    Console.ReadLine();
}

if (choice == "4")
{
    Console.WriteLine();
    Console.Write("Tamamlanan görev numarası: ");

    string input = Console.ReadLine() ?? "";

    if (int.TryParse(input, out int taskNumber))
    {
        service.MarkAsDone(taskNumber);

        Console.WriteLine("Görev tamamlandı olarak işaretlendi.");
    }
    else
    {
        Console.WriteLine("Geçersiz numara girdiniz.");
    }

    Console.ReadLine();
}

if (choice == "0")
{
    break;
}

}