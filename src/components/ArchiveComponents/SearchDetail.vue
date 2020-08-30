<template>
    <div>
      <Card dis-hover v-for="(item,index) in highlighted" :key="index">
        <p slot="title" v-html="item.title"></p>
        <a href="#" slot="extra"> 查看原文 </a>
        <p v-html="item.description"></p>
      </Card>
    </div>
</template>

<script>
export default {
    name: 'SearchDetail',
    props:['resultMap','data'],
    computed:{
        uniqueMap(){
            //title和description去重，如果是同一篇的metadata则放在一起显示
            // p 段落即使是同一篇的也单独显示，同时要显示一下title表示是哪一篇文章的
            let map = this.resultMap,
                pre = [], current = [],
                unique = [],
                index=0;
            while(index<map.length){
                current = map[index];
                current = [current.i, current.m, current.n, current.index];
                if(current[0]!=pre[0] || current[1]!=pre[1] || current[2]!=pre[2]){
                    unique.push(current);
                }
                
                pre = current;
                index++;
            }

            return unique;
        },
        dataMap(){
            let map = this.uniqueMap,
                Data = this.data,
                DataMap = [],
                i = 0, m = 0, n = 0;
            map.forEach((item)=>{
                console.log(item);
                i = item[0]; m = item[1]; n = item[2];
                console.log(i,m,n);
                let that = Data[i][m];
                if(n<0){
                    DataMap.push({title:that.title, description:that.description});
                }else{
                    DataMap.push({title:that.title, description:that.content[n]});
                }
            });
            console.log(DataMap);
            return DataMap;
        },
        highlighted(){
            let map = this.dataMap,
                input = this.$store.state.inputVal,
                length = input.length,
                regExp = new RegExp(input,"i"),
                highlightdata = []; 

                highlightdata = map.map((item)=>{

                    console.log(item);
                    let subString = "", startIndex = 0, endIndex = 0,
                        replaceString = ""; //高亮替换

                    if(item.title.match(regExp)!=null){
                        console.log('title有内容');
                        startIndex = item.title.match(regExp).index;
                        endIndex = startIndex + length;

                        subString = item.title.substring(startIndex,endIndex);
                        replaceString = '<span class="highlight">' + subString + '</span>';

                        item.title = item.title.replace(regExp,replaceString);
                    }
                    if(item.description.match(regExp)!=null){
                        console.log('d有内容');
                        startIndex = item.description.match(regExp).index;
                        endIndex = startIndex + length;

                        subString = item.description.substring(startIndex,endIndex);
                        replaceString = '<span class="highlight">' + subString + '</span>';

                        item.description = item.description.replace(regExp,replaceString);
                    }
                    return item;
                });

                return highlightdata;
        }
    }
}
</script>

<style scoped>
.ivu-card>>> .highlight{
    color: #CD5B45; background-color: #E6E6FA;
}
.ivu-card{
    margin: 15px 0 15px;
    text-align: left;
}
.ivu-card>>> .ivu-card-head{
    padding: 6px 16px 6px;
    background-color: #FFF5EE;
}
.ivu-card>>> .ivu-card-extra{
    top: 6px;
}
  .ivu-card>>> a{
      color: #4F94CD;
  }
</style>