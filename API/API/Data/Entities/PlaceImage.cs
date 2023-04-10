namespace API.Data.Entities
{
    public class PlaceImage
    {
        public long Id { get; set; }
        public long PlaceId { get; set; }
        public string ImageContent { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
