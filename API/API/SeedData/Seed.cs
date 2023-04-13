using API.Data.Context;
using API.Data.Entities;

namespace API.SeedData
{
    public class Seed
    {
        private readonly TourDbContext _context;
        public Seed(TourDbContext context)
        {
            _context = context;
        }

        public async Task SeedData()
        {
            await AddCategories();
            await AddPlaces();
        }


        public async Task AddCategories()
        {
            if (_context.PlaceCategories.Any())
            {
                return;
            }

            var categories = new List<PlaceCategory>
            {
                new PlaceCategory { Id = 1, Name = "Waterfalls", ImagePath = "assets/category/waterfalls.jpg"},
                new PlaceCategory { Id = 2, Name = "Valleys", ImagePath = "assets/category/valley.jpg"},
                new PlaceCategory { Id = 3, Name = "Lakes", ImagePath = "assets/category/lakes.jpg"},
                new PlaceCategory { Id = 4, Name = "Passes", ImagePath = "assets/category/passes.jpg"},
                new PlaceCategory { Id = 5, Name = "Peaks", ImagePath = "assets/category/peaks.jpg"},
                new PlaceCategory { Id = 6, Name = "Forts", ImagePath = "assets/category/forts.jpg"},
                new PlaceCategory { Id = 7, Name = "Treks", ImagePath = "assets/category/treks.jpg"},
                new PlaceCategory { Id = 8, Name = "Dams", ImagePath = "assets/category/dams.jpg"},
                new PlaceCategory { Id = 9, Name = "Historical", ImagePath = "assets/category/historical.jpg"},
                new PlaceCategory { Id = 10, Name = "Ponds", ImagePath = "assets/category/pond.jpg"},
                new PlaceCategory { Id = 11, Name = "Hill Stations", ImagePath = "assets/category/hillstation.jpg"},
                new PlaceCategory { Id = 12, Name = "Glaciers", ImagePath = "assets/category/glaciers.jpg"},
                new PlaceCategory { Id = 13, Name = "Bridges", ImagePath = "assets/category/bridge.jpg"},
                new PlaceCategory { Id = 14, Name = "Religious", ImagePath = "assets/category/religious.jpg"},
                new PlaceCategory { Id = 15, Name = "Beaches", ImagePath = "assets/category/beach.jpg"},
                new PlaceCategory { Id = 16, Name = "Deserts", ImagePath = "assets/category/desert.jpg"}
            };

            await _context.PlaceCategories.AddRangeAsync(categories);
            await _context.SaveChangesAsync();
        }

        public async Task AddPlaces()
        {
            if (_context.Places.Any())
            {
                return;
            }

            var places = new List<Place>
            {

                //For WaterFall
                new Place
                {
                    Name = "Sabri Waterfall",
                    State = "KP",
                    City = "Abbotabad",
                    Country = "Pakistan",
                    FullAddress = "KP, Abbotabad, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 1,
                    ImagePath = "assets/places/"
                },

                new Place
                {
                    Name = "Umbrella Waterfall",
                    State = "KP",
                    City = "Havellia",
                    Country = "Pakistan",
                    FullAddress = "KP, Havellia, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 1,
                    ImagePath = "assets/places/"
                },

                new Place
                {
                    Name = "Dhani Waterfall",
                    State = "Azad Kashmir",
                    City = "Dhani",
                    Country = "Pakistan",
                    FullAddress = "Dhani, Azad Kashmir, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 1,
                    ImagePath = "assets/places/"
                },

                //For Valley
                new Place
                {
                    Name = "Kaghan Valley",
                    City = "Mansehra",
                    Country = "Pakistan",
                    FullAddress = "Mansehra, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 2,
                    ImagePath = "assets/places/Kaghan Valley.jpg"
                },

                new Place
                {
                    Name = "Kalam Valley",
                    City = "Sawat",
                    Country = "Pakistan",
                    FullAddress = "Sawat, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 2,
                    ImagePath = "assets/places/Kalam_Valley.jpg"
                },

                new Place
                {
                    Name = "Kumrat Valley",
                    City = "Upper Dir",
                    Country = "Pakistan",
                    FullAddress = "Upper Dir, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 2,
                    ImagePath = "assets/places/Kumrat_Valley.jpg"
                },

                //For Lakes
                new Place
                {
                    Name = "Ansoo Lake",
                    City = "Mansehra",
                    Country = "Pakistan",
                    FullAddress = "Mansehra, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 3,
                    ImagePath = "assets/places/Ansoo_Lake.JPG"
                },

                new Place
                {
                    Name = "Saiful Muluk Lake",
                    City = "Kaghan",
                    Country = "Pakistan",
                    FullAddress = "Kaghan, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 3,
                    ImagePath = "assets/places/Saif_Ul_Malok_Lake.jpg"
                },

                new Place
                {
                    Name = "Pari Lake",
                    City = "Swat",
                    Country = "Pakistan",
                    FullAddress = "Swat, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 3,
                    ImagePath = "assets/places/Pari_Lake.jpg"
                },

                //For Passes
                new Place
                {
                    Name = "Khybar Pass",
                    City = "Peshawar",
                    Country = "Pakistan",
                    FullAddress = "Peshawar, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 4,
                    ImagePath = "assets/places/Khybar_Pass.jpg"
                },

                new Place
                {
                    Name = "Malakand Pass",
                    City = "Malakand",
                    Country = "Pakistan",
                    FullAddress = "Malakand, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 4,
                    ImagePath = "assets/places/Malakand_Pass.jpg"
                },

                new Place
                {
                    Name = "Lowari Pass",
                    City = "Chitral",
                    Country = "Pakistan",
                    FullAddress = "Chitral, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 4,
                    ImagePath = "assets/places/Lowari_Pass.jpg"
                },

                //For Forts
                new Place
                {
                    Name = "Shagai Fort",
                    City = "KPK",
                    Country = "Pakistan",
                    FullAddress = "KPK, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 6,
                    ImagePath = "assets/places/Shagai_Fort.jpg"
                },

                new Place
                {
                    Name = "Baghsar Fort",
                    City = "KPK",
                    Country = "Pakistan",
                    FullAddress = "KPK, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 6,
                    ImagePath = "assets/places/Baghsar_Fort.jpg"
                },

                new Place
                {
                    Name = "Ramkot Fort",
                    City = "KPK",
                    Country = "Pakistan",
                    FullAddress = "KPK, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 6,
                    ImagePath = "assets/places/Ramkot_Fort.jpg"
                },

                //For Dams
                new Place
                {
                    Name = "Tarbela Dam",
                    City = "Sawabi",
                    Country = "Pakistan",
                    FullAddress = "Sawabi, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 8,
                    ImagePath = "assets/places/Tarbela_Dam.jpg"
                },

                new Place
                {
                    Name = "Khanpur Dam",
                    City = "Haripur",
                    Country = "Pakistan",
                    FullAddress = "Haripur, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 8,
                    ImagePath = "assets/places/Khanpur_Dam.jpg"
                },

                new Place
                {
                    Name = "Kundal Dam",
                    City = "Sawabi",
                    Country = "Pakistan",
                    FullAddress = "Sawabi, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 8,
                    ImagePath = "assets/places/Kundal_Dam.jpg"
                },
            };

            await _context.Places.AddRangeAsync(places);
            await _context.SaveChangesAsync();
        }
    }
}
