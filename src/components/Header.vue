<template>
    <header>
        <b-navbar toggleable="lg" class="navbarTop" sticky>
            <div id="divHeader">
                <div id="divNavbarItemsHeader">
                    <div id="divNavbarBrand">
                        <b-navbar-brand>
                            <router-link to="/">
                                <b-img id="iconHomeHeaderHome"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/home_icon_48px.png"
                                       height="24" width="24" alt="Home icon">
                                </b-img>
                            </router-link>
                        </b-navbar-brand>
                    </div>
                    <div id="divLogoSpacHeader">
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/logo_nav_header_100px.png" height="33" width="100" alt="spac logo navigation header"></b-img>
                    </div>
                    <Dropdown/>
                </div>
            </div>
        </b-navbar>
    </header>
</template>

<script>
    import Dropdown from "@/components/Dropdown";
    export default {
        name: "Header",
        components: {Dropdown}
    }
</script>

<style scoped>
    .navbarTop {
        padding: 24px !important;
        width: 100% !important;
    }

    #divHeader {
        width: 100%;
    }

    #divNavbarItemsHeader {
        width: inherit !important;
        justify-content: space-between !important;
        display: flex;
    }

    #divNavbarBrand {
        align-self: auto;
    }

    #divLogoSpacHeader {
        align-self: center;
    }

    #divDropdownHeader {
        align-self: center;
    }

    #iconHomeHeaderHome {
        margin-top: -3px;
        margin-left: -3px;
    }

    #iconHomeHeaderHome:hover {
        transform: scale(1.12) !important;
    }
</style>