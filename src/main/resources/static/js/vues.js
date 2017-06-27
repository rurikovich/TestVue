/**
 * Created by User on 20.06.2017.
 */

Vue.component('text-field', {
    template: '<div>text</div>'
});

Vue.component('datetime-field', {
    template: '<div>datetime</div>'
});

Vue.component('fixedchoice-field', {
    template: '<div>fixedchoice</div>'
});

Vue.component('office-field', {
    template: '<div>office</div>'
});


var vm = new Vue({
    el: '#speechScript',
    data: {
        questions: '',
        currentQuestion: 0,
        prevQuestions: [],
        fieldComponents: ['text-field', 'office-field']

    },
    created: function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('GET', '/json');
        xhr.onload = function () {
            self.questions = JSON.parse(xhr.responseText);
            console.log(self.questions[0])
        };
        xhr.send()
    },

    methods: {
        switchQuestion: function (nextQuestionId, answerId) {
            var pq = {};
            pq.qId = this.currentQuestion;
            pq.aId = answerId;

            this.prevQuestions.push(pq);
            this.currentQuestion = nextQuestionId;

            this.fieldComponents.push('fixedchoice-field');
        }
    }
});