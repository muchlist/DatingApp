using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "username diperlukan")]
        public string Username { get; set; }

        [Required(ErrorMessage = "password diperlukan")]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password harus diantara 4 dan 8 huruf")]
        public string Password { get; set; }
    }
}