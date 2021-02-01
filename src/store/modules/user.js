export default {
    namespaced: true,
    state: {
        token: '',
        hospitalId: '',
        unionId: '',
        userId: '',
        to: '',
        redirectUrl: '',
        from: '',
        delta: '',
        qrCodeText:'',
        patientInfo: {},
        healthArchives: [],
        patientErrorExit: false,//添加就诊人异常标志
        patientErrorExitInfo: {},//异常退出保存的信息
        pvPatientVisitId: '',
        isFirst: true,//小程序 第三方业务(具体业务而不是就诊人列表进入，比如门诊缴费)是否第一次进入healthCardList组件。（为了区别wx.miniProgram.navigateBack返回至healthCardList）
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setHospitalId(state, payload) {
            state.hospitalId = payload
        },
        setUserId(state, payload) {
            state.userId = payload
        },
        setUnionId(state, payload) {
            state.unionId = payload
        },
        setTo(state, payload) {
            state.to = payload
        },
        setRedirectUrl(state, payload) {
            state.redirectUrl = payload
        },
        setFrom(state, payload) {
            state.from = payload
        },
        setDelta(state, payload) {
            state.delta = payload
        },
        setQrCodeText(state, payload){
            state.qrCodeText = payload
        },
        setPatientInfo(state, payload){
            state.patientInfo = payload
        },
        setHealthArchives(state, payload){
            if(payload==0){
                state.healthArchives = []
            }else if(state.healthArchives.length){
                let len = 0
                state.healthArchives.forEach((item, index)=>{
                    if(item.code==payload.code){
                        state.healthArchives.splice(index, 1)
                        state.healthArchives.push(payload)
                    }else{
                        len ++ 
                        if(len==state.healthArchives.length){
                            state.healthArchives.push(payload)
                        }
                    }
                })
            }else{
                state.healthArchives.push(payload)
            }
        },
        setPatientErrorExit(state, payload){
            state.patientErrorExit = payload
        },
        setPatientErrorExitInfo(state, payload){
            state.patientErrorExitInfo = payload
        },
        setPvPatientVisitId(state, payload){
            state.pvPatientVisitId = payload
        },
        setIsFirst(state, payload){
            state.isFirst = payload
        }
    },
    actions: {},
    getters: {}
}
