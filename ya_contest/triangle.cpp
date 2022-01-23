#include <iostream>

int main() {
    int a, b, c;

    std::cin >> a >> b >> c;
    
    if (a + b > c) {
        if (b + c > a) {
            if (c + a > b) {
                std::cout << "YES" << std::endl;
            }
            else {
                std::cout << "NO" << std::endl;
            }
        }
        else {
            std::cout << "NO" << std::endl;
        }
    }
    else {
        std::cout << "NO" << std::endl;
    }
}