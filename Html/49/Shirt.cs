using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShirtCreator
    {
    internal class Shirt
        {
        public Shirt(string color, string style) 
            {
            Color = color;
            Style = style;
            }
        public string Color { get; set; }
        public string Style { get; set; }


        
        }
    }
    