var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError",null,global),proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.displayName="proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum;return proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError={UNSPECIFIED:0,UNKNOWN:1,TOO_RECENT_CONVERSION_ACTION:2,INVALID_CONVERSION_ACTION:3,CONVERSION_ALREADY_RETRACTED:4,CONVERSION_NOT_FOUND:5,CONVERSION_EXPIRED:6,ADJUSTMENT_PRECEDES_CONVERSION:7,MORE_RECENT_RESTATEMENT_FOUND:8,TOO_RECENT_CONVERSION:9,CANNOT_RESTATE_CONVERSION_ACTION_THAT_ALWAYS_USES_DEFAULT_CONVERSION_VALUE:10},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);