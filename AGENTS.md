## Windows development rules

- Do not run long-lived development servers such as `pnpm dev`.
- The user starts the development server manually.
- You may run `pnpm lint`, `pnpm typecheck`, `pnpm test`, and one-off builds.
- Do not modify ACLs, ownership, or Windows security permissions.
- Do not run commands as administrator.
- Do not use `takeown` or `icacls` unless explicitly requested.
