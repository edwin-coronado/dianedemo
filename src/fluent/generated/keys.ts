import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '54b618842eb1498bad9fd117efac5351'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '3facb48e8472433591a9cadb2b5a144d'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'd3ae650a0d7848a687977027ec5f3cdb'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7e388102bb654ffaa2cdd8b9346f6049'
                    }
                }
            }
        }
    }
}
