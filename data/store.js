const ListStore = {
  state: {
    items: [
      {
        text: '买米来',
        isEditing: false
      }
    ]
  },
  load() {
    const dataString = window.localStorage.getItem('todo-list');
    if (dataString) {
      this.state.items = JSON.parse(dataString);
    }
    return true;
  },
  push() {
    window.localStorage.setItem('todo-list', JSON.stringify(this.state.items));
  },
  newItem(text, status, label,) {
    this.state.items.unshift({ text, status, label, isEditing: true})
  }
}

export default ListStore;