// source: CharacterChanged.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.gw_messages.CharacterChanged');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gw_messages.CharacterChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gw_messages.CharacterChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gw_messages.CharacterChanged.displayName = 'proto.gw_messages.CharacterChanged';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gw_messages.CharacterChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.gw_messages.CharacterChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gw_messages.CharacterChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gw_messages.CharacterChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
    previousCharacterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currentCharacterName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gw_messages.CharacterChanged}
 */
proto.gw_messages.CharacterChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gw_messages.CharacterChanged;
  return proto.gw_messages.CharacterChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gw_messages.CharacterChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gw_messages.CharacterChanged}
 */
proto.gw_messages.CharacterChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviousCharacterName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentCharacterName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gw_messages.CharacterChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gw_messages.CharacterChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gw_messages.CharacterChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gw_messages.CharacterChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string previous_character_name = 1;
 * @return {string}
 */
proto.gw_messages.CharacterChanged.prototype.getPreviousCharacterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gw_messages.CharacterChanged} returns this
 */
proto.gw_messages.CharacterChanged.prototype.setPreviousCharacterName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.CharacterChanged} returns this
 */
proto.gw_messages.CharacterChanged.prototype.clearPreviousCharacterName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.CharacterChanged.prototype.hasPreviousCharacterName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string current_character_name = 2;
 * @return {string}
 */
proto.gw_messages.CharacterChanged.prototype.getCurrentCharacterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gw_messages.CharacterChanged} returns this
 */
proto.gw_messages.CharacterChanged.prototype.setCurrentCharacterName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.CharacterChanged} returns this
 */
proto.gw_messages.CharacterChanged.prototype.clearCurrentCharacterName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.CharacterChanged.prototype.hasCurrentCharacterName = function() {
  return jspb.Message.getField(this, 2) != null;
};


