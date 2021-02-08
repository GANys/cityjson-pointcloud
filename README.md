# cityjson-pointcloud

Extension to support LAS 3D point clouds for CityObjects geometries. Works with CityJSON 1.0.1.

According to CityGML 3.0 specifications, 3D Point Cloud can be directly handled in geometries (MultiPoint) or linked through URIs.

An example of a CityJSON file is given to show both solutions.

This archive includes the [cityjson-pointcoud.json](https://github.com/GANys/cityjson-pointcloud/blob/dev/cityjson-pointcloud.json) and the [CityJSON 1.0.1 schemas](https://github.com/GANys/cityjson-pointcloud/tree/dev/schemas) modified accordingly to them. Files can be validated using either [CJIO](https://github.com/cityjson/cjio) either [AJV](https://ajv.js.org/) + validate.js
