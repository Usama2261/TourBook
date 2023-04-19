namespace API.Models
{
    public class GetExperiencyByUserDto
    {
        public long ExperienceId { get; set; }
        public string CategoryName { get; set; }
        public string PlaceName { get; set; }
        public string PlaceImagePath { get; set; }
        public string ExperienceStory { get; set; }

        public List<GetUserExperienceImageDto> Images { get; set; }
    }
}
