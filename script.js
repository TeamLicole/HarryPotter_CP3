import router from './router'

var app = new Vue({
  el: '#app',
  router,
  data: {
    house: '',
    currentRoute: '',
  },
  computed: {
   houseList: function() {
     var houseList = new Array;
     houseList[0] = "Hufflepuff";
     houseList[1] = "Slytherin";
     houseList[2] = "Ravenclaw";
     houseList[3] = "Gryffindor";
     return month[this.current.month - 1];
   }
 },
  methods: {
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      var randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
      return houseList[randomNum];
    },
    sortIntoHouse: function() {
      this.house = this.getRandom(0, 3);
      switch(house) {
        case "Hufflepuff":
          this.currentRoute = routes.Hufflepuff;
          break;
        case "Slytherin":
          break;
        case "Ravenclaw":
          break;
        case "Gryffindor":
          break;
      }
    },
    // addComment: function() {
    //   if (!(this.number in this.comments))
	  //     Vue.set(app.comments, this.number, new Array);
    //   let currDate = new Date(Date.now());
    //   this.comments[this.number].push({author:this.addedName,text:this.addedComment,
    //     date:currDate.getMonth() + "/" + currDate.getDate() + "/" + currDate.getFullYear(),
    //     time:currDate.getHours() + ":" + currDate.getMinutes()});
    //   this.addedName = '';
    //   this.addedComment = '';
    // },
  }
});
