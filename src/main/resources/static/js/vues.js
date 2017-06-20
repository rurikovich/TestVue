/**
 * Created by User on 20.06.2017.
 */

function initVue() {
    new Vue({
        el: '#speechScript',
        data: {
            questions:''
        },
        created: function () {
            this.fetchData()
        },

        methods: {
            fetchData: function () {
                var xhr = new XMLHttpRequest()
                var self = this
                xhr.open('GET', '/json')
                xhr.onload = function () {
                    self.questions = JSON.parse(xhr.responseText)
                    console.log(self.questions[0])
                }
                xhr.send()
            }
        }

    })
}

initVue()
