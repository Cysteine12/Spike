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
        <h3>Q{{ question.id }}</h3>
        <div>
            <p>{{ question.question }}</p>
            <ul>
                <div 
                v-for="option in question.options" 
                :key="option.index"
                @click="selectedAnswer(option.option)"
                :class="question-option"
                >
                    <li>
                        {{ option.option }}
                    </li>
                </div>
            </ul>
            <div class="solution">
                <p><a href="">View Solutions<i class="fas fa-check-circle"></i></a></p>
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
import { ref } from '@vue/reactivity'

export default {
  components: {
    Header,
    Footer,
    Showcase,
    Card
  },
  data() {
      return {
          questionArray: Object,
          questions: [
                {
                    id: 1,
                    question: 'Which of these is the product formed between CH3COOH AND CH3CH2CH2OH ?',
                    options: [
                        { option: 'Ethyl Propanoate', answer: false },
                        { option: 'Propyl Ethanoate', answer: false },
                        { option: 'Butyl Propanoate', answer: true },
                        { option: 'Propyl Butanoate', answer: false }
                    ]
                },
                {
                    id: 2,
                    question: 'Which of the following is not a characteristics of Organic Compounds?',
                    options: [
                        { option: 'They are generally volatile and inflammable', answer: false },
                        { option: 'They may be in gaseous,liquid and solid state', answer: false },
                        { option: 'They are mostly ionic compounds', answer: false },
                        { option: 'They do not conduct electricity because of the absence of free ions', answer: false }
                    ]
                },
                {
                    id: 3,
                    question: 'The compound produced by the oxidation of 2-methylpropanol is?',
                    options: [
                        { option: 'Aldehyde', answer: false },
                        { option: 'Carbide', answer: false },
                        { option: 'Alkanoic', answer: false },
                        { option: 'Ketone', answer: false }
                    ]
                },
                {
                    id: 4,
                    question: 'Which of these is a derivative of carboxylic acid',
                    options: [
                        { option: 'Amide', answer: false },
                        { option: 'Amine', answer: false },
                        { option: 'Sulphiones', answer: false },
                        { option: 'Carbene', answer: false }
                    ]
                },
                {
                    id: 5,
                    question: 'The molecular formular of Pentane',
                    options: [
                        { option: 'CH3CH2CH2CH3', answer: false },
                        { option: 'CH3CH2CH2CH(CH3)CH3', answer: false },
                        { option: 'CH3CH2CH2CH2CH3', answer: false },
                        { option: 'CH2CH2CH2CH2CH3', answer: false }
                    ]
                }
                //   {
                //       id: 1,
                //       question: '',
                //       options: [
                //           { option: '', answer: false },
                //           { option: '', answer: false },
                //           { option: '', answer: false },
                //           { option: '', answer: false }
                //       ]
                //   }
            ]
        }
      
    },
    methods: {
        // selectedAnswer(option) {
        //     function findQuestion(question, option) {
        //         return question.options.option === option
        //     }
        //     this.questionArray = this.questions.find(findQuestion)
        //     console.log(this.questionArray)
        //     // if (option == this.op) {
                
        //     // } else {
                
        //     // }
        // }
    },
    setup() {
        const option = ref(null)
        const question = ref(null)
        const questionArray = ref(null)
        const findQuestion = ref(null)
        const selectedAnswer = (option) => {
            console.log(option)
            const findQuestion = () => {
                return question.options.option === option
            }
            questionArray = questions.find((option) => {
                question.options.option === option
            })
            console.log(questionArray)
        }

        return {
            question,
            findQuestion,
            selectedAnswer,
            questionArray
        }
    }
}
</script>

<style>

</style>