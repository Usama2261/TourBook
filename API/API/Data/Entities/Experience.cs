using System.ComponentModel.DataAnnotations;

namespace API.Data.Entities
{
    public class Experience
    {
        [Key]
        public long Id { get; set; }
        public int CategoryId { get; set; }
        public long PlaceId { get; set; }
        public string ExperienceStory { get; set; }
    }
}
