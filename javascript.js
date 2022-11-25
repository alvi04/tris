const box = [0, 0, 0, 0, 0, 0, 0, 0, 0];            //Array delle cele del gioco
var count = 0;                                      //Variabile per contare quante volte hanno schiaciatto il buttone i giocatori
var risultato = 0;                                  //Variabile per individuare quale dei giocatori deve giocare
var check = 0;                                      //Variabile per individuare il vincitore
var numwin = 9;                                     //Variabile che si usa per verificare se ha vinto player 1                                    
var numwin2 = 15;                                   //Variabile che si usa per verificare se ha vinto player 2
var player1 = 0;                                    //Variabile che si cambia nel caso che vince player 1                                    
var player2 = 0;                                    //Variabile che si cambia nel caso che vince player 2
var controllo;                                      //Variabile di controllo se ha vinto qualcuno
var winplayer1 = 0;                                 //Variabile per memorizare quanti volte ha vinto player 1
var winplayer2 = 0;                                 //Variabile per memorizare quanti volte ha vinto player 2
var puntipari = 0;                                  //Variabile per memorizare quante volte abbiamo avuto risultato di pareggio
var stamparis;
var stamparispari;



function punti() {
    document.getElementById("punti1").innerText ="Player 1 = " + winplayer1;    //Stampa risultato del player1
    document.getElementById("punti2").innerText = "Player 2 = " + winplayer2;   //Stampa risultato del player2
    document.getElementById("pari").innerText = "Pari = " + puntipari;          //Stampa risultato di pareggio
    return;
}

function callf(num) {

    punti();
    if (controllo == "a") {                         //Prima di scrivere sopra un box controlla se ha vinto qualcuno
        return;
    }
    else if (risultato % 2 == 0) {                  //Se il risultato e pari allora gioca il giocatore X
        if (box[num] == 0) {                        //Verifica se nel box dove vuole scrivere il giocatore non e gia impegnato
            document.getElementById(num).style.backgroundImage = "url('img/player2.png')";  //Stampa l imagine del X giocatore dentro box
            box[num] += 3;                          //Se il box e occupato dal giocatore X prende un valore di 3
            risultato += 1;                         //Ogni volta che gioca un giocatore aggiungiamo uno al risultato e cosi la prosima volta deve giocare l altro giocatore
            count = count + 1;                      //Conta quante volte e giocato fin addesso con lo scopo di controllare se ha vinto qualcuno  
        }
    }
    else if (risultato % 2 == 1) {                  //Se il risultato e dispari allora gioca il giocatore Y
        if (box[num] == 0) {                        //Verifica se nel box dove vuole scrivere il giocatore non e gia impegnato
            document.getElementById(num).style.backgroundImage = "url('img/player1.png')";  //Stampa l imagine del Y giocatore dentro box
            box[num] += 5;                          //Se il box e occupato dal giocatore Y prende un valore di 5
            risultato += 1;                         //Ogni volta che gioca un giocatore aggiungiamo uno al risultato e cosi la prosima volta deve giocare l altro giocatore
            count = count + 1;                      //Conta quante volte e giocato fin addesso con lo scopo di controllare se ha vinto qualcuno
        }
    }

    if (count >= 5) {                               //Se sono fatti 5 movimenti allora inizia a controllare se ha vinto  qualcuno
        winner();
    }

    if (check == 1) {                               //Se ha vinto qualcuno si entra in questo condizione con lo scopo di determinare chi ha vinto
        if (player1 == 1) {                         //Se player1 == 1 allora stampiamo che ha vinto player 1
            controllo = "a";                        //Controllo = a con lo scopo di non scrivere piu dopo che ha vinto qualcuno
            winplayer1 += 1;                        //Aggiunge 1 al risultato del player 1
            punti();                                //Stampa i punti
            stampa(1);

        }
        else if (player2 == 1) {                    //Se player2 == 1 allora stampiamo che ha vinto player 2
            controllo = "a";                        //Controllo = a con lo scopo di non scrivere piu dopo che ha vinto qualcuno
            winplayer2 += 1;                        //Aggiunge 1 al risultato del player 2
            punti();                                //Stampa i punti
            stampa(2);
        }
    }

    else if (check == 2) {                          //In caso che non vince nessuno si entra in questo condizione
        if (count == 9) {                           //Questo si puo verificare solo se sono gia fatto 9 movimenti
            controllo = "a";                        //Controllo = a con lo scopo di non scrivere piu dopo che ha vinto qualcuno oppoure il risultato e pari
            puntipari += 1;                         //Aggiunge 1 al risultato pari
            punti();                                //Stampa i punti
            stampapari(0);

        }
    }
}

