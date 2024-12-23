var otoText;
var rowsPerPage, currentPage;
var otoStart, otoEnd;
var otoMidasi;

function disp50Oto()
{
  otoText = "<table class=\"oto\" cellpadding=\"12\">";
  otoText += "<tr>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('わ','^わ')\">わ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ら','^ら')\">ら</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('や','^や')\">や</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ま','^ま')\">ま</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('は','^は|^ば|^ぱ')\">は</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('な','^な')\">な</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('た','^た|^だ')\">た</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('さ','^さ|^ざ')\">さ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('か','^か|^が')\">か</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('あ','^あ')\">あ</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('り','^り')\">り</td>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('み','^み')\">み</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ひ','^ひ|^び|^ぴ')\">ひ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('に','^に')\">に</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ち','^ち|^ぢ')\">ち</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('し','^し|^じ')\">し</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('き','^き|^ぎ')\">き</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('い','^い')\">い</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('る','^る')\">る</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ゆ','^ゆ')\">ゆ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('む','^む')\">む</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ふ','^ふ|^ぶ|^ぷ')\">ふ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ぬ','^ぬ')\">ぬ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('つ','^つ|^づ')\">つ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('す','^す|^ず')\">す</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('く','^く|^ぐ')\">く</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('う','^う')\">う</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('れ','^れ')\">れ</td>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('め','^め')\">め</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('へ','^へ|^べ|^ぺ')\">へ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ね','^ね')\">ね</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('て','^て|^で')\">て</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('せ','^せ|^ぜ')\">せ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('け','^け|^げ')\">け</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('え','^え')\">え</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('を','^を')\">を</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ろ','^ろ')\">ろ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('よ','^よ')\">よ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('も','^も')\">も</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ほ','^ほ|^ぼ|^ぽ')\">ほ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('の','^の')\">の</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('と','^と|^ど')\">と</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('そ','^そ|^ぞ')\">そ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('こ','^こ|^ご')\">こ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('お','^お')\">お</td>";
  otoText += "</tr>";
  otoText += "</table>";

  YAHOO.util.Dom.get("oto_result").innerHTML = otoText;
}

function otoClick(sMidasi, sRex)
{
  // 先頭文字で正規表現検索
  searchOto(sRex);

  // １ページ表示数と表示ページの初期化
  rowsPerPage = 15;
  currentPage = 1;

  // 結果表示
  otoMidasi = sMidasi;
  dispOto();
}

function searchOto(sRex)
{
  otoNum = 0;
  for(var i=0; i<fullNum; i++) {
    if(fullYomi[i].search(sRex)==0) {
      otoYomi[otoNum] = fullYomi[i];
      otoKaki[otoNum] = fullKaki[i];
      otoRval[otoNum] = fullRval[i];
      otoGval[otoNum] = fullGval[i];
      otoBval[otoNum] = fullBval[i];
      otoNum++;
    }
  }
}

function dispOto()
{
  // タイトル
  otoText = "<h1>" + otoMidasi + "で始まる色の名前" + "</h1><br />";
  otoText += "<form>";
  otoText += "<table>";
  otoText += "<tr>";

  // 表示ページの計算
  otoStart = rowsPerPage * (currentPage-1);
  if(otoNum < rowsPerPage * currentPage) {
    otoEnd = otoNum;
  } else {
    otoEnd = rowsPerPage * currentPage;
  }

  // ナビゲーションバー
  otoText += "<td class=\"navi_setgyou\">";
  otoText += "行を表示：";
  otoText += "<select name=\"example\">";
  otoText += "<option>15</option>";
  otoText += "<option>30</option>";
  otoText += "<option>50</option>";
  otoText += "</select>";
  otoText += "</td>";
  otoText += "<td class=\"navi_dispgyou\">";
  otoText += otoNum + "件中" + (otoStart+1) + "～" + otoEnd + "件を表示</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviStart()\">｜＜</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviDec()\">＜</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviInc()\">＞</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviEnd()\">＞｜</td>";
  otoText += "</tr>";
  otoText += "</table>";
  otoText += "</form>";

  // 音に対応した色名表示
  otoText += "<table>";
  otoText += "<tr>";
  otoText += "<th>色</th>";
  otoText += "<th>名称</th>";
  otoText += "<th>めいしょう</th>";
  otoText += "<th>R</th>";
  otoText += "<th>G</th>";
  otoText += "<th>B</th>";
  otoText += "<th>#code</th>";
  otoText += "</tr>";
  for(var i=otoStart; i<otoEnd; i++) {
    otoText += "<tr>"
    otoText += "<td bgcolor=\"" + rgb2code(otoRval[i],otoGval[i],otoBval[i]) + "\" width=\"40\">" + "　</td>";
    otoText += "<td>" + otoKaki[i] + "</td>";
    otoText += "<td>" + otoYomi[i] + "</td>";
    otoText += "<td class=\"rgb\">" + otoRval[i] + "</td>";
    otoText += "<td class=\"rgb\">" + otoGval[i] + "</td>";
    otoText += "<td class=\"rgb\">" + otoBval[i] + "</td>";
    otoText += "<td>" + rgb2code(otoRval[i],otoGval[i],otoBval[i]) + "</td>";
    otoText += "</tr>";
  }
  otoText += "</table><br />";
  YAHOO.util.Dom.get("oto_result").innerHTML = otoText;
}

// ナビゲーションバー操作
function otoNaviStart()
{
  currentPage = 1;
  dispOto();
}

function otoNaviDec()
{
  if(currentPage > 1) {
    currentPage--;
    dispOto();
  }
}

function otoNaviInc()
{
  if(otoNum > currentPage * rowsPerPage) {
    currentPage++;
    dispOto();
  }
}

function otoNaviEnd()
{
  currentPage = Math.floor(otoNum / rowsPerPage) + 1;
  dispOto();
}
