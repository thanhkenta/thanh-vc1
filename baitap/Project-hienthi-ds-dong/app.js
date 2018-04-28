var study = new Vue({
    el: '#study',
    data: {
        title: 'Programming Languages of 2015 must to learn',
        programingLangs: [
            {
                learned: true, // có
                content: 'PHP'
            },
            {
                learned: false, //ko
                content: 'Javascript'
            },
            {
                learned: false,
                content: 'Scala'
            }
        ],
    },
    methods: {
        addLang: function(lang, e) {
            e.stopPropagation();
            if (lang === '') return; // k nhạp vào gì cả
            this.programingLangs.push({ // nếu có nhập thì thêm vào sau
                learned: this.learned,// theo true false của checkbox(mặc định là false)
                content: lang // ăn theo v-model="lang" theo dùng nhập vào
            });
        }
    }
});