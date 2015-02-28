/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

if (typeof console === "undefined") {
  var console = {
    log: print
  }
}

console.print = function (c) {
  putstr(String.fromCharCode(c));
};

console.info = function (c) {
  putstr(String.fromCharCode(c));
};

console.error = function (c) {
  putstr(String.fromCharCode(c));
};

function check() {

}

if (scriptArgs.length !== 1) {
  print("error: One main class name must be specified.");
  print("usage: jsshell <main class name>");
  quit(1);
}

var callbacks = [];
var window = {
  setZeroTimeout: function(callback) {
    callbacks.push(callback);
  },
  addEventListener: function() {
  },
  crypto: {
    getRandomValues: function() {
    },
  },
};

var navigator = {
  language: "en-US",
};

function Promise() {
  // ...
}

var document = {
  documentElement: {
    classList: {
      add: function() {
      },
    },
  },
  querySelector: function() {
    return {
      addEventListener: function() {
      },
    };
  },
  getElementById: function() {
    return {
      addEventListener: function() {
      },
      getContext: function() {
        return {
          save: function() {
          },
        };
      },
      getBoundingClientRect: function() {
        return { top: 0, left: 0, width: 0, height: 0 };
      },
      querySelector: function() {
        return { style: "" };
      },
      dispatchEvent: function(event) {
      },
      style: "",
    };
  },
  addEventListener: function() {
  },
};

var Event = function() {
}

var config = {
  logConsole: "native",
  args: "",
};

try {
  load("build/shumway.js", "libs/relooper.js", "build/j2me.js","libs/zipfile.js", "blackBox.js",
       "libs/encoding.js", "util.js",
       "override.js", "vm/tags.js", "native.js", "tests/override.js",
       "midp/midp.js", "midp/gestures.js",
       "libs/long.js", "midp/crypto.js", "libs/forge/md5.js", "libs/forge/util.js",
       "build/classes.jar.js");

  // load("build/classes.jar.js");
  // load("build/program.jar.js");
  // load("build/tests.jar.js");

  var dump = putstr;

  CLASSES.addSourceDirectory("java/cldc1.1.1");
  CLASSES.addSourceDirectory("java/midp");
  // CLASSES.addSourceDirectory("bench/scimark2src");

  CLASSES.addPath("java/classes.jar", snarf("java/classes.jar", "binary").buffer);
  CLASSES.addPath("tests/tests.jar", snarf("tests/tests.jar", "binary").buffer);
  CLASSES.addPath("bench/benchmark.jar", snarf("bench/benchmark.jar", "binary").buffer);
  CLASSES.addPath("program.jar", snarf("program.jar", "binary").buffer);

  CLASSES.initializeBuiltinClasses();

  var start = dateNow();
  var jvm = new JVM();

  start = dateNow();
  var runtime = jvm.startIsolate0(scriptArgs[0], config.args);

  //J2ME.writers = J2ME.WriterFlags.All;
  //J2ME.loadWriter = new J2ME.IndentingWriter();
  //J2ME.linkWriter = new J2ME.IndentingWriter();
  //J2ME.classCounter.clear();
  //CLASSES.loadAllClassFilesInJARFile("program.jar");
  //J2ME.classCounter.trace(J2ME.loadWriter);
  //
  ////while (callbacks.length) {
  ////  (callbacks.shift())();
  ////}

  // J2ME.interpreterCounter.traceSorted(new J2ME.IndentingWriter());

} catch (x) {
  print(x);
  print(x.stack);
}
