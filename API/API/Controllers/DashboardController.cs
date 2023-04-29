using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly DashboardRepository _dashboardRepository;
        public DashboardController(DashboardRepository dashboardRepository)
        {
            _dashboardRepository = dashboardRepository;
        }
        [HttpGet("GetEntityCount")]
        public async Task<IActionResult> EntityCount()
        {
            var response = await _dashboardRepository.EntityCount();

            return Ok(response);
        }

        [HttpPost("CreateContactUsForm")]
        public async Task<IActionResult> CreateContactUsForm(long userId, string message)
        {
            await _dashboardRepository.CreateContactUsForm(userId, message);

            return Ok();
        }
    }
}
