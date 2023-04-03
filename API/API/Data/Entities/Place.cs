using System.ComponentModel.DataAnnotations;

namespace API.Data.Entities
{
    public class Place
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string FullAddress { get; set; }
        public string LocationAddress { get; set; }
        public int CategoryId { get; set; }
    }
}
