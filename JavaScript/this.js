var obj = {
  count: 0,
  incrementCount1() {
    if (this.count < 1) {
      setTimeout(function() {
        this.count++;
        console.log(1, this.count);
      }, 100);
    }
  },
  incrementCount2() {
    if (this.count < 1) {
      setTimeout(() => {
        this.count++;
        console.log(2, this.count);
      }, 100);
    }
  },
  incrementCount3() {
    if (this.count < 1) {
      setTimeout(
        function() {
          this.count++;
          console.log(3, this.count);
        }.bind(this),
        100
      );
    }
  }
};

obj.incrementCount1();
obj.incrementCount1();
obj.incrementCount1();
obj.incrementCount2();
obj.incrementCount2();
obj.incrementCount2();
obj.incrementCount3();
obj.incrementCount3();
obj.incrementCount3();
