using ExamenAPI.Modelos;
using Microsoft.AspNetCore.Mvc;

namespace ExamenAPI.Interfaces
{
    public interface ITiendaInterface
    {
        [HttpGet]
        public void GetAllTiendas()
        {
        }

        [HttpPost]
        public void AddTienda(Tienda newTienda)
        {
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public void GetTienda(Guid id)
        {
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public void UpdateTienda(Guid id, Tienda tienda)
        {
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public void DeleteTienda(Guid id)
        {
        }
    }
}
