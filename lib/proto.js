'use strict';
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

  extend: function(subProps) {
    const subProto = Object.create(this, Object.getOwnPropertyDescriptors(subProps));

    subProto.super = this;
    return subProto;
  },

    /**
   * Add properties from other objects
   *
   */

  mixin: function(dest, src) {
    Object.getOwnPropertyNames(src).forEach((name) => {
      if (hasOwnProperty.call(dest, name)) { return; }

      const descriptor = Object.getOwnPropertyDescriptor(src, name);

      Object.defineProperty(dest, name, descriptor);
    });

    return dest;
  }
};