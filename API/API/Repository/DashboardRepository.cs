using API.Data.Context;
using API.Data.Entities;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repository
{
    public class DashboardRepository
    {
        private readonly TourDbContext _context;
        public DashboardRepository(TourDbContext context)
        {
            _context = context;
        }

        public async Task<EntityCount> EntityCount()
        {
            EntityCount obj = new EntityCount();

            obj.UsersCount = await _context.Users.CountAsync();

            obj.CategoriesCount = await _context.PlaceCategories.CountAsync();

            obj.PlacesCount = await _context.Places.CountAsync();

            obj.StoriesCount = await _context.Experiences.CountAsync();

            return obj;
        }

        public async Task CreateContactUsForm(long userId, string message)
        {
            var obj = new ContactUs
            {
                UserId  =  userId,
                Message = message
            };

            _context.Add(obj);

            await _context.SaveChangesAsync();
        }
    }
}
