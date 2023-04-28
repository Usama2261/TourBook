namespace API.Models
{
    public class GetPlaceDetail
    {
        public long PlaceId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FullAddress { get; set; }
        public string LocationAddress { get; set; }
        public string ImagePath { get; set; }
        public string CategoryName { get; set; }
        public int VisitorsCount { get; set; }
    }
}
