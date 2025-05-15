import { handler } from './index.mjs';

handler({
  Records: [
    {
      s3: {
        bucket: { name: "class-17" },
        object: { key: "test", size: 2002 },
      },
    },
  ],
}).then(() => console.log("Check your bucket"));
