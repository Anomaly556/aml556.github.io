# Updates / Announcements

> :warning: **Warning!**
>
> this page was used for website update or announcements.
>
> if you want to view the posts, click this text or access posts from menu.

---

## Changelogs

### [2023-08-30] v198.7

#### [Added]

* `miscs.yml` for identifying other contents
* `misc.html` for template
* `index.md` in `misc`

#### [Changes]

* YAML File `main.yml` in `_data`
* Layout Template `default.html` in `_layouts`

## Announcements

### [2023-08-29] - Incident

[Before fixes](https://github.com/NoteSwiper/noteswiper.github.io/commit/18c28eba5b78b4db4e6700f10e9d45b1ba479181)

[After fixes](https://github.com/NoteSwiper/noteswiper.github.io/commit/5ef7c76d335af262694aa9c44453bada6e2b83bf)

on 2023/08/29, the site stylesheet has temporarily disabled by syntax misses.

the syntaxes caused the accident are described below:

1. In `_layouts/default.html`: `{% include head.html %}` has missing by unknown reason;

this issue has resolved by adding again.

1. In `_includes/head.html`: the `{% include head-link.html csstype=type %}` has caused the error by missing data, this error not append on production.

this issue has resolved by removing `csstype=type`.

### [2022/01/13] - Announcement

The website has temporarily discontinued dues longer disaster.

> Edit on 2022/12/03
>
> restarted development status
