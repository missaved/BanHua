

"ui";

var color = "#33CCFF";

ui.layout(
    <drawer id="drawer">
        <vertical padding="16">
            <appbar>
                <toolbar bg="#FF5c50e6" id="toolbar" title="二合一选项" paddingTop="4dp" h="auto">
                </toolbar>
                <text text="" gravity="center" />
            </appbar>
            <vertical>
                <Switch id="autoService" textColor="red" text="无障碍服务(必须开启)" checked="{{auto.service != null}}" textColor="red" padding="8 8 8 8" textSize="25sp" />
            </vertical>

            <text textSize="16sp" text="请根据实际情况进行设置" gravity="center" />
            {/* <tabs id="tabs" /> */}
            <horizontal>

                <text textColor="blue" textSize="16sp">循环方式</text>
                <spinner id="sp1" entries="1|2|3|4|5|Mocha|分身本体" spinnerMode="dialog" />
                <text textColor="blue" textSize="16sp">IP 类型</text>
                <spinner id="sp2" entries="飞行|VPN" spinnerMode="dialog" />
                <tabs id="tabs" />

            </horizontal>

            {/* <tabs id="tabs" /> */}
            <horizontal>

                <text textColor="blue" textSize="16sp">任务类型</text>
                <spinner id="sp3" entries="注册+消息|注册|消息|" spinnerMode="dialog" />
                <text textColor="blue" textSize="16sp">短信类型</text>
                <spinner id="sp4" entries="营销短信|短信OTP" spinnerMode="dialog" />

            </horizontal>

            <horizontal>

                <text textColor="blue" textSize="16sp">发消息数量</text>
                <spinner id="sp5" entries="30|40|50|60|70|80" spinnerMode="dialog" />
                <text textColor="red" textSize="16sp">封号动作</text>
                <spinner id="sp6" entries="停止|退号|跳号" spinnerMode="dialog" />
            </horizontal>
            <tabs id="tabs" />
            <button id="ok">确定</button>
            {/* <tabs id="tabs" /> */}


            <appbar>
                <button id="select3">结束程序</button>
            </appbar>
            <tabs id="tabs" />

            <appbar>
                <button id="select4">调试模式</button>
            </appbar>
            <tabs id="tabs" />


        </vertical>
    </drawer>
);



