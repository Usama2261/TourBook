using API.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Context
{
    public class TourDbContext : DbContext
    {
        public TourDbContext(DbContextOptions<TourDbContext> options)
        : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<PlaceCategory> PlaceCategories { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<Experience> Experiences { get; set; }
    }
}
