# 2022-05-24

오늘은 떠오르고 있는 패러다임인 **함수형 프로그래밍** 에 대해 간단하게 알아보겠습니다!

# 목차
1. 함수형 프로그래밍
2. 관련 문법 소개
3. 대표적인 패턴
4. 비동기 문법

## 함수형 프로그래밍

> 모든 것은 함수입니다.

함수형 프로그래밍에서는 모든 것을 함수로 취급합니다.
본 함수형 프로그래밍을 배워두신다면, 프로그래밍 내에서 문제를 접했을 때 조금 더 다양한 시각으로 접근할 수 있도록 해줄 겁니다. 함수형 프로그래밍이 꽤나 난해하다고 볼 수 있지만, 쓰다보면 굉장히 매력적이에요.
하지만 게임에서는 그렇게까지 깊게 들어갈 필요는 없고, 함수형 프로그래밍에서 쓸만한 패턴들을 가져다가 쓰면 충분히 게임 개발에서도 도움이 될 것입니다.

### 함수도 값이다.

> 함수형 프로그래밍의 대표적인 특징입니다.

함수형 프로그래밍에서는 함수도 값으로 취급합니다. 함수가 함수를 반환할 수 있으며, 함수의 매개변수에 함수를 넣어줄 수 있습니다. 아래에서 소개해드릴 문법들을 보면 이게 당최 무슨 소리인지 이해하실 수 있을겁니다.

### side effect (부작용)

> 예측하기 힘든 변화를 뜻합니다.

대표적인 부작용의 예시로는 단언컨데 전역 변수를 들 수 있겠습니다.
전역 변수는 정말로 신중하게 써야 하는 개념입니다. 전역 변수를 쓰실 때에는 세 번 검토하세요.
조금 와닿는 예시로는 입출력 정도가 있겠습니다.

함수형 프로그래밍의 가장 큰 장점은, 에러를 잡기 굉장히 쉽다는 점입니다.
위와 같은 **부작용을 최대한 없애는 것이 함수형 프로그래밍의 목적**이기 때문에, 그만큼 어디서 문제가 발생했는지 예측하기 쉽다는 장점이 있습니다. 예시를 들어서 설명드릴게요!

```js
var value = 0;
function sum(arr) {
    for (var i=0;i<arr.length;i++) {
        value += arr[i];
    }
    return value;
}

console.log(sum([1, 2, 3]));
```

## 관련 문법 소개

### let, const

> var 는 악마입니다. 쓰지 마세요.

변수 선언문에 쓰이는 키워드입니다. var 는 쓰지 마세요.
다시 강조합니다. var 는 쓰지 마세요.

const 는 let 과 거의 대부분이 똑같지만, 변수의 값을 바꿀 수 없습니다.

#### scope

> 변수를 사용할 수 있는 범위를 뜻합니다.

let, const 는 블럭 범위 내에서 사용할 수 있고, var 는 쓰지 마세요... 가 아니라 함수 범위 내에서 사용할 수 있습니다.
예시를 들면서 설명해보죠.

```js
var a = 0;
{
    var aa = 1;
    let b = 0;
    const c = 0;
    c = 2; // error
}
aa = 2; // success
b = 1; // error
console.log(c); // error
```

### map

> 배열을 주어진 함수에 따라 연산한 뒤 새 배열을 반환합니다.

배열의 모든 요소에 주어진 함수를 실행하는데요, 예시를 보면서 설명하는 편이 훨씬 쉬울겁니다.
이 패턴은 패러다임 불문하고 정말 많이 쓰이는 패턴입니다. 알아두면 나쁠 거 없답니다.

```js
const mock_list = [1, 2, 3, 4, 5];

const mock_2_list = mock_list.map(function (x) {
    return x * 2;
});

console.log(mock_2_list);
```

### filter

> 배열을 주어진 함수에 따라 특정 요소들을 제거합니다.

긴 말 필요없습니다. 예시를 보시죠.

```js
const mock_list = [1, 2, 3, 4, 5];

const mock_2_list = mock_list.filter(function (x) {
    return x%2;
});

console.log(mock_2_list);
```

### reduce

> 배열을 주어진 함수에 따라 하나의 값으로 만듭니다.

긴필예보

```js
const mock_list = [1, 2, 3, 4, 5];

const sum = mock_list.reduce(function (x, acc) {
    return x + acc;
}, 0);

console.log(sum);
```

### arrow function (화살표 함수)

> 예쁜 함수입니다.

