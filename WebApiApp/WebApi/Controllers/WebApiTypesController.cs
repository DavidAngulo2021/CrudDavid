using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi;
using WebApi.Data;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebApiTypesController : ControllerBase
    {
        private readonly DataContext _context;

        public WebApiTypesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/WebApiTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WebApiType>>> GetWebApiTypes()
        {
            return await _context.WebApiTypes.ToListAsync();
        }

        // GET: api/WebApiTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WebApiType>> GetWebApiType(int id)
        {
            var webApiType = await _context.WebApiTypes.FindAsync(id);

            if (webApiType == null)
            {
                return NotFound();
            }

            return webApiType;
        }

        // PUT: api/WebApiTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWebApiType(int id, WebApiType webApiType)
        {
            if (id != webApiType.Id)
            {
                return BadRequest();
            }

            _context.Entry(webApiType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WebApiTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WebApiTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WebApiType>> PostWebApiType(WebApiType webApiType)
        {
            _context.WebApiTypes.Add(webApiType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWebApiType", new { id = webApiType.Id }, webApiType);
        }

        // DELETE: api/WebApiTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWebApiType(int id)
        {
            var webApiType = await _context.WebApiTypes.FindAsync(id);
            if (webApiType == null)
            {
                return NotFound();
            }

            _context.WebApiTypes.Remove(webApiType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WebApiTypeExists(int id)
        {
            return _context.WebApiTypes.Any(e => e.Id == id);
        }
    }
}
