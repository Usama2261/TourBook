using API.Models;
using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly AccountRepository _accountRepo;
        public AccountController(AccountRepository accountRepo)
        {
           _accountRepo = accountRepo;
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromForm]UserDto user)
        {
            await _accountRepo.CreateUser(user);

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok();
        }
    }
}
