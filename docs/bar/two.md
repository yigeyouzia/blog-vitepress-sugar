## https://oi-wiki.org/lang/csl/algorithm/

## 最大值 max_element 和 最小值 min_element

### 数组用法

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

struct Ballons{
	int cnt;
	string s;
};
int main() {
    int a[] = {3, 6, 8, 2};
    int len = sizeof(a) / sizeof(int);
    //*为获取地址内存空间的元素
    cout << *max_element(a, a + len) << endl;//8//输出最大元素
    cout << max_element(a, a + len) << endl;//输出的为最大值的地址值
	cout << max_element(a, a + len) - a << endl;//2 //最大元素的下标
    cout << *min_element(a, a + len) << endl;//2

    return 0;
}
```

### vector

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
	vector<int> v;
	v.push_back(7); v.push_back(4);
	v.push_back(2); v.push_back(9);

	cout << *max_element(v.begin(), v.end()) << endl;//9
	cout << *min_element(v.begin(), v.end()) << endl;//2

	return 0;
}
```

## Lambda

### 适用场景

#### sort

```cpp
sort(intervals.begin(), intervals.end(),
    [](const auto& u, const auto& v) {
            return u[0] < v[0];
        });
```

#### for_each

```cpp
// for_each应用实例
int a[4] = {11, 2, 33, 4};
sort(a, a+4, [=](int x, int y) -> bool { return x%10 < y%10; } );
for_each(a, a+4, [=](int x) { cout << x << " ";} );
```

#### find_if

```cpp
// find_if应用实例
int x = 5;
int y = 10;
deque<int> coll = { 1, 3, 19, 5, 13, 7, 11, 2, 17 };
auto pos = find_if(coll.cbegin(), coll.cend(), [=](int i) {
    return i > x && i < y;
});
```

#### remove_if

```cpp
// remove_if应用实例
std::vector<int> vec_data = {1, 2, 3, 4, 5, 6, 7, 8, 9};
int x = 5;
vec_data.erase(std::remove_if(vec.date.begin(), vec_data.end(),
    [](int i) { return n < x;}), vec_data.end());

std::for_each(vec.date.begin(), vec_data.end(), [](int i) {
    std::cout << i << std::endl;});

```

## lower_bound upper_bound

- lower_bound( begin,end,num)：从数组的 begin 位置到 end-1 位置二分查找第一个大于或等于 num 的数字，找到返回该数字的地址，不存在则返回 end。通过返回的地址减去起始地址 begin,得到找到数字在数组中的下标。
- upper_bound( begin,end,num)：从数组的 begin 位置到 end-1 位置二分查找第一个大于 num 的数字，找到返回该数字的地址，不存在则返回 end。通过返回的地址减去起始地址 begin,得到找到数字在数组中的下标

```cpp
#include<bits/stdc++.h>
using namespace std;
const int maxn=100000+10;
const int INF=2*int(1e9)+10;
#define LL long long
int cmd(int a,int b){
    return a>b;
}
int main(){
    int num[6]={1,2,4,7,15,34};
    sort(num,num+6);                           //按从小到大排序
    int pos1=lower_bound(num,num+6,7)-num;    //返回数组中第一个大于或等于被查数的值
    int pos2=upper_bound(num,num+6,7)-num;    //返回数组中第一个大于被查数的值
    cout<<pos1<<" "<<num[pos1]<<endl;
    cout<<pos2<<" "<<num[pos2]<<endl;
    sort(num,num+6,cmd);                      //按从大到小排序
    int pos3=lower_bound(num,num+6,7,greater<int>())-num;  //返回数组中第一个小于或等于被查数的值
    int pos4=upper_bound(num,num+6,7,greater<int>())-num;  //返回数组中第一个小于被查数的值
    cout<<pos3<<" "<<num[pos3]<<endl;
    cout<<pos4<<" "<<num[pos4]<<endl;
    return 0;
}

3 7
4 15
2 7
3 4
```

