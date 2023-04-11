using API.Data.Context;
using API.Data.Entities;

namespace API.Repository
{
    public class ExperienceRepository
    {
        private readonly TourDbContext _context;
        public ExperienceRepository(TourDbContext context)
        {
            _context = context;
        }

        public async Task CreateUserExperience(Experience exp)
        {
            var obj = new Experience
            {
                CategoryId = exp.CategoryId,
                PlaceId = exp.PlaceId,
                ExperienceStory = exp.ExperienceStory
            };

            _context.Experiences.Add(obj);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Place>> GetAllPlaces()
        {
            var places = _context.Places.ToList();

            return places;
        }
    }
}
