const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");

const fs = require("fs");
const path = require("path");
const json = require("big-json");

const appearanceSchema = require("./schemas/appearance.schema.json");
const cityjsonSchema = require("./schemas/cityjson.schema.json");
const cityobjectsSchema = require("./schemas/cityobjects.schema.json");
const geomprimitivesSchema = require("./schemas/geomprimitives.schema.json");
const geomtemplatesSchema = require("./schemas/geomtemplates.schema.json");
const metadataSchema = require("./schemas/metadata.schema.json");

const pointcloudSchema = require("./schemas/cityjson-pointcloud.json");

console.warn("Some KeyWords are not valid in strict JSON Schemas : ")
const ajv = new Ajv({ strict: "log" });
addFormats(ajv); // Some formats are not recognised by default

ajv.addSchema(appearanceSchema);
ajv.addSchema(cityobjectsSchema);
ajv.addSchema(geomprimitivesSchema);
ajv.addSchema(geomtemplatesSchema);
ajv.addSchema(metadataSchema);
ajv.addSchema(pointcloudSchema);

const validate = ajv.compile(cityjsonSchema); // Also validate schemas

if (validate) {
  console.log("Schema compiled!");
} else {
  console.warn("Did not compile : ");
  console.error(validate.errors);
}

/*
const readStream = fs.createReadStream("./example/example.json");
const parseStream = json.createParseStream();

parseStream.on("data", function (pojo) {
  // => receive reconstructed POJO
  if (validate(pojo)) {
    console.log("File is valid!");
  } else {
    console.error(validate.errors);
  }

});

readStream.pipe(parseStream);
*/
