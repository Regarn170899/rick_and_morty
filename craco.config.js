
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@api': path.resolve(__dirname, 'src/api'),
            '@custom-types': path.resolve(__dirname, 'src/custom-types'),
            '@navigation': path.resolve(__dirname, 'src/navigation'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@constants': path.resolve(__dirname, 'src/Constans'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
    style: {
        sass: {
            loaderOptions: {
                additionalData:
                    '@import "src/scss/variables.scss";',
            },
        },
    },
};
