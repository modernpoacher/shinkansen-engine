## `shinkansen-engine`

_Shinkansen_ generates JSON Schema valid documents from user submissions with `<html />` forms.

# Engine

_Engine_ renders React layouts with `<html />` form field and group elements, as well as optional navigation components, using [_Pinion_](https://github.com/modernpoacher/shinkansen-pinion), [_Gears_](https://github.com/modernpoacher/shinkansen-gears) and [_Transmission_](https://github.com/modernpoacher/shinkansen-transmission).

Layouts can be produced from a JSON Schema transformed into the Zashiki description format. The user submission generated by the layout will be valid according to that JSON Schema.

## Storybook

We use [Storybook](https://storybook.js.org/) to present React layouts and components.

Our Stories contain _single-value_ components for development. (Layouts for production are composed of one or several components.)

Typically, these render with an `<input />` element, but under _Controls_ you can see how a _choice_ can be captured with `<radio />` or `<select />` elements.

### String values

- [String](docs/string.md#1-string)
- [String (_Enum_)](docs/string.md#1---1-string-enum)
- [String (_Any of_)](docs/string.md#1---2-string-any-of)
- [String (_One of_)](docs/string.md#1---3-string-one-of)

### Number values

- [Number](docs/number.md#2-number)
- [Number (_Enum_)](docs/number.md#2---1-number-enum)
- [Number (_Any of_)](docs/number.md#2---2-number-any-of)
- [Number (_One of_)](docs/number.md#2---3-number-one-of)

### [Array](docs/array.md#3-array) values

Whether _items is an object_ or _items is an array_ depends on how Zashiki interprets the JSON Schema (assuming that Zashiki has mechanically translated a JSON Schema into a description, and the description hasn't been generated manually). It matters for validating the _document_ according to the _schema_, but for humans the distinction may seem arbitrary. Our stories account for both structures.

#### Array (_Items is an object_)

- [String](docs/array.md#3---1---1-array-items-is-an-object---string)
- [String (_Enum_)](docs/array.md#3---1---1---1-array-items-is-an-object---string-enum)
- [String (_Any of_)](docs/array.md#3---1---1---2-array-items-is-an-object---string-any-of)
- [String (_One of_)](docs/array.md#3---1---1---3-array-items-is-an-object---string-one-of)
- [Number](docs/array.md#3---1---2-array-items-is-an-object---number)
- [Number (_Enum_)](docs/array.md#3---1---2---1-array-items-is-an-object---number-enum)
- [Number (_Any of_)](docs/array.md#3---1---2---2-array-items-is-an-object---number-any-of)
- [Number (_One of_)](docs/array.md#3---1---2---3-array-items-is-an-object---number-one-of)
- [Boolean](docs/array.md#3---1---3-array-items-is-an-object---boolean)
- [Boolean (_Enum_)](docs/array.md#3---1---3---1-array-items-is-an-object---boolean-enum)
- [Boolean (_Any of_)](docs/array.md#3---1---3---2-array-items-is-an-object---boolean-any-of)
- [Boolean (_One of_)](docs/array.md#3---1---3---3-array-items-is-an-object---boolean-one-of)
- [Null](docs/array.md#3---1---4-array-items-is-an-object---null)
- [Null (_Enum_)](docs/array.md#3---1---4---1-array-items-is-an-object---null-enum)
- [Null (_Any of_)](docs/array.md#3---1---4---2-array-items-is-an-object---null-any-of)
- [Null (_One of_)](docs/array.md#3---1---4---3-array-items-is-an-object---null-one-of)

#### Array (_Items is an array_)

- [String](docs/array.md#3---2---1-array-items-is-an-array---string)
- [String (_Enum_)](docs/array.md#3---2---1---1-array-items-is-an-array---string-enum)
- [String (_Any of_)](docs/array.md#3---2---1---2-array-items-is-an-array---string-any-of)
- [String (_One of_)](docs/array.md#3---2---1---3-array-items-is-an-array---string-one-of)
- [Number](docs/array.md#3---2---2-array-items-is-an-array---number)
- [Number (_Enum_)](docs/array.md#3---2---2---1-array-items-is-an-array---number-enum)
- [Number (_Any of_)](docs/array.md#3---2---2---2-array-items-is-an-array---number-any-of)
- [Number (_One of_)](docs/array.md#3---2---2---3-array-items-is-an-array---number-one-of)
- [Boolean](docs/array.md#3---2---3-array-items-is-an-array---boolean)
- [Boolean (_Enum_)](docs/array.md#3---2---3---1-array-items-is-an-array---boolean-enum)
- [Boolean (_Any of_)](docs/array.md#3---2---3---2-array-items-is-an-array---boolean-any-of)
- [Boolean (_One of_)](docs/array.md#3---2---3---3-array-items-is-an-array---boolean-one-of)
- [Null](docs/array.md#3---2---4-array-items-is-an-array---null)
- [Null (_Enum_)](docs/array.md#3---2---4---1-array-items-is-an-array---null-enum)
- [Null (_Any of_)](docs/array.md#3---2---4---2-array-items-is-an-array---null-any-of)
- [Null (_One of_)](docs/array.md#3---2---4---3-array-items-is-an-array---null-one-of)

### [Object](docs/object.md#4-object) values

- [Object - String](docs/object.md#4---1-object---string)
- [Object - String (_Enum_)](docs/object.md#4---1---1-object---string-enum)
- [Object - String (_Any of_)](docs/object.md#4---1---2-object---string-any-of)
- [Object - String (_One of_)](docs/object.md#4---1---3-object---string-one-of)
- [Object - Number](docs/object.md#4---2-object---number)
- [Object - Number (_Enum_)](docs/object.md#4---2---1-object---number-enum)
- [Object - Number (_Any of_)](docs/object.md#4---2---2-object---number-any-of)
- [Object - Number (_One of_)](docs/object.md#4---2---3-object---number-one-of)
- [Object - Boolean](docs/object.md#4---3-object---boolean)
- [Object - Boolean (_Enum_)](docs/object.md#4---3---1-object---boolean-enum)
- [Object - Boolean (_Any of_)](docs/object.md#4---3---2-object---boolean-any-of)
- [Object - Boolean (_One of_)](docs/object.md#4---3---3-object---boolean-one-of)
- [Object - Null](docs/object.md#4---4-object---null)
- [Object - Null (_Enum_)](docs/object.md#4---4---1-object---null-enum)
- [Object - Null (_Any of_)](docs/object.md#4---4---2-object---null-any-of)
- [Object - Null (_One of_)](docs/object.md#4---4---3-object---null-one-of)

### Boolean values

- [Boolean](docs/boolean.md#5-boolean)
- [Boolean (_Enum_)](docs/boolean.md#5---1-boolean-enum)
- [Boolean (_Any of_)](docs/boolean.md#5---2-boolean-any-of)
- [Boolean (_One of_)](docs/boolean.md#5---3-boolean-one-of)

### Null values

- [Null](docs/null.md#6-null)
- [Null (_Enum_)](docs/null.md#6---1-null-enum)
- [Null (_Any of_)](docs/null.md#6---2-null-any-of)
- [Null (_One of_)](docs/null.md#6---3-null-one-of)
