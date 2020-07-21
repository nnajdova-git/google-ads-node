var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView",null,global),proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.displayName="proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.toObject(e,this)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.toObject=function(e,r){var o,a={resourceName:jspb.Message.getFieldWithDefault(r,1,""),searchTerm:(o=r.getSearchTerm())&&google_protobuf_wrappers_pb.StringValue.toObject(e,o),headline:(o=r.getHeadline())&&google_protobuf_wrappers_pb.StringValue.toObject(e,o),landingPage:(o=r.getLandingPage())&&google_protobuf_wrappers_pb.StringValue.toObject(e,o),pageUrl:(o=r.getPageUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(e,o),hasNegativeKeyword:(o=r.getHasNegativeKeyword())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,o),hasMatchingKeyword:(o=r.getHasMatchingKeyword())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,o),hasNegativeUrl:(o=r.getHasNegativeUrl())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,o)};return e&&(a.$jspbMessageInstance=r),a}),proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.deserializeBinary=function(e){var r=new jspb.BinaryReader(e),o=new proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView;return proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.deserializeBinaryFromReader(o,r)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();){switch(r.getFieldNumber()){case 1:var o=r.readString();e.setResourceName(o);break;case 2:o=new google_protobuf_wrappers_pb.StringValue;r.readMessage(o,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setSearchTerm(o);break;case 3:o=new google_protobuf_wrappers_pb.StringValue;r.readMessage(o,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setHeadline(o);break;case 4:o=new google_protobuf_wrappers_pb.StringValue;r.readMessage(o,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setLandingPage(o);break;case 5:o=new google_protobuf_wrappers_pb.StringValue;r.readMessage(o,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setPageUrl(o);break;case 6:o=new google_protobuf_wrappers_pb.BoolValue;r.readMessage(o,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setHasNegativeKeyword(o);break;case 7:o=new google_protobuf_wrappers_pb.BoolValue;r.readMessage(o,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setHasMatchingKeyword(o);break;case 8:o=new google_protobuf_wrappers_pb.BoolValue;r.readMessage(o,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setHasNegativeUrl(o);break;default:r.skipField()}}return e},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.serializeBinaryToWriter=function(e,r){var o=void 0;0<(o=e.getResourceName()).length&&r.writeString(1,o),null!=(o=e.getSearchTerm())&&r.writeMessage(2,o,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(o=e.getHeadline())&&r.writeMessage(3,o,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(o=e.getLandingPage())&&r.writeMessage(4,o,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(o=e.getPageUrl())&&r.writeMessage(5,o,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(o=e.getHasNegativeKeyword())&&r.writeMessage(6,o,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(o=e.getHasMatchingKeyword())&&r.writeMessage(7,o,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(o=e.getHasNegativeUrl())&&r.writeMessage(8,o,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getSearchTerm=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setSearchTerm=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.clearSearchTerm=function(){return this.setSearchTerm(void 0)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.hasSearchTerm=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getHeadline=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setHeadline=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.clearHeadline=function(){return this.setHeadline(void 0)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.hasHeadline=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getLandingPage=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setLandingPage=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.clearLandingPage=function(){return this.setLandingPage(void 0)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.hasLandingPage=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getPageUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setPageUrl=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.clearPageUrl=function(){return this.setPageUrl(void 0)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.hasPageUrl=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getHasNegativeKeyword=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,6)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setHasNegativeKeyword=function(e){return jspb.Message.setWrapperField(this,6,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.clearHasNegativeKeyword=function(){return this.setHasNegativeKeyword(void 0)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.hasHasNegativeKeyword=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getHasMatchingKeyword=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,7)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setHasMatchingKeyword=function(e){return jspb.Message.setWrapperField(this,7,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.clearHasMatchingKeyword=function(){return this.setHasMatchingKeyword(void 0)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.hasHasMatchingKeyword=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.getHasNegativeUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,8)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.setHasNegativeUrl=function(e){return jspb.Message.setWrapperField(this,8,e)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.clearHasNegativeUrl=function(){return this.setHasNegativeUrl(void 0)},proto.google.ads.googleads.v4.resources.DynamicSearchAdsSearchTermView.prototype.hasHasNegativeUrl=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);