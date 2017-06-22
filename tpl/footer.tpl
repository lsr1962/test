</ol>
</div>
<script type="text/javascript" src="./js/global.js"></script>
<script type="text/javascript">
    //微信分享
    setShareConfig(
        //朋友圈标题
        '微信支付|接入指南--' + document.title,
        //好友消息标题
        '微信支付|接入指南--' + document.title,
        //分享出去的描述
        '为您提供各平台微信支付接入流程指引',
        //分享的图标链接
        '//wx.gtimg.com/static/merchant/img/shareico/wepay.702e4529.png',
        //分享到朋友圈的链接
        location.href,
        //发送给好友消息的链接
        location.href,
        //分享到朋友圈点击流
        function(){
            pgvSendClick({hottag:"wxzf.merchant.guide_publicaccount.timeline"})
        },
        //分享给好友点击流
        function(){
            pgvSendClick({hottag:"wxzf.merchant.guide_publicaccount.appmessage"})
        }
    );
</script>
</body>
</html>
