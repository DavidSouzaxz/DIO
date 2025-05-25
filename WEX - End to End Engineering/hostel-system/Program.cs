using hostel_system.model;

var suite = new Suite("Master", 2, 300);

var reserva = new Reserva(12);
reserva.CadastrarSuite(suite);

var hospedes = new List<Pessoa>
{
  new Pessoa("Cleitin", 30, "123.456.789-11"),
  new Pessoa("Maria", 20, "123.456.789-12")
};

reserva.CadastrarHospedes(hospedes);

Console.WriteLine($"Quantidade de hóspedes: {reserva.ObterQuantidadeHospedes()}");
Console.WriteLine($"Valor total da reserva: {reserva.CalcularValorDiaria():C}");