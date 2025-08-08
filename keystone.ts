// Welcome to Keystone!
import "dotenv/config";
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config
import { config } from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file
import { lists } from "./schema";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";
import type { DatabaseProvider, IdFieldConfig } from "@keystone-6/core/types";

const PORT = Number(process.env.PORT) || 3000;

const db = {
  provider: "postgresql" as DatabaseProvider,
  url: process.env.DATABASE_URL!,
  idField: { kind: "uuid" } as IdFieldConfig,
};

export default withAuth(
  config({
    server: {
      port: PORT,
      cors: {
        // origin: [process.env.process.env.FRONTEND_URL],
        origin: "*", // TODO:Temporary. Allows all origins. Use [process.env.FRONTEND_URL] in production for security.
      },
    },
    db,
    session,
    storage: {
      local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `${process.env.IMAGE_URL}${path}`,
        serverRoute: {
          path: "/images",
        },
        storagePath: "public/images",
      },
    },
    lists,
  })
);
