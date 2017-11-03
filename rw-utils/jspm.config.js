SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "local:": "jspm_packages/local/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  packages: {
    "": {
      "defaultExtension": "js"
    },
    "local:template@1.0.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "react-dom": "npm:react-dom@16.0.0",
        "core-js": "npm:core-js@2.5.1",
        "invariant": "npm:invariant@2.2.2",
        "tslib": "npm:tslib@1.8.0",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
        "react-redux": "npm:react-redux@5.0.6",
        "template": "local:template@1.0.0"
      }
    },
    "local:rw-lib@1.0.0": {
      "map": {
        "template": "local:template@1.0.0",
        "lodash": "npm:lodash@4.17.4",
        "react-redux": "npm:react-redux@5.0.6",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
        "tslib": "npm:tslib@1.8.0",
        "core-js": "npm:core-js@2.5.1",
        "react-dom": "npm:react-dom@16.0.0",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:redux@3.7.2": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "loose-envify": "npm:loose-envify@1.3.1",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "lodash-es": "npm:lodash-es@4.17.4"
      }
    },
    "npm:react-redux@5.0.6": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "lodash": "npm:lodash@4.17.4",
        "prop-types": "npm:prop-types@15.6.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.3.1",
        "lodash-es": "npm:lodash-es@4.17.4"
      }
    },
    "npm:react-dom@16.0.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "prop-types": "npm:prop-types@15.6.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:react@16.0.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "prop-types": "npm:prop-types@15.6.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:prop-types@15.6.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "ua-parser-js": "npm:ua-parser-js@0.7.17",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.3.1"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@1.0.3",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.19"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.1"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "create-hash": "npm:create-hash@1.1.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "sha.js": "npm:sha.js@2.4.9",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "sha.js": "npm:sha.js@2.4.9",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "sha.js": "npm:sha.js@2.4.9",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "cipher-base": "npm:cipher-base@1.0.4",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:sha.js@2.4.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "asn1.js": "npm:asn1.js@4.9.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:asn1.js@4.9.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:history@4.7.2": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "resolve-pathname": "npm:resolve-pathname@2.2.0",
        "value-equal": "npm:value-equal@0.4.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:material-ui@next": {
      "map": {
        "dom-helpers": "npm:dom-helpers@3.2.1",
        "deepmerge": "npm:deepmerge@2.0.1",
        "react-popper": "npm:react-popper@0.7.4",
        "normalize-scroll-left": "npm:normalize-scroll-left@0.1.2",
        "react-jss": "npm:react-jss@7.2.0",
        "brcast": "npm:brcast@3.0.1",
        "jss-preset-default": "npm:jss-preset-default@3.0.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "recompose": "npm:recompose@0.26.0",
        "react-event-listener": "npm:react-event-listener@0.5.1",
        "react-transition-group": "npm:react-transition-group@2.2.1",
        "react-flow-types": "npm:react-flow-types@0.2.0-beta.4",
        "jss": "npm:jss@8.1.0",
        "react-scrollbar-size": "npm:react-scrollbar-size@2.0.2",
        "classnames": "npm:classnames@2.2.5",
        "scroll": "npm:scroll@2.0.1",
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.6.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.3.1",
        "lodash": "npm:lodash@4.17.4",
        "keycode": "npm:keycode@2.1.9"
      }
    },
    "npm:material-ui-icons@1.0.0-beta.17": {
      "map": {
        "recompose": "npm:recompose@0.26.0"
      }
    },
    "npm:react-jss@7.2.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "jss": "npm:jss@8.1.0",
        "jss-preset-default": "npm:jss-preset-default@3.0.0",
        "theming": "npm:theming@1.1.0",
        "prop-types": "npm:prop-types@15.6.0"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.5.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.0"
      }
    },
    "npm:recompose@0.26.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.3.1",
        "change-emitter": "npm:change-emitter@0.1.6",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "fbjs": "npm:fbjs@0.8.16"
      }
    },
    "npm:react-transition-group@2.2.1": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "warning": "npm:warning@3.0.0",
        "dom-helpers": "npm:dom-helpers@3.2.1",
        "prop-types": "npm:prop-types@15.6.0",
        "chain-function": "npm:chain-function@1.0.0",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:react-event-listener@0.5.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.6.0",
        "fbjs": "npm:fbjs@0.8.16"
      }
    },
    "npm:jss@8.1.0": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:react-scrollbar-size@2.0.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "react-event-listener": "npm:react-event-listener@0.5.1",
        "prop-types": "npm:prop-types@15.6.0"
      }
    },
    "npm:react-popper@0.7.4": {
      "map": {
        "popper.js": "npm:popper.js@1.12.6",
        "prop-types": "npm:prop-types@15.6.0"
      }
    },
    "npm:jss-preset-default@3.0.0": {
      "map": {
        "jss-default-unit": "npm:jss-default-unit@7.0.0",
        "jss-nested": "npm:jss-nested@5.0.0",
        "jss-camel-case": "npm:jss-camel-case@5.0.0",
        "jss-expand": "npm:jss-expand@4.0.1",
        "jss-global": "npm:jss-global@2.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@6.0.0",
        "jss-props-sort": "npm:jss-props-sort@5.0.0",
        "jss-compose": "npm:jss-compose@4.0.0",
        "jss-extend": "npm:jss-extend@5.0.0"
      }
    },
    "npm:scroll@2.0.1": {
      "map": {
        "rafl": "npm:rafl@1.2.2"
      }
    },
    "npm:theming@1.1.0": {
      "map": {
        "brcast": "npm:brcast@2.0.2",
        "react": "npm:react@15.6.2",
        "prop-types": "npm:prop-types@15.6.0",
        "is-plain-object": "npm:is-plain-object@2.0.4",
        "is-function": "npm:is-function@1.0.1"
      }
    },
    "npm:jss-nested@5.0.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-extend@5.0.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-compose@4.0.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-vendor-prefixer@6.0.0": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.8"
      }
    },
    "npm:rafl@1.2.2": {
      "map": {
        "global": "npm:global@4.3.2"
      }
    },
    "npm:react@15.6.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "create-react-class": "npm:create-react-class@15.6.2"
      }
    },
    "npm:css-vendor@0.3.8": {
      "map": {
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:global@4.3.2": {
      "map": {
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0",
        "process": "npm:process@0.5.2"
      }
    },
    "npm:is-plain-object@2.0.4": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:create-react-class@15.6.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "fbjs": "npm:fbjs@0.8.16",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    }
  },
  map: {
    "rw-lib": "local:rw-lib@1.0.0",
    "template": "local:template@1.0.0",
    "classname": "npm:classname@0.0.0",
    "core-js": "npm:core-js@2.5.1",
    "jss": "npm:jss@8.1.0",
    "material-ui": "npm:material-ui@next",
    "material-ui-icons": "npm:material-ui-icons@1.0.0-beta.17",
    "tslib": "npm:tslib@1.8.0",
    "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "history": "npm:history@4.7.2",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "invariant": "npm:invariant@2.2.2",
    "lodash": "npm:lodash@4.17.4",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@16.0.0",
    "react-dom": "npm:react-dom@16.0.0",
    "react-redux": "npm:react-redux@5.0.6",
    "redux": "npm:redux@3.7.2",
    "redux-saga": "npm:redux-saga@0.16.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "local:*.json"
  ],
  map: {
    "app": "local:app@master"
  },
  packages: {}
});
