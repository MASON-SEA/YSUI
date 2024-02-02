import typescript from '@rollup/plugin-typescript';
import css from "rollup-plugin-import-css";
// import less from 'rollup-plugin-less';
// import { uglify } from "rollup-plugin-uglify";

export default {
    input: 'rollup.common.ts',
    output: {
        file: 'dist/index.js'
    },
    plugins: [
        css(),
        typescript(),
        // uglify()
    ]
};