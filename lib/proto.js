'use strict';

var getOwnPropNames = Object.getOwnPropertyNames;
var getOwnPropDescriptor = Object.getOwnPropertyDescriptor;
var hasOwnProp = hasOwnProperty;
var defineProp = Object.defineProperty;

exports = module.exports = {

  /**
   * Instance - "this" is the prototype of the new instance
   *
   */

  new: function _new() {
    var instance = Object.create(this);

    if (instance.constructor) {
      instance.constructor.apply(instance, arguments);
    }
    return instance;
  },

  /**
   * Subclass - "this" is a prototype object used as a class
   *
   */

  extend: function extend(props) {
    var descriptor = {};

    getOwnPropNames(props).forEach(function (name) {
      descriptor[name] = getOwnPropDescriptor(props, name);
    });

    var subProto = Object.create(this, descriptor);

    subProto.super = this;
    return subProto;
  },

  /**
  * Add properties from other objects
  *
  */

  mixin: function mixin(target, source) {
    getOwnPropNames(src).forEach(function (name) {
      if (hasOwnProp.call(target, name)) {
        return;
      }
      var descriptor = getOwnPropDescriptor(source, name);

      defineProp(target, name, descriptor);
    });
    return target;
  }
};