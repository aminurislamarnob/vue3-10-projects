<template>
    <div class="container">
        <h2 class="text-center">Calculator</h2>
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="row">
                    <div class="col-lg-">
                        <div class="calculator-display mt-3 mb-2 shadow p-3">
                            <h1>{{ currentValue }}</h1>
                            <small v-if="selectedOperator" class="d-block text-end">{{ oldValue }} {{selectedOperator}} {{currentValue}}</small>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('1')">1</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('2')">2</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('3')">3</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('+')">+</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('4')">4</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('5')">5</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('6')">6</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('-')">-</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('7')">7</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('8')">8</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('9')">9</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('*')">*</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('c')">c</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('0')">0</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('=')">=</button>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-default shadow mb-2 w-100" @click="btnPressed('/')">/</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
export default {
    setup(){
        const currentValue = ref("");
        const oldValue = ref("");
        const operators = ["+","-","*","/"];
        const selectedOperator = ref("");
        const numbers = ["1","2","3","4","5","6","7","8","9","0"];

        function btnPressed(value){
            if(value === '=') calculate();
            else if(value === 'c') clear();
            else if(operators.includes(value)) operation(value);
            else showPressedValue(value);
        }

        function showPressedValue(value){
            currentValue.value = currentValue.value + value
        }

        function operation(value){
            calculate();
            oldValue.value = currentValue.value;
            currentValue.value = "";
            selectedOperator.value = value;
        }

        function calculate(){
            if(selectedOperator.value === '+') sum();
            if(selectedOperator.value === '-') substruct();
            if(selectedOperator.value === '*') multiply();
            if(selectedOperator.value === '/') divide();

            oldValue.value = "";
            selectedOperator.value = "";
        }

        function sum(){
            currentValue.value = +oldValue.value + +currentValue.value //+ convert string to number
        }

        function substruct(){
            currentValue.value = +oldValue.value - +currentValue.value
        }

        function multiply(){
            currentValue.value = +oldValue.value * +currentValue.value
        }

        function divide(){
            currentValue.value = +oldValue.value / +currentValue.value
        }

        function clear(){
            currentValue.value = "";
        }

        function handleKeyPressed(e){
            if(numbers.includes(e.key)) showPressedValue(e.key);
            else if(operators.includes(e.key)) operation(e.key);
            else if(e.key === 'Enter') calculate();
        }

        onMounted(()=>{
            window.addEventListener('keydown', handleKeyPressed)
        })

        onUnmounted(()=>{
            window.removeEventListener('keydown', handleKeyPressed);
        })

        return{
            currentValue,
            oldValue,
            selectedOperator,
            btnPressed
        }
    }
}
</script>

<style>
.calculator-display {
    min-height: 120px;
    border-radius: 4px;
    
}
.calculator-display h1{
    direction: rtl;
    overflow-y: hidden;
    width: 100%;
    min-height: 48px;
}

</style>