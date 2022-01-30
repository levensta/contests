#include <iostream>
#include <vector>
 
int W, H;
std::vector< std::vector<int> > dp(51, std::vector<int> (51, -1));
 
int p(int x, int y) {

    if (x < 1 || y < 1 || x > W || y > H){
        return 0;
    }
    if (x == 1 && y == 1){
        return 1;
    }
    if (dp[x][y] != -1){
        return dp[x][y];
    }

    dp[x][y] = (p(x - 2, y - 1) +
               p(x - 1, y - 2));

    return dp[x][y];

}
 
int main() {
    int n, m;

    std::cin >> n >> m;
    W = n;
    H = m;

    if (n == 1 || m == 1 || ((n + m) % 3) != 2) {
        std::cout << 0 << std::endl;
    }
    else {
        std::cout << p(n, m) << std::endl;
    }

    return 0;
}