function saferHTML(tempDate) {
    let s = tempDate;
    for (let i = 0; i < arguments.length; i++) {
        // 取出所有的 arguments
        let arg = String(arguments[i]);
        // 替换标签
        s += arg.replace(/</g, "&lt")
            // 替换开始和结束标签
            .replace(/>/g, "&gt");
        // 加上剩下的字符
        s += tempDate[i];
    }
    return s
}

let sender = `<script>alert("abc")</script>`;

let message = saferHTML `<p> ${sender} has sent you message</p>`;
console.log(message);