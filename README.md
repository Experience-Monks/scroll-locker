Lock and unlock scroll on elements or document.
Note that disabling scroll on body/document will propagate to all contained elements.

## Syntax
```javascript
scrollLocker(element [, disableKeyboardArrowsFlag]);
```

## API
* ```lock``` - disable elemen't scroll
* ```unlock``` - enable elemen't scroll


## Example
```javascript
import scrollLock from 'scroll-locker';

const scroll = scrollLock(container);
scroll.lock();

...
scroll.unlock();

```

## Install
```sh
npm install scroll-locker --save
``` 

## Test
```sh
npm t
``` 

## License
MIT, see [LICENSE.md](http://github.com/Jam3/scroll-locker/blob/master/LICENSE) for details.
