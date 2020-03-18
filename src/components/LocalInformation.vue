<template>
    <div>
        <div id="divContentHolderCometSearch">
            <Header/>
            <section>
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/local_information.png"
                               height="75" width="75" alt="local information icon section"></b-img>
                        <p class="titleSection">LOCAL INFORMATION</p>
                    </b-row>
                </div>

                <div>
                    <b-form-row id="formInputCometSearch">
                        <b-col cols="3">
                            <b-form-group label-cols="4" label-cols-lg="2" label-size="sm"
                                             id="firstDate"
                                             label="Start:"
                                             label-for="input_firstDate">
                            <b-form-datepicker id="input_firstDate"
                                               v-model="value"
                                               class="mb-2"
                                               size="sm"></b-form-datepicker>
                        </b-form-group>
                        </b-col>
                        <b-col cols="3">
                            <b-form-group label-cols="4" label-cols-lg="2" label-size="sm"
                                          id="secondDate"
                                          label="End:"
                                          label-for="input_secondDate">
                                <b-form-datepicker id="input_secondDate"
                                                   v-model="value"
                                                   class="mb-2"
                                                   size="sm"></b-form-datepicker>
                            </b-form-group>
                        </b-col>
                        <b-col cols="1">
                            <b-button type="submit"
                                      class="buttonCometSearch"
                                      variant="dark"><b-img id="buttonSubmitCometSearch"
                                                            src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/magnifier_icon_24px.png"
                                                            width="18" height="18" alt="magnifier icon for search comet button"></b-img></b-button>
                        </b-col>
                    </b-form-row>
                </div>

                <div class="container" id="divContainerTableCometSearch">
                    <b-table sticky-header=true id="tableCometSearchSummarized" borderless hover :items="items" :fields="fields" dark="true" responsive=true>
