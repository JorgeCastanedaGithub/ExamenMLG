using ExamenAPI.Data;
using ExamenAPI.Interfaces;
using ExamenAPI.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExamenAPI.Controllers
{
    [ApiController]
    [Route("api/Clientes")]
    public class ClientesController : Controller, IClienteController
    {
        private readonly ExamenDbContext _examendbcontext;

        public ClientesController(ExamenDbContext examendbcontext)
        {
            _examendbcontext = examendbcontext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllClientes()
        {
            var clientes = await _examendbcontext.Clientes.ToListAsync();
            return Ok(clientes);
        }

        [HttpPost]
        public async Task<IActionResult> AddCliente([FromBody] Cliente newCliente)
        {
            newCliente.Id = Guid.NewGuid();
            await _examendbcontext.Clientes.AddAsync(newCliente);
            await _examendbcontext.SaveChangesAsync();
            return Ok(newCliente);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetCliente([FromRoute] Guid id)
        {
            var editclient = await _examendbcontext.Clientes.FirstOrDefaultAsync(x => x.Id == id);

            if (editclient == null) { return NotFound(); }

            return Ok(editclient); 
        }

        [HttpPut]
        [Route("{id:Guid}")]
         public async Task<IActionResult> UpdateCliente([FromRoute] Guid id, Cliente cliente)
        {
            var clienteID = await _examendbcontext.Clientes.FindAsync(id);
            if (clienteID == null) { return NotFound(); }

            clienteID.Nombre = cliente.Nombre;
            clienteID.Apellido = cliente.Apellido;
            clienteID.Direccion= cliente.Direccion;

            await _examendbcontext.SaveChangesAsync();

            return Ok(clienteID);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteCliente([FromRoute] Guid id)
        {
            var cliente = await _examendbcontext.Clientes.FindAsync(id);
            if (cliente == null) { return NotFound(); }

            _examendbcontext.Clientes.Remove(cliente);
            await _examendbcontext.SaveChangesAsync();
            return Ok(cliente);
        }

        
        [HttpGet("{nombre}&{apellido}")]
        public async Task<IActionResult> LoginCliente([FromRoute] string nombre, [FromRoute] string apellido)
        {
            var loginclient = await _examendbcontext.Clientes.FirstOrDefaultAsync(x => x.Nombre == nombre && x.Apellido == apellido);

            if (loginclient == null) { return NotFound(); }

            return Ok(loginclient);
        }

    }
}
