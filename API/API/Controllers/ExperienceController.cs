using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class ExperienceController : ControllerBase
    {
        private readonly ExperienceRepository _experienceRepo;
        public ExperienceController(ExperienceRepository experienceRepo)
        {
            _experienceRepo = experienceRepo;
        }

        [HttpGet("GetUserExperience")]
        public async Task<IActionResult> CreateUserExperience()
        {
            await _experienceRepo.CreateUserExperience();
            return Ok();
        }    
    }
}
