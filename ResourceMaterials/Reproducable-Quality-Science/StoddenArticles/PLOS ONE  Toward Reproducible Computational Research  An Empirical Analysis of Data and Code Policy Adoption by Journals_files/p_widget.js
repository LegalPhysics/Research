(function() {
if(figshare_widget_load) return false;
function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
}
function add_widget_css() {
    var headtg = document.getElementsByTagName('head')[0];
    if (!headtg) {
        return;
    }
    var linktg = document.createElement('link');
    linktg.type = 'text/css';
    linktg.rel = 'stylesheet';
    linktg.href = 'http://wl.figshare.com/static/css/p_widget.css?v=8';
    headtg.appendChild(linktg);
}

add_widget_css()
getScript("http://wl.figshare.com/static/plos_widget.js?v=10")
getScript("http://wl.figshare.com/static/jmvc/main_app/resources/jwplayer/jwplayer.js")
})();

var figshare_widget_load = true;

