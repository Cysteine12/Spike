<template>
    <div class="modal-backdrop" @click.self="closeAnswerModal">
        <div class="card">
            <h2 class="solution-head sm-1">Solution</h2>
            <p class="solution-main">{{ answer }}</p>
            <button class="btn-close" @click="closeAnswerModal">
                <i class="far fa-times-circle fa-3x"></i>
            </button>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'

export default {
    name: 'AnswerModal',
    props: ['answer'],
    components: {
        Card
    },
    methods: {
        closeAnswerModal() {
            this.$emit('closeSolution')
        }
    }
}
</script>

    <style scoped>
.card {
    margin: 0 30px;
    padding: 20px;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: zoomIn 0.5s ease-in-out;
}

.modal-backdrop {
    width: 100%;
    height: 100%; 
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
    line-height: 1.6;
    z-index: 10;
    transition: 1s ease-in-out;
}

.solution-head {
    text-align: center;
    color:  rgb(22, 139, 6);
}

.solution-main {
    margin-top: 40px;
    text-align: left;
}

.btn-close {
    border: 0;
    padding: 0;
    border-radius: 50%;
    background: #fff;
    color: #d9534f;
    position: absolute;
    top: -18px;
    right: -18px;
    cursor: pointer;
}
</style>