function ready(flagOrFunction) {
  this._ready = !!this._ready;
  this._readyCallbacks = this._readyCallbacks || [];

  if ('function' === typeof(flagOrFunction)) {
    this._readyCallbacks.push(flagOrFunction);
  } else {
    this._ready = !!flagOrFunction;
  }

  if (this._ready) {
    this._readyCallbacks.splice(0, Infinity).forEach(function(callback) {
      process.nextTick(callback);
    });
  }
}

exports.mixin = function(object) {
  object.ready = ready;
};