Gün 12

Bugün ASP.NET Core MVC üzerinde form oluşturmayı öğrendim.

İlk olarak ViewModels klasörü oluşturularak CreateTaskViewModel sınıfı eklendi.

ViewModel içerisinde DataAnnotations kullanılarak Required ve StringLength doğrulamaları tanımlandı.

Ardından TasksController oluşturuldu ve Create Action'larının GET ve POST sürümleri yazıldı.

Create.cshtml sayfasında Razor Tag Helper kullanılarak görev ekleme formu hazırlandı.

Form elemanları asp-for ile modele bağlandı, asp-validation-for ve asp-validation-summary kullanılarak doğrulama mesajları gösterildi.

ModelState.IsValid kontrolü ile sunucu tarafında doğrulama gerçekleştirildi.

Son olarak navbar içerisine "Yeni Görev" bağlantısı eklenerek görev ekleme ekranına kolay erişim sağlandı.

Bugün MVC'de ViewModel kullanımı, form işlemleri ve server-side validation konularını uygulamalı olarak öğrenmiş oldum.