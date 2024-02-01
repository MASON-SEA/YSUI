import typescript from '@rollup/plugin-typescript';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: 'rollup.common.ts',
    output: {
        file: './build/bundle.js'
    },
    plugins: [
        typescript(),
        uglify()
    ]
};