// source: Agent.proto
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

goog.provide('proto.gw_messages.Agent');
goog.provide('proto.gw_messages.Agent.FactionTeam');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.gw_messages.Position');

goog.forwardDeclare('proto.gw_messages.Profession');
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
proto.gw_messages.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gw_messages.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gw_messages.Agent.displayName = 'proto.gw_messages.Agent';
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
proto.gw_messages.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.gw_messages.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gw_messages.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gw_messages.Agent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    position: (f = msg.getPosition()) && proto.gw_messages.Position.toObject(includeInstance, f),
    primaryProfession: jspb.Message.getFieldWithDefault(msg, 4, 0),
    secondaryProfession: jspb.Message.getFieldWithDefault(msg, 5, 0),
    level: jspb.Message.getFieldWithDefault(msg, 6, 0),
    factionTeam: jspb.Message.getFieldWithDefault(msg, 7, 0),
    healthRegen: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    currentHealth: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    isConditioned: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    isBleeding: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    isCrippled: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    isPoisoned: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    isEnchanted: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    isDegenHexed: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    isHexed: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    isWeaponSpelled: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    isDead: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    isBoss: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    isPlayer: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isNpc: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isKnockedDown: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    isMoving: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    isAttacking: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    isCasting: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    isIdle: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    skillIdBeingUsed: jspb.Message.getFieldWithDefault(msg, 27, 0),
    modelId: jspb.Message.getFieldWithDefault(msg, 28, 0)
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
 * @return {!proto.gw_messages.Agent}
 */
proto.gw_messages.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gw_messages.Agent;
  return proto.gw_messages.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gw_messages.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gw_messages.Agent}
 */
proto.gw_messages.Agent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAgentId(value);
      break;
    case 3:
      var value = new proto.gw_messages.Position;
      reader.readMessage(value,proto.gw_messages.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 4:
      var value = /** @type {!proto.gw_messages.Profession} */ (reader.readEnum());
      msg.setPrimaryProfession(value);
      break;
    case 5:
      var value = /** @type {!proto.gw_messages.Profession} */ (reader.readEnum());
      msg.setSecondaryProfession(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 7:
      var value = /** @type {!proto.gw_messages.Agent.FactionTeam} */ (reader.readEnum());
      msg.setFactionTeam(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHealthRegen(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrentHealth(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConditioned(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBleeding(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCrippled(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPoisoned(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnchanted(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDegenHexed(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHexed(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWeaponSpelled(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDead(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBoss(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPlayer(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNpc(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsKnockedDown(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMoving(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAttacking(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCasting(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsIdle(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSkillIdBeingUsed(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setModelId(value);
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
proto.gw_messages.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gw_messages.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gw_messages.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gw_messages.Agent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gw_messages.Position.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.gw_messages.Profession} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.gw_messages.Profession} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {!proto.gw_messages.Agent.FactionTeam} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBool(
      23,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeBool(
      24,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeBool(
      25,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeBool(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeUint32(
      27,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeUint32(
      28,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.gw_messages.Agent.FactionTeam = {
  NONE: 0,
  BLUE: 1,
  RED: 2,
  YELLOW: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.gw_messages.Agent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 agent_id = 2;
 * @return {number}
 */
proto.gw_messages.Agent.prototype.getAgentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setAgentId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearAgentId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasAgentId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Position position = 3;
 * @return {?proto.gw_messages.Position}
 */
proto.gw_messages.Agent.prototype.getPosition = function() {
  return /** @type{?proto.gw_messages.Position} */ (
    jspb.Message.getWrapperField(this, proto.gw_messages.Position, 3));
};


/**
 * @param {?proto.gw_messages.Position|undefined} value
 * @return {!proto.gw_messages.Agent} returns this
*/
proto.gw_messages.Agent.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Profession primary_profession = 4;
 * @return {!proto.gw_messages.Profession}
 */
proto.gw_messages.Agent.prototype.getPrimaryProfession = function() {
  return /** @type {!proto.gw_messages.Profession} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.gw_messages.Profession} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setPrimaryProfession = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearPrimaryProfession = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasPrimaryProfession = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Profession secondary_profession = 5;
 * @return {!proto.gw_messages.Profession}
 */
proto.gw_messages.Agent.prototype.getSecondaryProfession = function() {
  return /** @type {!proto.gw_messages.Profession} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.gw_messages.Profession} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setSecondaryProfession = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearSecondaryProfession = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasSecondaryProfession = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 level = 6;
 * @return {number}
 */
proto.gw_messages.Agent.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setLevel = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearLevel = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FactionTeam faction_team = 7;
 * @return {!proto.gw_messages.Agent.FactionTeam}
 */
proto.gw_messages.Agent.prototype.getFactionTeam = function() {
  return /** @type {!proto.gw_messages.Agent.FactionTeam} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.gw_messages.Agent.FactionTeam} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setFactionTeam = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearFactionTeam = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasFactionTeam = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional float health_regen = 8;
 * @return {number}
 */
proto.gw_messages.Agent.prototype.getHealthRegen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setHealthRegen = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearHealthRegen = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasHealthRegen = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional float current_health = 9;
 * @return {number}
 */
proto.gw_messages.Agent.prototype.getCurrentHealth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setCurrentHealth = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearCurrentHealth = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasCurrentHealth = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_conditioned = 10;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsConditioned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsConditioned = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsConditioned = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsConditioned = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool is_bleeding = 11;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsBleeding = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsBleeding = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsBleeding = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsBleeding = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool is_crippled = 12;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsCrippled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsCrippled = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsCrippled = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsCrippled = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool is_poisoned = 13;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsPoisoned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsPoisoned = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsPoisoned = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsPoisoned = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool is_enchanted = 14;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsEnchanted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsEnchanted = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsEnchanted = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsEnchanted = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool is_degen_hexed = 15;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsDegenHexed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsDegenHexed = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsDegenHexed = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsDegenHexed = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool is_hexed = 16;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsHexed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsHexed = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsHexed = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsHexed = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool is_weapon_spelled = 17;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsWeaponSpelled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsWeaponSpelled = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsWeaponSpelled = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsWeaponSpelled = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool is_dead = 18;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsDead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsDead = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsDead = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsDead = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool is_boss = 19;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsBoss = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsBoss = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsBoss = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsBoss = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool is_player = 20;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsPlayer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsPlayer = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsPlayer = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsPlayer = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool is_npc = 21;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsNpc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsNpc = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsNpc = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsNpc = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool is_knocked_down = 22;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsKnockedDown = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsKnockedDown = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsKnockedDown = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsKnockedDown = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool is_moving = 23;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsMoving = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsMoving = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsMoving = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsMoving = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bool is_attacking = 24;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsAttacking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsAttacking = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsAttacking = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsAttacking = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional bool is_casting = 25;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsCasting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsCasting = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsCasting = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsCasting = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional bool is_idle = 26;
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.getIsIdle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setIsIdle = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearIsIdle = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasIsIdle = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional uint32 skill_id_being_used = 27;
 * @return {number}
 */
proto.gw_messages.Agent.prototype.getSkillIdBeingUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setSkillIdBeingUsed = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearSkillIdBeingUsed = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasSkillIdBeingUsed = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional uint32 model_id = 28;
 * @return {number}
 */
proto.gw_messages.Agent.prototype.getModelId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.setModelId = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gw_messages.Agent} returns this
 */
proto.gw_messages.Agent.prototype.clearModelId = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gw_messages.Agent.prototype.hasModelId = function() {
  return jspb.Message.getField(this, 28) != null;
};


