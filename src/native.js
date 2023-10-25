let NativeBridge = {
    getDataValueResult: {},
    getDataValue: function (key, callback) {
        key += '';
        if (this.isIOS()) {
            window.webkit.messageHandlers.getDataValue.postMessage(key);
        } else if (this.isAndroid()) {
            NativeBridge.getDataValueResult[key] = window.androidNative.getDataValue(key);
        } else {
            console.log('call getDataValue: ' + key);
            NativeBridge.getDataValueResult[key] = sessionStorage.getItem(key);
        }

        // 値取得コールバック処理
        let getValue = function (key) {
            if (key in NativeBridge.getDataValueResult) {
                console.log("key=" + NativeBridge.getDataValueResult[key]);
                callback(NativeBridge.getDataValueResult[key]);
            } else {
                setTimeout(getValue, 10, key);
            }
        };
        setTimeout(getValue, 10, key);
    },
    setDataValue: function (key, value) {
        key += '';
        value += '';
        if (this.isIOS()) {
            window.webkit.messageHandlers.setDataValue.postMessage([key, value]);
        } else if (this.isAndroid()) {
            window.androidNative.setDataValue(key, value);
        } else {
            console.log('call setDataValue. key=' + key);
            sessionStorage.setItem(key, value)
        }
    },

    openWebView: function (url) {
        if (this.isIOS()) {
            window.webkit.messageHandlers.openWebView.postMessage(url);
        } else if (this.isAndroid()) {
            window.androidNative.openWebView(url);
        } else {
            window.open(url, '_blank');
        }
    },

    callPushNotification: function () {
        if (this.isIOS()) {
            window.webkit.messageHandlers.callPushNotification.postMessage("");
        } else if (this.isAndroid()) {
            window.androidNative.callPushNotification();
        } else {
            confirm('通知を送信します。よろしいですか？');
        }
    },

    isIOS: function () {
        let retFlg = window.webkit != undefined && window.webkit.messageHandlers != undefined;
        return retFlg
    },
    isAndroid: function () {
        let retFlg = window.androidNative != undefined;
        return retFlg
    }
};