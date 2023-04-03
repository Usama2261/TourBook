using API.Data.Context;
using API.Data.Entities;
using API.Models;

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
                Password = user.Password
            };

            _context.Users.Add(obj);

            await _context.SaveChangesAsync();

        }
    }
}
