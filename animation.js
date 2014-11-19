/* Animation is the prototype from which all animations inheirits. 
 * Methods common to all animations are defined here. */

var Animation = function() {
  return {
    make: function(defaultParams) {
      function anim(selection) {
        this.selection = selection;
        this.params = {}
        for (p in Object.getPrototypeOf(this).defaultParams) {
          this.params[p] = Object.getPrototypeOf(this).defaultParams[p];
        }
      }
      anim.prototype = Object.create(this);
      anim.prototype.defaultParams = defaultParams || {};
      return anim;
    },
    getSelection: function() {
      return this.selection;
    },
    getParams: function() {
      return this.params;
    },
    resetParams: function() {
      for (p in Object.getPrototypeOf(this).defaultParams) {
        this.params[p] = Object.getPrototypeOf(this).defaultParams[p];
      }
    },
    play: function() { 
      /* Override me */ 
    },
    stop: function() {
      this.selection.transition().duration(0).attr("fill", "white");
    }
  }
}()