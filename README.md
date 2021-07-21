<img src="/public/logo/logo_500_500.png" alt="logo" width="150" height="150" align="right"
 />

# Appwrite ❤ Quasar - Starter Pack for Admin panel

This project will serve as your starting pack for the Appwrite backend application and basic admin panel with login/logout feature.

## Prerequisites

### Appwrite

Install or configure your own instance of [Appwrite](https://appwrite.io/).

### Quasar

Install [Quasar CLI](https://quasar.dev/quasar-cli/installation).

## Environment variables

Create a _.env_ file in the root of the project. Content of the file is:

```ini
_APP_API_URL=url_to_the_appwrite
_APP_PROJECT_ID=project_id_from_appwrite
```

### Install NPM packages

```sh
yarn
```

### Start frontend

```sh
quasar dev
```

#### Administration

Navigate to /admin URL in your favorite browser. Use the form to log in to the admin panel. Login feature works on admin only. It is disabled in this [router file](/src/router/index.js#36) on the frontend.

### Routes

You can add/update all routes in the [routes.js](/src/router/routes.js) file.

### Favicon

Change main logo [/public/logo/logo_500_500.png](/public/logo/logo_500_500.png) to fit your brand.

Install icongenie package:

```sh
yarn global add @quasar/icongenie
```

Now run the command to generate all favicons (from the root of the project):

```sh
icongenie generate -i public/logo/logo_500_500.png --skip-trim -m spa
```

### Fonts

You can use your own font. Upload it to the [fonts/](./public/fonts) directory and change the [corresponding style](./src/css/app.scss).

### Login & Registration

You can use the [user and registration components](./src/components/user) we created. They only contain basic styling. So you can fit it into your website design.

### Appwrite instance

In .vue files:

```javascript
this.$appwrite.DO_SOMEETHING()
```

In .js files:

```javascript
import { appwrite } from './boot/appwrite'

appwrite.DO_SOMEETHING()
```

### Upload a file

We have prepared a [simple upload component](./src/components/FileUpload.vue) you can easily adjust.

```html
<file-upload />
```

By default, the file is uploaded with "\*" permission (free for all). You can configure read and write permissions with component properties like:

```html
<file-upload
  :permission-read="['*']"
  :permission-write="['*']"
/>
```
