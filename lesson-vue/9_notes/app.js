const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type your note',
      },
      notes: ['Note 1', 'Note 1', 'Note 3'],
    };
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = '';
    },
  },
};

Vue.createApp(App).mount('#app');
