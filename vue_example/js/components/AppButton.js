export default {
    props:['btnbg'],
    template:`
        <button :class="btnbg" :disabled="isDisabled"><slot /></button>
    `,
    data(){
        return {
            isDisabled:false
        }
    }
}