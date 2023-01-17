var array = [["John Doe","Street 1","0550505050"],
            ["Sara Doe","Street 2","049595959"],
            ["Peter Doe","Street 3","3454654646"]],
            table = document.getElementById("korisnici");

            for (var i = 1; i < table.rows.length; i++)
            {
                for (var j = 0; j < table.rows[i].cells.length; j++)

                {
                    table.rows[i].cells[j].innerHTML = array[i - 1][j];
                }

            }