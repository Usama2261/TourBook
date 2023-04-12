using API.Data.Context;
using API.Data.Entities;
using API.Models;

namespace API.Repository
{
    public class ExperienceRepository
    {
        private readonly TourDbContext _context;
        public ExperienceRepository(TourDbContext context)
        {
            _context = context;
        }

        public async Task<long> CreateUserExperience(Experience exp)
        {
            var obj = new Experience
            {
                CategoryId = exp.CategoryId,
                PlaceId = exp.PlaceId,
                ExperienceStory = exp.ExperienceStory
            };

            _context.Experiences.Add(obj);
            await _context.SaveChangesAsync();

            return obj.Id;
        }

        public async Task CreateUserExperienceImages(ImageUploadRequest images)
        {
            foreach (var imageBase64 in images.ImagesBase64)
            {
                var obj = new UserExperienceImage
                {
                    UserId = 1,
                    ExperienceId = images.ExperienceId,
                    CreatedBy = 1,
                    CreatedDate = DateTime.Now,
                    ImageContent = imageBase64
                };

                _context.UserExperienceImages.Add(obj);
            }

            await _context.SaveChangesAsync();
        }

        public async Task<List<Place>> GetAllPlaces()
        {
            var places = _context.Places.ToList();

            return places;
        }
    }
}