<!--                        <thead>-->
<!--                            <tr> {{ fields.key[0] }} </tr>-->
<!--                            <tr> {{ fields.key[1] }} </tr>-->
<!--                            <tr> {{ fields.key[2] }} </tr>-->
<!--                            <tr> {{ fields.key[3] }} </tr>-->
<!--                        </thead>-->
<!--                        <tbody>-->
<!--                            <tr>{{ items.id }}</tr>-->
<!--                            <tr>{{ items.name }}</tr>-->
<!--                            <tr>{{ items.absolute_magnitude }}</tr>-->
<!--                            <tr>{{ items.close_approach }}</tr>-->
<!--                        </tbody>-->
                    </b-table>
                </div>

            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    export default {
        name: "CometSearch",
        components: {Footer, Header},
        data() {
            return {
                fields: [
                    {key:'ID',sortable: true},
                    {key:'name',sortable: true},
                    {key:'absolute_magnitude',sortable: true},
                    {key:'close_approach',sortable: true},
                ],
                items: [
                        {ID:3922358,name:'2019 XG3',absolute_magnitude:'18.8',close_approach:'2020-Mar-17 - 00:03'},
                        {ID:3770141,name:'2017 DR37',absolute_magnitude:'21.9',close_approach:'2020-Mar-17 - 19:10'},
                        {ID:3117460,name:'2002 FT5',absolute_magnitude:'21.9',close_approach:'2020-Mar-17 - 16:15'},
                        {ID:3445082,name:'2009 BL71',absolute_magnitude:'22.1',close_approach:'2020-Mar-17 - 17:28'},
                        {ID:3838903,name:'2019 EE1',absolute_magnitude:'26.1',close_approach:'2020-Mar-17 - 01:10'},
                        {ID:2528807,name:'528807 2009 BL71',absolute_magnitude:'22.1',close_approach:'2020-Mar-17 - 17:28'},
                        {ID:3873310,name:'2019 SN10',absolute_magnitude:'21',close_approach:'2020-Mar-17 - 23:10'},
                        {ID:54016190,name:'2020 ET',absolute_magnitude:'25.756',close_approach:'2020-Mar-17 - 12:38'},
                        {ID:3177237,name:'2004 FY31',absolute_magnitude:'21.9',close_approach:'2020-Mar-18 - 20:46'},
                        {ID:2373428,name:'373428 1999 TC5',absolute_magnitude:'18.5',close_approach:'2020-Mar-18 - 03:43'},
                        {ID:3656929,name:'2014 BG25',absolute_magnitude:'25.3',close_approach:'2020-Mar-18 - 07:37'},
                        {ID:3736776,name:'2015 XW377',absolute_magnitude:'21.2',close_approach:'2020-Mar-18 - 07:48'},
                        {ID:3591884,name:'2011 YT62',absolute_magnitude:'22.4',close_approach:'2020-Mar-18 - 01:39'},
                        {ID:3712947,name:'2015 EQ',absolute_magnitude:'26.1',close_approach:'2020-Mar-18 - 03:00'},
                        {ID:3251513,name:'2004 RY10',absolute_magnitude:'21.1',close_approach:'2020-Mar-19 - 22:22'},
                        {ID:3562834,name:'2011 GD60',absolute_magnitude:'21.7',close_approach:'2020-Mar-19 - 03:09'},
                        {ID:3601669,name:'2012 FP35',absolute_magnitude:'27.9',close_approach:'2020-Mar-19 - 20:27'},
                        {ID:3774362,name:'2017 HC49',absolute_magnitude:'22.3',close_approach:'2020-Mar-19 - 02:48'},
                        {ID:54013540,name:'2020 EF',absolute_magnitude:'26.452',close_approach:'2020-Mar-19 - 04:15'},
                        {ID:3455469,name:'2009 FO32',absolute_magnitude:'25.7',close_approach:'2020-Mar-20 - 05:55'},
                        {ID:3732669,name:'2015 UH52',absolute_magnitude:'26',close_approach:'2020-Mar-20 - 20:10'},
                        {ID:3744853,name:'2016 DP2',absolute_magnitude:'25.9',close_approach:'2020-Mar-20 - 20:33'},
                        {ID:3827174,name:'2018 RB1',absolute_magnitude:'27.9',close_approach:'2020-Mar-20 - 04:40'},
                        {ID:3759353,name:'2016 RU33',absolute_magnitude:'27.5',close_approach:'2020-Mar-20 - 07:17'},
                        {ID:3883107,name:'2019 UM8',absolute_magnitude:'28.4',close_approach:'2020-Mar-20 - 19:48'},
                        {ID:54016188,name:'2020 FC',absolute_magnitude:'23.004',close_approach:'2020-Mar-21 - 18:16'},
                        {ID:3028804,name:'2000 BO28',absolute_magnitude:'19.8',close_approach:'2020-Mar-21 - 03:07'},
                        {ID:3274691,name:'2005 FC',absolute_magnitude:'24.5',close_approach:'2020-Mar-21 - 20:16'},
                        {ID:3560057,name:'2011 FS2',absolute_magnitude:'26.2',close_approach:'2020-Mar-21 - 09:51'},
                        {ID:3799283,name:'2018 CP2',absolute_magnitude:'24.3',close_approach:'2020-Mar-21 - 16:50'},
                        {ID:2234145,name:'234145 2000 EW70',absolute_magnitude:'21.3',close_approach:'2020-Mar-21 - 13:21'},
                        {ID:3770330,name:'2017 EN',absolute_magnitude:'20.6',close_approach:'2020-Mar-21 - 05:09'},
                        {ID:3989242,name:'2020 BN10',absolute_magnitude:'20.957',close_approach:'2020-Mar-21 - 09:40'},
                        {ID:54013533,name:'2020 DC5',absolute_magnitude:'23.185',close_approach:'2020-Mar-22 - 09:19'},
                        {ID:3751531,name:'2016 GG216',absolute_magnitude:'23.1',close_approach:'2020-Mar-22 - 06:28'},
                        {ID:3879164,name:'2019 TW6',absolute_magnitude:'26.6',close_approach:'2020-Mar-22 - 08:40'},
                        {ID:54006013,name:'2020 DJ4',absolute_magnitude:'22.889',close_approach:'2020-Mar-22 - 21:09'},
                        {ID:54006021,name:'2020 DP4',absolute_magnitude:'25.187',close_approach:'2020-Mar-22 - 19:33'},
                        {ID:3838041,name:'2019 BV3',absolute_magnitude:'25.1',close_approach:'2020-Mar-23 - 14:45'},
                        {ID:3836098,name:'2018 VS3',absolute_magnitude:'22.4',close_approach:'2020-Mar-23 - 02:44'},
                        {ID:3726021,name:'2015 PZ228',absolute_magnitude:'18.2',close_approach:'2020-Mar-23 - 01:54'},
                        {ID:3765641,name:'2016 XB2',absolute_magnitude:'21.5',close_approach:'2020-Mar-23 - 02:55'},
                        {ID:3787626,name:'2017 UT2',absolute_magnitude:'24.6',close_approach:'2020-Mar-23 - 04:28'},
                        {ID:3137865,name:'2002 TB70',absolute_magnitude:'21.6',close_approach:'2020-Mar-23 - 09:52'},
                        {ID:3763951,name:'2016 WJ1',absolute_magnitude:'21.3',close_approach:'2020-Mar-23 - 11:51'},
                ]
            }
        },
    }
</script>

<style scoped>

    .imageSection {
        margin-left: 50px;
    }

    .titleSection {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 30px;
        margin-left: 25px;
        margin-top: 20px !important;
        align-self: self-end;
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    .row {
        margin: 0;
    }

    .form-row  {
        margin: 0;
    }

    .buttonCometSearch {
        margin-left: -40px;
        transform: scale(0.80);
    }

    #buttonSubmitCometSearch {
        margin-top: -6px;
    }

    #formInputCometSearch {
        margin-top: 25px;
        padding: 5px;
        justify-content: center;
        align-items: center;
    }

    #divContentHolderCometSearch {
        position: relative;
    }

    #firstDate {
        margin-top: 10px;
    }

    #secondDate {
        margin-top: 10px;
    }

    #tableCometSearchSummarized {
        color: #E2E2E2;
        background-color: #181818;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    #divContainerTableCometSearch {
        margin-top: 50px;
    }
</style>