export default {
    data(){
        return{
            timeOut: "",
        }
    },
    methods: {
        deBounce(func, duration = 1000){
            clearTimeout(this.timeOut)
        
            this.timeOut = setTimeout(func, duration)
        }
    }
}