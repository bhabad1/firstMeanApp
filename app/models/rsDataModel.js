var mongodb = require('mongodb'); //MongoDB
var mongoose = require('mongoose'); //Mongoose
var Schema = mongoose.Schema;

var HISTORY = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
historyModel = mongoose.model('HISTORY', HISTORY, 'HISTORY');

var TOURMAS0 = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tourmasZeroModel = mongoose.model('TOURMAS0', TOURMAS0, 'TOURMAS0');

var TOURNAME = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tournameModel = mongoose.model('TOURNAME', TOURNAME, 'TOURNAME');

var TOURMAS = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tourmasModel = mongoose.model('TOURMAS', TOURMAS, 'TOURMAS');

var TOURUSP = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
touruspModel = mongoose.model('TOURUSP', TOURUSP, 'TOURUSP');

var GLB_HIST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
gbl_histModel = mongoose.model('GLB_HIST', GLB_HIST, 'GLB_HIST');

var FLT_TIME = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
flightTimeModel = mongoose.model('FLT_TIME', FLT_TIME, 'FLT_TIME');

var airportmasters = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
airportmastersModel = mongoose.model('airportmasters', airportmasters, 'airportmasters');

var TR_HOTEL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tr_hotelModel = mongoose.model('TR_HOTEL', TR_HOTEL, 'TR_HOTEL');

var DM06_DTL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
dm06_dtlModel = mongoose.model('DM06_DTL', DM06_DTL, 'DM06_DTL');

var DMJL_DTL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
dmjl_dtlModel = mongoose.model('DMJL_DTL', DMJL_DTL, 'DMJL_DTL');

var DMOS_DTL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
dmos_dtlModel = mongoose.model('DMOS_DTL', DMOS_DTL, 'DMOS_DTL');

var JL_SLABD = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
jl_slabdModel = mongoose.model('JL_SLABD', JL_SLABD, 'JL_SLABD');


var JL_SLABW = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
jl_slabwModel = mongoose.model('JL_SLABW', JL_SLABW, 'JL_SLABW');


var TOURSLAB = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tourslabModel = mongoose.model('TOURSLAB', TOURSLAB, 'TOURSLAB');


var TOURVUSA = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tourvusaModel = mongoose.model('TOURVUSA', TOURVUSA, 'TOURVUSA');


var TOURXTRA = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tourxtraModel = mongoose.model('TOURXTRA', TOURXTRA, 'TOURXTRA');

var fit_package = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
fit_packageModel = mongoose.model('fit_package', fit_package, 'fitPackageNew');

var ksr_itnr = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ksr_itnrModel = mongoose.model('ksr_itnr', ksr_itnr, 'ksr_itnr');

var ksr_note = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ksr_noteModel = mongoose.model('ksr_note', ksr_note, 'ksr_note');

var ksr_road = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ksr_roadModel = mongoose.model('ksr_road', ksr_road, 'ksr_road');

var ksr_rpdr = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ksr_rpdrModel = mongoose.model('ksr_rpdr', ksr_rpdr, 'ksr_rpdr');

var ksr_splt = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ksr_spltModel = mongoose.model('ksr_splt', ksr_splt, 'ksr_splt');

var ksr_xtop = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ksr_xtopModel = mongoose.model('ksr_xtop', ksr_xtop, 'ksr_xtop');

var F21_SLMS = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F21_SLMSModel = mongoose.model('F21_SLMS', F21_SLMS, 'F21_SLMS');


var CURTABLE = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
curtableModel = mongoose.model('CURTABLE', CURTABLE, 'CURTABLE');

var FitOptSightSences = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
fit_opt_sightsencesModel = mongoose.model('fit_opt_sightsences', FitOptSightSences, 'fit_opt_sightsences');

var FitInsurance = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
fit_insuranceModel = mongoose.model('fit_insurance', FitInsurance, 'fit_insurance');

var FitTtransport = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
fit_transportModel = mongoose.model('fit_transport', FitTtransport, 'fit_transport');

var FitIndianHotel = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
fit_indian_hotelModel = mongoose.model('fit_indian_hotel', FitIndianHotel, 'fit_indian_hotel');

var FitWorldHotel = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
fit_world_hotelModel = mongoose.model('fit_world_hotel', FitWorldHotel, 'fit_world_hotel');

var JL_ALERT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
jl_alertModel = mongoose.model('JL_ALERT', JL_ALERT, 'JL_ALERT');

var TOURSLBD = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tourslbdModel = mongoose.model('TOURSLBD', TOURSLBD, 'TOURSLBD');

