---
title: TypeScript 高级类型技巧
date: '2023-11-20'
tags: ['TypeScript', '前端开发']
description: 深入探讨 TypeScript 中的高级类型特性，包括条件类型、映射类型和类型推断等。
---

# TypeScript 高级类型技巧

TypeScript 的类型系统非常强大，掌握高级类型可以让你的代码更加健壮和灵活。本文将深入探讨一些 TypeScript 中的高级类型技巧。

## 条件类型

条件类型允许我们基于类型关系表达式来选择类型：

```typescript
type IsString<T> = T extends string ? true : false;

// 使用示例
type A = IsString<string>; // true
type B = IsString<number>; // false
```

## 映射类型

映射类型允许我们从现有类型创建新类型：

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 使用示例
interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;
// 等同于：
// {
//   readonly name: string;
//   readonly age: number;
// }
```

## 类型推断与 infer 关键字

`infer` 关键字允许我们在条件类型中推断类型：

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 使用示例
function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>; // number
```

## 联合类型与交叉类型

联合类型表示一个值可以是几种类型之一：

```typescript
type StringOrNumber = string | number;
```

交叉类型表示一个值同时满足多种类型：

```typescript
type PersonWithSkills = Person & { skills: string[] };
```

## 实用工具类型

TypeScript 内置了许多实用的工具类型：

- `Partial<T>`: 将所有属性设为可选
- `Required<T>`: 将所有属性设为必需
- `Pick<T, K>`: 从 T 中选择特定属性
- `Omit<T, K>`: 从 T 中排除特定属性
- `Record<K, T>`: 创建键类型为 K，值类型为 T 的对象类型

## 高级示例：类型安全的事件发射器

下面是一个使用高级类型实现的类型安全事件发射器：

```typescript
type EventMap = {
  click: { x: number; y: number };
  focus: undefined;
  input: { value: string };
};

class EventEmitter<T extends Record<string, any>> {
  private listeners: { [K in keyof T]?: ((data: T[K]) => void)[] } = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]?.push(listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    this.listeners[event]?.forEach(listener => listener(data));
  }
}

// 使用示例
const emitter = new EventEmitter<EventMap>();

// 类型安全的事件监听
emitter.on('click', data => console.log(data.x, data.y));
emitter.on('input', data => console.log(data.value));

// 类型安全的事件发射
emitter.emit('click', { x: 10, y: 20 });
emitter.emit('input', { value: 'hello' });
```

## 结论

掌握 TypeScript 的高级类型可以帮助你编写更加类型安全的代码，减少运行时错误，提高开发效率。虽然学习曲线可能有些陡峭，但投入时间学习这些概念是非常值得的。 