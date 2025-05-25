using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hostel_system.model
{
    public class Suite
    {
        public string Tipo { get; set; }           
        public int Capacidade { get; set; }        
        public decimal ValorDiaria { get; set; }

        public Suite(string tipo, int capacidade, decimal valorDiario)
        {
            Tipo = tipo;
            Capacidade = capacidade;
            ValorDiaria = valorDiario;
        }

    }
}