var F_SUPMST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
f_supmstModel = mongoose.model('F_SUPMST', F_SUPMST, 'F_SUPMST');

var BKAGENT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
BKAGENTModel = mongoose.model('BKAGENT', BKAGENT, 'BKAGENT');

var getOnGoingTour = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ON_GOING_TOURModel = mongoose.model('TL241115', getOnGoingTour, 'TL241115');

var GLB_INQ = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
glb_inqModel = mongoose.model('GLB_INQ', GLB_INQ, 'GLB_INQ');

var LST_DEAL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
LST_DEALModel = mongoose.model('LST_DEAL', LST_DEAL, 'LST_DEAL');

var BILL2000 = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
BILL2000Model = mongoose.model('BILL2000', BILL2000, 'BILL2000');

var CRUISES_ITIN_DAT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
CRUISES_ITIN_DATModel = mongoose.model('CRUISES_ITIN_DAT', CRUISES_ITIN_DAT, 'CRUISES_ITIN_DAT');

var CRUISES_ITINCOST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
CRUISES_ITINCOSTModel = mongoose.model('CRUISES_ITINCOST', CRUISES_ITINCOST, 'CRUISES_ITINCOST');

var VIS_POL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
VIS_POLModel = mongoose.model('VIS_POL', VIS_POL, 'VIS_POL');

var NRS_MAST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
nrs_mastModel = mongoose.model('NRS_MAST', NRS_MAST, 'NRS_MAST');

var TR_CLIENT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tr_clientModel = mongoose.model('TRCLIENT', TR_CLIENT, 'TRCLIENT');

var CARNVMST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
carnvmstModel = mongoose.model('CARNVMST', CARNVMST, 'CARNVMST');

var EXP_PER = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
exp_perModel = mongoose.model('EXP_PER', EXP_PER, 'EXP_PER');

var F31_SALK = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F31_SALKModel = mongoose.model('F31_SALK', F31_SALK, 'F31_SALK');

var F36_FLY = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F36_FLYModel = mongoose.model('F36_FLY', F36_FLY, 'F36_FLY');

var DEPTDESG = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
DEPTDESGModel = mongoose.model('DEPTDESG', DEPTDESG, 'DEPTDESG');


var KRECP6 = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
krecp6Model = mongoose.model('KRECP6', KRECP6, 'KRECP6');

var KUSD_HDR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
kusd_hdrModel = mongoose.model('KUSD_HDR', KUSD_HDR, 'KUSD_HDR');

var KFOREX = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
kforexModel = mongoose.model('KFOREX', KFOREX, 'KFOREX');

var KPFORX = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
kpforxModel = mongoose.model('KPFORX', KPFORX, 'KPFORX');

var KMCR_HDR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
kmcr_hdrModel = mongoose.model('KMCR_HDR', KMCR_HDR, 'KMCR_HDR');

var AR_STKHD = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ar_stkhdModel = mongoose.model('AR_STKHD', AR_STKHD, 'AR_STKHD');

var AR_STKDT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ar_stkdtModel = mongoose.model('AR_STKDT', AR_STKDT, 'AR_STKDT');

var TR_HFORM = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
tr_hformModel = mongoose.model('TR_HFORM', TR_HFORM, 'TR_HFORM');

var TCD2_MTH = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TCD2_MTHModel = mongoose.model('TCD2_MTH', TCD2_MTH, 'TCD2_MTH');

var TCD2_QTR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TCD2_QTRModel = mongoose.model('TCD2_QTR', TCD2_QTR, 'TCD2_QTR');

var TCD2_YR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TCD2_YRModel = mongoose.model('TCD2_YR', TCD2_YR, 'TCD2_YR');

var ZONE_MTH = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ZONE_MTHModel = mongoose.model('ZONE_MTH', ZONE_MTH, 'ZONE_MTH');

var ZONE_QTR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ZONE_QTRModel = mongoose.model('ZONE_QTR', ZONE_QTR, 'ZONE_QTR');

var ZONE_YR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
ZONE_YRModel = mongoose.model('ZONE_YR', ZONE_YR, 'ZONE_YR');

var COMM_HDR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
comm_hdrModel = mongoose.model('COMM_HDR', COMM_HDR, 'COMM_HDR');

var VISADETL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
visadetlModel = mongoose.model('VISADETL', VISADETL, 'VISADETL');

var EVISA = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
evisaModel = mongoose.model('EVISA', EVISA, 'EVISA');

var psaReport = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
psaReportModel = mongoose.model('psaReport', psaReport, 'psaReport');


