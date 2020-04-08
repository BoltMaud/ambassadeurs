{"version":3,"sources":["browser-polyfill.js"],"names":["browser","wrapAPIs","apiMetadata","Object","keys","length","Error","DefaultWeakMap","WeakMap","constructor","createItem","items","undefined","get","key","has","set","isThenable","value","then","makeCallback","promise","metadata","callbackArgs","chrome","runtime","lastError","reject","singleCallbackArg","resolve","wrapAsyncFunction","name","pluralizeArguments","numArgs","asyncFunctionWrapper","target","args","minArgs","maxArgs","Promise","wrapMethod","method","wrapper","Proxy","apply","targetMethod","thisObj","call","hasOwnProperty","Function","bind","prototype","wrapObject","wrappers","cache","create","handlers","prop","receiver","defineProperty","configurable","enumerable","desc","Reflect","deleteProperty","wrapEvent","wrapperMap","addListener","listener","hasListener","removeListener","onMessageWrappers","onMessage","message","sender","sendResponse","result","error","console","staticWrappers","targetObject","assign","module","exports"],"mappings":"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","file":"browser-polyfill.js","sourcesContent":["/* webextension-polyfill - v0.2.1 - Thu Mar 08 2018 16:33:09 */\n/* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */\n/* vim: set sts=2 sw=2 et tw=80: */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\"use strict\";\n\nif (typeof browser === \"undefined\") {\n  // Wrapping the bulk of this polyfill in a one-time-use function is a minor\n  // optimization for Firefox. Since Spidermonkey does not fully parse the\n  // contents of a function until the first time it's called, and since it will\n  // never actually need to be called, this allows the polyfill to be included\n  // in Firefox nearly for free.\n  const wrapAPIs = () => {\n    // NOTE: apiMetadata is associated to the content of the api-metadata.json file\n    // at build time by replacing the following \"include\" with the content of the\n    // JSON file.\n    const apiMetadata = {\n      \"alarms\": {\n        \"clear\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"clearAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"get\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"getAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        }\n      },\n      \"bookmarks\": {\n        \"create\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"export\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"get\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getChildren\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getRecent\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getTree\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"getSubTree\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"import\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"move\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 2\n        },\n        \"remove\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"removeTree\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"search\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"update\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 2\n        }\n      },\n      \"browserAction\": {\n        \"getBadgeBackgroundColor\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getBadgeText\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getPopup\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getTitle\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"setIcon\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"commands\": {\n        \"getAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        }\n      },\n      \"contextMenus\": {\n        \"update\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 2\n        },\n        \"remove\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"removeAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        }\n      },\n      \"cookies\": {\n        \"get\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getAll\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getAllCookieStores\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"remove\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"set\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"devtools\": {\n        \"inspectedWindow\": {\n          \"eval\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          }\n        },\n        \"panels\": {\n          \"create\": {\n            \"minArgs\": 3,\n            \"maxArgs\": 3,\n            \"singleCallbackArg\": true\n          }\n        }\n      },\n      \"downloads\": {\n        \"download\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"cancel\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"erase\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getFileIcon\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"open\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"pause\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"removeFile\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"resume\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"search\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"show\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"extension\": {\n        \"isAllowedFileSchemeAccess\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"isAllowedIncognitoAccess\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        }\n      },\n      \"history\": {\n        \"addUrl\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getVisits\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"deleteAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"deleteRange\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"deleteUrl\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"search\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"i18n\": {\n        \"detectLanguage\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getAcceptLanguages\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        }\n      },\n      \"identity\": {\n        \"launchWebAuthFlow\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"idle\": {\n        \"queryState\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"management\": {\n        \"get\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"getSelf\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"uninstallSelf\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        }\n      },\n      \"notifications\": {\n        \"clear\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"create\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"getAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"getPermissionLevel\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"update\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 2\n        }\n      },\n      \"pageAction\": {\n        \"getPopup\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getTitle\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"hide\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"setIcon\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"show\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        }\n      },\n      \"runtime\": {\n        \"getBackgroundPage\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"getBrowserInfo\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"getPlatformInfo\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"openOptionsPage\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"requestUpdateCheck\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"sendMessage\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 3\n        },\n        \"sendNativeMessage\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 2\n        },\n        \"setUninstallURL\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"storage\": {\n        \"local\": {\n          \"clear\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getBytesInUse\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"set\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"managed\": {\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getBytesInUse\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"sync\": {\n          \"clear\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getBytesInUse\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"set\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        }\n      },\n      \"tabs\": {\n        \"create\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"captureVisibleTab\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 2\n        },\n        \"detectLanguage\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"duplicate\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"executeScript\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"get\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getCurrent\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        },\n        \"getZoom\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"getZoomSettings\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"highlight\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"insertCSS\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"move\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 2\n        },\n        \"reload\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 2\n        },\n        \"remove\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"query\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"removeCSS\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"sendMessage\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 3\n        },\n        \"setZoom\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"setZoomSettings\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"update\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        }\n      },\n      \"webNavigation\": {\n        \"getAllFrames\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"getFrame\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        }\n      },\n      \"webRequest\": {\n        \"handlerBehaviorChanged\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 0\n        }\n      },\n      \"windows\": {\n        \"create\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"get\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 2\n        },\n        \"getAll\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"getCurrent\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"getLastFocused\": {\n          \"minArgs\": 0,\n          \"maxArgs\": 1\n        },\n        \"remove\": {\n          \"minArgs\": 1,\n          \"maxArgs\": 1\n        },\n        \"update\": {\n          \"minArgs\": 2,\n          \"maxArgs\": 2\n        }\n      }\n    };\n\n    if (Object.keys(apiMetadata).length === 0) {\n      throw new Error(\"api-metadata.json has not been included in browser-polyfill\");\n    }\n\n    /**\n     * A WeakMap subclass which creates and stores a value for any key which does\n     * not exist when accessed, but behaves exactly as an ordinary WeakMap\n     * otherwise.\n     *\n     * @param {function} createItem\n     *        A function which will be called in order to create the value for any\n     *        key which does not exist, the first time it is accessed. The\n     *        function receives, as its only argument, the key being created.\n     */\n    class DefaultWeakMap extends WeakMap {\n      constructor(createItem, items = undefined) {\n        super(items);\n        this.createItem = createItem;\n      }\n\n      get(key) {\n        if (!this.has(key)) {\n          this.set(key, this.createItem(key));\n        }\n\n        return super.get(key);\n      }\n    }\n\n    /**\n     * Returns true if the given object is an object with a `then` method, and can\n     * therefore be assumed to behave as a Promise.\n     *\n     * @param {*} value The value to test.\n     * @returns {boolean} True if the value is thenable.\n     */\n    const isThenable = value => {\n      return value && typeof value === \"object\" && typeof value.then === \"function\";\n    };\n\n    /**\n     * Creates and returns a function which, when called, will resolve or reject\n     * the given promise based on how it is called:\n     *\n     * - If, when called, `chrome.runtime.lastError` contains a non-null object,\n     *   the promise is rejected with that value.\n     * - If the function is called with exactly one argument, the promise is\n     *   resolved to that value.\n     * - Otherwise, the promise is resolved to an array containing all of the\n     *   function's arguments.\n     *\n     * @param {object} promise\n     *        An object containing the resolution and rejection functions of a\n     *        promise.\n     * @param {function} promise.resolve\n     *        The promise's resolution function.\n     * @param {function} promise.rejection\n     *        The promise's rejection function.\n     * @param {object} metadata\n     *        Metadata about the wrapped method which has created the callback.\n     * @param {integer} metadata.maxResolvedArgs\n     *        The maximum number of arguments which may be passed to the\n     *        callback created by the wrapped async function.\n     *\n     * @returns {function}\n     *        The generated callback function.\n     */\n    const makeCallback = (promise, metadata) => {\n      return (...callbackArgs) => {\n        if (chrome.runtime.lastError) {\n          promise.reject(chrome.runtime.lastError);\n        } else if (metadata.singleCallbackArg || callbackArgs.length === 1) {\n          promise.resolve(callbackArgs[0]);\n        } else {\n          promise.resolve(callbackArgs);\n        }\n      };\n    };\n\n    /**\n     * Creates a wrapper function for a method with the given name and metadata.\n     *\n     * @param {string} name\n     *        The name of the method which is being wrapped.\n     * @param {object} metadata\n     *        Metadata about the method being wrapped.\n     * @param {integer} metadata.minArgs\n     *        The minimum number of arguments which must be passed to the\n     *        function. If called with fewer than this number of arguments, the\n     *        wrapper will raise an exception.\n     * @param {integer} metadata.maxArgs\n     *        The maximum number of arguments which may be passed to the\n     *        function. If called with more than this number of arguments, the\n     *        wrapper will raise an exception.\n     * @param {integer} metadata.maxResolvedArgs\n     *        The maximum number of arguments which may be passed to the\n     *        callback created by the wrapped async function.\n     *\n     * @returns {function(object, ...*)}\n     *       The generated wrapper function.\n     */\n    const wrapAsyncFunction = (name, metadata) => {\n      const pluralizeArguments = (numArgs) => numArgs == 1 ? \"argument\" : \"arguments\";\n\n      return function asyncFunctionWrapper(target, ...args) {\n        if (args.length < metadata.minArgs) {\n          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        if (args.length > metadata.maxArgs) {\n          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        return new Promise((resolve, reject) => {\n          target[name](...args, makeCallback({resolve, reject}, metadata));\n        });\n      };\n    };\n\n    /**\n     * Wraps an existing method of the target object, so that calls to it are\n     * intercepted by the given wrapper function. The wrapper function receives,\n     * as its first argument, the original `target` object, followed by each of\n     * the arguments passed to the orginal method.\n     *\n     * @param {object} target\n     *        The original target object that the wrapped method belongs to.\n     * @param {function} method\n     *        The method being wrapped. This is used as the target of the Proxy\n     *        object which is created to wrap the method.\n     * @param {function} wrapper\n     *        The wrapper function which is called in place of a direct invocation\n     *        of the wrapped method.\n     *\n     * @returns {Proxy<function>}\n     *        A Proxy object for the given method, which invokes the given wrapper\n     *        method in its place.\n     */\n    const wrapMethod = (target, method, wrapper) => {\n      return new Proxy(method, {\n        apply(targetMethod, thisObj, args) {\n          return wrapper.call(thisObj, target, ...args);\n        },\n      });\n    };\n\n    let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);\n\n    /**\n     * Wraps an object in a Proxy which intercepts and wraps certain methods\n     * based on the given `wrappers` and `metadata` objects.\n     *\n     * @param {object} target\n     *        The target object to wrap.\n     *\n     * @param {object} [wrappers = {}]\n     *        An object tree containing wrapper functions for special cases. Any\n     *        function present in this object tree is called in place of the\n     *        method in the same location in the `target` object tree. These\n     *        wrapper methods are invoked as described in {@see wrapMethod}.\n     *\n     * @param {object} [metadata = {}]\n     *        An object tree containing metadata used to automatically generate\n     *        Promise-based wrapper functions for asynchronous. Any function in\n     *        the `target` object tree which has a corresponding metadata object\n     *        in the same location in the `metadata` tree is replaced with an\n     *        automatically-generated wrapper function, as described in\n     *        {@see wrapAsyncFunction}\n     *\n     * @returns {Proxy<object>}\n     */\n    const wrapObject = (target, wrappers = {}, metadata = {}) => {\n      let cache = Object.create(null);\n\n      let handlers = {\n        has(target, prop) {\n          return prop in target || prop in cache;\n        },\n\n        get(target, prop, receiver) {\n          if (prop in cache) {\n            return cache[prop];\n          }\n\n          if (!(prop in target)) {\n            return undefined;\n          }\n\n          let value = target[prop];\n\n          if (typeof value === \"function\") {\n            // This is a method on the underlying object. Check if we need to do\n            // any wrapping.\n\n            if (typeof wrappers[prop] === \"function\") {\n              // We have a special-case wrapper for this method.\n              value = wrapMethod(target, target[prop], wrappers[prop]);\n            } else if (hasOwnProperty(metadata, prop)) {\n              // This is an async method that we have metadata for. Create a\n              // Promise wrapper for it.\n              let wrapper = wrapAsyncFunction(prop, metadata[prop]);\n              value = wrapMethod(target, target[prop], wrapper);\n            } else {\n              // This is a method that we don't know or care about. Return the\n              // original method, bound to the underlying object.\n              value = value.bind(target);\n            }\n          } else if (typeof value === \"object\" && value !== null &&\n                     (hasOwnProperty(wrappers, prop) ||\n                      hasOwnProperty(metadata, prop))) {\n            // This is an object that we need to do some wrapping for the children\n            // of. Create a sub-object wrapper for it with the appropriate child\n            // metadata.\n            value = wrapObject(value, wrappers[prop], metadata[prop]);\n          } else {\n            // We don't need to do any wrapping for this property,\n            // so just forward all access to the underlying object.\n            Object.defineProperty(cache, prop, {\n              configurable: true,\n              enumerable: true,\n              get() {\n                return target[prop];\n              },\n              set(value) {\n                target[prop] = value;\n              },\n            });\n\n            return value;\n          }\n\n          cache[prop] = value;\n          return value;\n        },\n\n        set(target, prop, value, receiver) {\n          if (prop in cache) {\n            cache[prop] = value;\n          } else {\n            target[prop] = value;\n          }\n          return true;\n        },\n\n        defineProperty(target, prop, desc) {\n          return Reflect.defineProperty(cache, prop, desc);\n        },\n\n        deleteProperty(target, prop) {\n          return Reflect.deleteProperty(cache, prop);\n        },\n      };\n\n      return new Proxy(target, handlers);\n    };\n\n    /**\n     * Creates a set of wrapper functions for an event object, which handles\n     * wrapping of listener functions that those messages are passed.\n     *\n     * A single wrapper is created for each listener function, and stored in a\n     * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`\n     * retrieve the original wrapper, so that  attempts to remove a\n     * previously-added listener work as expected.\n     *\n     * @param {DefaultWeakMap<function, function>} wrapperMap\n     *        A DefaultWeakMap object which will create the appropriate wrapper\n     *        for a given listener function when one does not exist, and retrieve\n     *        an existing one when it does.\n     *\n     * @returns {object}\n     */\n    const wrapEvent = wrapperMap => ({\n      addListener(target, listener, ...args) {\n        target.addListener(wrapperMap.get(listener), ...args);\n      },\n\n      hasListener(target, listener) {\n        return target.hasListener(wrapperMap.get(listener));\n      },\n\n      removeListener(target, listener) {\n        target.removeListener(wrapperMap.get(listener));\n      },\n    });\n\n    const onMessageWrappers = new DefaultWeakMap(listener => {\n      if (typeof listener !== \"function\") {\n        return listener;\n      }\n\n      /**\n       * Wraps a message listener function so that it may send responses based on\n       * its return value, rather than by returning a sentinel value and calling a\n       * callback. If the listener function returns a Promise, the response is\n       * sent when the promise either resolves or rejects.\n       *\n       * @param {*} message\n       *        The message sent by the other end of the channel.\n       * @param {object} sender\n       *        Details about the sender of the message.\n       * @param {function(*)} sendResponse\n       *        A callback which, when called with an arbitrary argument, sends\n       *        that value as a response.\n       * @returns {boolean}\n       *        True if the wrapped listener returned a Promise, which will later\n       *        yield a response. False otherwise.\n       */\n      return function onMessage(message, sender, sendResponse) {\n        let result = listener(message, sender);\n\n        if (isThenable(result)) {\n          result.then(sendResponse, error => {\n            console.error(error);\n            sendResponse(error);\n          });\n\n          return true;\n        } else if (result !== undefined) {\n          sendResponse(result);\n        }\n      };\n    });\n\n    const staticWrappers = {\n      runtime: {\n        onMessage: wrapEvent(onMessageWrappers),\n      },\n    };\n\n    // Create a new empty object and copy the properties of the original chrome object\n    // to prevent a Proxy violation exception for the devtools API getter\n    // (which is a read-only non-configurable property on the original target).\n    const targetObject = Object.assign({}, chrome);\n\n    return wrapObject(targetObject, staticWrappers, apiMetadata);\n  };\n\n  // The build process adds a UMD wrapper around this file, which makes the\n  // `module` variable available.\n  module.exports = wrapAPIs(); // eslint-disable-line no-undef\n} else {\n  module.exports = browser; // eslint-disable-line no-undef\n}\n"]}
