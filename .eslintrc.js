module.exports = {
    parser: "@typescript-eslint/parser", // Указываем парсер для TypeScript
    parserOptions: {
        ecmaVersion: 2020, // Поддерживаем ES2020
        sourceType: "module", // Поддерживаем модули
        ecmaFeatures: {
            jsx: true, // Разрешаем JSX
        },
    },
    settings: {
        react: {
            version: "detect", // Позволяет ESLint автоматически находить версию React
        },
    },
    extends: [
        "eslint:recommended", // Используем рекомендованные правила ESLint
        "plugin:react/recommended", // Рекомендуемые правила для React
        "@typescript-eslint/recommended", // Рекомендуемые правила для TypeScript
        "plugin:jsx-a11y/recommended", // Рекомендуемые правила для доступности (Accessibility)
        "plugin:prettier/recommended", // Используем Prettier для форматирования
    ],
    rules: {
        // Ваши правила
        "react/react-in-jsx-scope": "off", // Не требуется для React 17+
        "react/prop-types": "off", // Не требуется для TypeScript
        "@typescript-eslint/no-explicit-any": "warn", // Предупреждения о типе 'any'
        "@typescript-eslint/explicit-module-boundary-types": "off", // Требовать явное указание типа возвращаемого значения функций
        "jsx-a11y/alt-text": "warn", // Обязательно указывать alt для изображений
        "jsx-a11y/no-static-element-interactions": "warn", // Предупреждения о взаимодействии с статическими элементами
        "jsx-a11y/click-events-have-key-events": "warn", // Проверка на события клика
        // Добавьте другие правила по мере необходимости
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"], // Применяем дополнительные правила к TypeScript
            rules: {
                "@typescript-eslint/no-unused-vars": [
                    "warn",
                    { argsIgnorePattern: "^_" }, // Игнорировать переменные, начинающиеся с _
                ],
            },
        },
    ],
};