var PP_TBL_N = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
PP_TBL_NModel = mongoose.model('PP_TBL_N', PP_TBL_N, 'PP_TBL_N');

var F_CANCEL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F_CANCELModel = mongoose.model('F_CANCEL', F_CANCEL, 'F_CANCEL');

var F75_SCHD = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F75_SCHDModel = mongoose.model('F75_SCHD', F75_SCHD, 'F75_SCHD');

var F_CANDET = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F_CANDETModel = mongoose.model('F_CANDET', F_CANDET, 'F_CANDET');

var F24_ATTD = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F24_ATTDModel = mongoose.model('F24_ATTD', F24_ATTD, 'F24_ATTD');

var F21_RGHT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F21_RGHTModel = mongoose.model('F21_RGHT', F21_RGHT, 'F21_RGHT');

var new_cruise_itinerary = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
new_cruise_itineraryModel = mongoose.model('new_cruise_itinerary', new_cruise_itinerary, 'new_cruise_itinerary');

var REQ_STAF = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
REQ_STAFModel = mongoose.model('REQ_STAF', REQ_STAF, 'REQ_STAF');

var QUE_TCD = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
QUE_TCDModel = mongoose.model('QUE_TCD', QUE_TCD, 'QUE_TCD');

var QUE_MST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
QUE_MSTModel = mongoose.model('QUE_MST', QUE_MST, 'QUE_MST');

var HIST_WEB = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
HIST_WEBModel = mongoose.model('HIST_WEB', HIST_WEB, 'HIST_WEB');

var PANACOM = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
PANACOMModel = mongoose.model('PANACOM', PANACOM, 'PANACOM');

var AGT_REC = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
AGT_RECModel = mongoose.model('AGT_REC', AGT_REC, 'AGT_REC');

var F32_CL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F32_CLModel = mongoose.model('F32_CL', F32_CL, 'F32_CL');

var Q1120316 = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
Q1120316Model = mongoose.model('Q1120316', Q1120316, 'Q1120316');

var HISTSECT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
HISTSECTModel = mongoose.model('HISTSECT', HISTSECT, 'HISTSECT');


var BUS_LIST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
BUS_LISTModel = mongoose.model('BUS_LIST', BUS_LIST, 'BUS_LIST');

var AGT_BIL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
AGT_BILModel = mongoose.model('AGT_BIL', AGT_BIL, 'AGT_BIL');

var TRNSECT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TRNSECTModel = mongoose.model('TRNSECT', TRNSECT, 'TRNSECT');

var serviceTax = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
serviceTaxModel = mongoose.model('serviceTax', serviceTax, 'serviceTax');


var VISA_APT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
VISA_APTModel = mongoose.model('VISA_APT', VISA_APT, 'VISA_APT');

var TOURJOIN = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TOURJOINModel = mongoose.model('TOURJOIN', TOURJOIN, 'TOURJOIN');

var GSA_MST = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
GSA_MSTModel = mongoose.model('GSA_MST', GSA_MST, 'GSA_MST');

var PAXMST06 = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
PAXMST06Model = mongoose.model('PAXMST06', PAXMST06, 'PAXMST06');

var TOUR_RPT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TOUR_RPTModel = mongoose.model('TOUR_RPT', TOUR_RPT, 'TOUR_RPT');

var F_PLACE = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F_PLACEModel = mongoose.model('F_PLACE', F_PLACE, 'F_PLACE');


var BDG_HDR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
BDG_HDRModel = mongoose.model('BDG_HDR', BDG_HDR, 'BDG_HDR');

var BDG_DTL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
BDG_DTLModel = mongoose.model('BDG_DTL', BDG_DTL, 'BDG_DTL');

var AIRLINE = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
AIRLINEModel = mongoose.model('AIRLINE', AIRLINE, 'AIRLINE');

var FLIGHTS = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
FLIGHTSModel = mongoose.model('FLIGHTS', FLIGHTS, 'FLIGHTS');

var TRAINS = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TRAINSModel = mongoose.model('TRAINS', TRAINS, 'TRAINS');

var TOURACCT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
TOURACCTModel = mongoose.model('TOURACCT', TOURACCT, 'TOURACCT');

var emailIdMaster = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
emailIdMasterModel = mongoose.model('emailIdMaster', emailIdMaster, 'emailIdMaster');

var emailer = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
emailerModel = mongoose.model('emailer', emailer, 'emailers');

