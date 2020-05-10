# ML Standalone Deploy API
This api run inside the SDC. Include route to write ml model data inside
rt_predict table at config database.

## Requirements
*  nodejs 8.x or higher

## Routes
*  Get deploys by model (Fetch all records by model from rt_predict) [GET] `/deploy/:model`

*  Save deploy (Save record in rt_predict) [POST] `/deploy` (Data: body.data: string base64 with data to insert in rt_predict)

*  Remove deploy (Remove record from rt_predict) [DELETE] `/deploy/:code`

*  Get process (Fetch all records from rt_process) [GET] `/process`

## 