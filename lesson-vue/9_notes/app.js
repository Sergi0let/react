const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type your note',
        index: null,
      },
      notes: ['Note 1', 'Note 1', 'Note 3'],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        console.log(updatedList);
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = '';
    },
    remove(index) {
      this.notes.splice(index, 1);
    },
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },

    changeInputValue(index) {
      this.input.index = index;
    },

    updateNote() {
      this.notes[this.input.index] = this.input.value;
      this.input.value = '';
      this.input.index = null;
    },
  },
};

Vue.createApp(App).mount('#app');
