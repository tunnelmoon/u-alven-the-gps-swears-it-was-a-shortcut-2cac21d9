[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/tunnelmoon/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/tunnelmoon/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

# The GPS Swears It Was a Shortcut

make.fun bounty entry: [The GPS Swears It Was a Shortcut](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

The GPS's own excuse for sending the driver down the wrong road:

> I sent you down that cul-de-sac because the map promised a shortcut. We have both been lied to.

## How it works

`main.ts` (Node 22, standard library only) holds the line as a string
constant, validates the gate (1 to 200 characters, single line, not only
whitespace), writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`,
then reads the file back and checks it matches byte for byte.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
