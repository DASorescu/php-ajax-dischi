Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        discs: [],
        generi: [],
    },
    mounted() {
        axios.get('../api/api.discs').then(res => {
            this.discs = res.data
            for (let disc of this.discs) {
                if (!this.generi.includes(disc.genre)) {
                    this.generi.push(disc.genre)
                }
            }
        });
    }
});