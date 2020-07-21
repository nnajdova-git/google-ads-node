var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.Video",null,global),proto.google.ads.googleads.v4.resources.Video=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.Video,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.Video.displayName="proto.google.ads.googleads.v4.resources.Video"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.Video.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.Video.toObject(e,this)},proto.google.ads.googleads.v4.resources.Video.toObject=function(e,o){var r,s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),id:(r=o.getId())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),channelId:(r=o.getChannelId())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),durationMillis:(r=o.getDurationMillis())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),title:(r=o.getTitle())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.resources.Video.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.Video;return proto.google.ads.googleads.v4.resources.Video.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.Video.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setId(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setChannelId(r);break;case 4:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setDurationMillis(r);break;case 5:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setTitle(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.Video.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.Video.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.Video.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getId())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getChannelId())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getDurationMillis())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getTitle())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.Video.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.Video.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.Video.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.Video.prototype.setId=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.Video.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.Video.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.Video.prototype.getChannelId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.Video.prototype.setChannelId=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.Video.prototype.clearChannelId=function(){return this.setChannelId(void 0)},proto.google.ads.googleads.v4.resources.Video.prototype.hasChannelId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.Video.prototype.getDurationMillis=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,4)},proto.google.ads.googleads.v4.resources.Video.prototype.setDurationMillis=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.Video.prototype.clearDurationMillis=function(){return this.setDurationMillis(void 0)},proto.google.ads.googleads.v4.resources.Video.prototype.hasDurationMillis=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.Video.prototype.getTitle=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v4.resources.Video.prototype.setTitle=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.Video.prototype.clearTitle=function(){return this.setTitle(void 0)},proto.google.ads.googleads.v4.resources.Video.prototype.hasTitle=function(){return null!=jspb.Message.getField(this,5)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);