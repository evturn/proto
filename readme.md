# _Proto_
#### _Use prototypes as classes_

* Three built in properties - `new`, `extend`, `mixin`
* No need for the `new` operator

`$ npm install @evturn/proto`

#### Initializing
 Create an object with only built in properties


```javascript
const Proto = require('@evturn/proto');

const newDude = Proto.extend({});
```
##### or

Create an object with additional properties

```javascript
const Proto = require('@evturn/proto');

const newDude = Proto.extend({
  name: 'Br0metheus Dudequest',
  sup: function() {
    return `I am ${this.name}.`;
  }
});
```

### `Proto.extend()`
#### Creating new objects
* `this` is a prototype object used as a class

```javascript
const newDude = Proto.extend({
  name: 'Br0metheus Dudequest',
  sup: function() {
    return `I am ${this.name}.`;
  }
});

const newerDude = newDude.extend({
  name: 'Quentin Vesclovious'
});

newerDude.sup();
// I am Quentin Vesclovious.
```

### `Proto.new()`
#### Creating new instances
* `this` is the prototype of the new instance

```javascript
const newDude = Proto.extend({
  name: 'Br0metheus Dudequest',
  sup: function() {
    return `I am ${this.name}.`;
  }
});

const newerDude = newDude.new({
  name: 'Quentin Vesclovious'
});

newerDude.sup();
// I am Br0metheus Dudequest.

/**
 *  `newerDude` is an instance of `newDude`
 *
 *  `this` does not reference the instance (`newerDude`)
 *  `this` references the class it is an instance of (`newDude`)
 */

```

### `Proto.mixin(target, source)`
#### Merge properties from a source object into a target object
* returns the target object
* __will not__ redefine/overwrite shared properties
```javascript
const undertaker = Proto.extend({
  tombstone: function() {
    return `Envision me pile driving you head first into the canvas`;
  }
});

const kane = Proto.extend({
  chokeslam: function() {
    return `Just gonna quickly throw you through the Spanish announcer's table`;
  }
});

kane.mixin(kane, undertaker);
kane.tombstone();

// Envision me pile driving you head first into the canvas
```

#### Thanks, br0.
##### Now go out there and be somebody.