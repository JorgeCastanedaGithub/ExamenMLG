namespace ExamenAPI.Modelos
{
    public class Cliente
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Direccion { get; set; }

        public Guid Id_Articulo { get; set; }
    }
}
