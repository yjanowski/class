namespace ShirtCreator
    {
    internal class ShirtCreator
        {
        static void Main(string[] args)
            {
            string[] colors = { "Red", "Green", "Blue" };
            string[] styles = { "Striped", "Checked", "Plain" };
            List<Shirt> shirtList = new List<Shirt>();
            


            for (int i = 0; i < colors.Length; i++)
                {
                for (int j = 0; j < styles.Length; j++)
                    {
                    shirtList.Add( new Shirt(colors[i], styles[j]));
                    
                    }
                }
            }
        }
    }
