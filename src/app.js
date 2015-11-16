var sys = require("system"),
  page = require("webpage").create(),
  logResources = false,
  step1url = "http://en.wikipedia.org/wiki/DOM_events",
  step2url = "http://en.wikipedia.org/wiki/DOM_events#Event_flow";

if (sys.args.length > 1 && sys.args[1] === "-v") {
  logResources = true;
}

function printArgs() {
  var i, ilen;
  for (i = 0, ilen = arguments.length; i < ilen; ++i) {
    console.log("    arguments[" + i + "] = " + JSON.stringify(arguments[i]));
  }
  console.log("");
}


page.onInitialized = function () {
  console.log("page.onInitialized");
  printArgs.apply(this, arguments);
};
page.onLoadStarted = function () {
  console.log("page.onLoadStarted");
  printArgs.apply(this, arguments);
};
page.onLoadFinished = function () {
  console.log("page.onLoadFinished");
  printArgs.apply(this, arguments);
};
page.onUrlChanged = function () {
  console.log("page.onUrlChanged");
  printArgs.apply(this, arguments);
};
page.onNavigationRequested = function () {
  console.log("page.onNavigationRequested");
  printArgs.apply(this, arguments);
};
page.onRepaintRequested = function () {
  console.log("page.onRepaintRequested");
  printArgs.apply(this, arguments);
};

if (logResources === true) {
  page.onResourceRequested = function () {
    console.log("page.onResourceRequested");
    printArgs.apply(this, arguments);
  };
  page.onResourceReceived = function () {
    console.log("page.onResourceReceived");
    printArgs.apply(this, arguments);
  };
}

page.onClosing = function () {
  console.log("page.onClosing");
  console.log("reactive logging of on closing.");
  // printArgs.apply(this, arguments);
};

// window.console.log(msg);
page.onConsoleMessage = function () {
  console.log("page.onConsoleMessage");
  printArgs.apply(this, arguments);
};

// window.alert(msg);
page.onAlert = function () {
  console.log("page.onAlert");
  printArgs.apply(this, arguments);
};
// var confirmed = window.confirm(msg);
page.onConfirm = function () {
  console.log("page.onConfirm");
  printArgs.apply(this, arguments);
};
// var user_value = window.prompt(msg, default_value);
page.onPrompt = function () {
  console.log("page.onPrompt");
  printArgs.apply(this, arguments);
};

//
//page.open('https://wifi-ise-01.stmk.wifi.at:8443/portal/PortalSetup.action?portal=535b90d0-3461-11e5-b975-00505693633b&sessionId=ac100105000521c956444fd1&action=cwa',
//  function (status) {
//    if (status !== 'success') {
//      console.log('Unable to access network');
//    } else {
//      console.log('loaded login page');
//      if (status !== 'success') {
//        console.log('Unable to access network');
//      } else {
//        console.log('get button');
//        console.log('Located Button with text: ' & page.evaluate(function() {
//          return document.getElementById('button').textContent;
//        }));
//
//        page.evaluate( function() {document.getElementById('button').click()});
//
//      }
//    }
//    phantom.exit();
//  });


setTimeout(function () {
//  var url = 'https://wifi-ise-01.stmk.wifi.at:8443/portal/PortalSetup.action?portal=535b90d0-3461-11e5-b975-00505693633b&sessionId=ac100105000521c956444fd1&action=cwa';
  var url = 'http://www.orf.at';
  console.log("");
  console.log("### STEP 1: Load '" + url + "'");
  page.open(url);
}, 0);


setTimeout(function () {
  console.log("");
  console.log("### STEP 2: Click the button of the login page")
  page.evaluate(function () {
    var ev = document.createEvent("MouseEvents");
    ev.initEvent("click", true, true);
    var button = document.querySelector("button#button");
    if (button !== null) {
      var buttonTxt = button.textContent || button.innerText;
      if (buttonTxt === 'Nutzungsbedingungen akzeptieren' && button.getAttribute('value') === 'LogIn') {
        console.log("------------> CLICK <------------\n\n");
        button.dispatchEvent(ev);
      }
    }
  });
}, 2000);

setTimeout(function () {
  console.log("");
  console.log("### STEP 3: Close page and shutdown (with a delay)");
  page.close();
  setTimeout(function () {
    phantom.exit();
  }, 100);
}, 10000);

//var casper = require('casper').create();
//
//casper.options.viewportSize = {width: 1024, height: 768};
//
//casper.test.begin("Logging into WIFI Wireless LAN", 1, function logIn(test) {
//  casper.start('https://wifi-ise-01.stmk.wifi.at:8443/portal/PortalSetup.action?portal=535b90d0-3461-11e5-b975-00505693633b&sessionId=ac100105000521c956444fd1&action=cwa',
//    function() {
//      test.assertTitleMatch('WIFI Steiermark Public WLAN');
//      test.assertExists('button');
//      test.assertSelectorHasText('button.button#button', 'Nutzungsbedingungen akzeptieren');
//
//    }).run(function() {
//      test.done();
//    });
//});
//
//
//
//
//
//
//
//


//casper.start('https://wifi-ise-01.stmk.wifi.at:8443/portal/PortalSetup.action?portal=535b90d0-3461-11e5-b975-00505693633b&sessionId=ac100105000521c956444fd1&action=cwa', function() {
//  // <button class="button" name="button" id="button" value="LogIn" type="submit">Nutzungsbedingungen akzeptieren</button>
//  this.echo(this.getTitle());
//  this.echo(this.getHTML());
////  casper.assertExists('button.button#button');
//  casper.assertExists('button');
//  casper.assertSelectorHasText('button.button#button', 'Nutzungsbedingungen akzeptieren');
//  this.click('button.button#button');
//});
//
//casper.then(function() {
//  console.log('clicked ok, new location is ' + this.getCurrentUrl());
//});
//
//casper.run();
