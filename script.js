// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
FUNCTION BeräknaDelbetalning()
    SET Summan = 0
    SET Antal = 0
    SET Dricks = 0
    SET Totalt = 0

    WHILE Totalt DO
        INPUT Summan
        INPUT Antal
        INPUT Dricks

        IF Summan <= 0 OR Antal <= 0 OR Dricks < 0 OR Dricks > 1 THEN
            PRINT "Inmatningen för summan och antal måste vara ett tal som är större än noll.
             Dricks måste vara mellan 0 och 1."
        ELSE
            Totalt = (Summan + Dricks) / Antal
            PRINT "Varje vän ska betala: " + Totalt
        END IF
    END WHILE
END FUNCTION

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*


function play()
    Set variable wordList = [..., ..., ...]; // En lista med alla ord på engelska
    Set variable startWord to "FOUR";
    Set variable endWord to "FIVE";

    prompt user for startWord and endWord input // Fråga användaren efter start- och slutord

    // Kontrollera om start- och slutordet är samma längd och finns i ordlistan
    if length of startWord is not equal to length of endWord or startWord is not in wordList or endWord is not in wordList
        Print "Felaktiga inmatningar. Kontrollera att orden är lika långa och finns i ordlistan."
        Exit game

    Set variable currentWord to startWord
    Set variable attempts to 0

    while currentWord is not equal to endWord
        Display currentWord to user
        prompt user for a new word that is a transformation of the current word
        Set variable newWord to user's input

        // Kontrollera om det nya ordet finns i ordlistan och har rätt längd
        if newWord is not in wordList or length of newWord is not equal to length of startWord
            Print "Det nya ordet måste finnas i ordlistan och vara lika långt som start- och slutordet."
            Continue to the next iteration of the loop

        // Räkna antalet ändrade bokstäver mellan nuvarande ord och det nya ordet
        Set variable changes to count of letters changed from currentWord to newWord

        // Om antalet ändrade bokstäver inte är exakt ett
        if changes is not equal to 1
            Print "Du måste ändra exakt en bokstav varje gång."
            Continue to the next iteration of the loop

        // Uppdatera nuvarande ord till det nya ordet
        Set currentWord to newWord
        Increment attempts by 1

        // Om antalet försök överstiger en viss gräns (valfritt)
        if attempts > threshold // Valfritt: ange en specifik gräns här (t.ex. 10)
            Print "Tyvärr, du har ingen tur den här gången. Försök igen."
            Exit game

    // Om loopen avslutas och slutordet har nåtts
    Display endWord to user
    Print "Grattis, du har vunnit! Prova ett nytt ord.

*/