var Details_Itinerary = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
Details_ItineraryModel = mongoose.model('Details_Itinerary', Details_Itinerary, 'Details_Itinerary');

var mailbox_quota = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
mailbox_quotaModel = mongoose.model('mailbox_quota', mailbox_quota, 'mailbox_quota');

var RS_EMHDR = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
RS_EMHDRModel = mongoose.model('RS_EMHDR', RS_EMHDR, 'RS_EMHDR');

var RS_EMDTL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
RS_EMDTLModel = mongoose.model('RS_EMDTL', RS_EMDTL, 'RS_EMDTL');

var countryMaster = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
countryMasterModel = mongoose.model('countryMaster', countryMaster, 'countryMaster');

var F31_HOLI = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
F31_HOLIModel = mongoose.model('F31_HOLI', F31_HOLI, 'F31_HOLI');

var cdr = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
cdrModel = mongoose.model('cdr', cdr, 'cdr');

var todaysAbsentKesarianMaster = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
todaysAbsentKesarianMasterModel = mongoose.model('todaysAbsentKesarianMaster', todaysAbsentKesarianMaster, 'todaysAbsentKesarianMaster');

var smsDataSetGeneratorHistory = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
smsDataSetGeneratorHistoryModel = mongoose.model('sms_data_set', smsDataSetGeneratorHistory, 'sms_data_set');
var PASSPORT = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
var PASSPORTModel = mongoose.model('PASSPORT', PASSPORT, 'PASSPORT');

var historySMSTemp = {
  "sms_text": String,
  'inquiry_no': Number,
  "status": String,
  "date_of_delivery": {
    type: Date
  },
  "time_of_delivery": String,
  "server_response_status": String,
  "server_response_date": {
    type: Date
  },
  "server_response_time": String,
  "reciever_number": String,
  "reciever_name": String,
  "sms_lang": String,
  "sms_type": String,
  "sms_source": String,
  "sms_delivery_day": String,
  "sms_sector": String,
  "miss_call_no": String,
  "created_on": {
    type: Date
  },
  "created_by": String,
  "created_at": {
    type: Date,
    default: Date.now
  },
  "remarks": Array,
  "tourcode": String,
  "form_no": Number,
  "tourist_no": Number,
  "campaign_id": String,
  "sms_category": String
}
var historySMSTemp = new Schema(historySMSTemp, {
  capped: {
    size: 5242880000000,
    max: 1000000
  }
});
historySMSTempModel = mongoose.model('historySMSTemp', historySMSTemp, 'historySMSTemp');

var VISAPOOL = Schema({
  any: Schema.Types.Mixed
}, {
  strict: false
});
VISAPOOLModel = mongoose.model('VISAPOOL', VISAPOOL, 'VISAPOOL');

