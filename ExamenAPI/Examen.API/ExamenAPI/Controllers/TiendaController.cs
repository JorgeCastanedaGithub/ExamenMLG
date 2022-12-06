using ExamenAPI.Data;
using ExamenAPI.Interfaces;
using ExamenAPI.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExamenAPI.Controllers
{
    [ApiController]
    [Route("api/Tiendas")]
    public class TiendaController : Controller, ITiendaInterface
    {
        private readonly ExamenDbContext _examendbcontext;
        public TiendaController(ExamenDbContext examendbcontext)
        {
            _examendbcontext = examendbcontext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTiendas()
        {
            var tiendas = await _examendbcontext.Tienda.ToListAsync();
            return Ok(tiendas);
        }

        [HttpPost]
        public async Task<IActionResult> AddTienda([FromBody] Tienda newTienda)
        {
            newTienda.Id = Guid.NewGuid();
            await _examendbcontext.Tienda.AddAsync(newTienda);
            await _examendbcontext.SaveChangesAsync();
            return Ok(newTienda);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetTienda([FromRoute] Guid id)
        {
            var editTienda = await _examendbcontext.Tienda.FirstOrDefaultAsync(x => x.Id == id);

            if (editTienda == null) { return NotFound(); }

            return Ok(editTienda);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateTienda([FromRoute] Guid id, Tienda tienda)
        {
            var tiendaID = await _examendbcontext.Tienda.FindAsync(id);
            if (tiendaID == null) { return NotFound(); }

            tiendaID.Sucursal = tienda.Sucursal;
            tiendaID.Direccion = tienda.Direccion;

            await _examendbcontext.SaveChangesAsync();

            return Ok(tiendaID);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteTienda([FromRoute] Guid id)
        {
            var tienda = await _examendbcontext.Tienda.FindAsync(id);
            if (tienda == null) { return NotFound(); }

            _examendbcontext.Tienda.Remove(tienda);
            await _examendbcontext.SaveChangesAsync();
            return Ok(tienda);
        }
    }
}
