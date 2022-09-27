let a = parseInt(prompt(" число", "")); let b = parseInt(prompt(" число", ""));c = parseInt(prompt(" число", "")); if (a>b&& b>c){res = a - c;} 
else if (a>c && c>b) {res = a - b;} 
else if (b>c && c>a) {res = b - a;}
else if (c>b&& b>a) {res = c - a;} 
else if (c>a&& a>b) {res = c - b;}
