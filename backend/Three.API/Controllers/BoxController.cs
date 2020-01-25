using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Three.API.Models;

namespace Three.API.Controllers
{
    [ApiController]
    [Route("{boxes}")]
    public class BoxController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var boxes = new List<Box>
            {
                new Box
                {
                    Width = 2,
                    Depth = 2,
                    Length = 2,
                    X = 0,
                    Y = 0,
                    Color = "0xfcba03"
                },
                new Box
                {
                    Width = 1,
                    Depth = 1,
                    Length = 2,
                    X = -0.5,
                    Y = 1,
                    Z = -0.5,
                    Color = "0x2d33d6"
                },
                new Box
                {
                    Width = 3,
                    Depth = 1,
                    Length = 1,
                    X = 1.5,
                    Y = 1,
                    Z = -0.5,
                    Color = "0xf54251"
                },
                new Box
                {
                    Width = 2,
                    Depth = 2,
                    Length = 4,
                    X = 2,
                    Y = 0,
                    Color = "0x03fc28"
                }
            };

            return Ok(boxes);
        }
    }
}