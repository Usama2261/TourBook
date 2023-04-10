using API.Data.Context;

namespace API.Repository
{
    public class ExperienceRepository
    {
        private readonly TourDbContext _context;
        public ExperienceRepository(TourDbContext context)
        {
            _context = context;
        }

        public async Task CreateUserExperience()
        {

        }
    }
}
