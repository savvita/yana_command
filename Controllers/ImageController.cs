using Microsoft.AspNetCore.Mvc;
using PixabayApi.Helpers;

namespace PixabayApi.Controllers {

    [ApiController]
    [Route("api")]
    public class ImageController :ControllerBase{

        [HttpGet(Name = "getImages")]
        public async Task<IActionResult> getImages(string text) {
            return Ok(await RequestHelper.GetAsync($"https://pixabay.com/api/?key=29800629-4ce57f3dcb86337a1cd80b83b&q={text}&image_type=photo&per_page=3"));
        }
    }
}
