'use strict';
const getOwnPropNames = Object.getOwnPropertyNames;
const getOwnPropDescriptor = Object.getOwnPropertyDescriptor;
const hasOwnProp = hasOwnProperty;
const defineProp = Object.defineProperty;

exports = module.exports = {

  /**
   * Instance - "this" is the prototype of the new instance
   *
   */

  new: function() {
    const instance = Object.create(this);

    if (instance.constructor) {
      instance.constructor.apply(instance, arguments);
    }
    return instance;
  },

  /**
   * Subclass - "this" is a prototype object used as a class
   *
   */

  extend: function(props) {
    const descriptor = {};

    getOwnPropNames(props).forEach((name) => {
      descriptor[name] = getOwnPropDescriptor(props, name)
    });

    const subProto = Object.create(this, descriptor)

    subProto.super = this;
    return subProto;
  },

    /**
   * Add properties from other objects
   *
   */

  mixin: function(target, source) {
    getOwnPropNames(source).forEach((name) => {
      if (hasOwnProp.call(target, name)) { return; }
      const descriptor = getOwnPropDescriptor(source, name);

      defineProp(target, name, descriptor);
    });
    return target;
  }
};