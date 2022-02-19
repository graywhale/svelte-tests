export default {
    moduleDirectories: [
        "node_modules"
    ],
    moduleFileExtensions: [
        "js",
        "ts",
        "svelte"
    ],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.svelte$": ["svelte-jester", {preprocess: true}],
        "^.+\\.(t|j)sx?$": '@swc/jest',
        "^.+\\.css$": "jest-transform-css"
    },
    testMatch: [
        "**/tests/**/*.[jt]s?(x)",
    ],
    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|less)$": "identity-obj-proxy"
    }
}
