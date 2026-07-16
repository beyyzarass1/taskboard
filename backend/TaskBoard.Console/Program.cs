List<string> tasks = new List<string>();


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
Console.WriteLine("0 - Çıkış");

    Console.WriteLine();

    Console.Write("Seçiminiz: ");

    string choice = Console.ReadLine() ?? "";

    if (choice == "1")
{
    Console.WriteLine();

    if (tasks.Count == 0)
    {
        Console.WriteLine("Henüz görev bulunmuyor.");
    }
    else
    {
        int index = 1;

foreach (string task in tasks)
{
    Console.WriteLine($"{index}. {task}");
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


    tasks.Add(title);

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
    if (taskNumber >= 1 && taskNumber <= tasks.Count)
    {
        tasks.RemoveAt(taskNumber - 1);

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

if (choice == "0")
{
    break;
}

}