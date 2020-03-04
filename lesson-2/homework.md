## 1. Покрасить абзацы по клику
- Даны 3 абзаца:

```
<p id="text1">Text 1</p>
<p id="text2">Text 2</p>
<p id="text3">Text 3</p>
```

- Даны цвета:

```
const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    *[Symbol.iterator]() {
        // ваш код
    }
}
```

- По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
- Все абзацы работают независимо;
- Необходимо использовать генераторы и идентификаторы (`Symbol()`) для идентификации счетчика;
- Подсказка! Перебор `colors` должен должен быть бесконечным. Для вызова используйте `next()`. Т.е. ваш `listener` должен иметь примерно такой вид:
```
const changeStyle = id => event => {
  event.target.style.color = colors.next(id).value;
};
```

## 1. Простой чат (socket.io)
- [Guide](https://socket.io/get-started/chat/)
- [Start Example](testSocketIoChat)
- Broadcast a message to connected users when someone connects or disconnects.
- Add support for nicknames.
- Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
- Add “{user} is typing” functionality.
- Show who’s online.
- Add private messaging.
- Share your improvements!
