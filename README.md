# Vue Card Flip

This package is very simple, yet configurable card flipping Vue component.

## Installation

To install in your project, run:

```js
npm i @swbc/vue-simple-flip -S
```

## Configuration

In the component you wish the card to be, right below the script tag, add:

```js
import FlipCard from "@swbc/vue-simple-flip";
```

Naming convention is obviously up to you.

### Register the Component

Inside of your component configuration, register the `FlipCard` by adding:

```js
export default {
  // stuff
  components: {
    FlipCard
  },
  // really important stuff
}
```

## Usage

Inside of your template, use the `<FlipCard>` anywhere you'd like.

```js
<template>
  <FlipCard>
    // slots
  </FlipCard>
</template>
```

### Props

Currently, 4 styling props are supported, all are type `String`.

1. Height: `height`
2. Width: `width`
3. Background Color: `backgroundColor`
4. Color: `textColor`

Example with fixed values:

```js
<template>
  <FlipCard height="400px" width="300px"
    backgroundColor="#ffffff" color="#f3f3f3">
    // slots
  </FlipCard>
</template>
```

Example with dynamic values:

```js
<template>
  <FlipCard :height="height" :width="width"
    :backgroundColor="chosenBackgroundColor" :color="chosenFontColor">
    // slots
  </FlipCard>
</template>
```

Currently media queries aren't implemented, but working on it.

### Slots

This component uses 4 slots:

1. Front of Card: `front`
2. Front call to action: `cta-slot-front`
3. Back of Card: `back`
4. Back call to action: `cta-slot-back`

The slots can be anything you wish, just make sure you **name** them correctly.

Example:

```js
<template>
  <FlipCard height="400px" width="300px"
     backgroundColor="#ffffff" color="#f3f3f3">
    <template slot="front">
      <div>
        This content will be on the front of the card.
      </div>
    </template>
    <template slot="cta-slot-front">
      <button>
        This will be the call to action to flip the card
      </button>
    </template>
    <template slot="back">
      <div>
        This content will be on the back of the card.
      </div>
    </template>
    <template slot="cta-slot-back">
      <i class="superIcon">
        This could be an icon
      </i>
    </template>
  </FlipCard>
</template>
```

### Styles

- The cards' content is centered.
- Overflow is set to scroll.
