/*********************************************************
^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
 12            3  4          5       6  7        8 9
*********************************************************/

function parse_url(url) {
    var pattern = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
    var matches =  url.match(pattern);
    return {
        scheme: matches[2],
        domain: matches[4],
        path: matches[5],
        query: matches[7],
        fragment: matches[9]
    };
}

console.log(parse_url("http://www.somesite.se/blah/sdgsdgsdgs?343=3434&3445=dfasf#dfsdf=343"));



