using Microsoft.AspNetCore.Mvc;
using PixabayApi.Helpers;

namespace PixabayApi.Controllers {

    [ApiController]
    [Route("api")]
    public class ImageController :ControllerBase{

        private readonly IConfiguration configuration;

        public ImageController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet(Name = "getImages")]
        public async Task<IActionResult> getImages(string text) {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key={configuration["Authorization:Key"]}&q={text}&image_type=photo&per_page=3"));
        }
    }
}
