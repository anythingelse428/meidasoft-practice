const elementGenerator = (selector, needInput, needBtn) => {
  const $container = document.querySelector(selector);
  const $child = document.createElement("div");
  const $input = needInput ? $container.querySelector("input") : "";
  const $btn = needBtn ? $container.querySelector("button") : "";

  return { $container, $child, $input, $btn };
};

// FizzBuzz
function task1() {
  for (let index = 1; index <= 100; index++) {
    const task1Elems = elementGenerator(".fizz-buzz");
    task1Elems.$child.innerText =
      index % 3 === 0 && index % 5 === 0
        ? "FizzBuzz"
        : index % 3 === 0
        ? "Fizz"
        : index % 5 === 0
        ? "Buzz"
        : index;
    task1Elems.$container.appendChild(task1Elems.$child);
  }
}

// task3
function task3() {
  const task3Elems = elementGenerator(".duplicate-letters", true, true);
  let arr = task3Elems.$input.value.split(",");
  let chars = arr[0].split("");
  for (var i = 0; i < chars.length; i++) {
    for (var w = 0; w < arr.length; w++) {
      if (arr.every((word) => word.indexOf(chars[i]) > -1)) {
        arr = arr.map((el) => el.replace(chars[i], ""));
        break;
      } else {
        chars[i] = "";
        break;
      }
    }
    task3Elems.$child.innerText = `Повторяются ${chars.join(' ')}`;
    task3Elems.$container.appendChild(task3Elems.$child);
  }
}

// task4
const task4Elems = elementGenerator(".roman-to-decimal", true, true);

function task4() {
  const romanToDec = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  task4Elems.$btn.addEventListener("click", () => {
    const romanChars = task4Elems.$input.value.toUpperCase().split("");
    let result = 0;
    romanChars.forEach((char, idx) => {
      if (romanToDec[char] < romanToDec[romanChars[idx + 1]]) {
        result -= romanToDec[char];
      } else {
        result += romanToDec[char];
      }
    });
    task4Elems.$child.innerText = `Результат: ${result}`;
    task4Elems.$container.appendChild(task4Elems.$child);
  })
}

window.addEventListener("DOMContentLoaded", () => {
  task1();
  task3();
  task4()
});
elementGenerator(".duplicate-letters", true, true).$btn.addEventListener(
  "click",
  () => {
    task3();
  }
);
