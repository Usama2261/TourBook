using API.Data.Entities;
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

        [HttpPost("CreateUserExperience")]
        public async Task<IActionResult> CreateUserExperience([FromBody] Experience exp)
        {
            await _experienceRepo.CreateUserExperience(exp);
            return Ok();
        }

        [HttpGet("GetAllPlaces")]
        public async Task<IActionResult> GetAllPlaces()
        {
            var response = await _experienceRepo.GetAllPlaces();
            return Ok(response);
        }
    }
}
