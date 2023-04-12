namespace API.Models
{
    public class ImageUploadRequest
    {
        public long ExperienceId { get; set; }
        public List<string> ImagesBase64 { get; set; }
    }
}
