using ExamenAPI.Modelos;
using Microsoft.AspNetCore.Mvc;

namespace ExamenAPI.Interfaces
{
    public interface IClienteController
    {
        [HttpGet]
        public void GetAllClientes()
        {
        }

        [HttpPost]
        public void AddCliente(Cliente newCliente)
        {
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public void GetCliente(Guid id)
        {
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public void UpdateCliente(Guid id, Cliente cliente)
        {
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public void deleteCliente(Guid id)
        {
        }
    }
}
