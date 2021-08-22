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
        INDUSTRIAL CHEMISTRY
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
                @click="selectedAnswer(option.option)"
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
                    question: 'Briefly explain why organic pigments from transparent materials as opposed to opaque property exhibited by materials in which inorganic pigments where used as the colour impacting agents',
                    options: []
                },
                {
                    id: 2,
                    question: 'Why can\'t non transition metal compounds exhibit colours',
                    options: []
                },
                {
                    id: 3,
                    question: 'In what condition will a non-transition metal exhibit colour ?',
                    options: []
                },
                {
                    id: 4,
                    question: 'Explain why Zn as a transition metal is colourless.',
                    options: []
                },
                {
                    id: 5,
                    question: 'How does the nature of a ligand affect colour exhibition in a complex?',
                    options: []
                },
                {
                    id: 6,
                    question: 'In 2 certain chromophoric substances. Substance A = Hemoglobin, Substance B = Chlorophyll, It was discovered that there is presence of metal(s) in them. What is the function of these metals in them and give an example each of the metals found in A and B',
                    options: []
                },
                {
                    id: 7,
                    question: 'What are the three condition for a color impacting substance to be considered as a pigment?',
                    options: []
                },
                {
                    id: 8,
                    question: 'What is the relationship between energy of absorbed light and the intensity of the color observed?',
                    options: []
                },
                {
                    id: 9,
                    question: 'Between organic and inorganic pigment, which one exhibits higher color strength. Explain your reasons.',
                    options: []
                },
                {
                    id: 10,
                    question: 'Why are black pigments called reinforcement agents ?',
                    options: []
                },
                {
                    id: 11,
                    question: 'Explain why Zn as a transition metal is colourless.',
                    options: []
                },
                {
                    id: 12,
                    question: 'Explain why Zn as a transition metal is colourless.',
                    options: []
                }
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