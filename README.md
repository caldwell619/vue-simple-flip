# Vue Card Flip

This package is a collection of very simple, yet configurable Vue components.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Registering Components](#register-the-component)
- [Usage](#usage)
  - [FlipCard](#flipcard)
  - [Accordion](#accordion)
  - [AccordionList](#accordionlist)

## Installation

To install in your project, run:

```js
npm i @swbc/simple-vue-components -S
```

## Configuration

This package supports dependency tree shaking, which allows you to destructure your imports.

In the component you wish the package component to be, right below the script tag, add:

```js
import { FlipCard } from "@swbc/simple-vue-components";
```

The options so far are:

- `FlipCard`
- `Accordion`
- `AccordionList`

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

### FlipCard

Inside of your template, use the `<FlipCard>` anywhere you'd like.

```js
<template>
  <FlipCard>
    // slots
  </FlipCard>
</template>
```

#### Props

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

#### Slots

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

#### Styles

- The cards' content is centered.
- Overflow is set to scroll.

### Accordion

Inside of your template, use the `<Accordion>` anywhere you'd like.

```js
<template>
  <Accordion>
    // slots
  </Accordion>
</template>
```

#### Props

Currently, the Accordion component uses one prop

1. Whether or not the component is open: `open`

Example:

```html
<template>
  <Accordion :open="true">
    // slots
  </Accordion>
</template>
```

#### Slots

This component uses 3 slots:

1. Title of the card ( what is always seen ): `title`
2. Call to action: `title-cta`
3. Content of the accordion, the toggle-able part: `content`

The slots can be anything you wish, just make sure you **name** them correctly.

Example:

```html
<template>
  <Accordion>
    <template slot="title">
      <div>
        <p>The header of your accordion</p>
      </div>
    </template>
    <template slot="title-cta">
      <div>
        <button>Click Me!</button>
      </div>
    </template>
    <template slot="content">
      <div>
        <p>Some well thought out and important content</p>
      </div>
    </template>
  </Accordion>
</template>
```

#### Styles

- The call to action is right aligned


### Using Several Individual Accordions


```js
<template>
  <Accordion>
    // slots
  </Accordion>
</template>
```

#### Props

Currently, the Accordion component uses one prop

1. Whether or not the component is open: `open`

Example:

```html
<template>
  <Accordion :open="true">
    // slots
  </Accordion>
</template>
```

#### Slots

This component uses 3 slots:

1. Title of the card ( what is always seen ): `title`
2. Call to action: `title-cta`
3. Content of the accordion, the toggle-able part: `content`

The slots can be anything you wish, just make sure you **name** them correctly.

Example:

```html
<template>
  <Accordion>
    <template slot="title">
      <div>
        <p>The header of your accordion</p>
      </div>
    </template>
    <template slot="title-cta">
      <div>
        <button>Click Me!</button>
      </div>
    </template>
    <template slot="content">
      <div>
        <p>Some well thought out and important content</p>
      </div>
    </template>
  </Accordion>
</template>
```

#### Styles

- The call to action is right aligned

### AccordionList

Inside of your template, use the `<FlipCard>` anywhere you'd like.

```js
<template>
  <FlipCard>
    // slots
  </FlipCard>
</template>
```

#### Props

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

#### Slots

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

#### Styles

- The cards' content is centered.
- Overflow is set to scroll.
