using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hostel_system.model
{
    public class Pessoa
    {
        private string Nome
        {
            get; set;
        }
        private int Idade
        {
            get; set;
        }
        private string Cpf
        {
            get; set;
        }


        public Pessoa(string nome, int idade, string cpf)
        {
            Nome = nome;
            Idade = idade;
            Cpf = cpf;
        }

        
    }
}