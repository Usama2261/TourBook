using API.Data.Entities;
using API.Models;
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
            var response = await _experienceRepo.CreateUserExperience(exp);

            return Ok(response);
        }

        [HttpPost("UploadImages")]
        public async Task<IActionResult> UploadImages([FromBody] ImageUploadRequest request)
        {
            await _experienceRepo.CreateUserExperienceImages(request);

            return Ok();
        }

        [HttpGet("GetAllExperienceByUser")]
        public async Task<IActionResult> GetAllExperienceByUser(int userId)
        {
            var response =  await _experienceRepo.GetAllExperienceByUser(userId);

            return Ok(response);
        }

        [HttpGet("GetAllPlaces")]
        public async Task<IActionResult> GetAllPlaces()
        {
            var response = await _experienceRepo.GetAllPlaces();
            return Ok(response);
        }

        [HttpGet("GetExperienceDetail")]
        public async Task<IActionResult> GetExperienceDetail(long experienceId)
        {
            var response = await _experienceRepo.GetExperienceDetail(experienceId);
            return Ok(response);
        }

        [HttpPost("DeleteExperience")]
        public async Task<IActionResult> DeleteExperience(long experienceId)
        {
            var response = await _experienceRepo.DeleteExperience(experienceId);

            return Ok(response);
        }
    }
}