ui.autoService.on("check", function (checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.ok.on("click", () => {
    var i = ui.sp1.getSelectedItemPosition();
    var j = ui.sp2.getSelectedItemPosition();
    var k = ui.sp3.getSelectedItemPosition();
    var l = ui.sp4.getSelectedItemPosition();
    var m = ui.sp5.getSelectedItemPosition();
    var n = ui.sp6.getSelectedItemPosition();
    debug = false

    // toastLog("发送次数为： " + (i + 1) + " 飞行模式切换为： " + (j + 1) + " 待定参数为： " + k + 1);

    sex1 = i + 1;

    sex2 = j;

    sex3 = k;

    sex4 = l;

    sex5 = m + 3

    sex6 = n

    times = sex5 * 10;




    main();


});


ui.select3.on("click", () => {

    toastLog("nothing to do .end myself")

    ui.finish();
    toastLog("程序正式终止")
});


ui.select4.on("click", () => {
    debug = true
    sex1 = 1
    sex2 = 1
    sex3 = 1
    sex4 = 1
    toastLog("调试模式，请注意！！！！")

    main()

    toastLog("程序正式终止")
    // ui.finish();
});



// app1()


function main() {

    threads.start(function () {

        home()

        uid = "1603073644", pid = "12", key = "LaTa7U8jP1", sign = getMd5(key), ip = "baidu.com"

        debug = false

        if (debug) {

            for (var s = 1; s < 3; s++) {
                toastLog("调试模式。确认一下")
                // sleep(1500)
            }

        }




        toastLog("START Check account");
        // 主程序逻辑



        num = sex1

        appname = ""

        while (true) {

            let z = 1

            for (var z = 1; z < sex1 + 1; z++) {

                sleep(5000);


                if (sex2 == "0") {

                    toastLog("选择了飞行模式")

                    fly()

                }

                else {

                    toastLog("VPN 模式！！！")
                    fix_vpn()
                    ip_check()
                }

                toastLog('这是一个查号补号的程序。请确认下')

                if (sex3 == 0 | sex3 == 1) {
                    login()
                }


                if (sex1 == 1) {
                    appname = "mm1"
                }
                else {

                    if (sex1 == 6) {

                        appname = "Mocha"
                        sleep(3000)
                        // toastLog("Mocha 单账号模式")

                    }
                    else {

                        if (sex1 != 7) {
                            appname = "mm" + z
                            // appname = "mm1"
                        }
                        else {

                            if (appname == "mm1") {
                                appname = "Mocha"
                            }
                            else {
                                appname = "mm1"
                            }
                        }
                    }

                }

                toastLog("切换为：" + appname)

                // exit()

                var app_name = getPackageName(appname);

                if (app_name == null) {

                    toastLog("应用未找到或已经无法启动！。终止！！")

                } else {

                    toastLog("ready start:   " + appname)

                    launchApp(appname)

                    sleep(5000)

                }

                while (true) {

                    var find = text("正在启动虚拟机").findOne(1000)
                    if (find != null) {

                        toastLog("等等等…………")
                        sleep(5000)

                    }
                    else {
                        break
                    }


                }




                if (app_status()) {

                    if (sex3 == 2) {

                        toastLog("不注册，直接跳号，检查下一个！")


                    }
                    else {

                        while (true) {

                            if (reg_status) {

                                break
                            }

                            contry_code()

                            while (true) {

                                if (reg_status) {

                                    break
                                }


                                getphone()

                                if (debug) {

                                    // setreal()

                                }

                                contry_code()

                                // toastLog("填入号码为： " + phone)

                                close_ad()

                                reg_check()

                                setText(phone)

                                sleep(1500)

                                if (sex2 == 1) {

                                    ip_check()

                                }
                                var find = id("btnContinue").clickable(true).findOne(500)

                                if (find != null) {

                                    toastLog("Nice，下一步验证码获取")

                                    sleep(1500)

                                    close_ad()

                                    find.click()

                                    sleep(2000)

                                    close_ad()

                                    while (true) {
                                        var find_processing = text("Processing").findOne(500)
                                        if (find_processing != null) {
                                            sleep(3000)
                                            toastLog("等等等……")
                                        }
                                        else {
                                            break
                                        }
                                    }


                                    if (ban()) {
                                        toastLog("号码不能用。换下个号")
                                        break
                                    }
                                    else {
                                        toastLog("等待验证码")
                                        // break
                                    }
                                }

                                sleep(1500)

                                while (true) {

                                    close_ad()

                                    var find = id("etOtp").findOne(1500)

                                    if (find != null) {
                                        find.click()
                                        sleep(1500)
                                        break
                                    }
                                    else {

                                        sleep(4000)
                                        toastLog("跑他妈哪里去了。应该输验证码了")

                                    }

                                }

                                if (sex2 == 1) {

                                    ip_check()

                                }

                                if (getsms()) {

                                    sleep(1500)

                                    close_ad()

                                    setText(sms)

                                    sleep(2500)

                                    name_type()

                                    reg_report()

                                    if (id("iv_notify").findOne(2000)) {

                                        sleep(1500)

                                        if (sex3 == 0) {

                                            dowork()

                                            reg_status = true

                                            break

                                        }
                                        else {

                                            live_test()

                                            sleep(1500)

                                            toastLog("注册完毕了")

                                            reg_status = true

                                            break
                                        }

                                    }
                                    else {

                                        sleep(1500)

                                        info()

                                        sleep(1500)

                                        if (sex3 == 0) {

                                            dowork()

                                            reg_status = true

                                            break
                                        }
                                        else {

                                            live_test()

                                            sleep(1500)

                                            toastLog("注册完毕了")

                                            reg_status = true

                                            break
                                        }

                                    }


                                }
                                else {
                                    toastLog("短信超时。换号重新注册")

                                    id("ivBack").findOne().click()

                                    sleep(1500)
                                    break
                                }



                            }


                        }
                    }

                }
                else {

                    if (sex3 == 0 | sex3 == 2) {

                        dowork()
                    }
                    else {
                        toastLog("不干活。直接走了")
                        sleep(1500)

                    }

                    sleep(1500)

                    toastLog("继续做！！")


                }

                sleep(1000)

                close_app()

                back()

            }

        }


        function reg_check() {

            while (true) {

                var find = id("etNumber").findOne(1500)
                if (find != null) {

                    return true
                }
                else {
                    toastLog("AD")

                    sleep(1500)

                    close_app()

                    sleep(1500)

                    launchApp(appname)

                    for (var i = 1; i < 10; i++) {
                        toastLog("修复进程！ 勿动")
                    }

                    for (var t = 1; t < 3; t++) {

                        var find = text("正在启动虚拟机").findOne(1000)

                        if (find != null) {
                            toastLog("等等等…………")
                            sleep(5000)

                        }

                    }

                    contry_code()

                    break
                }

            }

        }


        function close_ad() {

            var find = id("closeBt").findOne(500)
            if (find != null) {
                find.click()
                sleep(1500)
            } else {
                // toastLog("no AD")
            }

        }



        function waitForNetworking(sleepTime) {
            var n = 1
            while (true) {

                sleep(sleepTime);  //等待缓冲时间
                try {
                    if (http.get(ip).statusCode == 200) {
                        // toastLog("networking is good")
                        break;
                    };
                } catch (err) {
                    // log("报错信息-->>  " + err);
                    toastLog("网络异常了" + n + "次，2秒后尝试！")
                    sleep(1500)
                    n++
                };

                if (n > 10) {
                    toastLog("10次网络故障。需要修复")
                    var n = 1
                    fix_net()
                }
            };
        };

        function fix_net() {

            toastLog("修复网络！！")
            sleep(3000)
            if (sex2 == 0) {

                fly()
            }
            else {
                fix_vpn()
            }

            toastLog("修复完毕")
        }

        function vpnset() {
            app.startActivity({
                action: "android.intent.action.VIEW", //此处可为其他值
                packageName: "com.android.settings",
                className: "com.android.settings.Settings$VpnSettingsActivity"
                //此处可以加入其他内容，如data、extras
            });
        }

        function fix_vpn() {

            vpnset()

            sleep(3500)

            var find0 = text("已连接").findOne(1500)

            if (find0 != null) {

                if (find0 != null) {
                    toastLog("断开连接！重现连接一次")
                    click(find0.bounds().centerX(), find0.bounds().centerY())
                    sleep(1500)
                    while (!click("断开连接"));
                    toastLog("准备断开重连一次")
                    sleep(2500)
                }

            }


            var find = id("icon").findOne(1500)
            if (find != null) {
                click(find.bounds().centerX(), find.bounds().centerY())
                sleep(1500)
                toastLog("准备连接")
                while (!click("连接"));
            }


            while (true) {
                sleep(3000)

                var find = text("已连接").findOne(1500)

                if (find != null) {
                    toastLog("连接成功！！！")
                    break
                }

                var find = text("失败").findOne(1500)

                if (find != null) {
                    click(find.bounds().centerX(), find.bounds().centerY())
                    sleep(5000)
                    toastLog("尝试连接")
                    while (!click("连接"));
                }

            }
            sleep(1000)

            back()

        }

        function fly() {

            toastLog("飞一次。也不远，一会就回来啦")
            var intent = new Intent(); // vpnIntent.setAction("android.net.vpn.SETTINGS"); 
            intent.setAction("android.settings.AIRPLANE_MODE_SETTINGS");
            app.startActivity(intent);
            sleep(2500)
            while (true) {
                var air1 = text("飞行模式").findOne(1500)
                if (air1 != null) {
                    toastLog("飞出去")
                    click(air1.bounds().centerX(), air1.bounds().centerY())
                    break
                }

            }
            sleep(3000)
            while (true) {
                var air2 = text("飞行模式").findOne(1500)
                if (air2 != null) {
                    click(air2.bounds().centerX(), air2.bounds().centerY())
                    toastLog("飞回来")
                    break
                }
            }
            sleep(5000)
            back()

        }

        function ip_check() {

            toastLog("执行IP检测任务")
            var ip_check_time = 0
            var ip = "whois.pconline.com.cn"
            waitForNetworking(1000)
            while (true) {
                // var url = "http://whois.pconline.com.cn/ipJson.jsp?ip=" + local_ip + "&json=true"
                // var url = "http://whois.pconline.com.cn/ipJson.jsp"
                // var url="http://pv.sohu.com/cityjson"
                if (ip_check_time == 3) {
                    toastLog("IP检测有问题，可能断网。")
                    break
                }
                var url = "http://ip-api.com/json/?lang=en"

                var res = http.get(url)
                var r = res.body.json()
                // toastLog(r)
                if (r.status == "success") {
                    if (r.countryCode == "VN") {
                        toastLog(r.country)
                        return true
                    }
                    else {
                        sleep(1000)
                        toastLog("IP 现在是" + r.country + ",需要重连IP")
                        fix_vpn()
                    }
                }
                ip_check_time++
            }

        }


        function close_app() {


            openAppSetting(getPackageName(appname));

            sleep(3000)

            while (!click("强行停止"));

            sleep(1500)

            while (!click("确定"));

            sleep(2500)

            back()

        }


        function contry_code() {

            var find = id("llCountryCode").findOne(1000)
            var find1 = text("+84").findOne(1500)

            if (find1 == null) {

                // toastLog(find)

                if (find != null) {

                    click(find.bounds().centerX(), find.bounds().centerY())
                    sleep(2000)
                    setText("84")

                    var find = text("VietNam (+84)").findOne(2000)
                    if (find != null) {

                        click(find.bounds().centerX(), find.bounds().centerY())
                        sleep(1500)
                    }

                }
            }
        }


        function nowtime() {
            var time = new Date().getTime()
            return new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(time));
        }

        function reg_report() {

            var report_times = 1

            while (true) {

                if (report_times > 3) {
                    toastLog("3次记录失败,放弃记录！")
                    break
                }
                var url = "http://relayer.reachxun.com/api/create_mocha?mocha_phone=" + phone + "&create_time=" + nowtime()

                var res = http.get(url)

                var s_status = res.body.string()

                if (s_status == "success") {
                    toastLog("正常注册_记录成功！")
                    break
                }
                else {
                    toast("记录失败！！继续尝试")
                    sleep(2500)
                }
                report_times++

            }
        }


        function app_status() {

            while (true) {

                if (id("btnContinue").findOne(1500)) {
                    toastLog("账户有问题。")
                    reg_status = false
                    return true
                }

                else {
                    // toastLog("账户正常！！！")
                    break
                }

            }

        }

        function name_type() {

            while (true) {

                if (id("iv_notify").findOne(2000)) {

                    // toastLog("fuck!!")

                    break

                }
                else {

                    while (true) {
                        var find_processing = text("Processing").findOne(500)
                        if (find_processing != null) {
                            sleep(3000)
                            toastLog("等等等……")
                        }
                        else {
                            break
                        }
                    }

                    var find = id("tilUserName").findOne(1500)

                    if (find != null) {
                        // toastLog(find)
                        sleep(1500)

                        click(find.bounds().centerX(), find.bounds().centerY())

                        setText(getRndLetterNumber(true, 1, 2))

                        sleep(1500)

                        back()

                        sleep(1500)

                        var find = id("btnContinue").findOne(2200)
                        if (find != null) {
                            click(find.bounds().centerX(), find.bounds().centerY())
                            break
                        }

                    }
                    else {
                        toastLog("设置姓名了。 还没到这里？重新打开一次试试！")
                        sleep(500)
                        recents()
                        sleep(3000)
                        swipe(686, 1989, 826, 574, 1000)
                        sleep(1500)
                        click(1281, 678)
                        sleep(5000)
                        close_app()
                        launchApp(appname)

                        sleep(10000)
                        // break
                    }
                }
            }
        }



        function info() {


            var find = className("android.widget.TextView").text("Account information").findOne(1500)

            // var find = className("android.widget.FrameLayout").depth(8).findOne()

            if (find != null) {

                click(176, 381)
                sleep(1500)
                var time = random(-300, 300)

                swipe(241, 2274, 238, 1907 + time, 500)

                sleep(2000)

                swipe(711, 2274, 711, 1907 + time, 500)

                sleep(2000)

                swipe(1205, 2274, 1205, 1907 + time, 500)

                sleep(1500)

                id("btn_confirm").findOne().click()

                sex_choice()

            }

        }



        function sex_choice() {

            var choice = random(0, 1)

            // toastLog(choice)

            if (choice == 1) {
                // toastLog("nv")
                var find = text("Female").findOne(500)
                // toastLog(find)
                if (find != null) {

                    click(find.bounds().centerX(), find.bounds().centerY())
                }
                sleep(1500)

            }
            else {
                // toastLog("nan")
                var find = text("Male").findOne(500)
                // toastLog(find)
                if (find != null) {
                    click(find.bounds().centerX(), find.bounds().centerY())
                }
            }

            sleep(1500)

            id("btnContinue").findOne().click()

            sleep(3500)

            toastLog("注册最后一步完成，欢迎到达主页面")
        }


        function live_test() {

            if (sex4 == "0") {

                sleep(2000)

                var time = (random(1, 3)) * 1000
                toast(time)
                for (var i = 1; i < 5; i++) {
                    swipe(686, 1989, 826, 574, time)
                    sleep(time)
                    toastLog("随便做做样子啊")
                }
                // toastLog("做完样子就撤吧")
            }
            else {
                // toastLog("不养了。 直接下一个")
            }
        }


        function getRndLetterNumber(randomFlag, min, max) {
            var str = "",
                range = min,
                // arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                arr = ['lisa ', 'karolyn ', 'bruny ', 'veled ', 'nuri ', 'dila ', 'mowry', 'asalia', 'tomasina', 'herbener ', 'eure ', 'usery ', 'mvicary ', 'legge ', 'gertrude ', 'gise', 'giacomini', 'rgiacomini', 'slockey', 'wera', 'urothe', 'tenney', 'karolyn', 'landi', 'christa', 'figgz'];
            // 随机产生
            if (randomFlag) {
                range = Math.round(Math.random() * (max - min)) + min;
            }
            for (var i = 0; i < range; i++) {
                pos = Math.round(Math.random() * (arr.length - 1));
                str += arr[pos];
            }
            return str;
        };

        //--------------------------------------------------------------------------------------------------

        // 下面的为注册接码逻辑。 一般情况不更改




        function login() {

            var ip = "api.nwohsz.com"

            waitForNetworking(1500)

            while (true) {


                var url = "http://api.nwohsz.com:2086/registerApi/getUserInfo"

                var r = http.post(url, {
                    uid: uid,
                    time: "",
                    sign: sign,
                })
                var res = r.body.json()
                // toastLog(res)
                var res1 = res.data
                var res2 = res1.score
                var userinfo = res2[0]
                var user_gold = userinfo.gold

                toastLog("Code:  " + res.code + " |  username:  " + res1.userName + " |  user_gold:" + user_gold + " |  status:  " + res.msg)

                if (res.msg == "success") {
                    toastLog("登录成功")
                    if (user_gold < 5) {
                        toastLog("余额不足")
                        sleep(5000)
                    }
                    else {
                        return true
                        break
                    }
                }
                else {
                    toastLog("登录失败，请检查")
                    sleep(5000)
                }
            }
        }

        function getphone() {

            while (true) {

                var ip = "api.nwohsz.com"

                waitForNetworking(1000)

                var url = "http://api.nwohsz.com:2086/registerApi/getMobile"

                var r = http.post(url, {
                    uid: uid,
                    size: "1",
                    pid: pid,
                    sign: sign,
                    cuy: "VN",
                    include: "1"
                })

                var res = r.body.json()
                if (res.code == "-1") {

                    toastLog(res.msg)
                    sleep(5000)
                }
                else {
                    code = res.code
                    oid = res.orderId
                    var data = res.data
                    if (data != null) {
                        phone = (data[0])
                        toastLog("取号成功 " + phone + "|" + oid + "|" + res.code)
                        break
                    }

                }

            }
        }


        function getsms() {

            var ip = "api.nwohsz.com"

            waitForNetworking(1000)

            for (var i = 1; i < 41; i++) {



                var url = "http://api.nwohsz.com:2086/registerApi/getMsg"

                var r = http.post(url, {
                    uid: uid,
                    orderId: oid,
                    sign: sign
                })

                var res = r.body.json()
                if (res.data == null) {
                    toastLog(" Sms is Not Ready !  Get " + i + " Times.")
                    sleep(5000)
                    if (i == 40) {
                        // setreal()
                        toastLog("NO MSG ！！！")
                    }
                }
                else {
                    var data = res.data
                    var a = data[0]
                    sms = a.code
                    toastLog("SMS: " + sms)
                    return true

                }


            }
        }


        function end_myself() {

            recents()
            sleep(3500)
            toastLog("清理后台")
            while (true) {

                var find = text("全部清除").findOne(2000)
                if (find != null) {

                    click(find.bounds().centerX(), find.bounds().centerY())

                    alert("完成！！！！,尽可能重启机器。")

                    break
                }
                else {
                    swipe(698, 359, 797, 1961, 500)
                    sleep(2000)
                }
            }
        }


        function ban() {

            var find = text("Close").findOne(2500)
            // toastLog(find)
            if (find != null) {

                sleep(1500)

                click(find.bounds().centerX(), find.bounds().centerY())

                return true
            }
            else {
                return false
            }
        }

        function getMd5(string) {
            return java.math.BigInteger(1, java.security.MessageDigest.getInstance("MD5").digest(java.lang.String(string).getBytes())).toString(16);
        };



        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        function dowork() {

            toastLog("START SEND SMS")

            close_ad()

            times = sex5 * 10

            toastLog("总计发送" + times + "次")

            sleep(1000)

            ready()

            find_send_botton()

            var fail_times = 0

            app_logout = 0

            for (var a = 1; a < times + 1; a++) {

                s = 1

                while (true) {

                    close_ad()

                    if (logout_status()) {

                        times = 0

                        break
                    }

                    toastLog("尝试获取第" + a + "次任务")

                    if (get_misson()) {
                        if (debug) {
                            toastLog("发送号码是： " + send_number + "   发送的内容是： " + msg + "   任务编号是： " + msgid)
                        }
                        s = 1
                        break
                        // return true
                    }
                    else {

                        sleep(3500)
                        if (s == 5) {
                            sleep(5000);
                        }
                        if (s > 10) {
                            toastLog("长时间没有任务。自动降速运行！")
                            sleep(10000)
                        }
                    }

                    s++;

                    // toastLog(s);
                }

                toastLog("第" + a + "次")

                close_ad()

                if (logout_status()) {

                    break
                }
                else {

                    send_it()
                }

                if (app_logout == 1) {

                    break
                }
                else {
                    if (logout_status()) {

                        break
                    }
                    else {
                        dealy_send()
                    }

                    toastLog("第" + a + "次，发送完毕！")

                    if (restart_swich) {

                        fail_times++

                        toastLog(fail_times)

                        if (fail_times > 2) {
                            toastLog("尝试提高发送成功率！")
                            fail_times = 0
                            fix_app()
                        }

                    }
                }



            }
            // toastLog(currentPackage())


        }

        function runing_delay() {
            var runing = text("正在启动虚拟机").findOne(1000)
            for (var i = 1; i < 5; i++) {

                if (runing != null) {
                    toastLog("等待启动……")
                    sleep(5000)
                }

            }
        }


        function dealy_send() {

            var t_stop = 1 + random(-1, 1)

            for (var v = 1; v < t_stop + 1; v++) {
                sleep(1000)
            }

        }

        function ready() {


            while (true) {

                if (logout_status()) {
                    times = 0
                    break
                }

                if (id("iv_notify").findOne(3000)) {
                    return true
                }
                else {
                    toastLog("未在主页面！")
                    close_app()
                    sleep(2500)
                    launchApp(appname)
                    for (var t = 1; t < 20; t++) {
                        sleep(1000)
                        toastLog("restart app")
                    }

                }


            }


        }





        function find_send_botton() {

            if (ready()) {

                click(435, 2282);

                sleep(2000);

                if (id("ivMore").findOne(1000)) {


                    id("ivMore").click()
                }
                else (
                    toastLog("not find +")
                )

                sleep(2000)

                var findit = text("New messages").findOne(2000)

                if (findit != null) {

                    if (findit != null) {

                        click(findit.bounds().centerX(), findit.bounds().centerY())
                    }
                    else {
                        toastLog("not find it")

                    }

                }
            }
        }



        function send_it() {

            restart_swich = false

            while (true) {

                if (sex2 == 1) {

                    ip_check()

                }

                var to_ = text("To:").findOne(1500)

                if (to_ != null) {

                    click(to_.bounds().centerX(), to_.bounds().centerY())

                    var etscher = id("etSearch").findOne(1500)

                    if (etscher != null) {
                        click(etscher.bounds().centerX(), etscher.bounds().centerY())
                    }
                    sleep(1500)

                    setText("")

                    sleep(500)

                    setText(send_number)

                    sleep(500)

                    var findit = id("create_chat_header_chat_more_arrow_icon").findOne(1000)
                    if (findit != null) {
                        click(findit.bounds().centerX(), findit.bounds().centerY())
                        // console.log("点中号码发送");
                    }
                    break
                }
                else {

                    toastLog("修复进程中，请勿操作！！")

                    if (logout_status()) {

                        break
                    }
                    else {
                        sleep(3000);
                        fix_app();
                    }

                }
            }

            sleep(2000)

            var Processing_times = 0

            while (true) {

                if (Processing_times > 10) {
                    toastLog("卡死了！！")
                    app_logout = 1
                    break
                }
                var find_processing = text("Processing").findOne(500)
                if (find_processing != null) {
                    sleep(3000)
                    toastLog("等等等…………'")
                    Processing_times++
                }
                else {
                    break
                }
            }


            var to2 = text("To:").findOne(1000)

            if (to2 != null) {

                toastLog("号码有问题！，换下个号码")
                report(0, "接收号码有问题")

            }
            else {

                var findit = text("Type message").findOne(1000)

                if (findit != null) {

                    close_ad()

                    setText(msg)

                    sleep(500)
                }

                var find_1 = id("right_chat_bar").findOne(500)

                if (find_1 != null) {

                    press(find_1.bounds().centerX(), find_1.bounds().centerY(), 100)

                }

                sleep(6000)

                toastLog("Check Status")

                close_ad()

                var send_status = text("SMS Out").findOne(500)

                var send_status1 = text("Sent").findOne(500)

                var send_status2 = text("Delivered").findOne(500)

                var send_status3 = text("Free SMS").findOne(500)

                var send_status4 = text("Listen together").findOne(500)

                var ban_status = text("bị chặn").findOne(500)

                var ban_status1 = id("message_retry").findOne(500)

                // bị chặn sử dụng tính năng SMS OUT

                if (ban_status != null || ban_status1 != null) {

                    times = 0;
                    report(0, "封号。检查发送消息！")
                    if (sex6 == 1) {
                        logout()
                    }
                    if (sex6 == 2) {
                        times = 0
                    }
                    if (sex6 == 0) {
                        toastLog("STOP")
                        exit()
                    }

                }
                else {

                    if (send_status3 != null || send_status4 != null) {

                        if (send_status != null && send_status3 != null) {
                            report(1, "Free SMS + SMS OUT")
                        }
                        if (send_status1 != null && send_status3 != null) {
                            report(1, "Free SMS + Sent")
                            restart_swich = true
                        }
                        if (send_status4 != null && send_status1 != null) {
                            report(1, "Mocha user + Sent")
                        }
                        if (send_status4 != null && send_status != null) {
                            report(1, "Mocha user + SMS OUT")
                        }
                        if (send_status4 != null && send_status2 != null) {
                            report(1, "Mocha user + Delivered")
                        }
                    }
                    else {
                        report(0, "Mocha无反馈")
                    }
                }


                // id("ab_back_layout").findOne().click();

                back()

                // sleep(1000);
                close_ad()
            }

        }


        function fix_app() {

            close_app()

            launchApp(appname)

            for (var t = 1; t < 15; t++) {
                sleep(1000)
                toastLog("修复进程中，切勿操作！")
            }


            runing_delay()

            find_send_botton()

        }



        function get_misson() {

            var ip = "baidu.com"

            waitForNetworking(1000)

            var url = "http://relayer.reachxun.com/api/getVtSms?sms_type=" + sex4 + "&appkey=reachone"

            var res_get = http.get(url)

            var res = res_get.body.json()

            var misson = res.code

            if (misson == 1) {
                return false
            }
            else {

                send_number = res.phone
                msg = res.content
                msgid = res.message
                return true
            }

        }


        function report(status, result) {

            var report_time = 1

            while (true) {

                if (report_time > 3) {

                    toastLog("3次回执状态失败，放弃！")

                    break

                }

                var ip = "baidu.com"

                waitForNetworking(1000)

                var url = "http://relayer.reachxun.com/api/vtSmsDr?messageid=" + msgid + "&status=" + status + "&send_result=" + result

                var res = http.get(url)

                var s_status = res.body.string()

                if (s_status == "success") {

                    // toastLog("回执成功！")

                    break

                }
                else {
                    toastLog("回执失败,继续尝试！！！")

                    sleep(2500)
                }
                report_time++
            }
        }




        function logout_status() {

            while (true) {

                if (id("btnContinue").findOne(500)) {
                    toastLog("Ban！！！")
                    // reg_status = false
                    return true
                }
                else {
                    // toastLog("账户正常！！！")
                    break
                }

            }

        }


        function logout() {

            while (true) {
                var find = text("Recent contacts").findOne(1500)

                if (find != null) {
                    click(132, 2299)

                    sleep(1000)

                    id("iv_menu").findOne().click()

                    sleep(1500)

                    while (!click("Account and security"));

                    sleep(1500)

                    while (!click("Log out"));

                    sleep(500)

                    var find = id("btnRight").findOne(2000)

                    find.click()

                    toastLog("see you later!")
                    break
                }
                back()
                sleep(1500)
            }
        }


    })
}


