using ExamenAPI.Modelos;
using Microsoft.AspNetCore.Mvc;

namespace ExamenAPI.Interfaces
{
    public interface IArticulosInterface
    {
        [HttpGet]
        public void GetAllArticulos()
        {
        }

        [HttpPost]
        public void AddArticulo(Articulos newArticulo)
        {
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public void GetArticulo(Guid id)
        {
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public void UpdateArticulo(Guid id, Articulos articulo)
        {
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public void DeleteArticulo(Guid id)
        {
        }
    }
}
