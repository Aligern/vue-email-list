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
        // here we  have our function that will generate the emails //
        getRandomEmails() {
            this.emails = [];
            for (let i = 0; i < this.numEmails; i++) {
                // we call out the API with axios //
                axios.get(this.api_path).then((res)=>{

                    console.log(res.data);
                    const email = res.data.response
                    this.emails.push(email);
                });
             // console.log(this.emails);
            }
        }
    },
    created() {
      
    },
    mounted() {
          
    }
}).mount('#app');