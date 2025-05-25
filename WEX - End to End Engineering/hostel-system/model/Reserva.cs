using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace hostel_system.model
{
    public class Reserva
    {
        public List<Pessoa> Hospedes { get; set; }

        public Suite Suite { get; set; }

        public int DiasReservados { get; set; }

        public Reserva(int diasReservados)
        {
            DiasReservados = diasReservados;
            Hospedes = new List<Pessoa>();
        }

        public void CadastrarSuite(Suite suite)
        {
            Suite = suite;
        }

        public void CadastrarHospedes(List<Pessoa> hospedes)
        {
            if (hospedes.Count <= Suite.Capacidade)
            {
                Hospedes = hospedes;
            }
            else
            {
                throw new Exception("Número de hóspedes excede a capacidade da suíte.");
            }
        }

        public int ObterQuantidadeHospedes()
        {
            return Hospedes.Count;
        }

        public decimal CalcularValorDiaria()
        {
            decimal valor = DiasReservados * Suite.ValorDiaria;

            if (DiasReservados > 10)
            {
                valor *= 0.9M;
            }

            return valor;
        }

        


    }
}