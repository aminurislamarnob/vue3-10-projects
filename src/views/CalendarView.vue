<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h1 class="mb-5 text-center">Vue Calendar App</h1>
                <div class="month mb-4 text-center bg-gray d-flex justify-content-between">
                    <button class="btn btn-sm btn-primary" @click="prevMonth">Prev</button>
                    <h4 class="m-0"><strong>{{currentMonthName}}</strong> {{currentYear}}</h4>
                    <button class="btn btn-sm btn-primary" @click="nextMonth">Next</button>
                </div>
                <div class="calendar-row d-flex">
                    <div class="text-center fw-bold calendar-box" v-for="day in days" :key="day">{{ day }}</div>
                </div>
                <div class="calendar-row d-flex flex-wrap">
                    <div class="text-center calendar-box" v-for="date in startDay()" :key="date"></div>
                    <div class="text-center calendar-box" v-for="date in currentMonthDays()" :key="date" :class="highLightToday(date)">{{ date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
        }
    },
    computed: {
        currentMonthName(){
            return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' })
        }
    },
    methods: {
        currentMonthDays(){
            return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
        },
        startDay(){
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        prevMonth(){
            if(this.currentMonth === 0){
                this.currentYear--;
                this.currentMonth = 11;
            }else{
                this.currentMonth--;
            }
        },
        nextMonth(){
            if(this.currentMonth === 11){
                this.currentYear++;
                this.currentMonth = 0
            }else{
                this.currentMonth++;
            }
        },
        highLightToday(date){
            const calendarDate = new Date(this.currentYear, this.currentMonth, date).toDateString();
            const currentDate = new Date().toDateString();
            return (calendarDate === currentDate) ? 'text-primary fw-bold' : '';
        }
    }
}
</script>
<style scoped>
.calendar-box {
    min-width: 14.28%;
    height: 40px;
}
.bg-gray {
    background: #f5f5f5;
    padding: 12px;
}
</style>