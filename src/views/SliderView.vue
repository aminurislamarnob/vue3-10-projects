<template>
    <div class="vue-slider position-relative">
        <div class="slider-item w-100 position-absolute" v-for="(color, index) in slideItemsColor" :key="index">
            <Transition name="fade">
                <div class="w-100 h-100" :class="color" v-if="activeSlider === index"></div>
            </Transition>
        </div>
        <div class="slider-dots">
            <div v-for="(color, index) in slideItemsColor" :key="index">
                <div class="dot" :class="activeSlider === index ? 'active' : ''" @click="clickToActiveSlider(index)"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            slideItemsColor: ['bg-primary', 'bg-success', 'bg-warning'],
            activeSlider: 1,
            clearInterval: ""
        }
    },
    mounted() {
        this.clearInterval = setInterval(()=>{
            if(this.activeSlider === 2){
                this.activeSlider = 0;
            }else{
                this.activeSlider++;
            }
        }, 5000);
    },
    beforeUnmount() {
        clearInterval(this.clearInterval)
    },
    methods: {
        clickToActiveSlider(index){
            this.activeSlider = index;
        }
    }
}
</script>

<style scoped>
    .slider-item {
        overflow: hidden;
    }
    .slider-item{
        height: 450px;
    }
    .slider-dots .dot {
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }
    .slider-dots .dot.active{
        background: #333;
    }

    .slider-dots {
        justify-content: center;
        display: flex;
        position: absolute;
        z-index: 999;
        top: 90%;
        width: 100%;
    }

    .vue-slider {
        height: 100%;
        width: 100%;
    }

    .vue-slider {
        width: 100%;
        height: 450px;
    }

    /*Transition*/
    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-enter-from{
        transform: translate(100%);
    }
    .fade-leave-to {
        transform: translate(-100%);
    }
</style>