$(async function() {
    const url = 'https://raw.githubusercontent.com/shibuhan/IdolMasterParty/refs/heads/master/idol.txt';
    const list = (await getFile(url))
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('//'));

    $('img').filter(function(i, e){return list.includes($(e).attr('alt'))}).css('filter', 'opacity(20%)');
});

async function getFile(url){
    return $.ajax({
        url: url,
        type: 'get',
        dataType:'text',
        cache:false,
        success: csv => csv  // TODO: どうしてこの書き方で動くのか調査。戻り値はPromiseになっている。
    });
}