using API.Models;
using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //[ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly AccountRepository _accountRepo;
        public AccountController(AccountRepository accountRepo)
        {
           _accountRepo = accountRepo;
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] UserDto user)
        {
            await _accountRepo.CreateUser(user);

            return Ok();
        }

        [HttpGet("Login")]
        public async Task<IActionResult> Login(string userName, string password)
        {
            var response = await _accountRepo.Login(userName, password);

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok();
        }
    }
}
