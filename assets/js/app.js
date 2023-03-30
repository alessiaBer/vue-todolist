/* Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
-text, una stringa che indica il testo del todo
-done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa). */


const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                {
                    text: 'Learn HTML & CSS',
                    done: true
                },
                {
                    text: 'Learn JS and Vue.js',
                    done: false
                },
                {
                    text: 'Learn PHP & Laravel',
                    done: false
                },
                {
                    text: 'Do Final Project',
                    done: false
                },
                {
                    text: 'Find a job as developer',
                    done: false
                }
            ],
            error: ''
        }
    },
    methods: {
        addTask() {
            const new_task = {
                text: this.newTask,
                done:false
            }
            if (new_task.text.length >= 5 ) {
                this.tasks.unshift(new_task)
            } else {
                this.error = 'Sorry! Your task must contain at least 5 characters'
                setTimeout(this.removeError, 3000)
            }
            this.newTask = ''
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        is_done(i) {
            this.tasks[i].done = !this.tasks[i].done
        },
        removeError() {
            this.error = ''
        }
    }
}).mount('#app')