export default() => ({
  January: {
    dates: [],
    dateCount: 31,
    name: 'January',
  },
  February: {
    dates: [],
    dateCount: 28,
    name: 'February',
  },
  March: {
    dates: [],
    dateCount: 31,
    name: 'March',
  },
  April: {
   dates: [],
   dateCount: 30,
   name: 'April'
  },
  May: {
    dates: [],
    dateCount: 31,
    name: 'May',
  },
  June: {
    dates: [],
    dateCount: 30,
    name: 'June',
  },
  July: {
    dates: [],
    dateCount: 31,
    name: 'July'
  },
  August: {
    dates: [],
    dateCount: 31,
    name: 'August'
  },
  September: {
    dates: [],
    dateCount: 30,
    name: 'September',
  },
  October: {
    dates: [],
    dateCount: 31,
    name: 'October',
  },
  November: {
    dates: [],
    dateCount: 30,
    name: 'November',
  },
  December: {
    dates: [],
    dateCount: 31,
    name: 'December'
  },
  selectedMonth: {},
  selectMonth: {
    ['@select-month']() {
      if (this.selectedMonth.name) {
        this.$data[this.selectedMonth.name] = this.selectedMonth;
      }
      this.selectedMonth = this.$data[this.$event.detail.trim()];
      if (!this.selectedMonth.dates.length) {
        this.selectedMonth.dates = Array(this.selectedMonth.dateCount).fill('');
      }
    }
  }
})
