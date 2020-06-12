var vm = new Vue({
    el: '#app',
    data: {
        students: [
            {
                student: 'Tanya Sinclair',
                role: 'UX Engineer',
                review : '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
                imageUrl: './images/image-tanya.jpg' 
            },
            {
                student: 'John Tarkpor',
                role: 'Junior Front-end Developer',
                review: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
                imageUrl: './images/image-john.jpg'
            }
        ],

        currentIndex: 0
    },

    methods: {
        nextReview: function() {
            if (this.currentIndex < this.students.length-1) {
            this.currentIndex++;
            } else this.currentIndex = 0;
        },

        prevReview: function() {
            if (this.currentIndex > 0) {
            this.currentIndex--;
            } else this.currentIndex = this.students.length-1;
        }
    }

});