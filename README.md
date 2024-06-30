# Basic of usage TunnelIO for end users

Hosted at [tunnel-tester.vercel.app](https://tunnel-tester.vercel.app/)
I will be adding proper documentation for code usage of both the base JS package as well as the React Hook wrapper and API as well

A testing for [@ayushbobale/tunnel-io](https://www.npmjs.com/package/@ayushbobale/tunnel-io) and [@ayushbobale/tunnel-react](https://www.npmjs.com/package/@ayushbobale/tunnel-react) packages

**Creation Date:** Jun 30, 2024  
**Created By:** Ayush Bobale  
[View most recent version on Tango.us](https://app.tango.us/app/workflow/15e74193-77c1-4a53-bd1a-34fd2475495b?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)

---

### 1. For Peer A check Is Initiator

![Step 1 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/cdd5a55c-1c4b-48df-80c0-537f565ed8f6/4c7e4ff8-6ae9-4919-89dd-9f385851c620.png?crop=focalpoint&fit=crop&fp-x=0.0610&fp-y=0.1061&fp-z=3.1223&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=205&mark-y=223&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NyZoPTQ3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

### 2. Copy Peer A's local description [can copy the JSON from below as well]

This the SDP offer of Peer A

![Step 2 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/2996616b-a170-4d5b-bf5c-36b90926c9cf/eebe97f6-fac5-43b2-8199-378683fa26db.png?crop=focalpoint&fit=crop&fp-x=0.2184&fp-y=0.1318&fp-z=2.4517&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=441&mark-y=206&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTcmaD02OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 3. Now Open Peer B into a new tab or a new computer

Paste the copied local description into the input beside Set Peer button

![Step 3 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/05959eb4-b22c-4dcb-9795-bcba71d700f5/ba944e2b-8c0f-4f7a-90d7-3fb8e02bc293.png?crop=focalpoint&fit=crop&fp-x=0.0653&fp-y=0.1318&fp-z=2.4032&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=21&mark-y=202&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 4. Click on Set Peer after pasting the local description of the Peer A

![Step 4 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/b763c20a-e281-4f2a-8970-55bfbf8ac2d0/12040d31-1b7b-47a5-937d-2658ed9588fa.png?crop=focalpoint&fit=crop&fp-x=0.1439&fp-y=0.1318&fp-z=2.8506&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=405&mark-y=240&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzQmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 5. Click on Copy localDescription

This creates the SDP answer to the offer of Peer A

![Step 5 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/5174e444-eb85-4006-b398-6bddc66c20eb/ae6f27b0-b3bd-4b62-b521-44f9e35e3a48.png?crop=focalpoint&fit=crop&fp-x=0.2184&fp-y=0.1318&fp-z=2.4517&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=441&mark-y=206&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTcmaD02OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 6. Paste the copied offer into the Peer A's peer text input

![Step 6 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/3d895441-8c20-4da0-b7f6-2beb0e40c1bc/6562e6bb-873d-4ae9-90d5-386a89554da2.png?crop=focalpoint&fit=crop&fp-x=0.0653&fp-y=0.1318&fp-z=2.4032&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=21&mark-y=202&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 7. Click on Set Peer to complete the connection

![Step 7 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/0641aeb2-c7b3-418c-9600-17106d083ea7/e702b720-ec49-4ad0-80ca-2c5759d4a741.png?crop=focalpoint&fit=crop&fp-x=0.1439&fp-y=0.1318&fp-z=2.8506&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=405&mark-y=240&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzQmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 8. Test by sending a message from Peer A to Peer B and vice versa

![Step 8 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/b36f8447-f7d1-43c8-ba15-6e5409bed084/fc8fc0c9-4e77-42dd-8797-90a649e08f88.png?crop=focalpoint&fit=crop&fp-x=0.0653&fp-y=0.1615&fp-z=2.4032&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=21&mark-y=255&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 9. Type "b"

![Step 9 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/9b41e647-0919-498a-8540-82e1f5e39a94/c69faaa4-b0c8-4ea3-90f2-c6a807422090.png?crop=focalpoint&fit=crop&fp-x=0.0653&fp-y=0.1615&fp-z=2.4032&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=21&mark-y=255&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 10. A bootleg file transfer has been implemented although it simultaneously bi-directional file transfer is not tested

Due to the limitation in Firefox Browser for [showsavefilepicker](https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker) API all downloads are in-memory so larger files are not ideal to send

![Step 10 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/42c75188-563b-40b0-b8db-7058c1b5cb2a/2c64471a-f4be-4b1c-a4b9-29a86e5f2134.png?crop=focalpoint&fit=crop&fp-x=0.1050&fp-y=0.2079&fp-z=2.0184&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=18&mark-y=288&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NzMmaD00OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 11. Click on Send File

![Step 11 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/964a3dfb-8ace-4f54-9868-b0baa901df3d/c0613658-d0c0-4ef4-9c8c-b94f7889cc53.png?crop=focalpoint&fit=crop&fp-x=0.2252&fp-y=0.2090&fp-z=2.8195&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=508&mark-y=333&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODUmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### 12. File transfer progress is shown on both ends with send progress for sender and receive progress for receiver

![Step 12 screenshot](https://images.tango.us/workflows/15e74193-77c1-4a53-bd1a-34fd2475495b/steps/28b4b6f3-98c0-45ab-bc97-7cc5567563db/8676f6df-307a-43ad-a6d9-339e93f7dbca.png?crop=focalpoint&fit=crop&fp-x=0.5002&fp-y=0.3744&fp-z=1.0073&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=4&mark-y=164&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTkyJmg9MjMzJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

<br/>

---
