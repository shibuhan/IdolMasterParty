$(function() {
    const list = [
        // シナジー
        '［夜の一輪］相葉夕美',
        '［日向の乙女］小日向美穂',
        '［ありすの物語］橘ありす',
        '［一陣の情熱］神谷奈緒',
        '［オーダーメイド・はぁと］佐藤心',
        '［ホワイト・ハピネス］緒方智絵里',
        '［この美しい世界を］上条春菜',
        '［アイロニカル・エトランゼ］一ノ瀬志希',
        '［幻想と神話の紡ぎ手］神崎蘭子',
        '［うたかたの結び手］依田芳乃',
        // モチーフ
        '［トゥルー・ドリーム］喜多日菜子',
        '［ひかり、満ちるとき］鷹富士茄子',
        '［エクステンド・ワールド］二宮飛鳥',
        '［ビサイド・エタニティ］五十嵐響子',
        '［紡ぐメメント・モリ］黒埼ちとせ',
        '［おとぎの国のものがたり］市原仁奈',
        '［おめざめ☆あかりんご］辻野あかり',
        '［夢見りあむしか勝たん］夢見りあむ',
        // シンフォニー
        '［やすらぎの温度］高森藍子',
        '［コドクノツドイ］星輝子',
        '［永遠の結び愛］佐久間まゆ',
        '［黒薔薇は小夜に咲く］櫻井桃華',
        '［希望へ導くヒカリ］南条光',
        '［女神は朝焼けの海に］新田美波',
        // リフレイン
        '［ワナビー・レジェンド］多田李衣菜',
        '［ワールド・ディストーション］堀裕子',
        '［星降る森のおとぎ話］森久保乃々',
        '［秘密のブルーローズ］結城晴',
        '［My Life, My Sounds］木村夏樹',
        '［メイク・ハー・スター］久川颯',
        '［紅の誓い］村上巴',
        // ミューチャル
        '［心ふれあえば］佐久間まゆ',
        '［楽しい今を、未知の明日を］神谷奈緒',
        '［テンプテーション・ブラッド］速水奏',
        '［アナタに捧ぐカリーニョ］ナターリア',
        '［ツヤメキ★いろは］城ヶ崎美嘉',
        '［メリー・メリー・プレゼント］十時愛梨',
        '［きらきら☆湯けむり美人］諸星きらり',
        // オルタネイト
        '［白詰草縁起］緒方智絵里',
        '［目指せ！ユートピア］双葉杏',
        '［美しき装丁、愛しき言葉］鷺沢文香',
        '［甘カワ☆ニゅーいヤー］大槻唯',
        '［艶炎小唄］木村夏樹',
        // アンサンブル
        '［ハッピーにゃーイヤー］前川みく',
        '［スロウ・サマー・ヘヴン］十時愛梨',
        '［セレブレイト・カレイド］速水奏',
        '［プレシャス・ホーリーナイト］多田李衣菜',
        '［なぎ・はーととりっぷ］久川凪',
        // マジック
        '［メリーバッドユートピア］一ノ瀬志希',
        '［深淵なる月影］高垣楓',
        '［永遠の愛のレクイエム］櫻井桃華',
        '［綺羅星のエンプレス］諸星きらり',
        '［春霞の彼方］北条加蓮',
        // ライフスパークル
        '［新春の彩り］三村かな子',
        '［ファンタスティック・ナイト］乙倉悠貴',
        '［ドキワク！ユズレシピ］喜多見柚',
        '［ぴょんぴょん☆にゅーいやー］市原仁奈',
        '［祝宴の白姫］神崎蘭子',
        '［気ままなご主人様］前川みく',
        '［アップル☆キャロル］辻野あかり',
        '［ル・マリアージュ］宮本フレデリカ',
        // コンセントレーション
        '［ワイルドサラブレッド］浜川愛結奈',
        '［アップビート・ラン］北川真尋',
        '［舞台上のエレガンテ］松山久美子',
        '［超☆志貫徹］冴島清美',
        '［クイーン・オブ・クイーン］財前時子',
        '［FEEL SO FREE］木村夏樹',
        '［ポジティブパッション］日野茜',
        '［幸せのお告げ］藤居朋',
        '［シーサイドドリーム］荒木比奈',
        '［プレイ・ウィズ・ミー］結城晴',
        '［異国に吹く風］ライラ',
        '［真剣・一閃］脇山珠美',
        '［ステップトゥーミライ］佐々木千枝',
        '［うるわしブロッサム］西園寺琴歌',
        '［ディーラーズディライト］兵藤レナ',
        '［羽衣小町］小早川紗枝',
        '［P.C.S］五十嵐響子',
        '［ひらめきロボティクス］池袋晶葉',
        '［すこやかな願い］栗原ネネ',
        '［あこがれのプリンセス］古賀小春',
        '［メモリアルデイズ］今井加奈',
        '［出会えた憧憬］関裕美',
        // オーバーロード
        '［メモリアル★ビーチサイド］城ヶ崎美嘉',
        '［ぴかぴかのさくらぐみ♪］市原仁奈',
        '［サンセットヴィーナス］三船美優',
        '［ヨモスガラ・パーティー］白坂小梅',
        '［夏色の南風］新田美波',
        '［えにしの結び手］道明寺歌鈴',
        '［インビテーション・ダイブ］一ノ瀬志希',
        // オーバードライブ
        '［暁のシュヴァリエ］高垣楓',
        // スパイク
        '［パルファム・ゼラニウム］三船美優'
    ];

    $('img').filter(function(i, e){return list.includes($(e).attr('alt'))}).css('filter', 'opacity(20%)');
});