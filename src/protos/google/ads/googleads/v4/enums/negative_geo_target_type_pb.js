var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType",null,global),proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.displayName="proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.toObject=function(e,o){var g={};return e&&(g.$jspbMessageInstance=o),g}),proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),g=new proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum;return proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.deserializeBinaryFromReader(g,o)},proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType={UNSPECIFIED:0,UNKNOWN:1,PRESENCE_OR_INTEREST:4,PRESENCE:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);