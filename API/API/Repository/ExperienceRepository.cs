using API.Data.Context;
using API.Data.Entities;
using API.Models;
using Microsoft.EntityFrameworkCore;
using System.Text;

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
                    //UserId = 1,
                    ExperienceId = images.ExperienceId,
                    CreatedBy = 1,
                    CreatedDate = DateTime.Now,
                    ImageContent = Convert.FromBase64String(imageBase64)
            };

                _context.UserExperienceImages.Add(obj);
            }

            await _context.SaveChangesAsync();
        }

        public async Task<List<GetExperiencyByUserDto>> GetAllExperienceByUser(int userId)
        {
            var returnList = new List<GetExperiencyByUserDto>();

            var experience = _context.Experiences.Where(x => x.UserId == userId).ToList();

            var allCategories = _context.PlaceCategories.ToList();

            var allPlaces = _context.Places.ToList();

            foreach (var item in experience)
            {
                var experienceImages = _context.UserExperienceImages.Where(x => x.ExperienceId == item.Id).ToList();

                var imageList = new List<GetUserExperienceImageDto>();

                foreach (var image in experienceImages)
                {
                    var imageObj = new GetUserExperienceImageDto();
                    imageObj.Id = image.Id;
                    imageObj.ImageContent = "data:image/png;base64," + Convert.ToBase64String(image.ImageContent, 0, image.ImageContent.Length);

                    imageList.Add(imageObj);
                }

                var obj = new GetExperiencyByUserDto();
                obj.ExperienceId = item.Id;
                obj.CategoryName = allCategories.Find(x => x.Id == item.CategoryId)?.Name ?? "";
                obj.PlaceName = allPlaces.Find(x => x.Id == item.PlaceId)?.Name ?? "";
                obj.ExperienceStory = item.ExperienceStory;
                obj.Images = imageList;

                returnList.Add(obj);

            }

            return returnList;
        }

        public async Task<List<Place>> GetAllPlaces()
        {
            var places = _context.Places.ToList();

            return places;
        }

        public async Task<GetExperiencyByUserDto> GetExperienceDetail(long experienceId)
        {
            var experience = await _context.Experiences.FirstOrDefaultAsync(x => x.Id == experienceId);

            var obj = new GetExperiencyByUserDto();

            if (experience != null)
            {
                var allCategories = await _context.PlaceCategories.ToListAsync();

                var allPlaces = await _context.Places.ToListAsync();

                var experienceImages = await _context.UserExperienceImages.Where(x => x.ExperienceId == experienceId).ToListAsync();

                var imageList = new List<GetUserExperienceImageDto>();

                foreach (var image in experienceImages)
                {
                    var imageObj = new GetUserExperienceImageDto();
                    imageObj.Id = image.Id;
                    imageObj.ImageContent = "data:image/png;base64," + Convert.ToBase64String(image.ImageContent, 0, image.ImageContent.Length);

                    imageList.Add(imageObj);
                }

                obj.ExperienceId = experienceId;
                obj.CategoryName = allCategories.Find(x => x.Id == experience.CategoryId)?.Name ?? "";
                obj.PlaceName = allPlaces.Find(x => x.Id == experience.PlaceId)?.Name ?? "";
                obj.PlaceImagePath = allPlaces.Find(x => x.Id == experience.PlaceId)?.ImagePath ?? "";
                obj.PlaceLocation = allPlaces.Find(x => x.Id == experience.PlaceId)?.LocationAddress ?? "";
                obj.ExperienceStory = experience.ExperienceStory;
                obj.Images = imageList;
            }

            return obj;
        }

        public async Task<bool> DeleteExperience(long experienceId)
        {
            var exp = await _context.Experiences.Where(x => x.Id == experienceId).FirstOrDefaultAsync();

            if (exp != null)
            {
                var expImages = await _context.UserExperienceImages.Where(x => x.ExperienceId == experienceId).ToListAsync();
                
                _context.RemoveRange(expImages);
                _context.Experiences.Remove(exp);

                await _context.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
