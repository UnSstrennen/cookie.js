# cookie.js
A simple &amp; lightweight library for working with cookies written on pure JavaScript. **Supports simple working with json objects.**
***
## Why us?
- Simple & lightweight (Minified version size - **602 B**)
- Works with **JSON** from the box (returns JSON object if necessary, sets JSON cookie automatically)
- You can specify any parameter while setting cookie
- Works with all browsers (**Including ES6!**)
- Written on pure JS (**no dependencies**)
- Has minified version
- Can be installed by **npm** or used by **unpkg CDN**
***
## Installation
### 1. npm package manager
```bash
npm i cookielib
```
### 2. Minified version (**unpkg CDN**)
```html
<!-- Main version -->
<script src="https://unpkg.com/cookielib/src/cookie.js"></script>
<!-- Minified version -->
<script src="https://unpkg.com/cookielib/src/cookie.min.js"></script>
```
### 3. Build from source
Go to ``` /src ``` folder of GitHub page and download main or minified version of script. Then, include script to your HTML page using
```html
<script src="../path/to/your/scripts/folder/cookie.min.js"></script>
```
***
## Usage
Create a session cookie:
```javascript
setCookie('name', 'value');  // string cookie
setCookie('name', {key: 'value'});  // json cookie
```
Create an expiring cookie:
```javascript
setCookie('name', 'value', {expires: new Date('2020-10-10 03:00:00')});  // string
setCookie('name', {key: 'value'}, {expires: new Date('2020-10-10 03:00:00')});  // json
```

**Don't forget that JSON format supports only double quotes.**

#### With ```setCookie()``` function, you can specify any cookie options you want. You can find options table [there](#options).
Get a cookie:
```javascript
getCookie('name')  // string cookies
getCookie('name', true)  // json cookie, returns json object
```
Delete a cookie:
```javascript
deleteCookie('name');  // json or string cookie: no matter!
```
***
## <a name="options"></a>Setting cookie options
For setting a cookie option, call ```setCookie(name, value, dict)``` function filling **dict** parameter as dictionary.
#### Keys &amp; values list:
- **path** (str) - URL, for which this cookie is available (must be absolute!)
- **domain** (str) - domain, for which this cookie is available
- **expires** (Date object) - expiration date&time of cookie
- **max-age** (int) - cookie lifetime in seconds (alternative for expires option)
- **secure** (bool) - if true, cookie will be available only for HTTPS. IT CAN'T BE FALSE
- **samesite** (str) - XSRF protection setting. Can be strict or lax. Read [this article](https://web.dev/samesite-cookies-explained/) for details.
- **httpOnly** (bool) - if true, cookie won't be available for using in JavaScript. IT CAN'T BE FALSE
