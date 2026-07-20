using System.ComponentModel.DataAnnotations;

namespace TaskBoard.Web.ViewModels;

public class CreateTaskViewModel
{
    [Required(ErrorMessage = "Başlık zorunludur.")]
    [StringLength(80, ErrorMessage = "Başlık en fazla 80 karakter olabilir.")]
    public string Title { get; set; } = "";

    [Required(ErrorMessage = "Öncelik seçiniz.")]
    public string Priority { get; set; } = "Normal";
}