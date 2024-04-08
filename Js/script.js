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
                // we make the API do the work
                axios.get(this.api_path).then((res)=>{
                    console.log(res.data);
                    const email = res.data.response
                    this.emails.push(email);
                })
            }
        }
    },
    created() {

    },
    mounted() {
        // we print directly the list into the DOM
        this.getRandomEmails();
    }
}).mount('#app');