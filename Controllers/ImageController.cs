using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
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

        // IMAGE

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

        [HttpGet]
        [Route("getImagesPaginate")]
        public async Task<IActionResult> getImagesPaginate(string text, int page)
        {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key={configuration["Authorization:Key"]}&q={text}&image_type=photo&&perPage=3&page={page}"));
        }

        // VIDEO

        [HttpGet]
        [Route("getVideos")]
        public async Task<IActionResult> getVideos(string text)
        {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/videos/?key={configuration["Authorization:Key"]}&q={text}"));
        }

        [HttpGet]
        [Route("getUserVideos")]
        public async Task<IActionResult> getUserVideos(string text)
        {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/videos/?key={configuration["Authorization:Key"]}&q=user:{text}"));
        }

        [HttpGet]
        [Route("getVideosPaginate")]
        public async Task<IActionResult> getVideosPaginate(string text, int page)
        {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/videos/?key={configuration["Authorization:Key"]}&q={text}"));
        }
    }
}