function winner() {                                                           //Funzione che controlla se ha vinto qualcuno
    if (box[0] + box[1] + box[2] == numwin) { check = 1; player1 = 1; }       //Controlla se ha vinto player 1
    else if (box[3] + box[4] + box[5] == numwin) { check = 1; player1 = 1; }  //Controlla se ha vinto player 1
    else if (box[6] + box[7] + box[8] == numwin) { check = 1; player1 = 1; }  //Controlla se ha vinto player 1
    else if (box[0] + box[3] + box[6] == numwin) { check = 1; player1 = 1; }  //Controlla se ha vinto player 1
    else if (box[1] + box[4] + box[7] == numwin) { check = 1; player1 = 1; }  //Controlla se ha vinto player 1
    else if (box[2] + box[5] + box[8] == numwin) { check = 1; player1 = 1; }  //Controlla se ha vinto player 1
    else if (box[0] + box[4] + box[8] == numwin) { check = 1; player1 = 1; }  //Controlla se ha vinto player 1
    else if (box[2] + box[4] + box[6] == numwin) { check = 1; player1 = 1; }  //Controlla se ha vinto player 1
    else if (box[0] + box[1] + box[2] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else if (box[3] + box[4] + box[5] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else if (box[6] + box[7] + box[8] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else if (box[0] + box[3] + box[6] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else if (box[1] + box[4] + box[7] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else if (box[2] + box[5] + box[8] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else if (box[0] + box[4] + box[8] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else if (box[2] + box[4] + box[6] == numwin2) { check = 1; player2 = 1; } //Controlla se ha vinto player 2
    else { check = 2; }                                                       //Se non ha vinto nessuno torna check = 2
}

function resetvalori() {                                                        //Funzione per resetare i valori dopo ogni gioco
    for (i = 0; i < 9; i++) {                                                   //Ciclo per cancellare i dati dentro le celle
        document.getElementById(i).style.backgroundImage = null;
        document.getElementById("printrisultato").innerText = null;          //Stampa risultato di pareggio
        box[i] = 0;                                                             //Divento 0 i valori
        check = 0;                                                              //Divento 0 i valori
        count = 0;                                                              //Divento 0 i valori
        risultato = 0;                                                          //Divento 0 i valori
        player1 = 0;                                                            //Divento 0 i valori
        player2 = 0;                                                            //Divento 0 i valori
        controllo = 0                                                           //Divento 0 i valori
    }
}

function resetall() {                                                           //Reset tutti i valori compreso il punteggio totale
    resetvalori();                                                              //Chiama l altro funzione di reset
    winplayer1 = 0;                                                             //Punteggi pari = 0  
    winplayer2 = 0;                                                             //Punteggi pari = 0  
    puntipari = 0;                                                              //Punteggi pari = 0  

    punti();                                                                    //Stampa punteggio
}

function stampa(stamparis){
    document.getElementById("printrisultato").innerText = "Ha vinto player " + stamparis;          //Stampa risultato di pareggio
}
function stampapari(stamparispari){
    document.getElementById("printrisultato").innerText = "Risultato pari ";          //Stampa risultato di pareggio
}
