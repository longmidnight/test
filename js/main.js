const quizData = [
    {
        question: "1. Каким иероглифом обозначается нуль?",
        a: "十",
        b: "八",
        c: "五",
        d: "零",
        e: "四",
        correct: "d",
    },
    {
        question: "2. Цифры с одного до десяти. Укажите правильный порядок:",
        a: "一二三五四七六八十九",
        b: "一二三五六七四八九十",
        c: "一二三四五十六七八九",
        d: "一二三六七八五十四九",
        e: "一二三四五六七八九十",
        correct: "e",
    },
    {
        question: "3. Местоимение \"она\"",
        a: "她",
        b: "这",
        c: "他",
        d: "那",
        e: "我",
        correct: "a",
    },
    {
        question: "4. 我们",
        a: "Нас",
        b: "Нам",
        c: "Они",
        d: "Мы",
        e: "Им",
        correct: "d",
    },
    {
        question: "5. 这 / 这 儿",
        a: "он/они",
        b: "это/здесь",
        c: "я/ты",
        d: "он/она",
        e: "что/там",
        correct: "b",
    },
    {
        question: "6. Вопросительное слово \"чей\"",
        a: "哪/哪儿",
        b: "多少",
        c: "什么",
        d: "几",
        e: "谁",
        correct: "e",
    },
    {
        question: "7. Вопросительное слово \"какие\"",
        a: "哪/哪儿",
        b: "多少",
        c: "什么",
        d: "几",
        e: "谁",
        correct: "с",
    },
    {
        question: "8. Слово \"завтра\"",
        a: "今天",
        b: "上午",
        c: "天",
        d: "昨天",
        e: "明天",
        correct: "e",
    },
    {
        question: "9. Слово \"сегодня\"",
        a: "今天",
        b: "上午",
        c: "天",
        d: "昨天",
        e: "明天",
        correct: "a",
    },
    {
        question: "10. День/месяц/год",
        a: "年月日",
        b: "日点月",
        c: "日月年",
        d: "月上点",
        e: "日月点",
        correct: "c",
    },
    {
        question: "11. Какой общий иероглиф имеют слова \"дочь\" и \"сын\"?",
        a: "人",
        b: "生",
        c: "子",
        d: "儿",
        e: "小",
        correct: "d",
    },
    {
        question: "12. В каких тонах читаются иерогливы 水 / 茶 / 书 / 钱 ?",
        a: "третий/второй/третий/четвертый",
        b: "первый/четвертый/третий/первый",
        c: "третий/второй/первый/второй",
        d: "первый/второй/второй/третий",
        e: "третий/второй/четвертый/нулевой",
        correct: "c",
    },
    {
        question: "13. Какой общий иероглиф имеют слова \"фрукты\" и \"яблоко\"?",
        a: "电",
        b: "猫",
        c: "果",
        d: "菜",
        e: "水",
        correct: "c",
    },
    {
        question: "14. Какой общий иероглиф имеют слова \"ТВ\" и \"компьютер\"?",
        a: "电",
        b: "猫",
        c: "果",
        d: "菜",
        e: "水",
        correct: "a",
    },
    {
        question: "15. Слово \"рис\"",
        a: "椅子",
        b: "衣服",
        c: "米",
        d: "衣",
        e: "米饭",
        correct: "e",
    },
    {
        question: "16. Слово \"ученик\"",
        a: "医生",
        b: "学生",
        c: "同学",
        d: "老师",
        e: "先生",
        correct: "b",
    },
    {
        question: "17. Слово \"учитель\"",
        a: "医生",
        b: "学生",
        c: "同学",
        d: "老师",
        e: "先生",
        correct: "d",
    },
    {
        question: "18. 上 / 下 / 里 / 后面",
        a: "на, над/ниже, под/снаружи/впереди ",
        b: "наже, под/на, над/внутри/позади",
        c: "наже, под/на, над/снаружи/позади",
        d: "наже, под/на, над/снаружи/впереди",
        e: "на, над/ниже, под/внутри/позади",
        correct: "e",
    },
    {
        question: "19. Для счета чего используется счетное слово 块?",
        a: "основная денежная еденица Китая",
        b: "для книг",
        c: "год (возраст)",
        d: "немного",
        e: "общее мерное слово",
        correct: "a",
    },
    {
        question: "20. Для счета чего используется счетное слово 岁?",
        a: "основная денежная еденица Китая",
        b: "для книг",
        c: "год (возраст)",
        d: "немного",
        e: "общее мерное слово",
        correct: "c",
    },
    {
        question: "21. Для счета чего используется счетное слово 本?",
        a: "основная денежная еденица Китая",
        b: "для книг",
        c: "год (возраст)",
        d: "немного",
        e: "общее мерное слово",
        correct: "b",
    },
    {
        question: "22. Слово \"есть (кушать)\"",
        a: "吃",
        b: "喝",
        c: "来",
        d: "听",
        e: "读",
        correct: "a",
    },
    {
        question: "23. Слово \"сидеть\"",
        a: "听",
        b: "看",
        c: "叫",
        d: "买",
        e: "坐",
        correct: "e",
    },
    {
        question: "24. Слово \"работать\"",
        a: "读",
        b: "学习",
        c: "认识",
        d: "看",
        e: "工作",
        correct: "e",
    },
    {
        question: "25. 少",
        a: "большой",
        b: "маленький",
        c: "хорошо",
        d: "немного",
        e: "много",
        correct: "d",
    },
    {
        question: "26. 冷",
        a: "счастливый",
        b: "очень",
        c: "холодно",
        d: "слишком",
        e: "горячо",
        correct: "c",
    },
    {
        question: "27. Вопросительная частица:",
        a: "了",
        b: "的",
        c: "不",
        d: "吗",
        e: "小",
        correct: "d",
    },
    {
        question: "28. Выражение извинения:",
        a: "没关系",
        b: "谢谢",
        c: "再见",
        d: "对不起",
        e: "不客气",
        correct: "d",
    },
    {
        question: "29. Выражение \"без проблем\"",
        a: "没关系",
        b: "谢谢",
        c: "再见",
        d: "对不起",
        e: "不客气",
        correct: "a",
    },
    {
        question: "30. Приветствие по телефону:",
        a: "好",
        b: "你好",
        c: "喂",
        d: "请",
        e: "好你",
        correct: "c",
    },
    {
        question: "31. Выражение благодарности:",
        a: "没关系",
        b: "谢谢",
        c: "再见",
        d: "对不起",
        e: "不客气",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerElements.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score} из ${quizData.length} вопроса!</h2>
            <button onclick="location.reload()">Начать тест сначала</button>
            `;
        }
    }
});
