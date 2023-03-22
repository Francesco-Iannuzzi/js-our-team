/*

CONSEGNA:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
- nome
- ruolo
- foto

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. ✓

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto. ✓

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe. ✓

BONUS 1:
Trasformare la stringa foto in una immagine effettiva. ✓

BONUS 2:
Organizzare i singoli membri in card/schede. ✓

Consigli del giorno:
- Ragioniamo come sempre a step.
- Prima la logica in italiano e poi traduciamo in codice.
- E ricordiamoci che console.log() è nostro amico!

*/

/*

TOOLS:
- const / let
- array
- object
- for / while
- querySelector / getElementById
- innerHTML / createElement / insertAdjacentHTML

*/

//creare un array che contenga i vari membri e definiamo l'array in una costante
const memberTeam = [
    //definire all'interno dell'array i vari membri tramite object e definire le lore caratteristiche
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]


//creare un elemento in DOM in cui stampare a schermo le caratteristiche dei membri del team (gli object dell'array)
//selezionare l'elemento della DOM e salvarlo in una variabile
const rowElement = document.querySelector('.row');

//creare una funzione per ciclare nell'array
function loopInArray(array) {
    //creare un ciclo per ciclare nell'array dei membri 
    for (let i = 0; i < array.length; i++) {
        //salvare i vari membri in una costante e loggarli in console
        const member = array[i];

        //opzione 2 per stampa in console
        for (const key in member) {
            console.log(member[key]);
        }

        const markup =
            `<div class="col-4 my-5 d-flex justify-content-evenly">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/img/${member.img}" class="card-img-top img-fluid" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <h6 class="card-text">${member.job}</h6>
                    </div>
                </div>
            </div>
            `

        //stampare le varie caratteristiche degli object (membri) nell'elemento selezionato
        rowElement.innerHTML += markup;
    }
}

loopInArray(memberTeam)