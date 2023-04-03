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
                new PlaceCategory { Name = "Waterfalls", ImagePath = "assets/category/waterfalls.jpg"},
                new PlaceCategory { Name = "Valleys", ImagePath = "assets/category/valley.jpg"},
                new PlaceCategory { Name = "Lakes", ImagePath = "assets/category/lakes.jpg"},
                new PlaceCategory { Name = "Passes", ImagePath = "assets/category/passes.jpg"},
                new PlaceCategory { Name = "Peaks", ImagePath = "assets/category/peaks.jpg"},
                new PlaceCategory { Name = "Forts", ImagePath = "assets/category/forts.jpg"},
                new PlaceCategory { Name = "Treks", ImagePath = "assets/category/treks.jpg"},
                new PlaceCategory { Name = "Dams", ImagePath = "assets/category/dams.jpg"},
                new PlaceCategory { Name = "Historical", ImagePath = "assets/category/historical.jpg"},
                new PlaceCategory { Name = "Ponds", ImagePath = "assets/category/pond.jpg"},
                new PlaceCategory { Name = "Hill Stations", ImagePath = "assets/category/hillstation.jpg"},
                new PlaceCategory { Name = "Glaciers", ImagePath = "assets/category/glaciers.jpg"},
                new PlaceCategory { Name = "Bridges", ImagePath = "assets/category/bridge.jpg"},
                new PlaceCategory { Name = "Religious", ImagePath = "assets/category/religious.jpg"},
                new PlaceCategory { Name = "Beaches", ImagePath = "assets/category/beach.jpg"},
                new PlaceCategory { Name = "Deserts", ImagePath = "assets/category/desert.jpg"}
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
                new Place
                {
                    Name = "Sabri Waterfall",
                    State = "KP",
                    City = "Abbotabad",
                    Country = "Pakistan",
                    FullAddress = "KP, Abbotabad, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 1 //For WaterFall
                },

                new Place
                {
                    Name = "Shingrai Waterfall",
                    State = "KP",
                    City = "Mingora",
                    Country = "Pakistan",
                    FullAddress = "KP, Mingora, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 1 //For WaterFall
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
                    CategoryId = 1 //For WaterFall
                },

                new Place
                {
                    Name = "Jhelum Valley",
                    State = "Azad Kashmir",
                    City = "Hattian Bala",
                    Country = "Pakistan",
                    FullAddress = "Hattian Bala, Azad Kashmir, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 3 //For Valley
                },

                 new Place
                {
                    Name = "Gilgit Valley",
                    State = "Gilgit Baltistan",
                    City = "Gilgit",
                    Country = "Pakistan",
                    FullAddress = "Gilgit, Gilgit Baltistan, Pakistan",
                    LocationAddress = "",
                    Description = "",
                    CategoryId = 3 //For Valley
                }
            };

            await _context.Places.AddRangeAsync(places);
            await _context.SaveChangesAsync();
        }
    }
}
