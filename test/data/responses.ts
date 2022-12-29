export const startResponse = {
  "response": [
    {
      "vars": {},
      "token": "kGgLGj3ISSK2YgitAhZS688N6rbcR0WznSFKvEzSVrA",
      "interfaceRules": [],
      "variants": [],
      "regions": {},
      "success": true,
      "messages": {},
      "interfaceEvents": [],
      "sha256": "ded4fc0d016a7f1f89b97a8c2d2962712a8ee8c3c25ab8618123e5fc17c62674"
    }
  ]
}

export const successResponse = {
  "response": [
    {
      "success": true,
      "sha256": "ded4fc0d016a7f1f89b97a8c2d2962712a8ee8c3c25ab8618123e5fc17c62674"
    }
  ]
}

export const forceContentUpdateResponse = {
  "response": [
    {
      "vars": { "gender": "male", "age": 28 },
      "token": "kGgLGj3ISSK2YgitAhZS688N6rbcR0WznSFKvEzSVrA",
      "interfaceRules": [],
      "variants": [],
      "regions": {},
      "success": true,
      "messages": {},
      "interfaceEvents": [],
      "sha256": "ded4fc0d016a7f1f89b97a8c2d2962712a8ee8c3c25ab8618123e5fc17c62674"
    }
  ]
}

export const migrationResponses = {
  LP: {
    "response": [
      {
        "sha256": "ded4fc0d016a7f1f89b97a8c2d2962712a8ee8c3c25ab8618123e5fc17c62674",
        "success": true,
        "state": "NONE",
        "sdk": "lp",
        "api": {
          "profile": "lp",
          "events": "lp"
        }
      }
    ]
  },
  DUPLICATE: {
    "response": [
      {
        "ct": {
          "accountId": "675-R59-R56Z",
          "regionCode": "eu1",
          "attributeMappings": {
            "name1": "ct-name1"
          },
          "token": "nope-nope"
        },
        "sha256": "7d81dc2ba80cbf55b1977a51d12c69d8696cf549926b7a71e95f0321879faf1a",
        "success": true,
        "profileUploadStartedTs": "2022-11-20T14:00:27.335Z",
        "eventsUploadStartedTs": "2022-11-20T14:00:27.335Z",
        "state": "EVENTS_UPLOAD_STARTED",
        "sdk": "lp+ct",
        "api": {
          "profile": "lp+ct",
          "events": "lp+ct"
        }
      }
    ]
  },
  // TODO: verify
  CLEVERTAP: {
    "response": [
      {
        "ct": {
          "accountId": "675-R59-R56Z",
          "regionCode": "eu1",
          "attributeMappings": {
            "name1": "ct-name1"
          },
          "token": "nope-nope"
        },
        "sha256": "7d81dc2ba80cbf55b1977a51d12c69d8696cf549926b7a71e95f0321879faf1a",
        "success": true,
        "profileUploadStartedTs": "2022-11-20T14:00:27.335Z",
        "eventsUploadStartedTs": "2022-11-20T14:00:27.335Z",
        "ctSdkTrafficStoppedTs": "2022-11-20T14:00:27.335Z",
        "state": "SDK_TRAFFIC_STOPPED",
        "sdk": "ct",
        "api": {
          "profile": "ct",
          "events": "ct"
        }
      }
    ]
  }
}
