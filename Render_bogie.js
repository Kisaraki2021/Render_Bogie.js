/*
ReadMe
===============================================================================

台車スクリプト(素材)

-------------------------------------------------------------------------------

・作者    :Kisaraki2021
・Version :Release1.0
・最終更新:2021/12/30

-------------------------------------------------------------------------------

動作確認
・RealTrainMod1.12.2 or RealTrainMod1.7.10 or KaizPatch

-------------------------------------------------------------------------------

使用方法
1.スクリプトをassets/minecraft/scripts/に配置する。
2.スクリプトの62~64行目に使いたい台車の座標に書き換える。メモ帳ではなくVSCode等の高機能エディタをご利用ください。
2.jsonで台車スクリプトパスを指定する。

-------------------------------------------------------------------------------

クレジット
このスクリプト素材は山城タカミ様の「叡電スクリプト解説サンプル」を参考にしています。

-------------------------------------------------------------------------------

本作品はCC BY 4.0ライセンスの下で提供されます。
https://creativecommons.org/licenses/by/4.0/deed.ja

===============================================================================
*/
//ReadMe終わり
// ←これは解説とかコメントです。実際の動作には影響ありません。


//ここからがスクリプト
var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);

//### オブジェクト定義 ###
function init (par1, par2)
{
	frame = renderer.registerParts(new Parts("obj1"));   //台車枠 (動かないパーツ)
	wheel1 = renderer.registerParts(new Parts("obj2"));  //車輪 (前)
	wheel2 = renderer.registerParts(new Parts("obj3"));  //車輪 (後)
}

//### 台車描画 ###
function render(entity, pass, par3)
{

	GL11.glPushMatrix();


	var r = renderer.getWheelRotationR(entity);  //車輪回転の状況を取得
    var y = -0.5427	// 回転軸(Y軸)
    var z1 = 1.05   // 前側車輪回転軸(Z軸)
    var z2 = -1.05  // 後側車輪回転軸(Z軸)


	//台車枠描画
	frame.render(renderer);

	//前側車輪描画
	GL11.glPushMatrix();
	renderer.rotate(r, 'X', 0, y, z1);
	wheel1.render(renderer);
	GL11.glPopMatrix();

	//後側車輪描画
	GL11.glPushMatrix();
	renderer.rotate(r, 'X', 0, y, z2);
	wheel2.render(renderer);
	GL11.glPopMatrix();

    GL11.glPopMatrix();
}