const {createApp} = Vue;

createApp({
    data() {
        return {
            emails: [],
            numEmails: 10,
            api_path:'https://flynn.boolean.careers/exercises/api/random/mail',

        }
    },
    methods: {
        // here we  have our function that will generate the emails
        getRandomEmails() {
            for (let i = 0; i < this.numEmails; i++) {
                
            }
        }
    },
    created() {

    },
    mouted() {

    }
}).mount('#app');