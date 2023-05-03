using static API.Common.ConstantEnums;

namespace API.Models
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string DOB { get; set; }
        public string Email { get; set; }
        public Gender Gender { get; set; }
        public string ProfileImage { get; set; }
    }
}
