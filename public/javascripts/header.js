/**
 * Created by HP on 2018/8/6.
 */

Vue.component("v-header",{
    template:'<header><a href="" class="logo"></a> <span class="down">下载酷狗</span> <a href="../search.html" class="search"></a> </header>'
});

Vue.component("v-main",{

    data:function(){
        return {
            listData:[{url:"/",txt:"新歌"},
                {url:"/rank.html",txt:"排行"},
                {url:"/mlist.html",txt:"歌单"},
                {url:"/singer.html",txt:"歌手"}
            ],
        urls:location.pathname
        }
    },
    template:'<main><ul><li v-for="li in listData"><a :href="li.url==urls?\'javascript:;\':li.url" :class="{cur:li.url==urls}">{{li.txt}}</a></li></ul></main>'
});
new Vue({
    el:"#header_top"

});