module.exports = {
  historyModel: historyModel,
  tourmasZeroModel: tourmasZeroModel,
  touruspModel: touruspModel,
  tournameModel: tournameModel,
  gbl_histModel: gbl_histModel,
  tourmasModel: tourmasModel,
  flightTimeModel: flightTimeModel,
  airportmastersModel: airportmastersModel,
  tr_hotelModel: tr_hotelModel,
  dm06_dtlModel: dm06_dtlModel,
  dmjl_dtlModel: dmjl_dtlModel,
  dmos_dtlModel: dmos_dtlModel,
  jl_slabdModel: jl_slabdModel,
  jl_slabwModel: jl_slabwModel,
  tourslabModel: tourslabModel,
  tourvusaModel: tourvusaModel,
  tourxtraModel: tourxtraModel,
  fit_packageModel: fit_packageModel,
  curtableModel: curtableModel,
  ksr_itnrModel: ksr_itnrModel,
  ksr_noteModel: ksr_noteModel,
  ksr_roadModel: ksr_roadModel,
  ksr_rpdrModel: ksr_rpdrModel,
  ksr_spltModel: ksr_spltModel,
  ksr_xtopModel: ksr_xtopModel,
  F21_SLMSModel: F21_SLMSModel,
  fit_opt_sightsencesModel: fit_opt_sightsencesModel,
  fit_insuranceModel: fit_insuranceModel,
  fit_transportModel: fit_transportModel,
  fit_indian_hotelModel: fit_indian_hotelModel,
  fit_world_hotelModel: fit_world_hotelModel,
  jl_alertModel: jl_alertModel,
  tourslbdModel: tourslbdModel,
  f_supmstModel: f_supmstModel,
  BKAGENTModel: BKAGENTModel,
  ON_GOING_TOURModel: ON_GOING_TOURModel,
  glb_inqModel: glb_inqModel,
  LST_DEALModel: LST_DEALModel,
  CRUISES_ITIN_DATModel: CRUISES_ITIN_DATModel,
  CRUISES_ITINCOSTModel: CRUISES_ITINCOSTModel,
  BILL2000Model: BILL2000Model,
  VIS_POLModel: VIS_POLModel,
  nrs_mastModel: nrs_mastModel,
  tr_clientModel: tr_clientModel,
  carnvmstModel: carnvmstModel,
  exp_perModel: exp_perModel,
  F31_SALKModel: F31_SALKModel,
  krecp6Model: krecp6Model,
  kusd_hdrModel: kusd_hdrModel,
  kforexModel: kforexModel,
  kpforxModel: kpforxModel,
  kmcr_hdrModel: kmcr_hdrModel,
  ar_stkhdModel: ar_stkhdModel,
  ar_stkdtModel: ar_stkdtModel,
  tr_hformModel: tr_hformModel,
  F36_FLYModel: F36_FLYModel,
  DEPTDESGModel: DEPTDESGModel,
  TCD2_MTHModel: TCD2_MTHModel,
  TCD2_YRModel: TCD2_YRModel,
  TCD2_QTRModel: TCD2_QTRModel,
  ZONE_MTHModel: ZONE_MTHModel,
  ZONE_QTRModel: ZONE_QTRModel,
  ZONE_YRModel: ZONE_YRModel,
  comm_hdrModel: comm_hdrModel,
  visadetlModel: visadetlModel,
  psaReportModel: psaReportModel,
  evisaModel: evisaModel,
  PP_TBL_NModel: PP_TBL_NModel,
  F75_SCHDModel: F75_SCHDModel,
  comm_hdrModel: comm_hdrModel,
  visadetlModel: visadetlModel,
  F24_ATTDModel: F24_ATTDModel,
  psaReportModel: psaReportModel,
  evisaModel: evisaModel,
  PP_TBL_NModel: PP_TBL_NModel,
  F_CANCELModel: F_CANCELModel,
  F_CANDETModel: F_CANDETModel,
  REQ_STAFModel: REQ_STAFModel,
  F21_RGHTModel: F21_RGHTModel,
  psaReportModel: psaReportModel,
  evisaModel: evisaModel,
  PP_TBL_NModel: PP_TBL_NModel,
  F_CANCELModel: F_CANCELModel,
  F_CANDETModel: F_CANDETModel,
  QUE_TCDModel: QUE_TCDModel,
  QUE_MSTModel: QUE_MSTModel,
  HIST_WEBModel: HIST_WEBModel,
  PANACOMModel: PANACOMModel,
  AGT_RECModel: AGT_RECModel,
  F32_CLModel: F32_CLModel,
  Q1120316Model: Q1120316Model,
  HISTSECTModel: HISTSECTModel,
  BUS_LISTModel: BUS_LISTModel,
  AGT_BILModel: AGT_BILModel,
  TRNSECTModel: TRNSECTModel,
  serviceTaxModel: serviceTaxModel,
  VISA_APTModel: VISA_APTModel,
  TOURJOINModel: TOURJOINModel,
  GSA_MSTModel: GSA_MSTModel,
  PAXMST06Model: PAXMST06Model,
  F_PLACEModel: F_PLACEModel,
  BDG_HDRModel: BDG_HDRModel,
  BDG_DTLModel: BDG_DTLModel,
  TOUR_RPTModel: TOUR_RPTModel,
  F_PLACEModel: F_PLACEModel,
  AIRLINEModel: AIRLINEModel,
  FLIGHTSModel: FLIGHTSModel,
  TRAINSModel: TRAINSModel,
  TOURACCTModel: TOURACCTModel,
  smsDataSetGeneratorHistoryModel: smsDataSetGeneratorHistoryModel,
  historySMSTempModel: historySMSTempModel,
  PASSPORTModel: PASSPORTModel,
  emailIdMasterModel: emailIdMasterModel,
  emailerModel: emailerModel,
  Details_ItineraryModel: Details_ItineraryModel,
  mailbox_quotaModel: mailbox_quotaModel,
  VISAPOOLModel: VISAPOOLModel,
  RS_EMHDRModel: RS_EMHDRModel,
  RS_EMDTLModel: RS_EMDTLModel,
  countryMasterModel: countryMasterModel,
  cdrModel: cdrModel,
  F31_HOLIModel: F31_HOLIModel,
  todaysAbsentKesarianMasterModel: todaysAbsentKesarianMasterModel,

};