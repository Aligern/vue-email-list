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
            const emailList =[];
            for (let i = 0; i < this.numEmails; i++) {
                // we call out the API with axios //
                axios.get(this.api_path).then((res)=>{

                    console.log(res.data);
                    const email = res.data.response
                    this.emails.push(email);
                    if(i === this.emails.length -1){
                        this.email = [...emailList];
                    }
                    
                });
             // console.log(this.emails);
            }
        }
    },
    created() {
        // we print directly the list into the DOM //
        this.getRandomEmails();
    },
    mounted() {
        
    }
}).mount('#app');