export default {
    props:['btnStyle'],
    template:`
        <button 
            :class="{
                'p-3 text-white rounded-md m-3': true,
                'bg-blue-600': btnStyle === 'primary',
                'bg-red-600': btnStyle === 'danger',
                'bg-green-600': btnStyle === 'success',
            }" 
            :disabled="isDisabled"><slot /></button>
    `,
    data(){
        return {
            isDisabled:false
        }
    }
}