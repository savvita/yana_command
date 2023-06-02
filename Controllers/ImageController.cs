using Microsoft.AspNetCore.Mvc;
using PixabayApi.Helpers;

namespace PixabayApi.Controllers
{

    [ApiController]
    [Route("api")]
    public class ImageController : ControllerBase
    {

        private readonly IConfiguration configuration;

        public ImageController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        // IMAGE

        [HttpGet]
        [Route("getImages")]
        public async Task<IActionResult> getImages(string text, int per_page)
        {
            if (!string.Equals(text, "bmw", StringComparison.OrdinalIgnoreCase) && !string.Equals(text, "бмв", StringComparison.OrdinalIgnoreCase))
            {
                return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key={configuration["Authorization:Key"]}&q={text}&image_type=photo&per_page={per_page}"));
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("getUserImages")]
        public async Task<IActionResult> getUserImages(string username)
        {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key={configuration["Authorization:Key"]}&q=user:{username}"));
        }

        [HttpGet]
        [Route("getImagesPaginate")]
        public async Task<IActionResult> getImagesPaginate(string text, int perPage, int page)
        {
            if (!string.Equals(text, "bmw", StringComparison.OrdinalIgnoreCase) && !string.Equals(text, "бмв", StringComparison.OrdinalIgnoreCase) && page <= 250)
            {
                return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key={configuration["Authorization:Key"]}&q={text}&image_type=photo&&perPage={perPage}&page={page}"));
            }
            else
            {
                return BadRequest();
            }
        }

        // VIDEO

        [HttpGet]
        [Route("getVideos")]
        public async Task<IActionResult> getVideos(string text)
        {
            if (!string.Equals(text, "bmw", StringComparison.OrdinalIgnoreCase) && !string.Equals(text, "бмв", StringComparison.OrdinalIgnoreCase))
            {
                return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/videos/?key={configuration["Authorization:Key"]}&q={text}"));
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("getUserVideos")]
        public async Task<IActionResult> getUserVideos(string username)
        {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/videos/?key={configuration["Authorization:Key"]}&q=user:{username}"));
        }

        [HttpGet]
        [Route("getVideosPaginate")]
        public async Task<IActionResult> getVideosPaginate(string text, int page)
        {
            if (!string.Equals(text, "bmw", StringComparison.OrdinalIgnoreCase) && !string.Equals(text, "бмв", StringComparison.OrdinalIgnoreCase) && page <= 250)
            {
                return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/videos/?key={configuration["Authorization:Key"]}&q={text}&page={page}"));
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
