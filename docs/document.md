# Document

[EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) <-- [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) <-- [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## `Document.createAttribute()`

[Attr]() 已废弃。

## `Document.createCDATASection(data)`

```syntax
CDATASection = document.createCDATASection(data)
```

- `CDATASection` 是一个 [CDATA Section](https://developer.mozilla.org/en-US/docs/Web/API/CDATASection) 节点。

- `data` 是一个字符串，包含要被添加到 CDATA Section 中的数据。
只适用于 XML 文档 (HTML 文档不支持 CDATA Section).

CDATA 已经从 Web 标准中移除了。

## `Document.createDocumentFragement()`

```syntax
var fragement = document.createDocumentFragment();
```

`fragement` 是指向空 [DocumentFragement](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) 的引用。

`DocumentFragement` 是 DOM 节点。他们从来不是 DOM 树的哪个部分。经常的用法是创建文档片段，往文档片段里面添加元素, 然后把文档片段添加到 DOM 树中。在 DOM 树中，文档片段被其子元素替代。

由于文档片段是在内存中而非在 DOM 树中，追加元素并不会造成页面 [reflow](https://developers.google.com/speed/articles/reflow?csw=1)(元素位置及几何结构的计算)。因此使用文档片段会有[更好的性能](http://ejohn.org/blog/dom-documentfragments/).

## `Document.createComment()`

创建一个新的注释节点，并返回他。

```syntax
CommentNode = document.createComment(data);
```

- `data`, 一个字符串，将被添回到注释中。

## `Document.createElement()`

```syntax
var element = document.createElement(tagName[, options]);
```

- `tagName` 一个字符串，指定要创建的元素的类型。创建的元素的 [nodeName](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName) 初始化为 `tagName` 的值。不要使用限定名 (如 "html:a")。当 HTML 文档调用这个方法时，`createElement()` 在创建元素前先把 `tagName` 转换为小写形式。在 Firefox, Opera, 及 Chrome 中, `createElement(null)` 类似于 `createElement("null")`

- `options` | `Options`

一个可选的 `ElementCreation` 对象。包含一个单个名为 `is` 的属性，其值是之前以 `customElements.define()` 定义的自定义元素的标签名。

- `element` 一个新的 [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)


## `Document.createELementNS()`

## `Document.createEvent()`

很多和 `createEvent` 一起使用的方法，如 `initCustomEvent`, 已经废弃了。请使用 [event constructors](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

创建一个指定类型的事件。返回对象应该首先被初始化然后可以传递给 [element.dispatchEvent](https://developer.mozilla.org/en-US/docs/DOM/element.dispatchEvent)


```syntax
var event = document.createEvent(type);
```

- `event` 是创建的 [Event](https://developer.mozilla.org/en-US/docs/DOM/event) 对象.

- `type` 是一个字符串，表示要创建的事件类型。可能的对象类型包括 `"UIEvent"`, `MouseEvents`, `MutationEvents`, 及 `HTMLEvents`, 详情见注释。


__Notes__

适合传递给 `createEvent` 的事件类型列举在 [DOM standard -- see the table in step 2](https://dom.spec.whatwg.org/#dom-document-createevent). 注意这些事件对象现在有构造函数，这是现在推荐的创建事件对象实例 的方式。

[Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)


## `Document.createNodeIterator()`

创建一个 [NodeIterator](https://developer.mozilla.org/en-US/docs/Web/API/Document/createNodeIterator) 对象。

## `Document.createProcessingInstruction()`

创建新的处理指令节点并返回。

## `Document.createRange()`

## `Document.createTextNode()`

## `Document.createTouchList()`

## `Document.createTreeWalker()`

## `Document.enableStylesheetsForSet()`

## `Document.exitPointerLocak()`

## `Document.getAnimations()`

## `Document.getElementsByClassName()`

## `Document.getElementsByTagName()`

## `Document.getElementsByTagNamesNS()`


## `Document.importNode()`

## `Document.releaseCapture()`



## `Document` vs `document`