Gün 10 

Bugün görev yönetimi altyapısı geliştirildi.

Görevleri temsil eden `TaskItem` modeli ve görev durumlarını yönetmek için `TaskStatus` enumu oluşturuldu.

Görev işlemlerini tek bir yerde toplamak amacıyla `TaskService` sınıfı geliştirildi ve görev ekleme, listeleme, silme ile tamamlandı olarak işaretleme işlemleri bu servis üzerinden çalışacak şekilde düzenlendi.

Ayrıca aynı başlıklı görevlerin tekrar eklenmesini önleyen kontrol, boş görev başlığı doğrulaması ve görevleri durumlarına göre filtrelemek için `GetByStatus()` metodu eklendi.

Bu düzenlemelerle birlikte proje daha düzenli, okunabilir ve geliştirilebilir bir yapıya kavuştu.