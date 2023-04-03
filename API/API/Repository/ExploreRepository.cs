using API.Data.Context;
using API.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Repository
{
    public class ExploreRepository
    {
        private readonly TourDbContext _context;
        public ExploreRepository(TourDbContext context)
        {
            _context = context;
        }

        public async Task<List<PlaceCategory>> GetAllCategories()
        {
            var categories = await _context.PlaceCategories.ToListAsync();
            return categories;
        }

        public async Task<List<Place>> GetCategoryByName(string categoryName)
        {
            var places = new List<Place>();

            var cate = await _context.PlaceCategories.Where(x => x.Name == categoryName).FirstOrDefaultAsync();

            if(cate != null)
            {
                places = await _context.Places.Where(x => x.CategoryId == cate.Id).ToListAsync();
            }

            return places;
        }
    }
}
