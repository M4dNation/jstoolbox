const alpha = 
{
    'en-US': /^[A-Z]+$/i,
    'bg-BG': /^[А-Я]+$/i,
    'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[A-ZÆØÅ]+$/i,
    'de-DE': /^[A-ZÄÖÜß]+$/i,
    'el-GR': /^[Α-ω]+$/i,
    'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'nb-NO': /^[A-ZÆØÅ]+$/i,
    'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[A-ZÆØÅ]+$/i,
    'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    'ru-RU': /^[А-ЯЁ]+$/i,
    'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[A-ZÅÄÖ]+$/i,
    'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    'ar': /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

const alphanumeric = 
{
    'en-US': /^[0-9A-Z]+$/i,
    'bg-BG': /^[0-9А-Я]+$/i,
    'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[0-9A-ZÆØÅ]+$/i,
    'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
    'el-GR': /^[0-9Α-ω]+$/i,
    'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
    'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
    'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    'ru-RU': /^[0-9А-ЯЁ]+$/i,
    'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
    'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    'ar': /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

const ascii = /^[\x00-\x7F]+$/;

const hexadecimal = /^[0-9A-F]+$/i;
const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;

class Num
{

    /**
     * isDouble
     * This function is used in order to know if the first value is 2 times the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The  value.
     * @return  {Boolean}   True if n is 2 times val, false otherwise.
     */
    static isDouble(n, val)
    {
        return Num.isTimes(n, val, 2);
    }

    /**
     * isTriple
     * This function is used in order to know if the first value is 3 times the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The  value.
     * @return  {Boolean}   True if n is 3 times val, false otherwise.
     */
    static isTriple(n, val)
    {
        return Num.isTimes(n, val, 3);
    }

    /**
     * isTimes
     * This function is used in order to know if the first value is t times the second one.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val      The  value.
     * @param   {Number}    t        The number of times.
     * @return  {Boolean}   True if n is t times val, false otherwise.
     */
    static isTimes(n, val, t)
    {
        if (Obj.isNumber(n) && Obj.isNumber(val) && Obj.isNumber(t))
		{
			if (n === val * t)
				return true;
		}

		return false;
    }
    
    /**
     * isWithin
     * This function is used in order to know if a number is within two others.
     * @param   {Number}    n        The number to evaluate.
     * @param   {Number}    val1     The first gap value.
     * @param   {Number}    val2    The second gap value.
     * @return  {Boolean}   True if n is within val1 & val2, false otherwise.
     */
    static isWithin(n, val1, val2)
    {
        if (!Obj.isNumber(n) && !Obj.isNumber(val1) && !Obj.isNumber(val2))
            return false;

        if (Num.gt(val2, val1))
        {
            let copy = val1;
            val1 = val2;
            val2 = copy;
        }

        return (Num.gte(n, val1) && Num.lte(n, val2));
    }

    /**
     * isDecimal
     * This function is used in order to know if a number is a decimal.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is a decimal, false otherwise.
     */
    static isDecimal(n)
    {
        return Obj.isNumber(n) && n % 1 !== 0;
    }

    /**
     * isFinite
     * This function is used in order to know if a number is finite.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is finite, false otherwise.
     */
    static isFinite(n)
    {
        return !Obj.isInfinite(n) && !Obj.isNaN(n);
    }

    /**
     * isInteger
     * This function is used in order to know if a number is an integer.
     * @param   {Number}    n        The number to evaluate.
     * @return  {Boolean}   True if n is an integer, false otherwise.
     */
    static isInteger(n)
    {
        return Obj.isNumber(n) && n % 1 === 0;
    }
};

class Str
{
    /**
     * fromQueryString
     * This function is used in order to create an object from a query string encoded by toQueryString.
     * @param   {String}    str      The query string to evaluate.
     * @param   {Boolean}   deep     If true, the function will attempt to reassemble all arrays encoded.
     * @return  {Object}   The object from the query string.
     */
    static fromQueryString(str, deep)
    {
        var ret = {}, parts;

	    Collection.each(decodeURIComponent(str).split("&"), function (value)
	    {
	    	parts = value.split("=");
	      	if (parts[0].match(/\[\]/g) && deep)
	      	{
	        	parts[0] = parts[0].replace(/\[\]/g, '');
	        	if (parts[0] in ret)
	        	{
	          		ret[ parts[0] ].push(parts[1]);
	        	}
	        	else
	        	{
	          		ret[ parts[0] ] = [parts[1]];
	        	}
	      	}
	      	else
	      	{
	        	ret[ parts[0] ] = parts[1];
	      	}
	    });

	    return ret;
    }

    /**
     * htmlEncode
     * This function is used in order to encode common html character into their entity representations.
     * @param   {String}    str      The string on which apply html encoding.
     * @return  {String}    str      The html encoded string.
     */
    static htmlEncode(str)
    {
        var entities =
		{
      		'\u0026':['amp'], '\u0022':['quot'], '\u0027':['apos'], '\u003C':['lt'],
      		'\u003E':['gt'], '\u00A0':['nbsp'], '/':['#x2F']
    	};

    	for (var e in entities)
    	{
      		var entity = new RegExp(e, 'g');
      		str = str.replace(entity, '&' + entities[e][0] + ';');
    	}

    	return str;
    }

    /**
     * htmlDecode
     * This function is used in order to decode html encoded string.
     * @param   {String}    str      The string on which apply html decoding.
     * @return  {String}    str      The html decoded string.
     */
    static htmlDecode(str)
    {
        var entities =
		{
      		'&quot;':['\"'], '&amp;':['&'], '&apos;':["'"], '&lt;':['<'],
      		'&gt;':['>'], '&nbsp;':[' '], '&#x2F;':['/']
    	};

    	for (var e in entities)
    	{
      		var entity = new RegExp(e, 'g');
      		str = str.replace(entity, entities[e][0]);
    	}

    	return str;
    }

    /**
     * ext
     * This function is used in order to get a file extension.
     * @param   {String}    str      The string on which get the file extension.
     * @return  {String}    str      The file extension.
     */
    static ext(str)
    {
        var exts = str.split('.');

        return exts[Collection.len(exts) - 1];
    }

    /**
     * toCamelCase
     * This function is used in order to transform a string to camel case notation.
     * Note: If the str is snake case, this function won't work.
     * @param   {String}    str      The string on which apply camel casing.
     * @return  {String}    str      The camel-cased string.
     */
    static toCamelCase(str)
    {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index)
        {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    }

    /**
     * capitalize
     * This function is used in order to capitalize a string.
     * @param   {String}    str      The string on which apply capitalizing.
     * @return  {String}    str      The capitalized string.
     */
    static capitalize(str)
    {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * urlFriendly
     * This function is used in order to transform a string to be url friendly.
     * @param   {String}    str      The string on which apply url friendly transformation.
     */
    static urlFriendly(str)
    {
        return str.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    }

    /**
     * isCapitalized
     * This function is used in order to know if a string is capitalized.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is capitalized, false otherwise.
     */
    static isCapitalized(str)
    {
        if (!Obj.isString(str))
			return false;

		let words = string.split(' ');

		for (let i = 0; i < words.length; i++)
		{
			let word = words[i];
			if (word.length)
			{
				let chr = word.charAt(0);
				if (chr !== chr.toUpperCase())
					return false;
			}
		}

		return true;
    }

    /**
     * isLowerCase
     * This function is used in order to know if a string is lower case only.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is lower case only, false otherwise.
     */
    static isLowerCase(str)
    {
        return Obj.isString(str) && str === str.toLowerCase();
    }

    /**
     * isUpperCase
     * This function is used in order to know if a string is upper case only.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is upper case only, false otherwise.
     */
    static isUpperCase(str)
    {
        return Obj.isString(str) && str === str.toUpperCase();
    }

    /**
     * isSpace
     * This function is used in order to know if a char is the space char.
     * @param   {String}    c      The char to evaluate.
	 * @return  {Boolean} True if the char is the space char, false otherwise.
     */
    static isSpace(c)
    {
        if (!Obj.isChar(c))
            return false;

        let charCode = c.charCodeAt(0);

        return (charCode > 8 && charCode < 14) || charCode == 32;
    }

    /**
     * include
     * This function is used in order to know if a string include a substring.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}   substr   The substring to look for.
     * @return  {Boolean}   True if the string includes the substring, false otherwise.
     */
    static include(str, substr)
    {
        return str.indexOf(substr) > -1;
    }

    /**
     * startWith
     * This function is used in order to know if a string starts with a substring.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}   substr   The substring to look for.
     * @return  {Boolean}   True if the string starts with the substring, false otherwise.
     */
    static startWith(str, substr)
    {
        return Obj.isString(str) && str.indexOf(substr) === 0;
    }

    /**
     * endWit
     * This function is used in order to know if a string ends with a substring.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}   substr   The substring to look for.
     * @return  {Boolean}   True if the string ends with the substring, false otherwise.
     */
    static endWith(str, substr)
    {
        if (!Obj.isString(str))
            return false;

        substr += '';
        var position = str.length - substr.length;

        return position >= 0 && str.indexOf(substr, position) === position;
    }

    /**
     * isPalindrome
     * This function is used in order to know if a string is a palindrome.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is a palindrome, false otherwise.
     */
    static isPalindrome(str)
    {
        if (!Obj.isString(str))
            return false;

        str = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
        var length = str.length - 1;

        for (var i = 0, half = Math.floor(length / 2); i <= half; i++)
        {
            if (str.charAt(i) !== str.charAt(length - i))
                return false;
        }

        return true;
    }

    /**
     * isAlpha
     * This function is used in order to know if a string is an alpha string.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}    locale   The locate to check for. 
	 * @return  {Boolean} True if the string is an alpha string, false otherwise.
     */
    static isAlpha(str, locale = "fr-FR")
    {
        if (!Obj.isString(str))
            return false;

        if (locale in alpha)
            return alpha[locale].test(str);

        throw new Error(`Cannot check alpha on locale ${locale}`);
    }

    /**
     * isAlphanumeric
     * This function is used in order to know if a string is an alphanumeric string.
     * @param   {String}    str      The string to evaluate.
     * @param   {String}    locale   The locate to check for. 
	 * @return  {Boolean} True if the string is an alphanumeric string, false otherwise.
     */
    static isAlphanumeric(str, locale = "fr-FR")
    {
        if (!Obj.isString(str))
            return false;

        if (locale in alphanumeric)
            return alphanumeric[locale].test(str);
        
        throw new Error(`Cannot check alphanumeric on locale ${locale}`);
    }

    /**
     * isNumeric
     * This function is used in order to know if a string is a numeric string.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is a numeric string, false otherwise.
     */
    static isNumeric(str)
    {
        if (!Obj.isString(str))
            return false;

        return numeric.test(str);
    }

    /**
     * isAscii
     * This function is used in order to know if a string is an ASCII string.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is an ASCII string, false otherwise.
     */
    static isAscii(str)
    {
        if (!Obj.isString(str))
            return false;
        
        return ascii.test(str);
    }

    /**
     * isHexadecimal
     * This function is used in order to know if a string is an hexadecimal string.
     * @param   {String}    str      The string to evaluate.
	 * @return  {Boolean} True if the string is an hexadecimal string, false otherwise.
     */
    static isHexadecimal(str)
    {
        if (!Obj.isString(str))
            return false;

        return hexadecimal.test(str);
    }
};

class Env
{
    /**
     * getEnv
     * This function is used in order to get current running environment.
     * @return  {Object}   env    The current environment (self or window client side, global in nodejs server side).
     */
    static getEnv()
    {
        if (typeof self !== "undefined")
            return self;
	    else if (typeof window !== "undefined")
            return window;
	    else if (typeof global !== "undefined")
            return global;

        throw new Error("unable to locate environment object");
    }

    /**
     * getWindowObject
     * This function is used in order to get the window object reference.
     * @return  {Window}  The window object if client side, false otherwise.
     */
    static getWindowObject()
    {
        if (typeof window !== "undefined")
            return window;

        return false;
    }

    /**
     * getSelf
     * This function is used in order to get the self object reference.
     * @return  {Object}  The self object if client side, false otherwise.
     */
    static getSelf()
    {
        if (typeof self !== "undefined")
            return self;

        return false;
    }

    /**
     * getGlobal
     * This function is used in order to get the global object reference.
     * @return  {Object}  The global object if server side (nodejs), false otherwise.
     */
    static getGlobal()
    {
        if (typeof global !== "undefined")
            return global;

        return false;
    }

    /**
     * getDocument
     * This function is used in order to get the document object reference.
     * @return  {Object}  The document object if client side, false otherwise.
     */
    static getDocument()
    {
        let env = Env.getSelf();

        if (env)
            return env.document;

        return false;
    }

    /**
     * getNavigator
     * This function is used in order to get the navigator object reference.
     * @return  {Object}  The navigator object if client side, false otherwise.
     */
    static getNavigator()
    {
        let env = Env.getSelf();

        if (env)
            return env.navigator;

        return false;
    }

    /**
     * getAppVersion
     * This function is used in order to get the application version of the current browser.
     * @return  {String}  The application version as a lower case string.
     */
    static getAppVersion()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.appVersion || '').toLowerCase();
    }

    /**
     * getUserAgent
     * This function is used in order to get the user agent of the current browser.
     * @return  {String}  The user agent as a lower case string.
     */
    static getUserAgent()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.userAgent || '').toLowerCase();
    }

    /**
     * getVendor
     * This function is used in order to get the vendor of the current browser.
     * @return  {String}  The vendor as a lower case string.
     */
    static getVendor()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.vendor || '').toLowerCase();
    }

    /**
     * compareVersion
     * This function is used in order to compare number version of given environment, internal use only.
     * @param   {String}   version The actual version of the environment.
     * @param   {Number}   range The reference version to compare with.
     * @return  {Boolean}  True if provided version match actual version of given environment, false otherwise.
     */
    static compareVersion(version, range)
    {
        var comparator =
        {
            '<': function(a, b) { return a < b; },
            '<=': function(a, b) { return a <= b; },
            '>': function(a, b) { return a > b; },
            '>=': function(a, b) { return a >= b; }
        };

        var string = (range + '');
        var n = +(string.match(/\d+/) || NaN);
        var op = string.match(/^[<>]=?|/)[0];

        return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
    }

    /**
     * isAndroid
     * This function is used in order to know if current environment uses Android.
     * @return  {Boolean} True if current environment uses Android, false otherwise.
     */
    static isAndroid()
    {
        return /android/.test(Env.getUserAgent());
    }

    /**
     * isAndroidPhone
     * This function is used in order to know if current device is an Android phone.
     * @return  {Boolean} True if current device is an Android phone, false otherwise.
     */
    static isAndroidPhone()
    {
        return Env.isAndroid() && /mobile/.test(Env.getUserAgent());
    }

    /**
     * isAndroidTablet
     * This function is used in order to know if current device is an Android tablet.
     * @return  {Boolean} True if current device is an Android tablet, false otherwise.
     */
    static isAndroidTablet()
    {
        return Env.isAndroid() && !/mobile/.test(Env.getUserAgent());
    }

    /**
     * isBlackberry
     * This function is used in order to know if current device is a Blackberry.
     * @return  {Boolean} True if current device is a Blackberry, false otherwise.
     */
    static isBlackberry()
    {
        let userAgent = Env.getUserAgent();

        return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
    }

    /**
     * isChrome
     * This function is used in order to know if current browser is Google Chrome.
     * @return  {Boolean} True if current browser is Google Chrome, false otherwise.
     */
    static isChrome(range)
    {
        let userAgent = Env.getUserAgent();
        let match = /google inc/.test(Env.getVendor()) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;

        return match !== null && !Env.isOpera() && Env.compareVersion(match[1], range);
    }

    /**
     * isDesktop
     * This function is used in order to know if current environment is a desktop one.
     * @return  {Boolean} True if current environment is a desktop one, false otherwise.
     */
    static isDesktop()
    {
        return !Env.isMobile() && !Env.isTablet();
    }

    /**
     * isEdge
     * This function is used in order to know if current browser is Microsoft Edge.
     * @return  {Boolean} True if current browser is Microsoft Edge, false otherwise.
     */
    static isEdge(range)
    {
        var match = Env.getUserAgent().match(/edge\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isFirefox
     * This function is used in order to know if current browser is Mozilla Firefox.
     * @return  {Boolean} True if current browser is Mozilla Firefox, false otherwise.
     */
    static isFirefox(range)
    {
        var match = Env.getUserAgent().match(/(?:firefox|fxios)\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isInternetExplorer
     * This function is used in order to know if current browser is Internet Explorer.
     * @return  {Boolean} True if current browser is Internet Explorer, false otherwise.
     */
    static isInternetExplorer(range)
    {
        var match = Env.getUserAgent().match(/(?:msie |trident.+?; rv:)(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isIOS
     * This function is used in order to know if current environment uses iOS.
     * @return  {Boolean} True if current environment uses iOS, false otherwise.
     */
    static isIOS()
    {
        return Env.isIphone() || Env.isIpad() || Env.isIpod();
    }

    /**
     * isIpad
     * This function is used in order to know if current device is an iPad.
     * @return  {Boolean} True if current device is an iPad, false otherwise.
     */
    static isIpad(range)
    {
        var match = Env.getUserAgent().match(/ipad.+?os (\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isIphone
     * This function is used in order to know if current device is an iPhone.
     * @return  {Boolean} True if current device is an iPhone, false otherwise.
     */
    static isIphone(range)
    {
        // avoid false positive for Facebook in-app browser on ipad;
        // original iphone doesn't have the OS portion of the UA
        var match = Env.isIpad() ? null : Env.getUserAgent().match(/iphone(?:.+?os (\d+))?/);

        return match !== null && Env.compareVersion(match[1] || 1, range);
    }

    /**
     * isIpod
     * This function is used in order to know if current device is an iPod.
     * @return  {Boolean} True if current device is an iPod, false otherwise.
     */
    static isIpod(range)
    {
        var match = Env.getUserAgent().match(/ipod.+?os (\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isLinux
     * This function is used in order to know if current environment uses Linux.
     * @return  {Boolean} True if current environment uses Linux, false otherwise.
     */
    static isLinux()
    {
        return /linux/.test(Env.getAppVersion());
    }

    /**
     * isMac
     * This function is used in order to know if current device is a mac.
     * @return  {Boolean} True if current device is a mac, false otherwise.
     */
    static isMac()
    {
        return /mac/.test(Env.getAppVersion());
    }

    /**
     * isMobile
     * This function is used in order to know if current environment is a mobile one.
     * @return  {Boolean} True if current environment is a mobile one, false otherwise.
     */
    static isMobile()
    {
        return Env.isIphone() || Env.isIpod() || Env.isAndroidPhone() || Env.isBlackberry() || Env.isWindowsPhone();
    }

    /**
     * isOffline
     * This function is used in order to know if current device is offline (ie has not internet access at the moment).
     * @return  {Boolean} True if current device is offline, false otherwise.
     */
    static isOffline()
    {
        return !Env.isOnline();
    }

    /**
     * isObline
     * This function is used in order to know if current device is online (ie has internet access at the moment).
     * @return  {Boolean} True if current device is online, false otherwise.
     */
    static isOnline()
    {
        let navigator = Env.getNavigator();

        return !navigator || navigator.onLine === true;
    }

    /**
     * isOpera
     * This function is used in order to know if current browser is Opera.
     * @return  {Boolean} True if current browser is Opera, false otherwise.
     */
    static isOpera()
    {
        var match = Env.getUserAgent().match(/(?:^opera.+?version|opr)\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isPhantom
     * This function is used in order to know if current browser is PhantomJS.
     * @return  {Boolean} True if current browser is PhantomJS, false otherwise.
     */
    static isPhantom(range)
    {
        var match = Env.getUserAgent().match(/phantomjs\/(\d+)/);

        return match !== null && compareVersion(match[1], range);
    }

    /**
     * isSafari
     * This function is used in order to know if current browser is Safari.
     * @return  {Boolean} True if current browser is Safari, false otherwise.
     */
    static isSafari(range)
    {
        var match = Env.getUserAgent().match(/version\/(\d+).+?safari/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isTablet
     * This function is used in order to know if current environment is a tablet one.
     * @return  {Boolean} True if current environment is a tablet one, false otherwise.
     */
    static isTablet()
    {
        return Env.isIpad() || Env.isAndroidTablet() || Env.isWindowsTablet();
    }

    /**
     * isTouchDevice
     * This function is used in order to know if current device is a touch device.
     * @return  {Boolean} True if current device is a touch device, false otherwise.
     */
    static isTouchDevice()
    {
        let env = Env.getSelf(), d = Env.getDocument();

        return !!d && ('ontouchstart' in env || ('DocumentTouch' in env && d instanceof DocumentTouch));
    }

    /**
     * isWindows
     * This function is used in order to know if current environment uses Windows.
     * @return  {Boolean} True if current environment uses Windows, false otherwise.
     */
    static isWindows()
    {
        return /win/.test(Env.getAppVersion());
    }

    /**
     * isWindowsPhone
     * This function is used in order to know if current device is a Windows phone.
     * @return  {Boolean} True if current device is a Windows phone, false otherwise.
     */
    static isWindowsPhone()
    {
        return Env.isWindows() && /phone/.test(Env.getUserAgent());
    }

    /**
     * isWindowsTablet
     * This function is used in order to know if current device is a Windows tablet.
     * @return  {Boolean} True if current device is a Windows tablet, false otherwise.
     */
    static isWindowsTablet()
    {
        return Env.isWindows() && !Env.isWindowsPhone() && /touch/.test(Env.getUserAgent());
    }
};

module.exports = {
    Num: Num,
    Str: Str,
    Env: Env
};
