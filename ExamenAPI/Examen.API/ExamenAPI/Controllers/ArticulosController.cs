using ExamenAPI.Data;
using ExamenAPI.Interfaces;
using ExamenAPI.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExamenAPI.Controllers
{
    [ApiController]
    [Route("api/Articulos")]
    public class ArticulosController : Controller, IArticulosInterface
    {
        private readonly ExamenDbContext _examendbcontext;
        public ArticulosController(ExamenDbContext examendbcontext)
        {
            _examendbcontext = examendbcontext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllArticulos()
        {
            var articulos = await _examendbcontext.Articulos.ToListAsync();
            return Ok(articulos);
        }

        [HttpPost]
        public async Task<IActionResult> AddArticulo([FromBody] Articulos newArticulo)
        {
            newArticulo.Id = Guid.NewGuid();
            await _examendbcontext.Articulos.AddAsync(newArticulo);
            await _examendbcontext.SaveChangesAsync();
            return Ok(newArticulo);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetArticulo([FromRoute] Guid id)
        {
            var editArticulo = await _examendbcontext.Articulos.FirstOrDefaultAsync(x => x.Id == id);

            if (editArticulo == null) { return NotFound(); }

            return Ok(editArticulo);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateArticulo([FromRoute] Guid id, Articulos articulo)
        {
            var articuloID = await _examendbcontext.Articulos.FindAsync(id);
            if (articuloID == null) { return NotFound(); }

            articuloID.Codigo = articulo.Codigo;
            articuloID.Descripcion = articulo.Descripcion;
            articuloID.Precio = articulo.Precio;
            //articuloID.Imagen = articulo.Imagen;
            articuloID.Stock = articulo.Stock;
            articuloID.Fecha = articulo.Fecha;
            articuloID.Id_Tienda = articulo.Id_Tienda;

            await _examendbcontext.SaveChangesAsync();

            return Ok(articuloID);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteArticulo([FromRoute] Guid id)
        {
            var articulo = await _examendbcontext.Articulos.FindAsync(id);
            if (articulo == null) { return NotFound(); }

            _examendbcontext.Articulos.Remove(articulo);
            await _examendbcontext.SaveChangesAsync();
            return Ok(articulo);
        }

        [HttpPut]
        [Route("{id:Guid}&{nombre}&{apellido}")]
        public async Task<IActionResult> compraArticulo([FromRoute] string nombre, [FromRoute] string apellido, [FromRoute] Guid id, Articulos articulo)
        {
            var articuloID = await _examendbcontext.Articulos.FindAsync(id);
            var compraclient = await _examendbcontext.Clientes.FirstOrDefaultAsync(x => x.Nombre == nombre && x.Apellido == apellido);

            if (articuloID == null) { return NotFound(); }
            if (compraclient == null) { return NotFound(); }

            articuloID.Stock = articuloID.Stock - 1;
            compraclient.Id_Articulo = articuloID.Id;

            await _examendbcontext.SaveChangesAsync();

            return Ok(articuloID);
        }
    }
}
