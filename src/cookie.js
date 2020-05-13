/* © Un Sstrennen, 2020 */

function getCookie(name, json=false) {
  /*
  Retruns cookie with specified name (str) if exists, else - undefined
  if returning value is JSON and json parameter is true, returns json, overwise str
  */
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  if (matches) {
    var res = decodeURIComponent(matches[1]);
    if (json) {
      try {
        return JSON.parse(res);
      }
      catch(e) {
        return res;
      }
    }
    return res;
  }
  else return undefined;
}

function setCookie(name, value, options = {path: '/'}) {
  /*
  Sets a cookie with specified name (str), value (str) & options (dict)

  options keys:
    - path (str) - URL, for which this cookie is avaliable (must be absolute!)
    - domain (str) - domain, for which this cookie is avaliable
    - expires (Date object) - expiration date&time of cookie
    - max-age (int) - cookie lifetime in seconds (alternative for expires option)
    - secure (bool) - if true, cookie will be avaliable only for HTTPS.
                      IT CAN'T BE FALSE
    - samesite (str) - XSRF protection setting.
                       Can be strict or lax
                       Read https://web.dev/samesite-cookies-explained/ for details
    - httpOnly (bool) - if true, cookie won't be avaliable for using in JavaScript
                        IT CAN'T BE FALSE
  */
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  if (value instanceof Object) {
    value = JSON.stringify(value);
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  /*
  Deletes a cookie with specified name.
  Returns true when cookie was successfully deleted, otherwise false
  */
  setCookie(name, null, {
    expires: Date(0),
    path: '/'
  })
}
