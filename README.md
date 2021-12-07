# cityjson-pointcloud

Extension to support LAS 3D point clouds for CityObjects geometries. Works with CityJSON 1.1.0.

According to CityGML 3.0 specifications, 3D Point Cloud can be directly handled inline in geometries (MultiPoint) or linked through URIs.

An example of a CityJSON file is given to show both solutions.

This archive includes the [cityjson-pointcoud.ext.json](https://github.com/GANys/cityjson-pointcloud/blob/dev/cityjson-pointcloud.ext.json) and the [CityJSON 1.1.0 schemas](https://github.com/GANys/cityjson-pointcloud/tree/dev/schemas).

Files can be validated using [CJVAL](https://github.com/cityjson/cjval). The use of "+geometry" will result in warnings as these elements are not validated for vertex consistency (duplicates, unused, etc.).
