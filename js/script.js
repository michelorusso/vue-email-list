
var app = new Vue(
    {
    el: '#root',
    data: {  
        emailArray: {},
    }, 
    methods: {
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            
                this.emailArray
                const thisOjcEmail = response.data.response;

                this.emailArray = thisOjcEmail;
        });
    }
});
