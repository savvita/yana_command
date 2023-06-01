using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using PixabayApi.Helpers;

namespace PixabayApi.Controllers {

    [ApiController]
    [Route("api/[controller]")]
    public class ImageController :ControllerBase{

        private readonly IConfiguration configuration;

        public ImageController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet]
        [Route("getImages")]
        public async Task<IActionResult> getImages(string text) {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key={configuration["Authorization:Key"]}&q={text}&image_type=photo&per_page=3"));
        }

        [HttpGet]
        [Route("getUserImages")]
        public async Task<IActionResult> getUserImages(string text) {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key={configuration["Authorization:Key"]}&q=user:{text}"));
        }
    }
}
