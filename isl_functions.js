function change()
{
    document.getElementById('mainframe').className="faded";
    setTimeout(function()
    {
        document.getElementById('mainframe').src='page2.html';
        document.getElementById('mainframe').className="normal";
    }, (2 * 1000));
}
function getin_withstyle()
{
  <iframe id="mainframe" class="normal" src="haunteddz/index.html"></iframe>
}
