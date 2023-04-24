namespace API.Data.Entities
{
    public class UserExperienceImage
    {
        public long Id { get; set; }
        public byte[] ImageContent { get; set; }
        public long ExperienceId { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
