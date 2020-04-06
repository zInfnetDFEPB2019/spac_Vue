<template>
    <footer>
        <b-navbar toggleable="lg" class="navbarFooter" fixed="bottom">
            <b-navbar-brand>
                <router-link to="NotFound">
                    <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/developer_icon_48px.png"
                           height="24" width="24" alt="Developer icon"/>
                </router-link>
            </b-navbar-brand>
            <a class="routerLinkColor" id="devCopyright" href="https://github.com/christianvajgel">
                Developed by Christian Vajgel
            </a>

            <b-navbar-nav class="ml-auto">
                <b-nav>
                    <b-nav-item>
                        <a href="https://www.linkedin.com/in/christianvajgel/">
                            <b-img class="iconFooter iconHover"
                                   src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/linkedin_logo_48px.png"
                                   height="24" width="24" alt="spac brand logo"/>
                        </a>
                    </b-nav-item>
                    <b-nav-item>
                        <a href="https://github.com/InfnetDFEPB2019/spaC_Vue">
                            <b-img class="iconFooter iconHover"
                                   src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/github_icon_48px.png"
                                   height="24" width="24" alt="spac brand logo"/>
                        </a>
                    </b-nav-item>
                    <b-nav-item>
                        <a href="https://t.me/vajgel">
                            <b-img class="iconHover"
                                   src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/telegram_icon_48px.png"
                                   height="24" width="24" alt="spac brand logo"/>
                        </a>
                    </b-nav-item>
                </b-nav>
            </b-navbar-nav>
        </b-navbar>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style>

    .navbarFooter {
        margin-bottom: -5px !important;
        padding: 24px !important;
    }

    #devCopyright {
        opacity: 0.25;margin-top: 5px;
    }

    .iconFooter {
        margin-right: -25px !important;
    }

    .iconHover:hover {
        transform: scale(1.12) !important;
    }

    .routerLinkColor {
        color: #E2E2E2 !important;
        font-weight: lighter;
    }

</style>