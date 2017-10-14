/**
 * Первоначальные установки для тестового окружения
 */

// Костыль (shim) для requestAnimationFrame для тестового окружения
global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};