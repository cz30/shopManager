<template>
    <el-container class="home-container">
        <!--        头部-->
        <el-header>
            <div>
                <img src="../assets/top.png" alt="">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!--        主体-->
        <el-container>
            <!--            左边侧边栏-->
            <el-aside width="200px">
                <!--                侧边栏菜单-->
                <el-menu
                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#409EFF">
                    <!--                    一级菜单-->
                    <el-submenu :index="item.id +''" v-for="item in menulist" :key="item.id">
                        <!--                        一级菜单模板-->
                        <template slot="title">
                            <!--                            图标-->
                            <i class="el-icon-location"></i>
                            <!--                            文本-->
                            <span>{{item.authName}}</span>
                        </template>
                        <!--                        二次菜单-->
                        <el-menu-item :index="subItem.id+''" v-for="subItem in item.children" :key="subItem.id">
                            <template slot="title">
                                <!--                            图标2-->
                                <i class="el-icon-menu"></i>
                                <!--                            文本-->
                                <span>{{subItem.authName}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <!--            右边内容-->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data(){
            return{
                menulist:[]
            }
        },
        created() {
            this.getMenuList()
        },
        methods: {
            logout() {
                // 清除token
                window.sessionStorage.clear();
                // 跳转页面
                this.$router.push("/login");
            },
            async getMenuList(){
                const {data:res}= await this.$http.get('menus')
                if (res.meta.status !==200) return  this.$message.error(res.meta.msg)
                this.menulist=res.data
                console.log(res);
            }
        }
    };
</script>

<style lang="less" scoped>
    .home-container {
        height: 100%;
    }

    .el-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;

        > div {
            display: flex;
            align-items: center;

            span {
                margin-left: 15px;
            }
        }
    }

    .el-aside {
        background-color: #333744;
    }

    .el-main {
        background-color: #eaedf1;
    }
</style>