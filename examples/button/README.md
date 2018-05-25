## Usage

>Configure webpack `scss-loader` to include `./node_modules/material-components/components` . See example below

webpack.config.js
----
```json

 {
    loader: 'sass-loader',
    options: {
        includePaths: ['./node_modules/material-components/components']
    }

}

```



my-component/index.marko
-----
```html
<m-button class="foo-button mdc-button" on-click( "click") ripple=true>
    <@body>
        Rajat
    </@body>
</m-button>


<m-button class="mdc-button" ripple=true >
    <@body>
        <i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
        Button
    </@body>
</m-button>

<m-button class="mdc-button" ripple=true disabled>
        <@body>
            <i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
            Disabled
        </@body>
</m-button>

<m-button href="https://google.com" class="foo-button mdc-button" ripple=true>
    <@body>
        Google
    </@body>
</m-button>

```

my-component/style.scss
------
```scss
@import "m-button/style";

.foo-button {
    @include mdc-button-ink-color(teal);
    @include mdc-states(teal);
  }
```

my-component/component.js
-----
```javascript
var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {

    },
    click:()=>{
         alert('clicked');
    }
}
export = comp;
```