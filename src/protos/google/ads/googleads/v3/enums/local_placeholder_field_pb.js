var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.LocalPlaceholderField",null,global),proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum;return proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.LocalPlaceholderFieldEnum.LocalPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,DEAL_ID:2,DEAL_NAME:3,SUBTITLE:4,DESCRIPTION:5,PRICE:6,FORMATTED_PRICE:7,SALE_PRICE:8,FORMATTED_SALE_PRICE:9,IMAGE_URL:10,ADDRESS:11,CATEGORY:12,CONTEXTUAL_KEYWORDS:13,FINAL_URLS:14,FINAL_MOBILE_URLS:15,TRACKING_URL:16,ANDROID_APP_LINK:17,SIMILAR_DEAL_IDS:18,IOS_APP_LINK:19,IOS_APP_STORE_ID:20},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);