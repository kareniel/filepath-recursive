# filepath-recursive

get the path of all files with a given extension

## usage

```javascript
const filepaths = require('filepath-recursive')

// (dir:str, ext:str) -> arr
const files = filepaths('.', '.js')
```