## priority_queue（top,pop, push)

1. 定义：priority_queue<Type, Container, Functional> ，priority_queue 属于是容器适配器，需要指定底层的容器，所以第一个参数 Type 是 queue 里面存的数据的类型，第二个参数 Container 是要使用的底层容器(一般是 vector)，Functional 就是比较的方式（准确来说应该是比较方式的类型）.

```cpp
//升序队列
priority_queue <int,vector<int>,greater<int> > q; // 1 2 3 4 5
//降序队列
priority_queue <int,vector<int>,less<int> >q; // 5 4 3 2 1 对头最大
priority_queue <int> q
//greater和less是std实现的两个仿函数（就是使一个类的使用看上去像一个函数。
//其实现就是类中实现一个operator()，这个类就有了类似函数的行为，就是一个仿函数类了）
```

1. lambda

```cpp
auto cmp = [](pair<int, int> left, pair<int, int> right) ->
bool { return left.second > right.second; };

priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(cmp)>  pri_que(cmp);
```

1. 仿函数

```cpp
class mycomparison {
public:
    bool operator()(const pair<int, int>& left, const pair<int, int>& right) {
        return left.second > right.second;
    }
};
priority_queue<pair<int,int>,vector<pair<int, int>>,mycomparison> pri_que2;
```

1. 结构体

```cpp
struct tmp1 //运算符重载<
{
    int x;
    tmp1(int a) {x = a;}
    bool operator<(const tmp1& a) const
    {
        return x < a.x; //大顶堆
    }
}
priority_queue<tmp1> pri_que3;
```

## vector PII

```cpp
vector<PII> res;
res.push_back({1, 2});
res.push_back({3, 4});
res.push_back({5, 6});
for(auto [a, b] : res)
    cout << a << b;
```

## next_permutation

- [https://blog.csdn.net/qian2213762498/article/details/79683905?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167879237516800215085758%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167879237516800215085758&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-79683905-null-null.142^v73^wechat_v2,201^v4^add_ask,239^v2^insert_chatgpt&utm_term=next_permutation&spm=1018.2226.3001.4187](https://blog.csdn.net/qian2213762498/article/details/79683905?ops_request_misc=%7B%22request%5Fid%22%3A%22167879237516800215085758%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=167879237516800215085758&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-79683905-null-null.142^v73^wechat_v2,201^v4^add_ask,239^v2^insert_chatgpt&utm_term=next_permutation&spm=1018.2226.3001.4187)

1. 数字 1 ~ n

```cpp
#include <iostream>
#include<algorithm>
using namespace std;

int main(int argc, char** argv) {
    int a[4]={1,2,3,4};
    sort(a,a+4);
    do{
        //cout<<a[0]<<" "<<a[1]<<" "<<a[2]<<" "<<a[3]<<endl;
        for(int i=0;i<4;i++)
            cout<<a[i]<<" ";
        cout<<endl;
    }while(next_permutation(a,a+4));
    return 0;
}
```

1. 字符串 按字典序全排列

```cpp
#include <iostream>
#include<algorithm>
using namespace std;

int main(int argc, char** argv) {
	string str;
	cin>>str;
	sort(str.begin(),str.end());
	do{
		cout<<str<<endl;
	}while(next_permutation(str.begin(),str.end()));
	return 0;
}
```

1. 能否直接算出集合{1, 2, ..., m}的第 n 个排列？

```cpp
#include <iostream>
#include<algorithm>
using namespace std;

int main(int argc, char** argv) {
	int a[7]={1,2,3,4,5,6,7};
	sort(a,a+7);
	int n=0;
	do{
		if(n==1654){
		    for(int i=0;i<7;i++)
              cout<<a[i];
            cout<<endl;
        break;
		}
        n++;
    }while(next_permutation(a,a+7));
	return 0;
}
```
