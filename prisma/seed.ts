import { Difficulty, Language } from '@prisma/client';

import { prisma } from '@/shared/api';

async function main() {
  // Задача 1: Сумма чисел в массиве (Легкая)
  await prisma.problem.create({
    data: {
      title: 'Подозреваемые без алиби',
      description: `<Text>
В старом особняке было совершено таинственное преступление: пропало семейное украшение. Детектив нашёл список подозреваемых и отметки об их алиби. Помогите распутать дело и вернуть массив имён тех, у кого алиби нет.
</Text>

<Input>
<pre><code>{suspects: { name: string; hasAlibi: boolean }[]}</code></pre>
</Input>

<Output>
<pre><code>string[] — массив имён подозреваемых без алиби</code></pre>
</Output>

<Example
  input={[
   {  
    name: "Mr. Black", 
    hasAlibi: true 
   },
   {  
    name: "Ms. Scarlet", 
    hasAlibi: false 
   },
]}
  output={["Ms. Scarlet"]}
/>`,
      difficulty: Difficulty.easy,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function findSuspectsWithoutAlibi(suspects) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def find_suspects_without_alibi(suspects):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input: '[]',
            expected: '[]',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findSuspectsWithoutAlibi(input);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '[{"name":"Шерлок","hasAlibi":false}]',
            expected: '["Шерлок"]',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findSuspectsWithoutAlibi(input);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.javascript,
            input:
              '[{"name":"Джон","hasAlibi":true},{"name":"Мэри","hasAlibi":true}]',
            expected: '[]',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findSuspectsWithoutAlibi(input);
console.log(JSON.stringify(result));`,
            order: 3,
          },
          {
            language: Language.javascript,
            input:
              '[{"name":"А","hasAlibi":false},{"name":"Б","hasAlibi":false}]',
            expected: '["А","Б"]',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findSuspectsWithoutAlibi(input);
console.log(JSON.stringify(result));`,
            order: 4,
          },
          {
            language: Language.javascript,
            input:
              '[{"name":"X","hasAlibi":true},{"name":"Y","hasAlibi":false},{"name":"Z","hasAlibi":true}]',
            expected: '["Y"]',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findSuspectsWithoutAlibi(input);
console.log(JSON.stringify(result));`,
            order: 5,
          },
          {
            language: Language.python,
            input: '[]',
            expected: '[]',
            wrapperCode: `import sys, json
suspects = json.load(sys.stdin)
result = find_suspects_without_alibi(suspects)
print(json.dumps(result))`,
            order: 6,
          },
          {
            language: Language.python,
            input: '[{"name":"Шерлок","hasAlibi":false}]',
            expected: '["Шерлок"]',
            wrapperCode: `import sys, json
suspects = json.load(sys.stdin)
result = find_suspects_without_alibi(suspects)
print(json.dumps(result))`,
            order: 7,
          },
          {
            language: Language.python,
            input:
              '[{"name":"Джон","hasAlibi":true},{"name":"Мэри","hasAlibi":true}]',
            expected: '[]',
            wrapperCode: `import sys, json
suspects = json.load(sys.stdin)
result = find_suspects_without_alibi(suspects)
print(json.dumps(result))`,
            order: 8,
          },
          {
            language: Language.python,
            input:
              '[{"name":"А","hasAlibi":false},{"name":"Б","hasAlibi":false}]',
            expected: '["А", "Б"]',
            wrapperCode: `import sys, json
suspects = json.load(sys.stdin)
result = find_suspects_without_alibi(suspects)
print(json.dumps(result))`,
            order: 9,
          },
          {
            language: Language.python,
            input:
              '[{"name":"X","hasAlibi":true},{"name":"Y","hasAlibi":false},{"name":"Z","hasAlibi":true}]',
            expected: '["Y"]',
            wrapperCode: `import sys, json
suspects = json.load(sys.stdin)
result = find_suspects_without_alibi(suspects)
print(json.dumps(result))`,
            order: 10,
          },
        ],
      },
    },
  });

  // Задача 2: Проверка палиндрома (Легкая)
  await prisma.problem.create({
    data: {
      title: 'Зашифрованное послание',
      description: `<Text>
В кабинете детектива обнаружена зашифрованная записка. По легенде, если сообщение читается одинаково слева направо и справа налево, то оно содержит важную информацию о местонахождении украденного артефакта. Проверьте, является ли сообщение палиндромом.
</Text>

<Input>
<pre><code>{message: string}</code></pre>
</Input>

<Output>
<pre><code>{ isPalindrome: boolean }</code></pre>
</Output>

<Example
  input={{ message: "radar" }}
  output={{ isPalindrome: true }}
/>`,
      difficulty: Difficulty.easy,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function isPalindrome(data) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def is_palindrome(data):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input: '{"message":"radar"}',
            expected: '{"isPalindrome":true}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = isPalindrome(input);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '{"message":"hello"}',
            expected: '{"isPalindrome":false}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = isPalindrome(input);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.javascript,
            input: '{"message":"А роза упала на лапу Азора"}',
            expected: '{"isPalindrome":true}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = isPalindrome(input);
console.log(JSON.stringify(result));`,
            order: 3,
          },
          {
            language: Language.python,
            input: '{"message":"radar"}',
            expected: '{"isPalindrome": true}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = is_palindrome(data)
print(json.dumps(result))`,
            order: 4,
          },
          {
            language: Language.python,
            input: '{"message":"hello"}',
            expected: '{"isPalindrome": false}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = is_palindrome(data)
print(json.dumps(result))`,
            order: 5,
          },
          {
            language: Language.python,
            input: '{"message":"А роза упала на лапу Азора"}',
            expected: '{"isPalindrome": true}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = is_palindrome(data)
print(json.dumps(result))`,
            order: 6,
          },
        ],
      },
    },
  });

  // Задача 3: Поиск наибольшего элемента (Средняя)
  await prisma.problem.create({
    data: {
      title: 'Самый ценный артефакт',
      description: `<Text>
В музее произошла кража нескольких артефактов. У вас есть список украденных предметов с их оценочной стоимостью. Помогите детективу определить самый ценный из них, чтобы сосредоточить усилия на его поиске.
</Text>

<Input>
<pre><code>{artifacts: { name: string; value: number }[]}</code></pre>
</Input>

<Output>
<pre><code>{ name: string; value: number; index: number } | null</code></pre>
</Output>

<Example
  input={{
    artifacts: [
      { name: "Кубок", value: 5 },
      { name: "Медальон", value: 10 },
      { name: "Корона", value: 8 }
    ]
  }}
  output={{ name: "Медальон", value: 10, index: 1 }}
/>`,
      difficulty: Difficulty.medium,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function findMostValuableArtifact(data) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def find_most_valuable_artifact(data):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input:
              '{"artifacts":[{"name":"Кубок","value":5},{"name":"Медальон","value":10},{"name":"Корона","value":8}]}',
            expected: '{"name":"Медальон","value":10,"index":1}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findMostValuableArtifact(input);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '{"artifacts":[]}',
            expected: 'null',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findMostValuableArtifact(input);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input:
              '{"artifacts":[{"name":"Кубок","value":5},{"name":"Медальон","value":10},{"name":"Корона","value":8}]}',
            expected: '{"name": "Медальон", "value": 10, "index": 1}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_most_valuable_artifact(data)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input: '{"artifacts":[]}',
            expected: 'null',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_most_valuable_artifact(data)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });

  // Задача 4: Сортировка массива (Средняя)
  await prisma.problem.create({
    data: {
      title: 'Хронология событий',
      description: `<Text>
В детективном агентстве "Шерлок" вы работаете над сложным делом о краже. У вас есть список событий, каждое из которых произошло в определенное время. Помогите детективу восстановить хронологию событий, чтобы понять последовательность действий преступника.
</Text>

<Input>
<pre><code>{events: { event: string; timestamp: number }[]}</code></pre>
</Input>

<Output>
<pre><code>{ events: { event: string; timestamp: number }[] }</code></pre>
</Output>

<Example
  input={{
    events: [
      { event: "Кража", timestamp: 1609459200 },
      { event: "Звонок в полицию", timestamp: 1609459500 },
      { event: "Прибытие полиции", timestamp: 1609459800 }
    ]
  }}
  output={{
    events: [
      { event: "Кража", timestamp: 1609459200 },
      { event: "Звонок в полицию", timestamp: 1609459500 },
      { event: "Прибытие полиции", timestamp: 1609459800 }
    ]
  }}
/>`,
      difficulty: Difficulty.medium,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function sortEvents(data) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def sort_events(data):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input:
              '{"events":[{"event":"Кража","timestamp":1609459200},{"event":"Звонок в полицию","timestamp":1609459500},{"event":"Прибытие полиции","timestamp":1609459800}]}',
            expected:
              '{"events":[{"event":"Кража","timestamp":1609459200},{"event":"Звонок в полицию","timestamp":1609459500},{"event":"Прибытие полиции","timestamp":1609459800}]}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = sortEvents(input);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input:
              '{"events":[{"event":"Прибытие полиции","timestamp":1609459800},{"event":"Кража","timestamp":1609459200},{"event":"Звонок в полицию","timestamp":1609459500}]}',
            expected:
              '{"events":[{"event":"Кража","timestamp":1609459200},{"event":"Звонок в полицию","timestamp":1609459500},{"event":"Прибытие полиции","timestamp":1609459800}]}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = sortEvents(input);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input:
              '{"events":[{"event":"Кража","timestamp":1609459200},{"event":"Звонок в полицию","timestamp":1609459500},{"event":"Прибытие полиции","timestamp":1609459800}]}',
            expected:
              '{"events": [{"event": "Кража", "timestamp": 1609459200}, {"event": "Звонок в полицию", "timestamp": 1609459500}, {"event": "Прибытие полиции", "timestamp": 1609459800}]}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = sort_events(data)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input:
              '{"events":[{"event":"Прибытие полиции","timestamp":1609459800},{"event":"Кража","timestamp":1609459200},{"event":"Звонок в полицию","timestamp":1609459500}]}',
            expected:
              '{"events": [{"event": "Кража", "timestamp": 1609459200}, {"event": "Звонок в полицию", "timestamp": 1609459500}, {"event": "Прибытие полиции", "timestamp": 1609459800}]}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = sort_events(data)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });

  // Задача 5: Поиск улик в дневнике
  await prisma.problem.create({
    data: {
      title: 'Поиск улик в дневнике',
      description: `<Text>
В ходе расследования детектив обнаружил дневник подозреваемого. В нем могут быть важные улики, связанные с определенным ключевым словом. Помогите найти все упоминания этого слова в тексте дневника.
</Text>

<Input>
<pre><code>{text: string; keyword: string}</code></pre>
</Input>

<Output>
<pre><code>{ positions: number[]; count: number }</code></pre>
</Output>

<Example
  input={{ text: "hello world", keyword: "o" }}
  output={{ positions: [4, 7], count: 2 }}
/>`,
      difficulty: Difficulty.hard,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function findEvidence(data) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def find_evidence(data):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input: '{"text":"hello world","keyword":"o"}',
            expected: '{"positions":[4,7],"count":2}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findEvidence(input);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '{"text":"ababab","keyword":"ab"}',
            expected: '{"positions":[0,2,4],"count":3}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findEvidence(input);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input: '{"text":"hello world","keyword":"o"}',
            expected: '{"positions": [4, 7], "count": 2}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_evidence(data)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input: '{"text":"ababab","keyword":"ab"}',
            expected: '{"positions": [0, 2, 4], "count": 3}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_evidence(data)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });

  // Задача 6: Проверка скобок (Сложная)
  await prisma.problem.create({
    data: {
      title: 'Расшифровка кода',
      description: `<Text>
В сейфе детектива обнаружена зашифрованная записка с важной информацией. По легенде, если скобки в сообщении расставлены правильно, то оно содержит координаты тайника. Проверьте правильность расстановки скобок в сообщении.
</Text>

<Input>
<pre><code>{message: string}</code></pre>
</Input>

<Output>
<pre><code>{ isValid: boolean; error: string | null }</code></pre>
</Output>

<Example
  input={{ message: "()" }}
  output={{ isValid: true, error: null }}
/>`,
      difficulty: Difficulty.hard,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function validateCode(data) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def validate_code(data):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input: '{"message":"()"}',
            expected: '{"isValid":true,"error":null}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = validateCode(input);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '{"message":"([)]"}',
            expected: '{"isValid":false,"error":"Несоответствие скобок"}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = validateCode(input);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input: '{"message":"()"}',
            expected: '{"isValid": true, "error": null}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = validate_code(data)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input: '{"message":"([)]"}',
            expected: '{"isValid": false, "error": "Несоответствие скобок"}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = validate_code(data)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });

  // Задача 7: Поиск простых чисел (Средняя)
  await prisma.problem.create({
    data: {
      title: 'Секретные коды',
      description: `<Text>
В ходе расследования детектив обнаружил, что преступники используют простые числа для шифрования своих сообщений. Помогите найти все простые числа до заданного числа, чтобы расшифровать их переписку.
</Text>

<Input>
<pre><code>{maxNumber: number}</code></pre>
</Input>

<Output>
<pre><code>{ primes: number[]; count: number }</code></pre>
</Output>

<Example
  input={{ maxNumber: 10 }}
  output={{ primes: [2, 3, 5, 7], count: 4 }}
/>`,
      difficulty: Difficulty.medium,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function findPrimes(maxNumber) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def find_primes(maxNumber):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input: '{"maxNumber":10}',
            expected: '{"primes":[2,3,5,7],"count":4}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findPrimes(input.maxNumber);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '{"maxNumber":20}',
            expected: '{"primes":[2,3,5,7,11,13,17,19],"count":8}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findPrimes(input.maxNumber);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input: '{"maxNumber":10}',
            expected: '{"primes": [2, 3, 5, 7], "count": 4}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_primes(data.maxNumber)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input: '{"maxNumber":20}',
            expected: '{"primes": [2, 3, 5, 7, 11, 13, 17, 19], "count": 8}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_primes(data.maxNumber)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });

  // Задача 8: Сравнение улик
  await prisma.problem.create({
    data: {
      title: 'Сравнение улик',
      description: `<Text>
В ходе расследования детектив получил два описания преступления от разных свидетелей. Они могут описывать одно и то же событие, но с разных точек зрения. Помогите найти наибольшую общую последовательность символов в этих описаниях, чтобы установить истину.
</Text>

<Input>
<pre><code>{description1: string; description2: string}</code></pre>
</Input>

<Output>
<pre><code>{ length: number; subsequence: string }</code></pre>
</Output>

<Example
  input={{ description1: "ABCDGH", description2: "AEDFHR" }}
  output={{ length: 3, subsequence: "ADH" }}
/>`,
      difficulty: Difficulty.hard,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function findCommonSubsequence(description1, description2) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def find_common_subsequence(description1, description2):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input: '{"description1":"ABCDGH","description2":"AEDFHR"}',
            expected: '{"length":3,"subsequence":"ADH"}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findCommonSubsequence(input.description1, input.description2);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '{"description1":"ABCBDAB","description2":"BDCAB"}',
            expected: '{"length":3,"subsequence":"BCAB"}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findCommonSubsequence(input.description1, input.description2);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input: '{"description1":"ABCDGH","description2":"AEDFHR"}',
            expected: '{"length":3,"subsequence":"ADH"}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_common_subsequence(data.description1, data.description2)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input: '{"description1":"ABCBDAB","description2":"BDCAB"}',
            expected: '{"length":3,"subsequence":"BCAB"}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_common_subsequence(data.description1, data.description2)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });

  // Задача 9: Побег из лабиринта
  await prisma.problem.create({
    data: {
      title: 'Побег из лабиринта',
      description: `<Text>
Детектив получил план здания, где скрывается преступник. Здание представлено в виде лабиринта, где 0 - проходимые клетки, а 1 - стены. Помогите найти путь от входа до места, где скрывается преступник.
</Text>

<Input>
<pre><code>{maze: number[][]; start: [number, number]; end: [number, number]}</code></pre>
</Input>

<Output>
<pre><code>{ path: [number, number][]; length: number; success: boolean }</code></pre>
</Output>

<Example
  input={{
    maze: [[0,0,0], [1,1,0], [0,0,0]],
    start: [0,0],
    end: [2,2]
  }}
  output={{
    path: [[0,0], [0,1], [0,2], [1,2], [2,2]],
    length: 5,
    success: true
  }}
/>`,
      difficulty: Difficulty.hard,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function findPath(maze, start, end) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def find_path(maze, start, end):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input:
              '{"maze":[[0,0,0],[1,1,0],[0,0,0]],"start":[0,0],"end":[2,2]}',
            expected:
              '{"path":[[0,0],[0,1],[0,2],[1,2],[2,2]],"length":5,"success":true}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findPath(input.maze, input.start, input.end);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input:
              '{"maze":[[0,0,0],[1,1,0],[0,0,0]],"start":[0,0],"end":[2,2]}',
            expected:
              '{"path":[[0,0],[0,1],[0,2],[1,2],[2,2]],"length":5,"success":true}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findPath(input.maze, input.start, input.end);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input:
              '{"maze":[[0,0,0],[1,1,0],[0,0,0]],"start":[0,0],"end":[2,2]}',
            expected:
              '{"path":[[0,0],[0,1],[0,2],[1,2],[2,2]],"length":5,"success":true}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_path(data.maze, data.start, data.end)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input:
              '{"maze":[[0,0,0],[1,1,0],[0,0,0]],"start":[0,0],"end":[2,2]}',
            expected:
              '{"path":[[0,0],[0,1],[0,2],[1,2],[2,2]],"length":5,"success":true}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_path(data.maze, data.start, data.end)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });

  // Задача 10: Анализ финансовых операций
  await prisma.problem.create({
    data: {
      title: 'Анализ финансовых операций',
      description: `<Text>
В ходе расследования дела о финансовых махинациях детектив получил список транзакций, где положительные числа - доходы, а отрицательные - расходы. Помогите найти период с наибольшей прибылью, чтобы выявить подозрительную активность.
</Text>

<Input>
<pre><code>{transactions: number[]}</code></pre>
</Input>

<Output>
<pre><code>{ maxProfit: number; period: [number, number]; transactions: number[] }</code></pre>
</Output>

<Example
  input={{ transactions: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }}
  output={{ maxProfit: 6, period: [3, 6], transactions: [4, -1, 2, 1] }}
/>`,
      difficulty: Difficulty.medium,
      templates: {
        create: [
          {
            language: Language.javascript,
            code: `function findMaxProfit(transactions) {
  // Ваш код здесь
}`,
          },
          {
            language: Language.python,
            code: `def find_max_profit(transactions):
    # Ваш код здесь
    pass`,
          },
        ],
      },
      tests: {
        create: [
          {
            language: Language.javascript,
            input: '{"transactions":[-2,1,-3,4,-1,2,1,-5,4]}',
            expected:
              '{"maxProfit":6,"period":[3,6],"transactions":[4,-1,2,1]}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findMaxProfit(input.transactions);
console.log(JSON.stringify(result));`,
            order: 1,
          },
          {
            language: Language.javascript,
            input: '{"transactions":[]}',
            expected: '{"maxProfit":0,"period":[0,0],"transactions":[]}',
            wrapperCode: `const fs = require("fs");
const input = JSON.parse(fs.readFileSync(0, "utf-8"));
const result = findMaxProfit(input.transactions);
console.log(JSON.stringify(result));`,
            order: 2,
          },
          {
            language: Language.python,
            input: '{"transactions":[-2,1,-3,4,-1,2,1,-5,4]}',
            expected:
              '{"maxProfit":6,"period":[3,6],"transactions":[4,-1,2,1]}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_max_profit(data.transactions)
print(json.dumps(result))`,
            order: 3,
          },
          {
            language: Language.python,
            input: '{"transactions":[]}',
            expected: '{"maxProfit":0,"period":[0,0],"transactions":[]}',
            wrapperCode: `import sys, json
data = json.load(sys.stdin)
result = find_max_profit(data.transactions)
print(json.dumps(result))`,
            order: 4,
          },
        ],
      },
    },
  });
}

main();