사실 function 이라는 대체제가 있기에, 설명하지 않으려고 했습니다만 모양새가 너무 예쁜 관계로 짚고 넘어가겠습니다. (실제로 많은 개발자들이 이 개념을 굉장히 좋아하고 아낍니다)
function 과의 차이점이 없는 건 아닙니다. 알고 싶으시다면 ~~심연의~~ this 개념을 참고해주세요.

```js
const mock_func = (a, b) => {
    return a + b;
}
console.log(mock_func(1, 2)); // 3
```

# 쉬어가기

## 대표적인 패턴

### pure function (순수 함수)

> side effect, 즉 부작용이 없는 함수입니다.

단적으로 설명드리자면, 수학에서 소개되는 함수와 동일합니다.
함수형 프로그래밍에서는 순수 함수를 굉장히 아끼는데, 함수형 프로그래밍의 철학과 일치하기 때문입니다.
순수 함수는 매개변수에 따라 반환값이 결정되기 때문에, 매개변수만 고려하면 반환값을 예측할 수 있다는 점이 가장 큰 장점입니다.

### Immutable (불변성)

> 값이 변하지 않는 성질을 뜻합니다.

위에서 소개드린 순수 함수와 겹치는 부분이기도 한데, 함수형 프로그래밍이 가지는 특징이 바로 불변성입니다.
값이 바뀌지 않는다면 그만큼 예측하기 쉬워지겠죠.
불변성과 대척점에 서 있는 대표적인 개념은 바로 전역변수입니다.
무엇보다 불변성을 지킨다면, 나중에 비동기 작업을 할 때 정말로 큰 도움이 됩니다.

### recursion function (재귀 함수)

> 함수 안의 함수입니다.

함수형 프로그래밍의 가장 재미있는 부분 중 하나입니다.
본 재귀 함수로 인해 반복문을 완벽하게 대체할 수 있죠.
아, 시간 문제 때문에 반복문을 전부 대체할 수 없다고 생각하신다면, tail recursion function(꼬리 재귀 함수) 에 관련된 정보들을 찾아보세요.

대표적인 예제로는 역시 피보나치가 있겠죠?
제가 또 꼬리 재귀 함수를 굉장히 좋아하는데, 이걸로 한 번 구현해보도록 하겠습니다.

```js
function fib(cnt, a=0, b=1) {
    b = a + b;
    a = b - a;
    if (cnt === 0) return a;
    return fib(cnt-1);
}
```

### Closure (클로저)

> 일정 범위 내의 변수를 수정하는 함수를 반환하는 함수.. 뭐라카노

예시를 들면서 설명하는 것이 훨씬 빠르겠군요. 바로 가시죠.

```js
function hp_container() {
    let hp = 10;
    return {
        damage(value) {
            hp -= value;
        },
        heal(value) {
            hp += value;
        }
    };
}
```

## 비동기

> 동시에 실행 가능한 흐름입니다.

풀어서 말씀드리자면, 여러 작업을 한꺼번에 실행할 수 있는 것이 바로 비동기입니다.
비동기와는 다른 동기라는 개념은 하나의 일을 하나씩 순차적으로 해결한다면, 비동기는 여러개의 일을 한꺼번에 처리할 수 있습니다.
비동기 처리로는 setTimeout 이나 ajax 와 같은 개념이 있습니다.


## 비동기 문법

> 자바스크립트의 대표적인 비동기 문법 세 가지를 소개합니다.

사실 저도 비동기에 관련된 거라고는 Mutex Lock 걸어주는 거나 Golang의 Goroutine과 Channel 써본게 전부라서, 깊게 들어갈 수는 없을 것 같습니다. 비동기가 어떤 개념인지만 이해해주시면 되겠습니다.
비동기와 관련된 예시로는 위의 경우 외에도 입출력 처리, 네트워크 통신 등등의 개념이 있습니다.

### 콜백 (Callback)

> 일을 수행한 후 주어진 함수를 실행합니다.

### setTimeout

```js
setTimeout(() => {
    console.log("1 second later");
}, 1000);
```

### Promise

> 콜백 지옥을 해결하기 위해 등장한 개념입니다.

![link](https://keen.devpools.kr/images/1*DYl8hrBSACyN8CyvstNH0g.jpeg)

```js
const wait = function(t) {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, t);
    });
}

wait(1000).then(() => {
    console.log(1);
    return wait(1000);
})
```

### async await

> Promise를 조금 더 세련되게 쓸 수 있는 방법입니다.

```js
const one = await wait(1000);
const two = await wait(1000);
const three = await wait(1000);

console.log(one);
console.log(two);
console.log(three);
```