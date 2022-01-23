#include <iostream>

int main() {
    int         tRoom;
    int         tCond;
    std::string workingMode;

    std::cin >> tRoom >> tCond >> workingMode;
    
    if (
        (workingMode == "freeze" && tCond < tRoom)
        || (workingMode == "heat" && tCond > tRoom)
        || (workingMode == "auto")
    ) {
        std::cout << tCond << std::endl;
    }
    else {
        std::cout << tRoom << std::endl;
    }
}