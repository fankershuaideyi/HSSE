function Dialog(title,content,path){
    this.$title=title
    this.$content=content
    this.$picutrepath=path;
    this._init()
}
Dialog.prototype={
    _init:function(){
        this.$body=document.getElementsByTagName('body')[0]; //获取body 元素  
        this.$bodyWidth=document.body.offsetWidth;//可见区宽度 get index
        this.$bodyHeight=document.documentElement.clientHeight || document.body.clientHeight;//可见区高度
        this.show()
    },
    show:function(){
        this.createMask()
        this.createDialog()
        // alert(this.$text)
    },
    createMask(){
        //创建蒙版
        var self=this;
        var div=document.createElement("id_wyc_mask"); //创建元素节点直接写元素名
        div.style.width=(this.$bodyWidth)+"px";
        div.style.height=(this.$bodyHeight)+"px";
        div.style.position='absolute'
        div.style.top=0
        div.style.left=0
        div.style.backgroundColor='#000000'
        div.style.zIndex=0
        div.style.filter='Alpha(Opacity=30)'
        div.style.opacity=0.3
        this.$body.appendChild(div);
        self.mask=div
    },
    createDialog(width,height){

        var self=this;

        if(width==null) width=500
        if(height==null) height=500
        var bg=document.createElement("id_wyc_dialog_bg")
        bg.style.position='absolute'
        bg.zIndex=99
        if(this.$bodyWidth < 640){
            //移动端
            bg.style.width='70%'
            bg.style.minHeight=height/1.2+'px'
            bg.style.top=(this.$bodyHeight-(height/1.2))/2+'px'
            bg.style.left='15%'
        }
        if(this.$bodyWidth >= 640){
            //PC端
            //宽高
            bg.style.width=width+'px'
            bg.style.minHeight=height+'px'
            //居中
            bg.style.top=(this.$bodyHeight-height)/2+'px'
            bg.style.left=(this.$bodyWidth-width)/2+'px'

            //
        }
        bg.style.textAlign='center'
        bg.style.background='linear-gradient(141deg,#2cb5e8 0%,#1fc8db 51%,#2cb5e8 75%)'
        bg.style.borderRadius='10px'
        bg.style.zIndex="999"
        var ico=new Image()
        ico.style.width='256px'
        ico.src='img/'+this.$picutrepath+'.jpg';
        ico.style.margin='0 auto'
        ico.style.marginTop=height/16+'px'
        if (self.mask==null) {
            bg.style.boxShadow='10px 10px 20px 10px rgba(192,192,192,0.5), -10px 10px 10px 10px rgba(192,192,192,0.5)'
        }else{
            bg.style.boxShadow='0px 0px 5px 5px rgba(128,128,128,0.5), -10px 10px 10px 10px rgba(128,128,128,0.5)'
        }

        bg.appendChild(ico)


        //Title
        var title = document.createElement("p");
        title.appendChild(document.createTextNode(this.$title));
        bg.appendChild(title);
        title.id='id_wyc_dialog_title'
        title.style.color='white'
        title.style.fontWeight='bold'
        title.style.width='90%'
        title.style.fontSize='30px'
        title.style.marginLeft='5%'
        //hidden
        title.style.overflow='hidden'
        title.style.textOverflow='ellipsis'
        title.style.whiteSpace='nowrap'
        //Content
        var content = document.createElement("p");
        content.appendChild(document.createTextNode(this.$content));
        bg.appendChild(content);
        content.id='id_wyc_dialog_content'
        content.style.color='#F5F5F5'
        // content.style.fontWeight='bold'
        content.style.width='80%'
        content.style.marginLeft='10%'
        content.style.fontStyle='italic'
        //超出省略
        // content.style.overflow='hidden'
        // content.style.textOverflow='ellipsis'
        // content.style.whiteSpace='nowrap'
        content.style.fontSize='14px'
        content.style.marginBottom=height/10+'px'
        //turn button
        var btturn =document.createElement("button");//createElement生成button对象
        var btreturn =document.createElement("button");
        setbutton(btreturn);
        setbutton(btturn);
        btturn.style.width='40%'
        btturn.innerHTML = 'Learn more'
        btreturn.style.width='40%'
        btreturn.innerHTML = 'turn back'
        self.bg=bg

        var Ht =this.$picutrepath +'.html';
        btturn.onclick = function(){
            //销毁蒙版
            if (self.mask != null) {
                self.mask.style.display='none'
                self.mask.parentNode.removeChild(self.mask);
            }
            console.log(Ht);
            if(Ht ==="CAFA.html" || Ht === "Peking.html"){
                alert("It hadn't finished it,please choose others and keep forwarding")
            }else {
            window.location.href=Ht; }
            self.bg.parentNode.removeChild(self.bg);
        }

        btreturn.onclick = function (){
            if (self.mask != null) {
                self.mask.style.display='none'
                self.mask.parentNode.removeChild(self.mask);
            }
            self.bg.parentNode.removeChild(self.bg);
        }
        //back button
        bg.appendChild(btturn);
        bg.appendChild(btreturn);
        //鼠标进入事件 button to function
        btturn.onmouseover = function () {
            // bt.style.background='linear-gradient(141deg,#F0F8FF 0%,#191970 51%,#808080 75%)'
            bt.style.background='linear-gradient(141deg,#40E0D0 30%,#00FFF 30%,#40E0D0 30%)'
        };
        //鼠标离开事件 button to function
        btturn.onmouseout = function () {
            // bt.style.background='linear-gradient(141deg,#2F4F4F 0%,#808080 51%,#191970 75%)'
            bt.style.background='linear-gradient(141deg,#40E0D0 0%,#00FFF 51%,#40E0D0 75%)'
        };
        this.enter(bg)
        this.$body.appendChild(bg);

        function setbutton(bt){
            bt.id='id_wyc_dialog_content'
            bt.style.height=height/9+'px'
            bt.style.margin='2.5%'
            bt.style.marginBottom=height/10+'px'
            bt.style.background='linear-gradient(141deg,#40E0D0 0%,#00FFFF 51%,#40E0D0 75%)'
            bt.style.border='none'
            bt.style.borderRadius='10px'
            bt.style.fontSize='14px'
            bt.style.fontWeight='bold'
            bt.style.color='#FFFFF0'
            bt.style.transition='all 1s;'
        }
    },
    enter(el, done) { // animation
        // js创建@keyframes，ball从定位在(10,10)的位置运动到(100,100) 的位置
        const runkeyframes =`@keyframes ball-run{
            0%{
                top: 10px;
            }
            60%{
                top: `+(parseInt(el.style.top.replace("px",""))+50)+`px;
            }
            100%{
                top: `+el.style.top+`;
            }
        }`
        // console.log(el.style.top)
        // console.log(el.style.top.replace("px","")+100)
        // 创建style标签
        const style = document.createElement('style');
        // 设置style属性
        style.type = 'text/css';
        // 将 keyframes样式写入style内
        style.innerHTML = runkeyframes;
        // 将style样式存放到head标签
        document.getElementsByTagName('head')[0].appendChild(style);
        el.style.animation='ball-run 1s 1';
        // el.style.width='20px'
    }
}

window.onload=function(){
    var story = document.getElementById('help');
    var s = document.getElementById('show');
    var i = 0;
    timer=setInterval(function(){
        s.innerHTML=story.innerHTML.substring(0,i);
        i++;
        if(s.innerHTML===story.innerHTML){
            clearInterval(timer);
        }
    },30);
}