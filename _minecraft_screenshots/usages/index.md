# Usages

## HTML

```html

<img
    src="https://noteswiper.github.io/assets/img/minecraft_screenshots/2023-08-16_19.54.01.png"
    alt="some villager's house got rekt'd by grass blocks"
/>
```

## Markdown

```markdown
!(https://noteswiper.github.io/assets/img/minecraft_screenshots/2023-08-16_19.54.01.png)[some villager's house got rekt'd by grass blocks]
```

## Python

### Python with Pillow (PIL)

```python
from PIL import Image, ImageFilter

im = Image.open('https://noteswiper.github.io/assets/img/minecraft_screenshots/yyyy-MM-dd_HH.mm.ss.png')
```
