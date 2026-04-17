
# gaal

     +----------------------+
        |     gaal.yaml        |
        |----------------------|
        | - Config             |
        | - Skills             |
        | - Rules              |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |        GAAL          |
        |----------------------|
        | - Execution          |
        | - Skills runtime     |
        | - Validation         |
        | - Orchestration      |
        +----------------------+

# gaal manager

+----------------------+
        |    GAAL MANAGER      |
        |----------------------|
        | - API / RPC          |
        | - Config store       |
        | - Policy / Rules     |
        | - Versioning         |
        +----------+-----------+
                   |
              RPC / Sync
                   |
                   v
        +----------------------+
        |        GAAL          |
        |----------------------|
        | - Execution          |
        | - Skills runtime     |
        | - Validation         |
        | - Orchestration      |
        +----------------------+


# Overall

+----------------+   +----------------------+   +----------------------+
        |  OSS MANAGER   |   | ENTERPRISE MANAGER   |   |     SAAS MANAGER     |
        |----------------|   |----------------------|   |----------------------|
        | Basic API      |   | OSS + Extensions     |   | Hosted Enterprise    |
        | File / RPC     |   | Advanced features    |   | Fully managed        |
        | Self-hosted    |   | Self-hosted          |   | Multi-tenant         |
        +--------+-------+   +----------+-----------+   +----------+-----------+
                 \                    |                          /
                  \                   |                         /
                   \                  |                        /
                    \                 |                       /
                     \                |                      /
                      \               |                     /
                       \              |                    /
                        \             |                   /
                         v            v                  v

                    +--------------------------------------+
                    |                GAAL                  |
                    |--------------------------------------|
                    | - Execution                          |
                    | - Skills runtime                     |
                    | - Validation                         |
                    | - Orchestration                      |
                    |--------------------------------------|
                    | Config Provider                      |
                    | - File (gaal.yaml)                   |
                    | - RPC (Manager)                      |
                    +--------------------------------------+
