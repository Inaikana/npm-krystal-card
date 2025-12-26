# 套件名稱

可以把一個帶有數個編碼值的陣列轉成一段連續的文字

## 安裝

```bash
npm install krystal-card
```

## 使用方式

```js
import krystal from "krystal-card";

krystal(arr);
```

## 注意事項

參數必需是由數字組成的陣列
回傳值為字串

```js
const arr = [12345,23456,...];
```

## 範例

```js
import krystal from "krystal-card";

const arr = [19990, 30028, 12289, 12371, 12435, 12395, 12385, 12399];
console.log(krystal(arr)); // 世界、こんにちは
```
