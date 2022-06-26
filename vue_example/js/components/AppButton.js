export default {
    template:`
        <button :disabled="isDisabled"><slot /></button>
    `,
    data(){
        return {
            isDisabled:false
        }
    }
}