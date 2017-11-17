# CSS processors

Two of the most important principles of web development are to `avoid repetition` and aim for `reusability`. CSS is a fairly simple language, which is perfect for small websites, but when left to its own devices ends up creating too much repetition.

In order to minimize this, we have tools called CSS processors. There are many, including SASS, LESS, PostCSS and also Javascript based ones. In this lesson, we will learn about SASS.

### Variables

```css
$border-color: #262626;

.primary-button {
    border: $border-color 1px solid;
}

input {
    border: $border-color 2px dotted;
}
```

Outputs

```css
.primary-button {
    border: #262626 1px solid;
}

input {
    border: #262626 2px dotted;
}
```

### Nesting

```css
.articles {
    h1 {
        font-size: 20px;
    }

    p {
        margin-bottom: 30px;
    }

    .hero-image {
        width: 100%;
    }
}
```

Outputs

```css
.articles h1 {
    font-size: 20px;
}

.articles p {
    margin-bottom: 30px;
}

.articles .hero-image {
    width: 100%;
}
```

### Composability

```css
.btn {
    border-radius: 3px;

    &--primary {
        background-color: #802be2;
    }

    &--secondary {
        background-color: #ffffff;
    }
}
```

Outputs

```css
.btn {
    border-radius: 3px;
}

.btn--primary {
    background-color: #802be2;
}

.btn--secondary {
    background-color: #ffffff;
}
```

### Conditions

Do somehting based on a variable.

```css
$food: apple;

div {
    @if $food == apple {
        background-color: red;
    } @else if $food == pear {
        color: green;
    } @else {
        color: grey;
    }
}
```

Outputs

```css
div {
    background-color: red;
}
```

The background color is read because we defined the variable food as `apple` in the beginning.

### Loops

```css
@for $i from 1 through 8 {
    $width: percentage(1 / $i);

    .col-#{$i} {
        width: $width;
    }
}
```

Outputs
```css
.col-1 {width: 100%;}
.col-2 {width: 50%;}
.col-3 {width: 33.333%;}
.col-4 {width: 25%;}
.col-5 {width: 20%;}
.col-6 {width: 16.666%;}
.col-7 {width: 14.285%;}
.col-8 {width: 12.5%;}
```

(example taken from http://clubmate.fi/for-while-and-each-loops-in-sass/).
