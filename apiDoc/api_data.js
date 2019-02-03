define({ "api": [
  {
    "group": "DropDown",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/dropDown/getOptions",
    "title": "api for getting the DropDown options.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"error\": false,\n    \"message\": \"Options Found\",\n    \"status\": 200,\n    \"data\": {\n        \"options\": [\n            \"[{\\\"label\\\":\\\"INDIA\\\"\",\n            \"\\\"value\\\":\\\"In\\\"}\",\n            \"{\\\"label\\\":\\\"United States\\\"\",\n            \"\\\"value\\\":\\\"US\\\"}]\"\n        ],\n        \"_id\": \"5c10f6cc87c59e0a6088db16\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"No Options Found\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/dropDownRoute.js",
    "groupTitle": "DropDown",
    "name": "PostApiV1DropdownGetoptions"
  },
  {
    "group": "dropDown",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/dropDown/updateOptions",
    "title": "to update DropDown Options",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "options",
            "description": "<p>Dropdown options. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"options updated\",\n    \"status\":200,\n    \"data\":{\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"Options Not Updated\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/dropDownRoute.js",
    "groupTitle": "dropDown",
    "name": "PostApiV1DropdownUpdateoptions"
  }
] });
