using API.Data.Context;
using API.Data.Entities;
using API.Models;
using static API.Common.ConstantEnums;

namespace API.Repository
{
    public class AccountRepository
    {
        private readonly TourDbContext _context;
        public AccountRepository(TourDbContext context)
        {
            _context = context;
        }

        public async Task CreateUser(UserDto user)
        {
            var obj = new User
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                DOB = user.DOB,
                Gender = user.Gender,
                UserName = user.UserName,
                Password = user.Password,
                ProfileImage = ""
            };

            _context.Users.Add(obj);

            await _context.SaveChangesAsync();

        }

        public async Task<UserDto> Login(string userName, string password)
        {
            var user = _context.Users.Where(x => x.UserName == userName).FirstOrDefault();

            if(user != null)
            {
                if(user.Password == password)
                {
                    var returnUser = new UserDto
                    {
                        DOB = user.DOB,
                        FirstName = user.FirstName,
                        Email = user.Email,
                        Gender = user.Gender,
                        Id = user.Id,
                        LastName = user.LastName,
                        UserName = user.UserName,
                        ProfileImage = user.ProfileImage
                    };
                    return returnUser;
                }
            }

            return null;
        }

        public async Task<bool> IsUserExist(string userName)
        {
            var user = _context.Users.Where(x => x.UserName == userName).FirstOrDefault();

            if(user != null)
            {
                return true;
            }

            return false;
        }
    }
}
