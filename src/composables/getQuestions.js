import { ref } from 'vue'
const getOrganicChemistryQuestions = () => {
    const questions = ref([
        {
            id: 1,
            question: 'Which of these is the product formed between CH3COOH AND CH3CH2CH2OH ?',
            options: [
                { option: 'Ethyl Propanoate', answer: false },
                { option: 'Propyl Ethanoate', answer: false },
                { option: 'Butyl Propanoate', answer: true },
                { option: 'Propyl Butanoate', answer: false }
            ],
            answer: 'This is the correct answer for 1'
        },
        {
            id: 2,
            question: 'Which of the following is not a characteristics of Organic Compounds?',
            options: [
                { option: 'They are generally volatile and inflammable', answer: false },
                { option: 'They may be in gaseous,liquid and solid state', answer: false },
                { option: 'They are mostly ionic compounds', answer: false },
                { option: 'They do not conduct electricity because of the absence of free ions', answer: false }
            ],
            answer: 'This is the correct answer for 2'
        },
        {
            id: 3,
            question: 'The compound produced by the oxidation of 2-methylpropanol is?',
            options: [
                { option: 'Aldehyde', answer: false },
                { option: 'Carbide', answer: false },
                { option: 'Alkanoic', answer: false },
                { option: 'Ketone', answer: false }
            ],
            answer: 'This is the correct answer for 3'
        },
        {
            id: 4,
            question: 'Which of these is a derivative of carboxylic acid',
            options: [
                { option: 'Amide', answer: false },
                { option: 'Amine', answer: false },
                { option: 'Sulphiones', answer: false },
                { option: 'Carbene', answer: false }
            ],
            answer: 'This is the correct answer for 4'
        },
        {
            id: 5,
            question: 'The molecular formular of Pentane',
            options: [
                { option: 'CH3CH2CH2CH3', answer: false },
                { option: 'CH3CH2CH2CH(CH3)CH3', answer: false },
                { option: 'CH3CH2CH2CH2CH3', answer: false },
                { option: 'CH2CH2CH2CH2CH3', answer: false }
            ],
            answer: 'This is the correct answer for 5'
        }
    ])
    const questionId = ref(null)
    const questionArray = ref(null)
    const findQuestion = ref(null)
    
    const selectedAnswer = (questionId) => {
        const findQuestion = (question) => {
            return question.id === questionId
        }
        const questionArray = questions.value.find(findQuestion)
        console.log(questionArray)
    }
    
    return { questions, questionArray, selectedAnswer } 
}

export default getOrganicChemistryQuestions