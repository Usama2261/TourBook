using API.Data.Context;
using API.Data.Entities;
using API.Models;
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

            var cate = await _context.PlaceCategories.Where(x => x.Name.ToLower() == categoryName.ToLower()).FirstOrDefaultAsync();

            if(cate != null)
            {
                places = await _context.Places.Where(x => x.CategoryId == cate.Id).ToListAsync();
            }

            return places;
        }

        public async Task<GetPlaceDetail> GetPlaceById(long Id)
        {
            var obj = new GetPlaceDetail();

            var allCategories = await _context.PlaceCategories.ToListAsync();

            var place = await _context.Places.Where(x => x.Id == Id).FirstOrDefaultAsync();

            

            if(place != null)
            {
                var visitors = await _context.Experiences.Where(x => x.PlaceId == place.Id).CountAsync();

                obj = new GetPlaceDetail
                {
                    PlaceId = place.Id,
                    Name = place.Name,
                    Description = place.Description,
                    FullAddress = place.FullAddress,
                    CategoryName = allCategories.Find(x => x.Id == place.CategoryId).Name ?? "",
                    LocationAddress = place.LocationAddress,
                    ImagePath = place.ImagePath,
                    VisitorsCount = visitors
                };
            }
            

            return obj;
        }
    }
}
