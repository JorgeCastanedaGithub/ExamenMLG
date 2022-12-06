namespace ExamenAPI.Modelos
{
    public class Articulos
    {
        public Guid Id { get; set; }

        public string Codigo { get; set; }

        public string Descripcion { get; set; }

        public decimal Precio { get; set; }

        //public byte[] Imagen { get; set; }

        public int Stock { get; set; }

        public DateTime Fecha { get; set; }

        public Guid Id_Tienda { get; set; }

    }
}
