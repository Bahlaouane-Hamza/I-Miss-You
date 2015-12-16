:heart: I Miss You
===================

jQuery plugin to change the title & favicon of the page when the user is not viewing your website.

----------


Screenshot
-------------

![enter image description here](https://raw.githubusercontent.com/Bahlaouane-Hamza/I-Miss-You/master/screenshot.jpg?v=3)


#### Usage

```html
<link rel="shortcut icon" href="favicon.ico"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="jquery.iMissYou.js"></script>
<script>
    jQuery(document).ready(function($){
        $.iMissYou({
            title: "I Miss you !",
            favicon: {
                enabled: true,
                src:'iMissYouFavicon.ico'
            }
        });
    });
</script>
```

> **Note:**


> - You must include a default favicon in your webpage
