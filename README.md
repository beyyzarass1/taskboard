# TaskBoard

## Gün 1

TaskBoard, görevleri takip etmek için geliştirilen basit bir web uygulamasıdır.

Bu proje Full-Stack staj programı kapsamında geliştirilmektedir.

İlk aşamada HTML kullanılarak temel sayfa yapısı oluşturulmuştur.

İlerleyen aşamalarda projeye CSS ile tasarım eklenecektir.

JavaScript kullanılarak görev ekleme işlemleri geliştirilecektir.

Backend tarafında C# ve ASP.NET teknolojileri kullanılacaktır.

Projede Git ile sürüm kontrolü yapılmaktadır.



## Gün 2 - HTML Formları ve Tablo Yapısı

- Görev başlığı giriş alanı oluşturuldu.
- Görev önceliği seçimi için `select` eklendi.
- Görev açıklaması için `textarea` eklendi.
- Görev listesini göstermek için tablo oluşturuldu.
- Tabloda **Başlık**, **Öncelik**, **Durum** ve **Oluşturma Tarihi** sütunları eklendi.
- Forma örnek olarak üç görev kaydı eklendi.
- `required`, `maxlength` ve `placeholder` özellikleri kullanılarak form doğrulaması geliştirildi.
`label`, `id` ve `aria-labelledby` kullanılarak erişilebilirlik artırıldı.

## Gün 3

- CSS dosyası oluşturuldu.
- HTML ile CSS bağlantısı kuruldu.
- Form ve tablo tasarımı geliştirildi.
- Flexbox kullanılarak kart yapısı oluşturuldu.
- Buton tasarımı ve hover efekti eklendi.
- CSS değişkenleri kullanılmaya başlandı.

## Gün 4

- Responsive tasarım eklendi.
- CSS Grid kullanıldı.
- KPI kartları oluşturuldu.
- Mobile First yaklaşımı uygulandı.
- Media Query kullanıldı.
- Görev formu ve görev listesi iki kolon olacak şekilde düzenlendi.
- Tablo responsive hale getirildi.

## Gün 5

- TaskBoard sayfası tek bir dashboard görünümüne dönüştürüldü.
- KPI kartları son haline getirildi.
- Yeni görev formu düzenlendi.
- Görev listesi geliştirilerek toplam 5 örnek görev eklendi.
- Öncelik (Yüksek, Normal, Düşük) badge yapısı güncellendi.
- Durum (Açık, Devam Ediyor, Tamamlandı) badge'leri eklendi.
- Görev bulunmadığında gösterilecek `empty-state` bölümü oluşturuldu.
- Kod yapısı düzenlenerek gereksiz etiketler temizlendi.


## Gün 6

- JavaScript dosyası (`app.js`) projeye eklendi.
- Form elemanları `querySelector()` ile seçildi.
- Formun `submit` olayı `addEventListener()` ile yönetildi.
- `preventDefault()` kullanılarak sayfanın yenilenmesi engellendi.
- Formdan girilen veriler `.value` ile okundu.
- Yeni görevler tabloya dinamik olarak eklendi.
- Form gönderildikten sonra alanlar temizlendi (`form.reset()`).
- İmleç tekrar görev başlığı alanına getirildi (`focus()`).
- KPI kartları (Toplam, Açık, Tamamlanan) JavaScript ile güncellenebilir hale getirildi.

## Gün 7

Görevleri tasks dizisinde yönetmeye başladım.
createTask() ve renderTasks() fonksiyonlarını oluşturdum.
Dashboard sayaçlarını dinamik hale getirdim.
Tümü, Açık ve Tamamlanan filtrelerini ekledim.
Tamamla butonu ile görev durumunu güncelleyip tabloyu yeniden render ettim.

## Gün 8


Görevleri `localStorage` üzerinde kalıcı hale getirdim.
Sayfa açılırken görevleri otomatik yükledim.

`try/catch` ile güvenli JSON okuma işlemi ekledim.

`fetch()` ile `tasks.json` dosyasındaki örnek görevleri okudum.

Örnek görevleri içeri aktarma özelliğini geliştirdim.

Aynı görevlerin tekrar eklenmesini engelledim.

Başarılı ve başarısız içeri aktarma işlemleri için mesajları ekledim.

Tamamlanan görev durumunun sayfa yenilense bile korunmasını sağladım.

## Gün 9

Menü tabanlı konsol uygulaması oluşturuldu.

Kullanıcıdan seçim alma yapısı geliştirildi.

Yeni görev ekleme özelliği eklendi.

Görevleri listeleme özelliği eklendi.

Görevler numaralı olarak görüntülenmeye başlandı.

Görev silme özelliği eklendi.

List<string> kullanılarak görevler bellek üzerinde saklandı.

int.TryParse() ile güvenli kullanıcı girişi doğrulaması yapıldı.


## Gün 10

- TaskItem modeli oluşturuldu.

- TaskStatus enumu oluşturularak görev durumları tanımlandı.

- TaskService sınıfı oluşturuldu ve görev yönetimi servis yapısına taşındı.

- Görev ekleme, listeleme, silme ve tamamlandı olarak işaretleme işlemleri TaskService üzerinden gerçekleştirilecek şekilde düzenlendi.

- Aynı başlıklı görevlerin eklenmesi engellendi.

- Boş görev başlığı girilmesini önlemek için doğrulama eklendi.

- Görevleri duruma göre filtrelemek için GetByStatus() metodu eklendi.










