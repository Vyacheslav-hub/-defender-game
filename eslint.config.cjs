module.exports = [
    {
        ignores: ["dist"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off"
        }
    }
];