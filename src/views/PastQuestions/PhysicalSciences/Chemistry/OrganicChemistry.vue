<template>
<Header />
<Showcase />
<section class="question-template">
  <div class="container">
    <h2 class="question-heading text-center my-1">
        <router-link :to="{ name: 'PastQuestions' }">Past Questions</router-link>
        <i class="fas fa-angle-double-right"></i>
        <router-link :to="{ name: 'PhysicalSciences' }">Physical Sciences</router-link>
        <i class="fas fa-angle-double-right"></i>
        <router-link :to="{ name: 'Chemistry' }">Chemistry</router-link>
    </h2>
    <h2 class="question-heading text-center my-1">
        ORGANIC CHEMISTRY
    </h2>

    <Card v-for="question in questions" :key="question.id">
        <h3>
            <span>Q{{ question.id }}.</span>
        </h3>
        <div>
            <p>{{ question.question }}</p>
            <ul>
                <div 
                v-for="option in question.options" 
                :key="option.index"
                class="question-option"
                @click="selectedAnswer(question.id)"
                >
                    <li :class="option.option.iteration">
                        {{ option.option }}
                    </li>
                </div>
            </ul>
            <div class="solution">
                <p>
                    <button @click="showAnswerF" class="btn-solution">View Solutions<i class="fas fa-check-circle"></i></button>
                </p>
            </div>
            <div v-show="showAnswerModal">
                <AnswerModal :answer="question.answer" @closeSolution="showAnswerF"/>
            </div>
        </div>
    </Card>
  </div>
</section>
<Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Showcase from '@/components/Showcase'
import Card from '@/components/Card'
import AnswerModal from '@/components/AnswerModal'
import { ref } from '@vue/reactivity'
import getOrganicChemistryQuestion from '@/composables/getQuestions'

export default {
    components: {
        Header,
        Footer,
        Showcase,
        Card,
        AnswerModal
    },
    setup() {
        
        //  CHECK SELECTED OPTION
        const { questions, questionArray, option, selectedAnswer } = getOrganicChemistryQuestion()

        //  SHOW ANSWER MODAL
        const showAnswerModal = ref(false)

        const showAnswerF = () => {
            if (questionArray != null) {
                showAnswerModal.value = !showAnswerModal.value
            }
        }

        return {
            showAnswerModal,
            showAnswerF,
            selectedAnswer,
            questions,
            questionArray
        }
    }
}
</script>

<style>

</style>