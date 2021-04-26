var app = new Vue({    
    
    el: '#root',
    data: {
        //per fare le operazioni necessarie a far funzionare l'applicazione, gli servirà sapere quale è il contatto attivo in quel momento.
        //quindi mettiamo una nuova proprietà (activeContact) e gli mettiamo di default 0. 
        //In questo modo creiamo un collegamento tra l'indice di un oggetto e l'elemento corrente attivo.
        activeContact: 0, 
        userNewMessage: '',
        userFilter: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        setActiveContact(index) {
            this.activeContact = index;
        },
        //funzione per inserire un nuovo messaggio da parte dell'utente con il tasto invio
        addNewMessage() {
            const newMsg = {
                date:   dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.userNewMessage,
                status: 'sent'
            }
            console.log(newMsg);
            this.contacts[this.activeContact].messages.push(newMsg);
            this.userNewMessage = '';

            //arrow function per avere in automatico dopo un secondo come risposta un messaggio dal computer
            setTimeout(() => {
                const newReplyMsg = {
                    date:   dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'Ok',
                    status: 'received'                   
                }
                
                this.contacts[this.activeContact].messages.push(newReplyMsg);

            }, 1000);
        },

        filterContacts() {
            const userFilterLowerCase = this.userFilter.toLowerCase();
            
            this.contacts.forEach((contact) => {
                //nome del contatto in minuscolo
                const contactNameLowerCase = contact.name.toLowerCase();
                
                //verifichiamo se quello che scrive un utente nella input corrisponde ad un contatto nella lista
                //se è vero, contactVisible = true
                //se è falso, contactVisible = false
                if( contactNameLowerCase.includes(userFilterLowerCase) ) {
                    contact.visible = true; 
                } else {
                    contact.visible = false; 
                }
            }); 
        },
    }
    
});