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
    public class DefectuosoesController : ControllerBase
    {
        private readonly DataContext _context;

        public DefectuosoesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Defectuosoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Defectuoso>>> GetDefectuosos()
        {
            return await _context.Defectuosos.ToListAsync();
        }

        // GET: api/Defectuosoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Defectuoso>> GetDefectuoso(int id)
        {
            var defectuoso = await _context.Defectuosos.FindAsync(id);

            if (defectuoso == null)
            {
                return NotFound();
            }

            return defectuoso;
        }

        // PUT: api/Defectuosoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDefectuoso(int id, Defectuoso defectuoso)
        {
            if (id != defectuoso.Id)
            {
                return BadRequest();
            }

            _context.Entry(defectuoso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DefectuosoExists(id))
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

        // POST: api/Defectuosoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Defectuoso>> PostDefectuoso(Defectuoso defectuoso)
        {
            _context.Defectuosos.Add(defectuoso);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDefectuoso", new { id = defectuoso.Id }, defectuoso);
        }

        // DELETE: api/Defectuosoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDefectuoso(int id)
        {
            var defectuoso = await _context.Defectuosos.FindAsync(id);
            if (defectuoso == null)
            {
                return NotFound();
            }

            _context.Defectuosos.Remove(defectuoso);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DefectuosoExists(int id)
        {
            return _context.Defectuosos.Any(e => e.Id == id);
        }
    }
}
