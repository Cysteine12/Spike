<template>
    <div class="modal-backdrop" @click.self="closeAnswerModal">
        <Card>
            <h2 class="my-2">Solution</h2>
            Spike
            <slot>
                <p>{{ answer }}</p>
            </slot>
            <button class="btn-close">
                <i class="far fa-times-circle fa-3x"></i>
            </button>
        </Card>
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
            this.emit('close')
        }
    }
}
</script>

<style scoped>
.modal-backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    background: rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.card {
    margin: auto;
    max-width: 500px;
    position: relative;
}

h2 {
    color:  rgb(22, 139, 6);
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
}
</style>