### altV-Log
Improved log for **altV**.

The `console.log` for altV.

#### How to use

1. Download the resource [from this link](https://github.com/crossworth/altv-log/releases/download/v1.0/altv-log.zip).
2. Place the resource on the resources folder.
3. Adds the resource as a dependency on your resource.
3. Import the resource on the client/server.

**Client example**
```js
import * as alt from 'alt'
import { log } from 'altv-log'

log(alt.Player.local)
```

**Server example**
```js
import * as alt from 'alt'
import { log } from 'altv-log'

alt.on('playerConnect', player => {
  player.model = 'mp_m_freemode_01'
  player.spawn(-1062.4483642578125, -2985.73193359375, 13.17138671875, 1000)

  log(player)
})
```

**Example output log**
```
[object Player] {
 deleteMeta: function deleteMeta() { [native code] },
 destroy: function destroy() { [native code] },
 getMeta: function getMeta() { [native code] },
 getSyncedMeta: function getSyncedMeta() { [native code] },
 hasMeta: function hasMeta() { [native code] },
 hasSyncedMeta: function hasSyncedMeta() { [native code] },
 id: 0,
 isTalking: false,
 micLevel: 0,
 model: 0,
 name: "The4Fun",
 netOwner: null,
 pos: [object Vector3] {
  toString: function toString() { [native code] },
  x: 0,
  y: 0,
  z: 0
 },
 rot: [object Vector3] {
  toString: function toString() { [native code] },
  x: 0,
  y: 0,
  z: 0
 },
 scriptID: 258,
 setMeta: function setMeta() { [native code] },
 type: 0,
 valid: true,
 vehicle: null
}
```

### Setting the depth level
You can define the depth level using `setDepth`.

**Example**
```js
import { log, setDepth } from 'altv-log'

setDepth(10) // will show only the first 10 levels

log({
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: {
                  i: {
                    h: { // will show until here
                      j: {
                        k: {
                          l : {
                            m: {
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})
```