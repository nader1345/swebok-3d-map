// In-app learner glossary (FA+EN). Mini-lessons; no source names in UI.
SWE.glossary = [
  {
    "id": "graph",
    "fa": "گراف",
    "en": "Graph",
    "aliasesFa": [
      "گراف",
      "گراف‌ها",
      "گرافها"
    ],
    "aliasesEn": [
      "graph",
      "graphs",
      "Graph"
    ],
    "faExp": "گراف مجموعه‌ای از رأس‌ها (گره‌ها) است که با یال‌ها به هم وصل می‌شوند. یال می‌تواند جهت‌دار یا بدون‌جهت باشد و گاهی وزن داشته باشد. گراف برای مدل‌کردن شبکه‌ها، وابستگی ماژول‌ها، مسیرها و روابط به‌کار می‌رود. بسیاری از الگوریتم‌های مسیر‌یابی و تحلیل ساختار روی گراف تعریف می‌شوند.",
    "enExp": "A graph is a set of vertices (nodes) connected by edges. Edges may be directed or undirected and may carry weights. Graphs model networks, module dependencies, routes, and relationships. Many pathfinding and structure-analysis algorithms are defined on graphs.",
    "faEx": "دوستان در یک شبکهٔ اجتماعی رأس‌اند و دوستی‌ها یال؛ پیدا کردن کوتاه‌ترین مسیر بین دو نفر همان مسئلهٔ مسیر در گراف است.",
    "enEx": "People in a social network are vertices and friendships are edges; finding the shortest path between two people is a classic graph path problem.",
    "related": [
      "tree",
      "algorithm",
      "set"
    ],
    "diagram": "graph",
    "faDef": "گراف مجموعه‌ای از رأس‌ها (گره‌ها) است که با یال‌ها به هم وصل می‌شوند. یال می‌تواند جهت‌دار یا بدون‌جهت باشد و گاهی وزن داشته باشد. گراف برای مدل‌کردن شبکه‌ها، وابستگی ماژول‌ها، مسیرها و روابط به‌کار می‌رود. بسیاری از الگوریتم‌های مسیر‌یابی و تحلیل ساختار روی گراف تعریف می‌شوند.",
    "enDef": "A graph is a set of vertices (nodes) connected by edges. Edges may be directed or undirected and may carry weights. Graphs model networks, module dependencies, routes, and relationships. Many pathfinding and structure-analysis algorithms are defined on graphs.",
    "faHow": "رأس‌ها موجودیت‌اند و یال‌ها رابطه. اگر یال جهت داشته باشد گراف جهت‌دار است؛ اگر عدد روی یال باشد وزن‌دار است. الگوریتم‌هایی مثل BFS و DFS گراف را پیمایش می‌کنند و کوتاه‌ترین مسیر بدون وزن با BFS به‌دست می‌آید.",
    "enHow": "Vertices are entities; edges are relations. Directed edges have orientation; weighted edges carry costs. Algorithms such as BFS and DFS traverse graphs; unweighted shortest paths come from BFS.",
    "faWhy": "تقریباً هر سامانهٔ نرم‌افزاری شبکه‌ای از وابستگی‌هاست: ماژول‌ها، سرویس‌ها، کاربران. مدل گرافی کمک می‌کند مسیر، حلقه، گلوگاه و اثر تغییر را ببینید.",
    "enWhy": "Almost every software system is a network of dependencies—modules, services, users. A graph model reveals paths, cycles, bottlenecks, and change impact.",
    "sample": {
      "faQ": "در گراف زیر (A به B و C، B و C به D، D به E)، کوتاه‌ترین مسیر از A به E با BFS چند یال دارد و یک مسیر نمونه چیست؟",
      "enQ": "In the graph below (A–B, A–C, B–D, C–D, D–E), how many edges are on a shortest A→E path found by BFS, and name one such path?",
      "faSteps": [
        "از A شروع می‌کنیم و لایه به لایه همسایه‌ها را می‌بینیم (BFS).",
        "لایه ۱: B و C. لایه ۲: D. لایه ۳: E.",
        "اولین بار که به E می‌رسیم، مسیر کوتاه‌ترین است: مثلاً A → B → D → E.",
        "تعداد یال‌ها = ۳."
      ],
      "enSteps": [
        "Start at A and visit neighbors level by level (BFS).",
        "Level 1: B, C. Level 2: D. Level 3: E.",
        "The first time we reach E is a shortest path, e.g. A → B → D → E.",
        "Number of edges = 3."
      ],
      "faAns": "۳ یال؛ مسیر نمونه: A → B → D → E (یا A → C → D → E).",
      "enAns": "3 edges; e.g. A → B → D → E (or A → C → D → E).",
      "viz": "<svg class=\"gdiag\" viewBox=\"0 0 220 120\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n<circle cx=\"30\" cy=\"60\" r=\"14\" fill=\"#f27a5e\"/><text x=\"30\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\">A</text>\n<circle cx=\"90\" cy=\"30\" r=\"14\" fill=\"#e7ad3f\"/><text x=\"90\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" fill=\"#3b2f42\">B</text>\n<circle cx=\"90\" cy=\"90\" r=\"14\" fill=\"#e7ad3f\"/><text x=\"90\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" fill=\"#3b2f42\">C</text>\n<circle cx=\"150\" cy=\"60\" r=\"14\" fill=\"#9c4f96\"/><text x=\"150\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\">D</text>\n<circle cx=\"200\" cy=\"60\" r=\"14\" fill=\"#2fa36b\"/><text x=\"200\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\">E</text>\n<path d=\"M44 54 L76 36\" stroke=\"#5a3040\" stroke-width=\"2\" fill=\"none\"/>\n<path d=\"M44 66 L76 84\" stroke=\"#5a3040\" stroke-width=\"2\" fill=\"none\"/>\n<path d=\"M104 36 L136 54\" stroke=\"#5a3040\" stroke-width=\"2\" fill=\"none\"/>\n<path d=\"M104 84 L136 66\" stroke=\"#5a3040\" stroke-width=\"2\" fill=\"none\"/>\n<path d=\"M164 60 L186 60\" stroke=\"#5a3040\" stroke-width=\"2\" fill=\"none\"/>\n</svg>"
    }
  },
  {
    "id": "tree",
    "fa": "درخت",
    "en": "Tree",
    "aliasesFa": [
      "درخت",
      "درخت‌ها",
      "درختها",
      "درختواره"
    ],
    "aliasesEn": [
      "tree",
      "trees",
      "Tree"
    ],
    "faExp": "درخت گراف متصل بدون دور است؛ معمولاً یک ریشه دارد و بقیهٔ رأس‌ها با مسیر یکتا به ریشه می‌رسند. درخت‌ها سلسله‌مراتب را نشان می‌دهند: پوشه و فایل، درخت تصمیم، یا ساختار سند. در نرم‌افزار برای جست‌وجو، ایندکس و سازمان‌دهی داده بسیار رایج‌اند.",
    "enExp": "A tree is a connected acyclic graph, usually with one root and a unique path from the root to every other vertex. Trees express hierarchy: folders and files, decision trees, or document structure. They are widely used for search, indexing, and organizing data.",
    "faEx": "ساختار پوشه‌های سیستم‌عامل یک درخت است: ریشه دیسک است و هر پوشه فرزندانی دارد بدون اینکه به پوشهٔ بالاتر حلقه بزند.",
    "enEx": "A file-system folder layout is a tree: the disk root branches into folders without cycles back to a parent.",
    "related": [
      "graph",
      "algorithm",
      "stack"
    ],
    "diagram": "tree",
    "faDef": "درخت گراف متصل بدون دور است؛ معمولاً یک ریشه دارد و بقیهٔ رأس‌ها با مسیر یکتا به ریشه می‌رسند. درخت‌ها سلسله‌مراتب را نشان می‌دهند: پوشه و فایل، درخت تصمیم، یا ساختار سند. در نرم‌افزار برای جست‌وجو، ایندکس و سازمان‌دهی داده بسیار رایج‌اند.",
    "enDef": "A tree is a connected acyclic graph, usually with one root and a unique path from the root to every other vertex. Trees express hierarchy: folders and files, decision trees, or document structure. They are widely used for search, indexing, and organizing data.",
    "faHow": "درخت معمولاً یک ریشه دارد؛ هر گره غیرریشه دقیقاً یک والد دارد و مسیر یکتا به ریشه. پیمایش‌ها (پیش/میان/پس‌ترتیب) ترتیب بازدید را تعیین می‌کنند. درخت دودویی حداکثر دو فرزند دارد.",
    "enHow": "A tree usually has one root; every other node has exactly one parent and a unique path to the root. Traversals (pre/in/post-order) define visit order. A binary tree has at most two children.",
    "faWhy": "سلسله‌مراتب فایل، DOM، ایندکس جست‌وجو و درخت تصمیم همگی درخت‌اند. انتخاب ساختار درختی روی سرعت جست‌وجو و وضوح طراحی اثر می‌گذارد.",
    "enWhy": "File hierarchies, the DOM, search indexes, and decision trees are all trees. Structure choice affects search speed and design clarity.",
    "sample": {
      "faQ": "برای درخت ریشه‌دار A با فرزندان B و C، و فرزندان B برابر D و E، ترتیب پیش‌ترتیب (pre-order) پیمایش چیست؟",
      "enQ": "For rooted tree A with children B and C, and B’s children D and E, what is the pre-order traversal?",
      "faSteps": [
        "پیش‌ترتیب: اول ریشه، بعد زیردرخت چپ، بعد راست.",
        "بازدید A، سپس زیردرخت B: B سپس D سپس E، سپس زیردرخت C: C."
      ],
      "enSteps": [
        "Pre-order: root, then left subtree, then right.",
        "Visit A, then B’s subtree (B, D, E), then C."
      ],
      "faAns": "A, B, D, E, C",
      "enAns": "A, B, D, E, C",
      "viz": "<svg class=\"gdiag\" viewBox=\"0 0 160 110\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n<circle cx=\"80\" cy=\"20\" r=\"12\" fill=\"#f27a5e\"/><text x=\"80\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\">A</text>\n<circle cx=\"40\" cy=\"60\" r=\"12\" fill=\"#e7ad3f\"/><text x=\"40\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#3b2f42\">B</text>\n<circle cx=\"120\" cy=\"60\" r=\"12\" fill=\"#e7ad3f\"/><text x=\"120\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#3b2f42\">C</text>\n<circle cx=\"20\" cy=\"98\" r=\"12\" fill=\"#9c4f96\"/><text x=\"20\" y=\"102\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\">D</text>\n<circle cx=\"60\" cy=\"98\" r=\"12\" fill=\"#9c4f96\"/><text x=\"60\" y=\"102\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\">E</text>\n<path d=\"M70 30 L50 50\" stroke=\"#5a3040\" stroke-width=\"2\"/><path d=\"M90 30 L110 50\" stroke=\"#5a3040\" stroke-width=\"2\"/>\n<path d=\"M32 70 L24 88\" stroke=\"#5a3040\" stroke-width=\"2\"/><path d=\"M48 70 L56 88\" stroke=\"#5a3040\" stroke-width=\"2\"/>\n</svg>"
    }
  },
  {
    "id": "algorithm",
    "fa": "الگوریتم",
    "en": "Algorithm",
    "aliasesFa": [
      "الگوریتم",
      "الگوریتم‌ها",
      "الگوریتمها"
    ],
    "aliasesEn": [
      "algorithm",
      "algorithms",
      "Algorithm"
    ],
    "faExp": "الگوریتم مجموعه‌ای گام‌به‌گام و متناهی از دستورها برای حل یک مسئله است. باید ورودی را بپذیرد، پس از تعداد محدودی گام تمام شود و خروجی مشخص تولید کند. کیفیت الگوریتم را معمولاً با درستی و میزان منابع مصرفی (زمان و حافظه) می‌سنجند.",
    "enExp": "An algorithm is a finite, step-by-step procedure for solving a problem. It takes input, finishes after finitely many steps, and produces a defined output. Quality is judged by correctness and resource use (time and memory).",
    "faEx": "برای مرتب‌کردن فهرست تراکنش‌ها بر اساس زمان، الگوریتم مرتب‌سازی ادغامی یا سریع یک ترتیب قطعی می‌سازد.",
    "enEx": "Sorting a list of transactions by time with merge sort or quicksort is applying an algorithm to get a definite order.",
    "related": [
      "complexity",
      "recursion",
      "data-structure"
    ],
    "faDef": "الگوریتم مجموعه‌ای گام‌به‌گام و متناهی از دستورها برای حل یک مسئله است. باید ورودی را بپذیرد، پس از تعداد محدودی گام تمام شود و خروجی مشخص تولید کند. کیفیت الگوریتم را معمولاً با درستی و میزان منابع مصرفی (زمان و حافظه) می‌سنجند.",
    "enDef": "An algorithm is a finite, step-by-step procedure for solving a problem. It takes input, finishes after finitely many steps, and produces a defined output. Quality is judged by correctness and resource use (time and memory).",
    "faHow": "الگوریتم ورودی را می‌گیرد، در تعداد متناهی گام قطعی (یا احتمالیِ مشخص) به خروجی می‌رسد. درستی، خاتمه‌پذیری و کارایی سه پرسش اصلی‌اند. شبه‌کد یا کد آن را قابل‌بازبینی می‌کند.",
    "enHow": "An algorithm maps inputs to outputs in finitely many definite (or well-specified random) steps. Correctness, termination, and efficiency are the core questions. Pseudocode or code makes it reviewable.",
    "faWhy": "بدون الگوریتم روشن، پیاده‌سازی سلیقه‌ای و غیرقابل‌تست می‌شود. مقایسهٔ الگوریتم‌ها تصمیم معماری مقیاس را شکل می‌دهد.",
    "enWhy": "Without a clear algorithm, implementation is ad hoc and hard to test. Comparing algorithms shapes scaling architecture.",
    "sample": {
      "faQ": "الگوریتمی هر بار آرایهٔ n عنصری را دو بار کامل پیمایش می‌کند. مرتبهٔ زمانی تقریبی؟",
      "enQ": "An algorithm fully scans an n-element array twice. Approximate time complexity?",
      "faSteps": [
        "دو پیمایش کامل ≈ 2n گام.",
        "ثابت ۲ در Big-O حذف می‌شود → O(n)."
      ],
      "enSteps": [
        "Two full scans ≈ 2n steps.",
        "Drop constant 2 → O(n)."
      ],
      "faAns": "O(n)",
      "enAns": "O(n)"
    }
  },
  {
    "id": "complexity",
    "fa": "پیچیدگی محاسباتی",
    "en": "Computational complexity",
    "aliasesFa": [
      "پیچیدگی محاسباتی",
      "پیچیدگی الگوریتم",
      "پیچیدگی زمانی",
      "مرتبهٔ رشد",
      "Big-O",
      "Big O"
    ],
    "aliasesEn": [
      "computational complexity",
      "time complexity",
      "space complexity",
      "Big-O",
      "Big O",
      "asymptotic complexity",
      "algorithmic complexity"
    ],
    "faExp": "پیچیدگی می‌گوید وقتی اندازهٔ ورودی بزرگ می‌شود، زمان یا حافظهٔ الگوریتم تقریباً چقدر رشد می‌کند. نماد Big-O رشد را در بدترین حالت رایج خلاصه می‌کند؛ مثلاً O(n) خطی و O(n²) درجه‌دوم است. مقایسهٔ Big-O کمک می‌کند قبل از پیاده‌سازی بفهمیم کدام رویکرد برای دادهٔ بزرگ مناسب‌تر است.",
    "enExp": "Complexity describes how an algorithm’s time or memory grows as input size grows. Big-O notation summarizes typical worst-case growth—for example O(n) linear and O(n²) quadratic. Comparing Big-O helps choose approaches that scale before you implement them.",
    "faEx": "جست‌وجوی خطی در یک میلیون رکورد حدود یک میلیون مقایسه است (O(n))؛ جست‌وجوی دودویی روی همان دادهٔ مرتب حدود ۲۰ مقایسه است (O(log n)).",
    "enEx": "Linear search over a million records needs about a million comparisons (O(n)); binary search on the same sorted data needs about twenty (O(log n)).",
    "related": [
      "algorithm",
      "binary-search"
    ],
    "faDef": "پیچیدگی می‌گوید وقتی اندازهٔ ورودی بزرگ می‌شود، زمان یا حافظهٔ الگوریتم تقریباً چقدر رشد می‌کند. نماد Big-O رشد را در بدترین حالت رایج خلاصه می‌کند؛ مثلاً O(n) خطی و O(n²) درجه‌دوم است. مقایسهٔ Big-O کمک می‌کند قبل از پیاده‌سازی بفهمیم کدام رویکرد برای دادهٔ بزرگ مناسب‌تر است.",
    "enDef": "Complexity describes how an algorithm’s time or memory grows as input size grows. Big-O notation summarizes typical worst-case growth—for example O(n) linear and O(n²) quadratic. Comparing Big-O helps choose approaches that scale before you implement them.",
    "faHow": "هزینه را به‌صورت تابعی از اندازهٔ ورودی n بیان می‌کنیم. Big-O سقف رشد را در بدترین حالت رایج خلاصه می‌کند؛ ثابت‌ها و جملات کوچک‌تر کنار گذاشته می‌شوند. O(1)، O(log n)، O(n)، O(n log n)، O(n²) پله‌های آشنا هستند.",
    "enHow": "Cost is expressed as a function of input size n. Big-O summarizes typical worst-case growth, dropping constants and lower-order terms. Familiar steps include O(1), O(log n), O(n), O(n log n), O(n²).",
    "faWhy": "قبل از ساخت، می‌فهمید آیا رویکرد برای میلیون‌ها رکورد زنده می‌ماند. پیچیدگی بد دیر و گران خودش را نشان می‌دهد.",
    "enWhy": "Before building, you learn whether an approach survives millions of records. Bad complexity shows up late and costly.",
    "sample": {
      "faQ": "برای n = ۱٬۰۰۰٬۰۰۰، تقریباً چند مقایسه در جست‌وجوی خطی O(n) و چند در جست‌وجوی دودویی O(log₂ n) روی دادهٔ مرتب لازم است؟",
      "enQ": "For n = 1,000,000, about how many comparisons does linear search O(n) need versus binary search O(log₂ n) on sorted data?",
      "faSteps": [
        "جست‌وجوی خطی در بدترین حالت حدود n مقایسه می‌خواهد → ۱٬۰۰۰٬۰۰۰.",
        "جست‌وجوی دودویی حدود log₂(n) ≈ ۲۰ مقایسه می‌خواهد (۲²⁰ = ۱٬۰۴۸٬۵۷۶)."
      ],
      "enSteps": [
        "Linear search worst case ≈ n comparisons → 1,000,000.",
        "Binary search ≈ log₂(n) ≈ 20 (since 2²⁰ = 1,048,576)."
      ],
      "faAns": "خطی ≈ ۱٬۰۰۰٬۰۰۰؛ دودویی ≈ ۲۰.",
      "enAns": "Linear ≈ 1,000,000; binary ≈ 20."
    }
  },
  {
    "id": "set",
    "fa": "مجموعه",
    "en": "Set",
    "aliasesFa": [
      "مجموعه",
      "مجموعه‌ها",
      "مجموعهها",
      "مجموعه‌ای",
      "مجموعهای"
    ],
    "aliasesEn": [
      "mathematical set",
      "set theory",
      "finite set",
      "Set"
    ],
    "faExp": "مجموعه گردایه‌ای از اشیاء متمایز بدون ترتیب اجباری است. عمل‌های اجتماع، اشتراک و تفاضل زبان دقیق برای صحبت دربارهٔ عضویت و همپوشانی می‌دهند. در پایگاه‌داده و نیازمندی‌ها هم اغلب با مجموعه‌ها فکر می‌کنیم.",
    "enExp": "A set is a collection of distinct objects without a required order. Union, intersection, and difference give precise language for membership and overlap. Databases and requirements work also often reason in terms of sets.",
    "faEx": "مجموعهٔ کاربران فعال و مجموعهٔ کاربران دارای کارت؛ اشتراک آن‌ها کسانی‌اند که هم فعال‌اند و هم کارت دارند.",
    "enEx": "The set of active users and the set of cardholders; their intersection is people who are both active and hold a card.",
    "related": [
      "relation",
      "function-math",
      "logic"
    ],
    "diagram": "set",
    "faDef": "مجموعه گردایه‌ای از اشیاء متمایز بدون ترتیب اجباری است. عمل‌های اجتماع، اشتراک و تفاضل زبان دقیق برای صحبت دربارهٔ عضویت و همپوشانی می‌دهند. در پایگاه‌داده و نیازمندی‌ها هم اغلب با مجموعه‌ها فکر می‌کنیم.",
    "enDef": "A set is a collection of distinct objects without a required order. Union, intersection, and difference give precise language for membership and overlap. Databases and requirements work also often reason in terms of sets.",
    "faHow": "عضویت یکتا است؛ ترتیب در مجموعهٔ ریاضی مهم نیست. اجتماع، اشتراک، تفاضل و متمم عملیات پایه‌اند. مجموعهٔ توانی همهٔ زیرمجموعه‌ها را می‌سازد.",
    "enHow": "Membership is unique; order does not matter in a mathematical set. Union, intersection, difference, and complement are basic ops. The power set lists all subsets.",
    "faWhy": "مجوزها، برچسب‌ها، وابستگی‌ها و موارد تست اغلب مجموعه هستند؛ عملیات مجموعه باگ‌های تکراری را کم می‌کند.",
    "enWhy": "Permissions, tags, dependencies, and test cases are often sets; set operations reduce duplicate bugs.",
    "sample": {
      "faQ": "اگر A = {1,2,3,4} و B = {3,4,5,6}، اندازهٔ اجتماع، اشتراک و تفاضل A−B چیست؟",
      "enQ": "If A = {1,2,3,4} and B = {3,4,5,6}, what are |A∪B|, |A∩B|, and |A−B|?",
      "faSteps": [
        "A∪B = {1,2,3,4,5,6} → اندازه ۶.",
        "A∩B = {3,4} → اندازه ۲.",
        "A−B = {1,2} → اندازه ۲."
      ],
      "enSteps": [
        "A∪B = {1,2,3,4,5,6} → size 6.",
        "A∩B = {3,4} → size 2.",
        "A−B = {1,2} → size 2."
      ],
      "faAns": "|A∪B|=۶، |A∩B|=۲، |A−B|=۲",
      "enAns": "|A∪B|=6, |A∩B|=2, |A−B|=2"
    }
  },
  {
    "id": "relation",
    "fa": "رابطه",
    "en": "Relation",
    "aliasesFa": [
      "رابطه",
      "رابطه‌ها",
      "رابطهها",
      "روابط"
    ],
    "aliasesEn": [
      "relation",
      "relations",
      "binary relation"
    ],
    "faExp": "رابطه زیرمجموعه‌ای از حاصل‌ضرب دکارتی مجموعه‌هاست و می‌گوید کدام زوج‌ها به هم مربوط‌اند. ویژگی‌هایی مثل انعکاسی، متقارن و متعدی نوع رابطه را مشخص می‌کنند. مدل‌های داده و محدودیت‌های یکپارچگی بر روابط بنا می‌شوند.",
    "enExp": "A relation is a subset of a Cartesian product of sets and states which tuples are related. Properties such as reflexive, symmetric, and transitive classify relations. Data models and integrity constraints are built on relations.",
    "faEx": "رابطهٔ «سرپرست است» بین کارمندان: اگر A سرپرست B باشد و B سرپرست C، در سازمان‌های سلسله‌مراتبی معمولاً A به‌طور غیرمستقیم به C مرتبط است.",
    "enEx": "The “supervises” relation on employees: if A supervises B and B supervises C, hierarchical orgs often treat A as indirectly related to C.",
    "related": [
      "set",
      "function-math",
      "database"
    ],
    "faDef": "رابطه زیرمجموعه‌ای از حاصل‌ضرب دکارتی مجموعه‌هاست و می‌گوید کدام زوج‌ها به هم مربوط‌اند. ویژگی‌هایی مثل انعکاسی، متقارن و متعدی نوع رابطه را مشخص می‌کنند. مدل‌های داده و محدودیت‌های یکپارچگی بر روابط بنا می‌شوند.",
    "enDef": "A relation is a subset of a Cartesian product of sets and states which tuples are related. Properties such as reflexive, symmetric, and transitive classify relations. Data models and integrity constraints are built on relations.",
    "faHow": "رابطه زیرمجموعه‌ای از حاصل‌ضرب دکارتی است. بازتابی، متقارن و متعدی ویژگی‌های مهم‌اند؛ رابطهٔ هم‌ارزی افراز می‌سازد و ترتیب جزئی سلسله‌مراتب.",
    "enHow": "A relation is a subset of a Cartesian product. Reflexive, symmetric, and transitive properties matter; equivalence relations partition, partial orders rank.",
    "faWhy": "در پایگاه‌داده و مدل دامنه، رابطه بین موجودیت‌ها قواعد یکپارچگی و پیوستن جدول‌ها را تعریف می‌کند.",
    "enWhy": "In databases and domain models, relations define integrity rules and how tables join."
  },
  {
    "id": "function-math",
    "fa": "تابع",
    "en": "Function",
    "aliasesFa": [
      "تابع ریاضی",
      "توابع",
      "نگاشت"
    ],
    "aliasesEn": [
      "mathematical function",
      "function (math)",
      "mapping"
    ],
    "faExp": "تابع به هر ورودی از یک دامنه حداکثر یک خروجی از همدامنه نسبت می‌دهد. توابع یک‌به‌یک و پوشا انواع ویژه‌اند. در برنامه‌نویسی، تابع خالص بدون اثر جانبی همان ایده را دنبال می‌کند.",
    "enExp": "A function assigns to each input from a domain at most one output in a codomain. Injections and surjections are special kinds. In programming, a pure function without side effects follows the same idea.",
    "faEx": "تابع «کد ملی → شخص» در سامانهٔ احراز هویت باید برای هر کد حداکثر یک هویت برگرداند.",
    "enEx": "A national-ID → person lookup must return at most one identity per code.",
    "related": [
      "set",
      "relation"
    ],
    "faDef": "تابع به هر ورودی از یک دامنه حداکثر یک خروجی از همدامنه نسبت می‌دهد. توابع یک‌به‌یک و پوشا انواع ویژه‌اند. در برنامه‌نویسی، تابع خالص بدون اثر جانبی همان ایده را دنبال می‌کند.",
    "enDef": "A function assigns to each input from a domain at most one output in a codomain. Injections and surjections are special kinds. In programming, a pure function without side effects follows the same idea.",
    "faHow": "هر ورودی از دامنه دقیقاً به یک خروجی در بُرد نگاشت می‌شود. یک‌به‌یک و پوشا بودن نوع تابع را مشخص می‌کند. ترکیب توابع خروجی یکی را ورودی دیگری می‌کند.",
    "enHow": "Each domain input maps to exactly one codomain output. Injective and surjective describe the kind of map. Composition feeds one output into another.",
    "faWhy": "توابع خالص، نگاشت API و تبدیل داده مدل ریاضی روشنی دارند و تست‌پذیرترند.",
    "enWhy": "Pure functions, API maps, and data transforms have a clear math model and test more easily."
  },
  {
    "id": "logic",
    "fa": "منطق",
    "en": "Logic",
    "aliasesFa": [
      "منطق",
      "منطق گزاره‌ای",
      "منطق گزارهای",
      "منطق محمولی",
      "جدول درستی"
    ],
    "aliasesEn": [
      "logic",
      "propositional logic",
      "predicate logic",
      "truth table",
      "Boolean logic"
    ],
    "faExp": "منطق قواعد استدلال درست را مطالعه می‌کند: گزاره‌ها درست یا نادرست‌اند و با «و»، «یا»، «نقیض» و «اگر… آنگاه» ترکیب می‌شوند. منطق محمولی با سورها بیان دقیق‌تری می‌دهد. مشخصات، شرط‌ها و تست‌ها همگی بر منطق تکیه دارند.",
    "enExp": "Logic studies rules of sound reasoning: propositions are true or false and combine with and, or, not, and implication. Predicate logic adds quantifiers for finer statements. Specifications, conditions, and tests all rest on logic.",
    "faEx": "شرط «اگر موجودی کافی است و حساب مسدود نیست آنگاه انتقال مجاز است» یک گزارهٔ منطقی است که می‌توان با جدول درستی همهٔ حالاتش را پوشاند.",
    "enEx": "“If balance is enough and the account is not frozen, then transfer is allowed” is a logical claim you can cover with a truth table.",
    "related": [
      "formal-methods",
      "verification",
      "validation"
    ],
    "faDef": "منطق قواعد استدلال درست را مطالعه می‌کند: گزاره‌ها درست یا نادرست‌اند و با «و»، «یا»، «نقیض» و «اگر… آنگاه» ترکیب می‌شوند. منطق محمولی با سورها بیان دقیق‌تری می‌دهد. مشخصات، شرط‌ها و تست‌ها همگی بر منطق تکیه دارند.",
    "enDef": "Logic studies rules of sound reasoning: propositions are true or false and combine with and, or, not, and implication. Predicate logic adds quantifiers for finer statements. Specifications, conditions, and tests all rest on logic.",
    "faHow": "گزاره‌ها درست یا نادرست‌اند. ∧، ∨، ¬ و → آن‌ها را ترکیب می‌کنند. جدول درستی همهٔ حالت‌ها را نشان می‌دهد؛ استلزام فقط با مقدم درست و تالی نادرست باطل است.",
    "enHow": "Propositions are true or false. ∧, ∨, ¬, and → combine them. Truth tables list all cases; implication fails only when the premise is true and the conclusion false.",
    "faWhy": "شرایط if، پیش‌شرط API و قواعد کسب‌وکار همان منطق‌اند؛ ابهام منطقی باگ تولید می‌کند.",
    "enWhy": "If-conditions, API preconditions, and business rules are logic; logical ambiguity breeds bugs.",
    "sample": {
      "faQ": "در جدول درستی استلزام P→Q، چند سطر مقدار درست (T) می‌گیرند؟ مقدار F→F چیست؟",
      "enQ": "In the truth table for implication P→Q, how many rows are true (T)? What is F→F?",
      "faSteps": [
        "چهار ترکیب (P,Q) وجود دارد.",
        "P→Q فقط وقتی F است که P=T و Q=F؛ در سه سطر دیگر T است.",
        "وقتی هر دو F باشند، استلزام T است (خلاف واقعِ مقدم، نتیجه را ابطال نمی‌کند)."
      ],
      "enSteps": [
        "There are four (P,Q) pairs.",
        "P→Q is false only when P=T and Q=F; the other three rows are true.",
        "F→F is true (a false premise does not falsify the implication)."
      ],
      "faAns": "۳ سطر T؛ و F→F = T.",
      "enAns": "3 true rows; F→F = T.",
      "viz": "<div class=\"gtable\"><table><thead><tr><th>P</th><th>Q</th><th>P→Q</th></tr></thead><tbody>\n<tr><td>T</td><td>T</td><td>T</td></tr>\n<tr><td>T</td><td>F</td><td>F</td></tr>\n<tr><td>F</td><td>T</td><td>T</td></tr>\n<tr><td>F</td><td>F</td><td>T</td></tr>\n</tbody></table></div>"
    }
  },
  {
    "id": "proof",
    "fa": "اثبات",
    "en": "Proof",
    "aliasesFa": [
      "اثبات",
      "فنون اثبات",
      "اثبات‌ها",
      "اثباتها"
    ],
    "aliasesEn": [
      "proof",
      "proof techniques",
      "mathematical proof"
    ],
    "faExp": "اثبات استدلالی متقاعدکننده است که نشان می‌دهد یک حکم از فرض‌ها و قواعد منطقی به‌دست می‌آید. روش‌هایی مثل استقراء، برهان خلف و ساخت نمونه رایج‌اند. در نرم‌افزار، اثبات‌های صوری برای ویژگی‌های حیاتی به‌کار می‌روند.",
    "enExp": "A proof is a convincing argument that a claim follows from assumptions and logical rules. Induction, contradiction, and constructive proofs are common. In software, formal proofs target safety-critical properties.",
    "faEx": "اثبات با استقراء که یک حلقه روی n عنصر خاتمه می‌یابد: پایه برای n=۰، و گام از n به n+۱.",
    "enEx": "An inductive proof that a loop over n elements terminates: base n=0, then the step from n to n+1.",
    "related": [
      "logic",
      "formal-methods"
    ],
    "faDef": "اثبات استدلالی متقاعدکننده است که نشان می‌دهد یک حکم از فرض‌ها و قواعد منطقی به‌دست می‌آید. روش‌هایی مثل استقراء، برهان خلف و ساخت نمونه رایج‌اند. در نرم‌افزار، اثبات‌های صوری برای ویژگی‌های حیاتی به‌کار می‌روند.",
    "enDef": "A proof is a convincing argument that a claim follows from assumptions and logical rules. Induction, contradiction, and constructive proofs are common. In software, formal proofs target safety-critical properties.",
    "faHow": "اثبات زنجیره‌ای از استدلال معتبر از فرض‌ها به حکم است. استقرا، برهان خلف و ساخت نمونه روش‌های رایج‌اند. هر گام باید توجیه داشته باشد.",
    "enHow": "A proof is a chain of valid reasoning from assumptions to a claim. Induction, contradiction, and constructive examples are common. Every step needs justification.",
    "faWhy": "برای الگوریتم حیاتی و مشخصه‌های امنیتی، اثبات یا استدلال شبه‌صوری اعتماد می‌سازد.",
    "enWhy": "For critical algorithms and security specs, proofs or semi-formal arguments build trust."
  },
  {
    "id": "probability",
    "fa": "احتمال",
    "en": "Probability",
    "aliasesFa": [
      "احتمال",
      "احتمال گسسته",
      "احتمالات"
    ],
    "aliasesEn": [
      "probability",
      "discrete probability",
      "probabilities"
    ],
    "faExp": "احتمال اندازهٔ شانس رخ‌دادن یک پیشامد بین ۰ و ۱ است. در فضای گسسته، با شمردن یا وزن‌دادن نتایج کار می‌کنیم. مهندسی نرم‌افزار از احتمال در قابلیت اطمینان، صف‌ها و یادگیری ماشین بهره می‌برد.",
    "enExp": "Probability measures how likely an event is, between 0 and 1. In discrete spaces we count or weight outcomes. Software engineering uses probability in reliability, queues, and machine learning.",
    "faEx": "اگر از هر ۱۰۰۰ درخواست حدود ۳ تا خطا بدهد، نرخ خطای تقریبی ۰٫۰۰۳ است و برای ظرفیت‌گذاری مفید است.",
    "enEx": "If about 3 of every 1000 requests fail, the approximate error rate is 0.003 and helps with capacity planning.",
    "related": [
      "statistics",
      "reliability",
      "metric"
    ],
    "faDef": "احتمال اندازهٔ شانس رخ‌دادن یک پیشامد بین ۰ و ۱ است. در فضای گسسته، با شمردن یا وزن‌دادن نتایج کار می‌کنیم. مهندسی نرم‌افزار از احتمال در قابلیت اطمینان، صف‌ها و یادگیری ماشین بهره می‌برد.",
    "enDef": "Probability measures how likely an event is, between 0 and 1. In discrete spaces we count or weight outcomes. Software engineering uses probability in reliability, queues, and machine learning.",
    "faHow": "فضای نمونه همهٔ پیامدهاست؛ احتمال بین ۰ و ۱ است. پیشامدهای ناسازگار جمع می‌شوند؛ استقلال ضرب می‌کند. امید ریاضی میانگین وزنی پیامدهاست.",
    "enHow": "The sample space holds outcomes; probability lies in [0,1]. Disjoint events add; independence multiplies. Expectation is the weighted average of outcomes.",
    "faWhy": "ریسک، A/B تست، صف و تحمل خطا بدون مدل احتمال تصمیم‌گیری کور است.",
    "enWhy": "Risk, A/B tests, queues, and fault tolerance need probability—otherwise decisions are blind.",
    "sample": {
      "faQ": "برای یک تاس عادل ۶وجهی، امید ریاضی عدد روآمده چقدر است؟",
      "enQ": "For a fair six-sided die, what is the expected value of the face that comes up?",
      "faSteps": [
        "هر وجه احتمال ۱/۶ دارد.",
        "E = (1+2+3+4+5+6)/6 = 21/6 = 3.5"
      ],
      "enSteps": [
        "Each face has probability 1/6.",
        "E = (1+2+3+4+5+6)/6 = 21/6 = 3.5"
      ],
      "faAns": "۳٫۵",
      "enAns": "3.5"
    }
  },
  {
    "id": "statistics",
    "fa": "آمار",
    "en": "Statistics",
    "aliasesFa": [
      "آمار",
      "تحلیل آماری",
      "آماره"
    ],
    "aliasesEn": [
      "statistics",
      "statistical analysis",
      "statistic"
    ],
    "faExp": "آمار از داده خلاصه و استنباط می‌سازد: میانگین، میانه، واریانس و آزمون فرض. به تصمیم‌گیری تحت عدم‌قطعیت کمک می‌کند. در مهندسی برای سنجش عملکرد، کیفیت و آزمایش A/B حیاتی است.",
    "enExp": "Statistics summarizes data and supports inference: mean, median, variance, and hypothesis tests. It helps decide under uncertainty. In engineering it is essential for performance, quality, and A/B tests.",
    "faEx": "میانگین و صدک ۹۵ زمان پاسخ API را در یک هفته رسم می‌کنید تا ببینید کندی‌ها گاه‌به‌گاه‌اند یا ساختاری.",
    "enEx": "Plot mean and 95th-percentile API latency over a week to see whether slowness is occasional or systemic.",
    "related": [
      "probability",
      "metric",
      "quality-attribute"
    ],
    "faDef": "آمار از داده خلاصه و استنباط می‌سازد: میانگین، میانه، واریانس و آزمون فرض. به تصمیم‌گیری تحت عدم‌قطعیت کمک می‌کند. در مهندسی برای سنجش عملکرد، کیفیت و آزمایش A/B حیاتی است.",
    "enDef": "Statistics summarizes data and supports inference: mean, median, variance, and hypothesis tests. It helps decide under uncertainty. In engineering it is essential for performance, quality, and A/B tests.",
    "faHow": "میانگین مرکز ثقل عددی است؛ میانه در برابر پرت مقاوم‌تر است؛ واریانس پراکندگی را می‌گوید. نمونه از جمعیت برداشت می‌شود و باید سوگیری را بشناسیم.",
    "enHow": "The mean is the numeric center; the median resists outliers; variance measures spread. Samples come from populations—watch bias.",
    "faWhy": "سنجه‌های کیفیت، SLO و آزمایش محصول با آمار درست تفسیر می‌شوند نه با حس.",
    "enWhy": "Quality metrics, SLOs, and product experiments need sound statistics, not gut feel.",
    "sample": {
      "faQ": "برای داده‌های ۲، ۳، ۹، ۱۰، ۱۱ میانگین و میانه را بیابید.",
      "enQ": "For the data 2, 3, 9, 10, 11 find the mean and the median.",
      "faSteps": [
        "میانگین = (2+3+9+10+11)/5 = 35/5 = 7.",
        "دادهٔ مرتب همین است؛ میانه عنصر وسط (سوم) = ۹."
      ],
      "enSteps": [
        "Mean = (2+3+9+10+11)/5 = 35/5 = 7.",
        "Already sorted; median is the middle (3rd) value = 9."
      ],
      "faAns": "میانگین ۷؛ میانه ۹.",
      "enAns": "Mean 7; median 9."
    }
  },
  {
    "id": "discrete-math",
    "fa": "ریاضیات گسسته",
    "en": "Discrete mathematics",
    "aliasesFa": [
      "ریاضیات گسسته",
      "ریاضی گسسته",
      "ساختارهای گسسته"
    ],
    "aliasesEn": [
      "discrete mathematics",
      "discrete math",
      "discrete structures"
    ],
    "faExp": "ریاضیات گسسته با اشیاء جدا از هم سروکار دارد: منطق، مجموعه، گراف، شمارش و اتوماتون. برخلاف حسابان پیوسته، اینجا گام‌ها و حالات شمارش‌پذیرند. زبان اصلی استدلال دربارهٔ الگوریتم و ساختار داده است.",
    "enExp": "Discrete mathematics deals with separate objects: logic, sets, graphs, counting, and automata—unlike continuous calculus. Steps and states are countable. It is the main language for reasoning about algorithms and data structures.",
    "faEx": "طراحی یک پروتکل دست‌دهی (handshake) با تعداد متناهی حالت همان کاربرد ریاضیات گسسته در عمل است.",
    "enEx": "Designing a handshake protocol with finitely many states is discrete mathematics in practice.",
    "related": [
      "logic",
      "graph",
      "fsm",
      "combinatorics"
    ],
    "faDef": "ریاضیات گسسته با اشیاء جدا از هم سروکار دارد: منطق، مجموعه، گراف، شمارش و اتوماتون. برخلاف حسابان پیوسته، اینجا گام‌ها و حالات شمارش‌پذیرند. زبان اصلی استدلال دربارهٔ الگوریتم و ساختار داده است.",
    "enDef": "Discrete mathematics deals with separate objects: logic, sets, graphs, counting, and automata—unlike continuous calculus. Steps and states are countable. It is the main language for reasoning about algorithms and data structures.",
    "faHow": "اشیاء شمارش‌پذیر: منطق، مجموعه، گراف، شمارش، اتوماتون. برخلاف حسابان پیوسته، اینجا حالت و گام گسسته‌اند. ابزار مشترک استدلال الگوریتم است.",
    "enHow": "Countable objects: logic, sets, graphs, counting, automata—unlike continuous calculus. States and steps are discrete. Shared toolkit for algorithmic reasoning.",
    "faWhy": "تقریباً همهٔ علوم رایانهٔ پایه و بخش بزرگی از SWEBOK روی همین زبان سوار است.",
    "enWhy": "Nearly all of core CS and much of software engineering rides on this language."
  },
  {
    "id": "fsm",
    "fa": "ماشین حالت متناهی",
    "en": "Finite-state machine",
    "aliasesFa": [
      "ماشین حالت متناهی",
      "ماشین حالت",
      "اتوماتون متناهی",
      "اتوماتون",
      "FSM"
    ],
    "aliasesEn": [
      "finite-state machine",
      "finite state machine",
      "FSM",
      "finite automaton",
      "automaton",
      "automata"
    ],
    "faExp": "ماشین حالت متناهی سامانه‌ای با تعداد محدود حالت است که با ورودی از حالتی به حالت دیگر می‌رود. برای پروتکل‌ها، رابط کاربری، پارسرهای ساده و کنترل گردش کار مناسب است. نمودار حالت همان تصویر این مدل است.",
    "enExp": "A finite-state machine has finitely many states and moves between them on input. It fits protocols, UI flows, simple parsers, and workflow control. A state diagram pictures the model.",
    "faEx": "دستگاه خودپرداز: حالت‌های «آماده»، «کارت خوانده‌شد»، «رمز درست»، «برداشت»؛ ورودی‌ها رویدادهای کاربر و سخت‌افزارند.",
    "enEx": "An ATM: states Ready, CardRead, PinOk, Dispense; inputs are user and hardware events.",
    "related": [
      "formal-methods",
      "compiler",
      "protocol"
    ],
    "diagram": "fsm",
    "faDef": "ماشین حالت متناهی سامانه‌ای با تعداد محدود حالت است که با ورودی از حالتی به حالت دیگر می‌رود. برای پروتکل‌ها، رابط کاربری، پارسرهای ساده و کنترل گردش کار مناسب است. نمودار حالت همان تصویر این مدل است.",
    "enDef": "A finite-state machine has finitely many states and moves between them on input. It fits protocols, UI flows, simple parsers, and workflow control. A state diagram pictures the model.",
    "faHow": "تعداد متناهی حالت، یک حالت شروع، الفبای ورودی و تابع انتقال δ(state, input)→state. خروجی می‌تواند روی حالت یا انتقال تعریف شود. ماشین تعین یا غیرتعین است.",
    "enHow": "Finitely many states, a start state, an input alphabet, and transition δ(state, input)→state. Output may sit on states or transitions. Machines may be deterministic or not.",
    "faWhy": "پروتکل، ویزارد UI، پارسر و گردش‌کار با FSM روشن و تست‌پذیر می‌شوند.",
    "enWhy": "Protocols, UI wizards, parsers, and workflows become clear and testable as FSMs.",
    "sample": {
      "faQ": "ترن‌استایل با دو حالت Locked و Unlocked: از Locked با رویداد coin به Unlocked می‌رود و با push برمی‌گردد. اگر دنبالهٔ رویدادها coin، push، push باشد، حالت پایانی چیست؟",
      "enQ": "A turnstile has Locked and Unlocked. coin: Locked→Unlocked; push: Unlocked→Locked (push in Locked stays Locked). For events coin, push, push, what is the final state?",
      "faSteps": [
        "شروع: Locked.",
        "coin → Unlocked.",
        "push → Locked.",
        "push در Locked → Locked می‌ماند."
      ],
      "enSteps": [
        "Start: Locked.",
        "coin → Unlocked.",
        "push → Locked.",
        "push while Locked → stays Locked."
      ],
      "faAns": "Locked",
      "enAns": "Locked",
      "viz": "<svg class=\"gdiag\" viewBox=\"0 0 240 80\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n<circle cx=\"50\" cy=\"40\" r=\"18\" fill=\"#f27a5e\"/><text x=\"50\" y=\"44\" text-anchor=\"middle\" font-size=\"10\" fill=\"#fff\">Locked</text>\n<circle cx=\"170\" cy=\"40\" r=\"18\" fill=\"#2fa36b\"/><text x=\"170\" y=\"44\" text-anchor=\"middle\" font-size=\"10\" fill=\"#fff\">Unlocked</text>\n<path d=\"M68 32 C110 0 110 0 152 32\" stroke=\"#5a3040\" stroke-width=\"2\" fill=\"none\"/><text x=\"110\" y=\"14\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5a3040\">coin</text>\n<path d=\"M152 48 C110 80 110 80 68 48\" stroke=\"#5a3040\" stroke-width=\"2\" fill=\"none\"/><text x=\"110\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5a3040\">push</text>\n</svg>"
    }
  },
  {
    "id": "grammar",
    "fa": "گرامر",
    "en": "Grammar",
    "aliasesFa": [
      "گرامر",
      "گرامر رسمی",
      "دستور زبان صوری"
    ],
    "aliasesEn": [
      "grammar",
      "formal grammar",
      "context-free grammar",
      "BNF"
    ],
    "faExp": "گرامر رسمی قواعد تولید رشته‌های یک زبان را تعریف می‌کند. گرامرهای آزاد از متن برای بیشتر زبان‌های برنامه‌نویسی کافی‌اند. کامپایلر با گرامر ساختار برنامه را می‌شناسد.",
    "enExp": "A formal grammar defines production rules for the strings of a language. Context-free grammars cover most programming languages. Compilers use grammars to recognize program structure.",
    "faEx": "قاعدهٔ Expr → Expr + Term | Term بخشی از گرامر عبارات حسابی است که پارسر آن را می‌خواند.",
    "enEx": "The rule Expr → Expr + Term | Term is part of an arithmetic expression grammar a parser consumes.",
    "related": [
      "compiler",
      "fsm",
      "ast"
    ],
    "faDef": "گرامر رسمی قواعد تولید رشته‌های یک زبان را تعریف می‌کند. گرامرهای آزاد از متن برای بیشتر زبان‌های برنامه‌نویسی کافی‌اند. کامپایلر با گرامر ساختار برنامه را می‌شناسد.",
    "enDef": "A formal grammar defines production rules for the strings of a language. Context-free grammars cover most programming languages. Compilers use grammars to recognize program structure.",
    "faHow": "نمادهای پایانه و غیرپایانه، نماد شروع و قواعد جایگزینی زبان را می‌سازند. سلسله‌مراتب چامسکی قدرت بیان را طبقه‌بندی می‌کند. پارسر رشته را با گرامر می‌سنجد.",
    "enHow": "Terminals, nonterminals, a start symbol, and rewrite rules define a language. The Chomsky hierarchy ranks expressive power. A parser checks strings against the grammar.",
    "faWhy": "زبان برنامه‌سازی، DSL و اعتبارسنجی ورودی بدون گرامر مبهم و شکننده می‌شود.",
    "enWhy": "Programming languages, DSLs, and input validation get ambiguous and brittle without grammars.",
    "sample": {
      "faQ": "گرامر: S → aS | b. کدام رشته‌ها تولید می‌شوند: aab، ab، b، ba؟",
      "enQ": "Grammar: S → aS | b. Which of aab, ab, b, ba are generated?",
      "faSteps": [
        "فقط رشته‌هایی از صفر یا چند a و دقیقاً یک b در انتها: a*b.",
        "aab و ab و b معتبر؛ ba نامعتبر (b وسط/ابتدا با a بعد از آن نمی‌آید)."
      ],
      "enSteps": [
        "Language is a*b (zero or more a’s then one b).",
        "aab, ab, b yes; ba no."
      ],
      "faAns": "aab، ab، b بله؛ ba خیر.",
      "enAns": "aab, ab, b yes; ba no."
    }
  },
  {
    "id": "combinatorics",
    "fa": "شمارش",
    "en": "Counting",
    "aliasesFa": [
      "شمارش",
      "ترکیبیات",
      "اصول شمارش"
    ],
    "aliasesEn": [
      "counting",
      "combinatorics",
      "basics of counting"
    ],
    "faExp": "شمارش روش‌های حساب‌کردن تعداد چیدمان‌ها و انتخاب‌هاست: اصل جمع و ضرب، جایگشت و ترکیب. برای برآورد فضای حالت تست و ظرفیت بسیار کاربردی است.",
    "enExp": "Counting studies how many arrangements or selections exist: sum and product rules, permutations, and combinations. It helps estimate test state spaces and capacity.",
    "faEx": "اگر رمز ۴ رقمی و هر رقم ۰–۹ باشد، ۱۰⁴ = ۱۰۰۰۰ حالت ممکن است.",
    "enEx": "A 4-digit PIN with digits 0–9 has 10⁴ = 10000 possibilities.",
    "related": [
      "probability",
      "complexity"
    ],
    "faDef": "شمارش روش‌های حساب‌کردن تعداد چیدمان‌ها و انتخاب‌هاست: اصل جمع و ضرب، جایگشت و ترکیب. برای برآورد فضای حالت تست و ظرفیت بسیار کاربردی است.",
    "enDef": "Counting studies how many arrangements or selections exist: sum and product rules, permutations, and combinations. It helps estimate test state spaces and capacity.",
    "faHow": "شمارش آرایش‌ها با جایگشت و ترکیب، اصل ضرب و شمول-طرد انجام می‌شود. فرق ترتیب‌دار و بدون‌ترتیب حیاتی است.",
    "enHow": "Counting arrangements uses permutations, combinations, the product rule, and inclusion–exclusion. Ordered vs unordered is crucial.",
    "faWhy": "تخمین فضای حالت تست، کلیدها و سناریوها بدون شمارش درست یا کم‌پوشش است یا انفجار ترکیب.",
    "enWhy": "Estimating test state spaces, keys, and scenarios without counting is either under-covered or combinatorial explosion."
  },
  {
    "id": "number-theory",
    "fa": "نظریهٔ اعداد",
    "en": "Number theory",
    "aliasesFa": [
      "نظریهٔ اعداد",
      "نظریه اعداد"
    ],
    "aliasesEn": [
      "number theory"
    ],
    "faExp": "نظریهٔ اعداد خواص اعداد صحیح را می‌کاود: بخش‌پذیری، اعداد اول و همنهشتی. رمزنگاری مدرن به‌شدت به این مفاهیم وابسته است.",
    "enExp": "Number theory studies integers: divisibility, primes, and modular arithmetic. Modern cryptography depends heavily on these ideas.",
    "faEx": "بقیهٔ تقسیم یک عدد بزرگ بر یک عدد اول در الگوریتم‌های کلید عمومی ظاهر می‌شود.",
    "enEx": "Remainders modulo a large prime appear throughout public-key algorithms.",
    "related": [
      "encryption",
      "hash"
    ],
    "faDef": "نظریهٔ اعداد خواص اعداد صحیح را می‌کاود: بخش‌پذیری، اعداد اول و همنهشتی. رمزنگاری مدرن به‌شدت به این مفاهیم وابسته است.",
    "enDef": "Number theory studies integers: divisibility, primes, and modular arithmetic. Modern cryptography depends heavily on these ideas.",
    "faHow": "بخش‌پذیری، باقی‌مانده، اعداد اول و همنهشتی ابزار پایه‌اند. الگوریتم اقلیدس ب.م.م را می‌یابد؛ حساب پیمانه‌ای اساس رمزنگاری مدرن است.",
    "enHow": "Divisibility, remainders, primes, and congruences are basic tools. Euclid’s algorithm finds GCDs; modular arithmetic underpins modern cryptography.",
    "faWhy": "هش، کلید عمومی و زمان‌بندی دوره‌ای به نظریهٔ اعداد تکیه می‌کنند.",
    "enWhy": "Hashes, public-key crypto, and periodic scheduling lean on number theory."
  },
  {
    "id": "algebra",
    "fa": "ساختار جبری",
    "en": "Algebraic structure",
    "aliasesFa": [
      "ساختار جبری",
      "ساختارهای جبری",
      "گروه",
      "حلقه",
      "میدان",
      "میدان"
    ],
    "aliasesEn": [
      "algebraic structure",
      "group",
      "ring",
      "field",
      "algebra"
    ],
    "faExp": "ساختارهای جبری مجموعه به‌همراه عمل‌هایی با قوانین مشخص‌اند (مثل گروه و حلقه). به یکنواختی استدلال دربارهٔ تقارن و محاسبه کمک می‌کنند. در تصحیح خطا و رمزنگاری دیده می‌شوند.",
    "enExp": "Algebraic structures are sets with operations obeying stated laws (groups, rings, fields). They unify reasoning about symmetry and calculation and appear in coding theory and cryptography.",
    "faEx": "جمع ساعتی روی ۰…۱۱ یک گروه دوری ساده است: ۱۲ ساعت بعد به همان جا برمی‌گردید.",
    "enEx": "Clock arithmetic on 0…11 is a simple cyclic group: twelve hours later you return to the same hour.",
    "related": [
      "number-theory",
      "encryption"
    ],
    "faDef": "ساختارهای جبری مجموعه به‌همراه عمل‌هایی با قوانین مشخص‌اند (مثل گروه و حلقه). به یکنواختی استدلال دربارهٔ تقارن و محاسبه کمک می‌کنند. در تصحیح خطا و رمزنگاری دیده می‌شوند.",
    "enDef": "Algebraic structures are sets with operations obeying stated laws (groups, rings, fields). They unify reasoning about symmetry and calculation and appear in coding theory and cryptography.",
    "faHow": "ساختارهایی مثل گروه، حلقه و میدان عملگرهایی با قوانین مشخص دارند. جبر خطی بردار و ماتریس را برای تبدیل و دستگاه معادلات به‌کار می‌برد.",
    "enHow": "Structures such as groups, rings, and fields have operators with fixed laws. Linear algebra uses vectors and matrices for transforms and equation systems.",
    "faWhy": "گرافیک، یادگیری ماشین و رمزنگاری از جبر برای مدل دقیق استفاده می‌کنند.",
    "enWhy": "Graphics, ML, and cryptography use algebra for precise models."
  },
  {
    "id": "numerical-error",
    "fa": "خطای عددی",
    "en": "Numeric error",
    "aliasesFa": [
      "خطای عددی",
      "دقت عددی",
      "خطای گرد کردن",
      "سرریز"
    ],
    "aliasesEn": [
      "numeric error",
      "numerical error",
      "rounding error",
      "floating point",
      "precision"
    ],
    "faExp": "کامپیوتر اعداد حقیقی را تقریبی ذخیره می‌کند؛ گرد کردن و قطع‌کردن خطا می‌آورد. جمع ترتیب‌دار و مقایسه با اپسیلون بخشی از برنامه‌نویسی ایمن عددی است. نادیده‌گرفتن خطا می‌تواند در مالی و کنترل فاجعه بسازد.",
    "enExp": "Computers store reals approximately; rounding and truncation introduce error. Ordered sums and epsilon comparisons are part of safe numeric coding. Ignoring error can break finance and control systems.",
    "faEx": "۰٫۱ + ۰٫۲ در ممیز شناور ممکن است دقیقاً ۰٫۳ نشود؛ برای پول بهتر است از واحد صحیح (مثلاً ریال) استفاده شود.",
    "enEx": "0.1 + 0.2 may not equal 0.3 in floating point; money is safer in integer minor units.",
    "related": [
      "algorithm",
      "metric"
    ],
    "faDef": "کامپیوتر اعداد حقیقی را تقریبی ذخیره می‌کند؛ گرد کردن و قطع‌کردن خطا می‌آورد. جمع ترتیب‌دار و مقایسه با اپسیلون بخشی از برنامه‌نویسی ایمن عددی است. نادیده‌گرفتن خطا می‌تواند در مالی و کنترل فاجعه بسازد.",
    "enDef": "Computers store reals approximately; rounding and truncation introduce error. Ordered sums and epsilon comparisons are part of safe numeric coding. Ignoring error can break finance and control systems.",
    "faHow": "نمایش ممیزشناور محدود است؛ گرد کردن و قطع‌کردن خطا می‌سازند. پایداری عددی می‌گوید خطا چگونه رشد می‌کند. شرط‌مندی حساسیت به Perturbation ورودی است.",
    "enHow": "Floating-point is finite; rounding and truncation create error. Numerical stability asks how error grows. Conditioning is sensitivity to input perturbation.",
    "faWhy": "پول، مختصات و شبیه‌سازی اگر خطا را نادیده بگیرند نتیجهٔ بی‌صدا غلط می‌دهند.",
    "enWhy": "Money, coordinates, and simulation silently go wrong if error is ignored."
  },
  {
    "id": "data-structure",
    "fa": "ساختار داده",
    "en": "Data structure",
    "aliasesFa": [
      "ساختار داده",
      "ساختارهای داده",
      "ساختمان داده"
    ],
    "aliasesEn": [
      "data structure",
      "data structures"
    ],
    "faExp": "ساختار داده شیوهٔ سازمان‌دهی داده برای دسترسی و به‌روزرسانی کارآمد است: آرایه، فهرست، درخت، گراف، جدول درهم. انتخاب ساختار درست پیچیدگی عملیات را عوض می‌کند.",
    "enExp": "A data structure organizes data for efficient access and updates: arrays, lists, trees, graphs, hash tables. The right choice changes operation complexity.",
    "faEx": "برای صف درخواست‌ها یک صف FIFO مناسب است؛ برای جست‌وجوی سریع کلید، جدول درهم یا درخت متوازن بهتر است.",
    "enEx": "A FIFO queue fits pending requests; fast key lookup prefers a hash table or balanced tree.",
    "related": [
      "algorithm",
      "stack",
      "queue",
      "tree",
      "hash"
    ],
    "faDef": "ساختار داده شیوهٔ سازمان‌دهی داده برای دسترسی و به‌روزرسانی کارآمد است: آرایه، فهرست، درخت، گراف، جدول درهم. انتخاب ساختار درست پیچیدگی عملیات را عوض می‌کند.",
    "enDef": "A data structure organizes data for efficient access and updates: arrays, lists, trees, graphs, hash tables. The right choice changes operation complexity.",
    "faHow": "ساختار داده نحوهٔ چیدمان و دسترسی به داده را ثابت می‌کند: آرایه، لیست، درخت، هش و گراف. هر کدام هزینهٔ درج، حذف و جست‌وجوی متفاوتی دارند.",
    "enHow": "A data structure fixes how data is laid out and accessed—arrays, lists, trees, hashes, graphs. Each has different insert, delete, and lookup costs.",
    "faWhy": "انتخاب ساختار اشتباه عملکرد و پیچیدگی کد را خراب می‌کند؛ انتخاب درست API را ساده می‌کند.",
    "enWhy": "Wrong structure choice wrecks performance and complexity; the right one simplifies APIs."
  },
  {
    "id": "stack",
    "fa": "پشته",
    "en": "Stack",
    "aliasesFa": [
      "پشته",
      "استک"
    ],
    "aliasesEn": [
      "stack",
      "stacks",
      "LIFO"
    ],
    "faExp": "پشته ساختار Last-In-First-Out است: آخرین ورودی اول خارج می‌شود. برای مدیریت فراخوانی تابع، واگرد و تجزیه مفید است.",
    "enExp": "A stack is last-in, first-out: the latest push is the first pop. It supports call frames, undo, and parsing.",
    "faEx": "دکمهٔ Undo آخرین تغییر را برمی‌دارد—رفتار پشته.",
    "enEx": "Undo removes the latest change—stack behavior.",
    "related": [
      "queue",
      "recursion",
      "data-structure"
    ],
    "diagram": "stack",
    "faDef": "پشته ساختار Last-In-First-Out است: آخرین ورودی اول خارج می‌شود. برای مدیریت فراخوانی تابع، واگرد و تجزیه مفید است.",
    "enDef": "A stack is last-in, first-out: the latest push is the first pop. It supports call frames, undo, and parsing.",
    "faHow": "فقط از یک سر (بالا) push و pop می‌شود؛ LIFO. peek بالای پشته را بدون حذف می‌بیند. سرریز و زیرریز خطاهای کلاسیک‌اند.",
    "enHow": "Push and pop happen at one end (the top)—LIFO. Peek reads the top without removal. Overflow and underflow are classic errors.",
    "faWhy": "بازگشت، Undo، تطبیق پرانتز و ماشین مجازی پشته همه‌جا هستند.",
    "enWhy": "Recursion, undo, bracket matching, and VM evaluation stacks are everywhere.",
    "sample": {
      "faQ": "پشته خالی است. عملیات: push(1)، push(2)، push(3)، pop، pop. مقدار دو pop و محتوای نهایی پشته چیست؟",
      "enQ": "Empty stack. Ops: push(1), push(2), push(3), pop, pop. What values are popped, and what remains?",
      "faSteps": [
        "بعد از سه push: از پایین به بالا [1,2,3] (بالا=3).",
        "اولین pop → 3؛ پشته [1,2].",
        "دومین pop → 2؛ پشته [1]."
      ],
      "enSteps": [
        "After three pushes: bottom→top [1,2,3] (top=3).",
        "First pop → 3; stack [1,2].",
        "Second pop → 2; stack [1]."
      ],
      "faAns": "مقادیر pop: ۳ سپس ۲؛ باقی‌مانده: [1].",
      "enAns": "Popped: 3 then 2; remaining: [1]."
    }
  },
  {
    "id": "queue",
    "fa": "صف",
    "en": "Queue",
    "aliasesFa": [
      "صف",
      "صف‌ها",
      "صفها"
    ],
    "aliasesEn": [
      "queue",
      "queues",
      "FIFO"
    ],
    "faExp": "صف First-In-First-Out است: اولین ورودی اول خدمت می‌گیرد. در زمان‌بندی کارها و بافر پیام‌ها رایج است.",
    "enExp": "A queue is first-in, first-out: the earliest arrival is served first. It is common in job scheduling and message buffers.",
    "faEx": "نوبت چاپگر اسناد را به ترتیب ورود چاپ می‌کند.",
    "enEx": "A printer queue prints documents in arrival order.",
    "related": [
      "stack",
      "concurrency",
      "data-structure"
    ],
    "diagram": "queue",
    "faDef": "صف First-In-First-Out است: اولین ورودی اول خدمت می‌گیرد. در زمان‌بندی کارها و بافر پیام‌ها رایج است.",
    "enDef": "A queue is first-in, first-out: the earliest arrival is served first. It is common in job scheduling and message buffers.",
    "faHow": "درج در عقب و حذف از جلو؛ FIFO. صف حلقوی حافظه را بازاستفاده می‌کند. صف اولویت با کلید، نه زمان ورود، خارج می‌کند.",
    "enHow": "Enqueue at the back, dequeue at the front—FIFO. A circular buffer reuses space. A priority queue leaves by key, not arrival time.",
    "faWhy": "صف پیام، زمان‌بند کار و بافر چاپ الگوی صف‌اند؛ ترتیب عادلانه را حفظ می‌کنند.",
    "enWhy": "Message queues, job schedulers, and print buffers are queues—they preserve fair order.",
    "sample": {
      "faQ": "صف خالی است. enqueue(1)، enqueue(2)، enqueue(3)، dequeue، dequeue. مقادیر خارج‌شده و باقی‌مانده؟",
      "enQ": "Empty queue. enqueue(1), enqueue(2), enqueue(3), dequeue, dequeue. Values removed and remainder?",
      "faSteps": [
        "صف FIFO: جلو=1، عقب=3.",
        "اولین dequeue → 1؛ بعد → 2؛ باقی [3]."
      ],
      "enSteps": [
        "FIFO: front=1, back=3.",
        "First dequeue → 1; next → 2; left [3]."
      ],
      "faAns": "۱ سپس ۲؛ باقی‌مانده [3].",
      "enAns": "1 then 2; remaining [3]."
    }
  },
  {
    "id": "hash",
    "fa": "تابع درهم‌سازی",
    "en": "Hash function",
    "aliasesFa": [
      "تابع درهم‌سازی",
      "تابع درهمسازی",
      "هش",
      "درهم‌سازی",
      "درهمسازی",
      "جدول درهم"
    ],
    "aliasesEn": [
      "hash function",
      "hash",
      "hashing",
      "hash table"
    ],
    "faExp": "تابع درهم‌سازی دادهٔ دلخواه را به مقدار با طول ثابت نگاشت می‌کند. در جدول درهم برای جست‌وجوی سریع و در امنیت برای اثر انگشت داده به‌کار می‌رود. برخورد یعنی دو ورودی یک خروجی بدهند و باید مدیریت شود.",
    "enExp": "A hash function maps arbitrary data to a fixed-size value. Hash tables use it for fast lookup; security uses it as a fingerprint. Collisions—two inputs, one output—must be handled.",
    "faEx": "ذخیرهٔ رمز عبور به‌صورت هش به‌همراه نمک (salt) به‌جای متن خام.",
    "enEx": "Storing passwords as salted hashes instead of plaintext.",
    "related": [
      "encryption",
      "data-structure",
      "complexity"
    ],
    "faDef": "تابع درهم‌سازی دادهٔ دلخواه را به مقدار با طول ثابت نگاشت می‌کند. در جدول درهم برای جست‌وجوی سریع و در امنیت برای اثر انگشت داده به‌کار می‌رود. برخورد یعنی دو ورودی یک خروجی بدهند و باید مدیریت شود.",
    "enDef": "A hash function maps arbitrary data to a fixed-size value. Hash tables use it for fast lookup; security uses it as a fingerprint. Collisions—two inputs, one output—must be handled.",
    "faHow": "تابع هش کلید را به اندیس سطل می‌نگارد. برخورد اجتناب‌ناپذیر است و با زنجیره‌سازی یا آدرس‌دهی باز حل می‌شود. بار عامل نسبت پر شدن جدول است.",
    "enHow": "A hash function maps a key to a bucket index. Collisions are inevitable and handled by chaining or open addressing. Load factor is how full the table is.",
    "faWhy": "دیکشنری، کش و ایندکس با هش میانگین O(1) نزدیک می‌شوند—اگر توزیع خوب باشد.",
    "enWhy": "Dictionaries, caches, and indexes approach average O(1) with good hash distribution.",
    "sample": {
      "faQ": "جدول هش با ۱۰ سطل و هش ساده key % 10. کلیدهای ۱۴ و ۲۴ در کدام سطل‌اند و چه مسئله‌ای پیش می‌آید؟",
      "enQ": "Hash table with 10 buckets, hash = key % 10. Which buckets get keys 14 and 24, and what issue appears?",
      "faSteps": [
        "14 % 10 = 4؛ 24 % 10 = 4.",
        "هر دو به سطل ۴ می‌روند → برخورد؛ باید زنجیره یا آدرس‌دهی باز حل شود."
      ],
      "enSteps": [
        "14 % 10 = 4; 24 % 10 = 4.",
        "Both land in bucket 4 → collision; resolve with chaining or open addressing."
      ],
      "faAns": "هر دو سطل ۴؛ برخورد هش.",
      "enAns": "Both bucket 4; a hash collision."
    }
  },
  {
    "id": "recursion",
    "fa": "بازگشت",
    "en": "Recursion",
    "aliasesFa": [
      "بازگشت",
      "بازگشتی",
      "فراخوانی بازگشتی"
    ],
    "aliasesEn": [
      "recursion",
      "recursive"
    ],
    "faExp": "بازگشت وقتی است که راه‌حل، همان مسئله را روی ورودی کوچک‌تر صدا می‌زند تا به پایه برسد. باید حالت پایه و کاهش اندازه تضمین شود تا حلقهٔ بی‌نهایت نسازد.",
    "enExp": "Recursion solves a problem by calling the same problem on smaller input until a base case. A base case and shrinking size are required to avoid infinite loops.",
    "faEx": "محاسبهٔ فاکتوریل: n! = n × (n−۱)! با پایهٔ ۰! = ۱.",
    "enEx": "Factorial: n! = n × (n−1)! with base 0! = 1.",
    "related": [
      "stack",
      "tree",
      "algorithm"
    ],
    "faDef": "بازگشت وقتی است که راه‌حل، همان مسئله را روی ورودی کوچک‌تر صدا می‌زند تا به پایه برسد. باید حالت پایه و کاهش اندازه تضمین شود تا حلقهٔ بی‌نهایت نسازد.",
    "enDef": "Recursion solves a problem by calling the same problem on smaller input until a base case. A base case and shrinking size are required to avoid infinite loops.",
    "faHow": "تابع خودش را با ورودی کوچک‌تر صدا می‌زند تا به حالت پایه برسد. هر فراخوانی قاب پشته می‌سازد. بازگشتی دمی قابل بهینه‌سازی به حلقه است.",
    "enHow": "A function calls itself on a smaller input until a base case. Each call makes a stack frame. Tail recursion can optimize into a loop.",
    "faWhy": "درخت، گراف و تقسیم‌وحل با بازگشت خوانا می‌شوند؛ عمق زیاد خطر سرریز پشته دارد.",
    "enWhy": "Trees, graphs, and divide-and-conquer read clearly with recursion; deep calls risk stack overflow."
  },
  {
    "id": "binary-search",
    "fa": "جست‌وجوی دودویی",
    "en": "Binary search",
    "aliasesFa": [
      "جست‌وجوی دودویی",
      "جستوجوی دودویی",
      "جستجوی دودویی",
      "binary search"
    ],
    "aliasesEn": [
      "binary search"
    ],
    "faExp": "جست‌وجوی دودویی روی دنبالهٔ مرتب هر بار نیم فضای جست‌وجو را حذف می‌کند و معمولاً O(log n) است. پیش‌فرض مرتب‌بودن داده است.",
    "enExp": "Binary search on a sorted sequence halves the search space each step and is typically O(log n). The data must be ordered.",
    "faEx": "پیدا کردن تراکنش با شناسه در فهرست مرتب‌شدهٔ شناسه‌ها.",
    "enEx": "Finding a transaction ID in a sorted ID list.",
    "related": [
      "algorithm",
      "complexity"
    ],
    "faDef": "جست‌وجوی دودویی روی دنبالهٔ مرتب هر بار نیم فضای جست‌وجو را حذف می‌کند و معمولاً O(log n) است. پیش‌فرض مرتب‌بودن داده است.",
    "enDef": "Binary search on a sorted sequence halves the search space each step and is typically O(log n). The data must be ordered.",
    "faHow": "روی دادهٔ مرتب، وسط را با کلید مقایسه می‌کند و نیم نامرتبط را دور می‌ریزد تا باقی‌مانده تهی شود یا کلید پیدا شود. شرط مرتب بودن حیاتی است.",
    "enHow": "On sorted data, compare the middle to the key and discard the irrelevant half until empty or found. Sortedness is required.",
    "faWhy": "جست‌وجو در لاگ، ایندکس و پیکربندی بزرگ بدون آن کند می‌شود.",
    "enWhy": "Search in large logs, indexes, and configs becomes slow without it.",
    "sample": {
      "faQ": "آرایهٔ مرتب طول ۱٬۰۰۰٬۰۰۰. حداکثر حدود چند مقایسه برای یافتن یک کلید با جست‌وجوی دودویی؟",
      "enQ": "Sorted array length 1,000,000. About how many comparisons in the worst case for binary search?",
      "faSteps": [
        "هر گام فضا را نصف می‌کند → حدود log₂(n).",
        "log₂(1,000,000) ≈ 19.93 → حداکثر حدود ۲۰."
      ],
      "enSteps": [
        "Each step halves the range → about log₂(n).",
        "log₂(1,000,000) ≈ 20."
      ],
      "faAns": "حدود ۲۰",
      "enAns": "About 20"
    }
  },
  {
    "id": "os",
    "fa": "سیستم‌عامل",
    "en": "Operating system",
    "aliasesFa": [
      "سیستم‌عامل",
      "سیستمعامل",
      "سیستم عامل",
      "سیستم‌عامل‌ها",
      "سیستمعاملها"
    ],
    "aliasesEn": [
      "operating system",
      "OS",
      "operating systems"
    ],
    "faExp": "سیستم‌عامل نرم‌افزاری است که سخت‌افزار را مدیریت می‌کند و به برنامه‌ها خدمات فرایند، حافظه، پرونده و دستگاه می‌دهد. بین سخت‌افزار خام و برنامه‌های کاربردی لایه می‌سازد.",
    "enExp": "An operating system manages hardware and offers processes, memory, files, and devices to programs. It sits between raw hardware and applications.",
    "faEx": "وقتی چند اپ هم‌زمان بازند، زمان‌بند سیستم‌عامل CPU را بین آن‌ها تقسیم می‌کند.",
    "enEx": "With several apps open, the OS scheduler shares the CPU among them.",
    "related": [
      "process",
      "thread",
      "concurrency",
      "virtual-memory"
    ],
    "faDef": "سیستم‌عامل نرم‌افزاری است که سخت‌افزار را مدیریت می‌کند و به برنامه‌ها خدمات فرایند، حافظه، پرونده و دستگاه می‌دهد. بین سخت‌افزار خام و برنامه‌های کاربردی لایه می‌سازد.",
    "enDef": "An operating system manages hardware and offers processes, memory, files, and devices to programs. It sits between raw hardware and applications.",
    "faHow": "سیستم‌عامل سخت‌افزار را انتزاع می‌کند: فرایند، حافظه، فایل و دستگاه. زمان‌بند تصمیم می‌گیرد چه کسی CPU بگیرد. هسته فضای کاربر را از سخت‌افزار جدا می‌کند.",
    "enHow": "An OS abstracts hardware—processes, memory, files, devices. The scheduler decides who gets the CPU. The kernel separates user space from hardware.",
    "faWhy": "بدون درک OS، اشکال همزمانی، حافظه و I/O شبیه جادو می‌ماند.",
    "enWhy": "Without OS literacy, concurrency, memory, and I/O bugs look like magic."
  },
  {
    "id": "process",
    "fa": "فرایند",
    "en": "Process",
    "aliasesFa": [
      "فرایند",
      "فرآیند",
      "فرایندها",
      "فرآیندها"
    ],
    "aliasesEn": [
      "process",
      "processes"
    ],
    "faExp": "فرایند نمونهٔ در حال اجرای یک برنامه با فضای آدرس و منابع مخصوص خود است. فرایندها معمولاً از هم جدا می‌شوند تا خطای یکی همه را نخواباند.",
    "enExp": "A process is a running program instance with its own address space and resources. Processes are usually isolated so one fault does not take all down.",
    "faEx": "هر تب مرورگر ممکن است در فرایند جدا باشد تا کرش یک تب بقیه را نگه دارد.",
    "enEx": "Browser tabs may run in separate processes so one crash leaves others alive.",
    "related": [
      "thread",
      "os",
      "concurrency"
    ],
    "faDef": "فرایند نمونهٔ در حال اجرای یک برنامه با فضای آدرس و منابع مخصوص خود است. فرایندها معمولاً از هم جدا می‌شوند تا خطای یکی همه را نخواباند.",
    "enDef": "A process is a running program instance with its own address space and resources. Processes are usually isolated so one fault does not take all down.",
    "faHow": "فرایند برنامهٔ در حال اجرا با فضای آدرس جداست. ایجاد هزینه دارد؛ ارتباط بین‌فرایندی صریح است. فرزند می‌تواند از والد منشعب شود.",
    "enHow": "A process is a running program with its own address space. Creation is costly; IPC is explicit. A child may be forked from a parent.",
    "faWhy": "جداسازی خطا و امنیت با مرز فرایند قوی‌تر از نخ در همان فضای حافظه است.",
    "enWhy": "Fault and security isolation is stronger across process boundaries than threads sharing memory."
  },
  {
    "id": "thread",
    "fa": "ریسمان",
    "en": "Thread",
    "aliasesFa": [
      "ریسمان",
      "نخ",
      "ترد",
      "ریسمان‌ها",
      "ریسمانها"
    ],
    "aliasesEn": [
      "thread",
      "threads"
    ],
    "faExp": "ریسمان مسیر اجرایی سبک‌تر درون یک فرایند است و حافظه را با هم‌فرایندی‌ها به‌اشتراک می‌گذارد. هم‌زمانی را ممکن می‌کند ولی نیاز به همگام‌سازی دارد.",
    "enExp": "A thread is a lighter execution path inside a process and shares memory with sibling threads. It enables concurrency but needs synchronization.",
    "faEx": "یک سرویس وب: یک ریسمان درخواست را می‌خواند و دیگری فایل را می‌نویسد؛ هر دو به بافر مشترک دسترسی دارند.",
    "enEx": "A web service: one thread reads a request while another writes a file; both may touch a shared buffer.",
    "related": [
      "process",
      "concurrency",
      "deadlock"
    ],
    "faDef": "ریسمان مسیر اجرایی سبک‌تر درون یک فرایند است و حافظه را با هم‌فرایندی‌ها به‌اشتراک می‌گذارد. هم‌زمانی را ممکن می‌کند ولی نیاز به همگام‌سازی دارد.",
    "enDef": "A thread is a lighter execution path inside a process and shares memory with sibling threads. It enables concurrency but needs synchronization.",
    "faHow": "نخ واحد زمان‌بندی داخل فرایند است و حافظه را معمولاً هم‌رسانی می‌کند. ایجادش سبک‌تر از فرایند است اما نیاز به همگام‌سازی دارد.",
    "enHow": "A thread is a schedulable unit inside a process and usually shares memory. Cheaper to create than a process, but needs synchronization.",
    "faWhy": "پاسخ‌گویی UI و موازی‌سازی I/O با نخ ممکن می‌شود؛ مسابقه داده دشمن است.",
    "enWhy": "UI responsiveness and I/O parallelism use threads; data races are the enemy."
  },
  {
    "id": "concurrency",
    "fa": "هم‌زمانی",
    "en": "Concurrency",
    "aliasesFa": [
      "هم‌زمانی",
      "همزمانی",
      "توازی",
      "parallelism"
    ],
    "aliasesEn": [
      "concurrency",
      "concurrent",
      "parallelism",
      "parallel"
    ],
    "faExp": "هم‌زمانی یعنی پیشرفت چند کار در بازهٔ زمانی هم‌پوشان؛ لزوماً اجرای موازی سخت‌افزاری نیست. چالش اصلی هماهنگی دسترسی به دادهٔ مشترک و جلوگیری از شرط مسابقه است.",
    "enExp": "Concurrency means several tasks make progress in overlapping time—not necessarily parallel hardware. The hard part is coordinating shared data and avoiding race conditions.",
    "faEx": "پرداخت و ارسال پیامک تأیید هم‌زمان شروع می‌شوند؛ باید مطمئن شوید وضعیت سفارش فقط یک‌بار نهایی می‌شود.",
    "enEx": "Payment and confirmation SMS start together; the order must finalize only once.",
    "related": [
      "thread",
      "deadlock",
      "race-condition",
      "mutex"
    ],
    "faDef": "هم‌زمانی یعنی پیشرفت چند کار در بازهٔ زمانی هم‌پوشان؛ لزوماً اجرای موازی سخت‌افزاری نیست. چالش اصلی هماهنگی دسترسی به دادهٔ مشترک و جلوگیری از شرط مسابقه است.",
    "enDef": "Concurrency means several tasks make progress in overlapping time—not necessarily parallel hardware. The hard part is coordinating shared data and avoiding race conditions.",
    "faHow": "چند کار در حال پیشرفت هم‌زمان منطقی‌اند، حتی روی یک هسته با در هم تنیدن. موازی‌سازی واقعی چند هسته می‌خواهد. ترتیب مشاهده‌شده باید تعریف شود.",
    "enHow": "Several tasks make logical progress together, even interleaved on one core. True parallelism needs multiple cores. Observed order must be defined.",
    "faWhy": "سرور، موبایل و دادهٔ بزرگ بدون مدل همزمانی درست قفل یا فساد داده می‌گیرند.",
    "enWhy": "Servers, mobile apps, and big data corrupt or deadlock without a sound concurrency model."
  },
  {
    "id": "deadlock",
    "fa": "بن‌بست",
    "en": "Deadlock",
    "aliasesFa": [
      "بن‌بست",
      "بنبست",
      "بن بست"
    ],
    "aliasesEn": [
      "deadlock",
      "deadlocks"
    ],
    "faExp": "بن‌بست وقتی است که چند فرایند یا ریسمان منتظر منبعی‌اند که دیگری در اختیار دارد و هیچ‌کدام پیش نمی‌رود. پیشگیری با ترتیب قفل یا مهلت زمانی رایج است.",
    "enExp": "Deadlock occurs when tasks wait for resources each other holds and none can proceed. Lock ordering or timeouts are common preventions.",
    "faEx": "تراکنش A قفل ردیف ۱ را دارد و منتظر ردیف ۲ است؛ B برعکس—بدون سیاست، هر دو می‌مانند.",
    "enEx": "Transaction A locks row 1 waiting for row 2; B the opposite—without a policy both stall.",
    "related": [
      "concurrency",
      "mutex",
      "transaction"
    ],
    "faDef": "بن‌بست وقتی است که چند فرایند یا ریسمان منتظر منبعی‌اند که دیگری در اختیار دارد و هیچ‌کدام پیش نمی‌رود. پیشگیری با ترتیب قفل یا مهلت زمانی رایج است.",
    "enDef": "Deadlock occurs when tasks wait for resources each other holds and none can proceed. Lock ordering or timeouts are common preventions.",
    "faHow": "چند طرف منتظر منبعی‌اند که دیگری نگه داشته؛ چهار شرط کافمن کلاسیک‌اند. پیشگیری، اجتناب، تشخیص و ترمیم راهبردها هستند.",
    "enHow": "Parties wait for resources others hold; Coffman’s four conditions are classic. Prevention, avoidance, detection, and recovery are strategies.",
    "faWhy": "در قفل DB، mutex و سرویس‌های توزیع‌شده بن‌بست سامانه را خاموش می‌کند.",
    "enWhy": "In DB locks, mutexes, and distributed services, deadlock freezes the system."
  },
  {
    "id": "race-condition",
    "fa": "شرط مسابقه",
    "en": "Race condition",
    "aliasesFa": [
      "شرط مسابقه",
      "وضعیت رقابتی"
    ],
    "aliasesEn": [
      "race condition",
      "race conditions"
    ],
    "faExp": "شرط مسابقه وقتی نتیجه به ترتیب زمان‌بندی دسترسی‌های هم‌زمان وابسته است. با همگام‌سازی یا طراحی بدون حالت مشترک مهار می‌شود.",
    "enExp": "A race condition makes results depend on the timing of concurrent accesses. Fix it with synchronization or by avoiding shared mutable state.",
    "faEx": "دو درخواست هم‌زمان موجودی ۱۰۰ را می‌خوانند و هر دو ۹۰ می‌نویسند؛ یک فروش گم می‌شود.",
    "enEx": "Two concurrent requests read stock 100 and both write 90; one sale is lost.",
    "related": [
      "concurrency",
      "mutex",
      "transaction"
    ],
    "faDef": "شرط مسابقه وقتی نتیجه به ترتیب زمان‌بندی دسترسی‌های هم‌زمان وابسته است. با همگام‌سازی یا طراحی بدون حالت مشترک مهار می‌شود.",
    "enDef": "A race condition makes results depend on the timing of concurrent accesses. Fix it with synchronization or by avoiding shared mutable state.",
    "faHow": "نتیجه به زمان‌بندی نسبی دسترسی‌های هم‌روند وابسته است. بخش بحرانی باید اتمی دیده شود. بازتولید سخت است چون حساس به زمان است.",
    "enHow": "Outcome depends on relative timing of concurrent accesses. Critical sections must appear atomic. Reproduction is hard because it is timing-sensitive.",
    "faWhy": "باگ‌های «گاهی» تولید اغلب مسابقه‌اند؛ تست و ابزار تشخیص مسابقه ضروری است.",
    "enWhy": "“Heisenbugs” in production are often races; race detectors and tests are essential."
  },
  {
    "id": "mutex",
    "fa": "قفل متقابل",
    "en": "Mutex",
    "aliasesFa": [
      "قفل متقابل",
      "میوتکس",
      "میوتکس",
      "بخش بحرانی"
    ],
    "aliasesEn": [
      "mutex",
      "critical section",
      "mutex lock"
    ],
    "faExp": "قفل متقابل اطمینان می‌دهد در هر لحظه فقط یک ریسمان وارد بخش بحرانی شود. باید کوتاه گرفته شود و همیشه آزاد شود تا بن‌بست و کندی کم شود.",
    "enExp": "A mutex ensures only one thread enters a critical section at a time. Hold it briefly and always release it to limit deadlock and latency.",
    "faEx": "به‌روزرسانی شمارندهٔ سراسری بازدید داخل قفل انجام می‌شود.",
    "enEx": "Updating a global visit counter happens inside a lock.",
    "related": [
      "concurrency",
      "deadlock",
      "thread"
    ],
    "faDef": "قفل متقابل اطمینان می‌دهد در هر لحظه فقط یک ریسمان وارد بخش بحرانی شود. باید کوتاه گرفته شود و همیشه آزاد شود تا بن‌بست و کندی کم شود.",
    "enDef": "A mutex ensures only one thread enters a critical section at a time. Hold it briefly and always release it to limit deadlock and latency.",
    "faHow": "قفل دوجانبه فقط یک مالک هم‌زمان می‌پذیرد. lock ورود به بخش بحرانی و unlock خروج است. قفل فراموش‌شده بن‌بست یا گرسنگی می‌آورد.",
    "enHow": "A mutex allows one owner at a time. Lock enters the critical section; unlock leaves. Forgotten unlocks cause deadlock or starvation.",
    "faWhy": "حافظهٔ مشترک بدون قفل یا ساختار lock-free امن، فساد خاموش می‌سازد.",
    "enWhy": "Shared memory without locks or safe lock-free structure silently corrupts."
  },
  {
    "id": "virtual-memory",
    "fa": "حافظهٔ مجازی",
    "en": "Virtual memory",
    "aliasesFa": [
      "حافظهٔ مجازی",
      "حافظه مجازی",
      "صفحه‌بندی",
      "صفحهبندی"
    ],
    "aliasesEn": [
      "virtual memory",
      "paging",
      "page fault"
    ],
    "faExp": "حافظهٔ مجازی به هر فرایند فضای آدرس جدا می‌دهد و صفحات را بین RAM و دیسک جابه‌جا می‌کند. احساس حافظهٔ بزرگ‌تر می‌دهد ولی خطای صفحه هزینه دارد.",
    "enExp": "Virtual memory gives each process a private address space and moves pages between RAM and disk. It feels like more memory but page faults cost time.",
    "faEx": "با باز کردن فایل‌های زیاد، سیستم صفحات کم‌استفاده را به دیسک می‌فرستد تا جا باز شود.",
    "enEx": "With many files open, the OS may page cold data to disk to free RAM.",
    "related": [
      "os",
      "process"
    ],
    "faDef": "حافظهٔ مجازی به هر فرایند فضای آدرس جدا می‌دهد و صفحات را بین RAM و دیسک جابه‌جا می‌کند. احساس حافظهٔ بزرگ‌تر می‌دهد ولی خطای صفحه هزینه دارد.",
    "enDef": "Virtual memory gives each process a private address space and moves pages between RAM and disk. It feels like more memory but page faults cost time.",
    "faHow": "آدرس منطقی به فیزیکی با صفحه و جدول صفحه نگاشته می‌شود. صفحهٔ غایب از دیسک می‌آید (page fault). بیش‌تعهدی ممکن است ولی thrashing خطر است.",
    "enHow": "Logical addresses map to physical via pages and page tables. Missing pages fault in from disk. Overcommit is possible; thrashing is the risk.",
    "faWhy": "به هر فرایند فضای بزرگ و ایزوله می‌دهد و مدیریت RAM را ساده‌تر می‌کند.",
    "enWhy": "Gives each process a large isolated space and simplifies RAM management."
  },
  {
    "id": "compiler",
    "fa": "کامپایلر",
    "en": "Compiler",
    "aliasesFa": [
      "کامپایلر",
      "همگردان",
      "کامپایل"
    ],
    "aliasesEn": [
      "compiler",
      "compilers",
      "compilation"
    ],
    "faExp": "کامپایلر برنامهٔ زبان سطح بالا را به کد سطح پایین‌تر (مثل ماشین یا بایت‌کد) ترجمه می‌کند. مراحل رایج: تحلیل واژه‌ای، نحوی، معنایی و تولید کد. خطاها را زودتر از اجرا پیدا می‌کند.",
    "enExp": "A compiler translates high-level programs into lower-level code (machine or bytecode). Typical phases: lexical, syntax, semantic analysis, then code generation. It catches many errors before runtime.",
    "faEx": "کامپایل یک پروژهٔ TypeScript به JavaScript قبل از استقرار روی سرور.",
    "enEx": "Compiling a TypeScript project to JavaScript before server deploy.",
    "related": [
      "grammar",
      "ast",
      "interpreter"
    ],
    "faDef": "کامپایلر برنامهٔ زبان سطح بالا را به کد سطح پایین‌تر (مثل ماشین یا بایت‌کد) ترجمه می‌کند. مراحل رایج: تحلیل واژه‌ای، نحوی، معنایی و تولید کد. خطاها را زودتر از اجرا پیدا می‌کند.",
    "enDef": "A compiler translates high-level programs into lower-level code (machine or bytecode). Typical phases: lexical, syntax, semantic analysis, then code generation. It catches many errors before runtime.",
    "faHow": "منبع را به چند گذر تحلیل واژه‌ای، نحوی، معنایی، بهینه‌سازی و تولید کد تبدیل می‌کند. خطاها را زود گزارش می‌دهد. خروجی کد ماشین یا میانی است.",
    "enHow": "Transforms source through lexing, parsing, semantic analysis, optimization, and code generation. Reports errors early. Emits machine or intermediate code.",
    "faWhy": "درک کامپایلر پیام خطا، کارایی و طراحی DSL را بهتر می‌کند.",
    "enWhy": "Compiler literacy improves error messages, performance, and DSL design."
  },
  {
    "id": "interpreter",
    "fa": "مفسر",
    "en": "Interpreter",
    "aliasesFa": [
      "مفسر",
      "تفسیر"
    ],
    "aliasesEn": [
      "interpreter",
      "interpreters"
    ],
    "faExp": "مفسر دستورها را مستقیم اجرا می‌کند بدون تولید کامل فایل اجرایی از قبل. انعطاف و شروع سریع می‌دهد ولی گاه کندتر از کد کامپایل‌شده است.",
    "enExp": "An interpreter executes instructions directly without fully producing a standalone binary first. It offers flexibility and fast startup, often at some speed cost versus compiled code.",
    "faEx": "اجرای یک اسکریپت پایتون خط‌به‌خط در محیط تعاملی.",
    "enEx": "Running a Python script line by line in an interactive shell.",
    "related": [
      "compiler",
      "virtual-machine"
    ],
    "faDef": "مفسر دستورها را مستقیم اجرا می‌کند بدون تولید کامل فایل اجرایی از قبل. انعطاف و شروع سریع می‌دهد ولی گاه کندتر از کد کامپایل‌شده است.",
    "enDef": "An interpreter executes instructions directly without fully producing a standalone binary first. It offers flexibility and fast startup, often at some speed cost versus compiled code.",
    "faHow": "دستورات را یکی‌یکی اجرا می‌کند یا به بایت‌کد ماشین مجازی می‌دهد. شروع سریع‌تر است؛ حلقه‌های داغ ممکن است کندتر از کد بومی باشند مگر JIT باشد.",
    "enHow": "Executes statements one by one or via VM bytecode. Starts quickly; hot loops may be slower than native code unless JIT helps.",
    "faWhy": "اسکریپت، REPL و بسیاری از زبان‌های پویا روی مفسر یا VM سوارند.",
    "enWhy": "Scripts, REPLs, and many dynamic languages run on interpreters or VMs."
  },
  {
    "id": "ast",
    "fa": "درخت نحو انتزاعی",
    "en": "Abstract syntax tree",
    "aliasesFa": [
      "درخت نحو انتزاعی",
      "AST"
    ],
    "aliasesEn": [
      "abstract syntax tree",
      "AST"
    ],
    "faExp": "AST نمایش درختی ساختار برنامه پس از تجزیه است؛ جزئیات نگارشی فرعی حذف می‌شود. ابزارهای تحلیل، قالب‌بندی و کامپایل روی AST کار می‌کنند.",
    "enExp": "An AST is a tree form of program structure after parsing, omitting incidental syntax. Analyzers, formatters, and compilers operate on ASTs.",
    "faEx": "عبارت a + b * c به درختی با ریشهٔ + و فرزند ضرب تبدیل می‌شود.",
    "enEx": "The expression a + b * c becomes a tree with + at the root and multiplication as a child.",
    "related": [
      "compiler",
      "grammar",
      "tree"
    ],
    "diagram": "tree",
    "faDef": "AST نمایش درختی ساختار برنامه پس از تجزیه است؛ جزئیات نگارشی فرعی حذف می‌شود. ابزارهای تحلیل، قالب‌بندی و کامپایل روی AST کار می‌کنند.",
    "enDef": "An AST is a tree form of program structure after parsing, omitting incidental syntax. Analyzers, formatters, and compilers operate on ASTs.",
    "faHow": "درخت نحو انتزاعی ساختار برنامه را بدون جزئیات صرفی نگه می‌دارد. گره‌ها ساخت‌های زبانی‌اند. ابزارها روی AST تبدیل و تحلیل می‌کنند.",
    "enHow": "An abstract syntax tree holds program structure without concrete syntax noise. Nodes are language constructs. Tools transform and analyze on the AST.",
    "faWhy": "لینتر، قالب‌بند، transpiler و IDE بدون AST کورند.",
    "enWhy": "Linters, formatters, transpilers, and IDEs are blind without ASTs."
  },
  {
    "id": "virtual-machine",
    "fa": "ماشین مجازی",
    "en": "Virtual machine",
    "aliasesFa": [
      "ماشین مجازی",
      "ماشین‌های مجازی",
      "ماشینهای مجازی",
      "VM"
    ],
    "aliasesEn": [
      "virtual machine",
      "VM",
      "JVM"
    ],
    "faExp": "ماشین مجازی لایهٔ نرم‌افزاری است که یک محیط اجرا یا سخت‌افزار را شبیه‌سازی می‌کند. جداسازی، حمل‌پذیری و مدیریت منابع را آسان می‌کند.",
    "enExp": "A virtual machine is a software layer that emulates a runtime or machine. It aids isolation, portability, and resource control.",
    "faEx": "JVM بایت‌کد جاوا را روی سیستم‌عامل‌های مختلف یکسان اجرا می‌کند.",
    "enEx": "The JVM runs Java bytecode consistently across operating systems.",
    "related": [
      "container",
      "interpreter",
      "os"
    ],
    "faDef": "ماشین مجازی لایهٔ نرم‌افزاری است که یک محیط اجرا یا سخت‌افزار را شبیه‌سازی می‌کند. جداسازی، حمل‌پذیری و مدیریت منابع را آسان می‌کند.",
    "enDef": "A virtual machine is a software layer that emulates a runtime or machine. It aids isolation, portability, and resource control.",
    "faHow": "لایهٔ اجرایی برنامه‌ها را از سخت‌افزار جدا می‌کند: VM فرایند (مثل JVM) یا ماشین کامل. بایت‌کد قابل حمل است و سیاست امنیتی اعمال می‌شود.",
    "enHow": "An execution layer isolates programs from hardware—process VMs (e.g. JVM) or full machines. Bytecode is portable and security policy can be enforced.",
    "faWhy": "استقرار یکسان، ایزوله و چندزبانه را ممکن می‌کند.",
    "enWhy": "Enables uniform, isolated, polyglot deployment."
  },
  {
    "id": "container",
    "fa": "کانتینر",
    "en": "Container",
    "aliasesFa": [
      "کانتینر",
      "کانتینرها",
      "داکر"
    ],
    "aliasesEn": [
      "container",
      "containers",
      "Docker"
    ],
    "faExp": "کانتینر بستهٔ سبک فرایند به‌همراه وابستگی‌هاست که فضای کاربری را جدا می‌کند ولی معمولاً هستهٔ OS میزبان را شریک می‌شود. استقرار تکرارپذیر و سریع می‌سازد.",
    "enExp": "A container packages a process with dependencies, isolating user space while typically sharing the host kernel. It enables fast, repeatable deploys.",
    "faEx": "یک تصویر Docker شامل API و کتابخانه‌هایش در هر محیط توسعه و تولید یکسان بالا می‌آید.",
    "enEx": "A Docker image with an API and its libraries starts the same in dev and prod.",
    "related": [
      "virtual-machine",
      "devops",
      "ci-cd"
    ],
    "faDef": "کانتینر بستهٔ سبک فرایند به‌همراه وابستگی‌هاست که فضای کاربری را جدا می‌کند ولی معمولاً هستهٔ OS میزبان را شریک می‌شود. استقرار تکرارپذیر و سریع می‌سازد.",
    "enDef": "A container packages a process with dependencies, isolating user space while typically sharing the host kernel. It enables fast, repeatable deploys.",
    "faHow": "فرایندها را با فضای نام و cgroup جدا می‌کند و سیستم‌فایل ریشهٔ خودشان را می‌دهد. سبک‌تر از VM کامل است. ایمیج لایه‌ای تکرارپذیر است.",
    "enHow": "Isolates processes with namespaces and cgroups and gives them their own root filesystem. Lighter than full VMs. Layered images are repeatable.",
    "faWhy": "CI و میکروسرویس با کانتینر «روی ماشین من کار می‌کرد» را کم می‌کنند.",
    "enWhy": "CI and microservices use containers to shrink “works on my machine.”"
  },
  {
    "id": "network",
    "fa": "شبکهٔ رایانه",
    "en": "Computer network",
    "aliasesFa": [
      "شبکهٔ رایانه",
      "شبکه رایانه",
      "شبکه‌های رایانه",
      "شبکههای رایانه"
    ],
    "aliasesEn": [
      "computer network",
      "network",
      "networking"
    ],
    "faExp": "شبکه پیوند رایانه‌ها برای تبادل داده است. لایه‌ها (مثل مدل اینترنت) مسئولیت‌ها را جدا می‌کنند: پیوند، شبکه، انتقال، کاربرد.",
    "enExp": "A network links computers to exchange data. Layered models (as in the Internet) separate link, network, transport, and application duties.",
    "faEx": "گوشی شما از وای‌فای تا مسیریاب خانگی و بعد اینترنت به سرور بانک می‌رسد.",
    "enEx": "Your phone reaches a bank server via Wi-Fi, a home router, then the Internet.",
    "related": [
      "protocol",
      "http",
      "tcp"
    ],
    "faDef": "شبکه پیوند رایانه‌ها برای تبادل داده است. لایه‌ها (مثل مدل اینترنت) مسئولیت‌ها را جدا می‌کنند: پیوند، شبکه، انتقال، کاربرد.",
    "enDef": "A network links computers to exchange data. Layered models (as in the Internet) separate link, network, transport, and application duties.",
    "faHow": "لایه‌ها (مثلاً مدل اینترنت) مسئولیت را جدا می‌کنند: پیوند، شبکه، انتقال، کاربرد. مسیریابی بسته را جلو می‌برد؛ تأخیر و ازدست‌رفتن واقعیت‌اند.",
    "enHow": "Layers (e.g. Internet model) split duties: link, network, transport, application. Routing forwards packets; latency and loss are real.",
    "faWhy": "تقریباً هر محصول مدرن توزیع‌شده است؛ نادیده گرفتن شبکه یعنی نادیده گرفتن شکست.",
    "enWhy": "Almost every modern product is distributed; ignoring the network ignores failure."
  },
  {
    "id": "protocol",
    "fa": "پروتکل",
    "en": "Protocol",
    "aliasesFa": [
      "پروتکل",
      "پروتکل‌ها",
      "پروتکلها",
      "قرارداد ارتباطی"
    ],
    "aliasesEn": [
      "protocol",
      "protocols"
    ],
    "faExp": "پروتکل مجموعهٔ قواعد قالب پیام و ترتیب تبادل است تا دو طرف یکدیگر را بفهمند. بدون پروتکل مشترک ارتباط بی‌معنا می‌شود.",
    "enExp": "A protocol is the agreed message formats and exchange order so parties understand each other. Without a shared protocol, communication fails.",
    "faEx": "HTTP می‌گوید درخواست GET چگونه نوشته شود و پاسخ وضعیت چه معنایی دارد.",
    "enEx": "HTTP defines how a GET request is written and what status codes mean.",
    "related": [
      "http",
      "tcp",
      "api",
      "fsm"
    ],
    "faDef": "پروتکل مجموعهٔ قواعد قالب پیام و ترتیب تبادل است تا دو طرف یکدیگر را بفهمند. بدون پروتکل مشترک ارتباط بی‌معنا می‌شود.",
    "enDef": "A protocol is the agreed message formats and exchange order so parties understand each other. Without a shared protocol, communication fails.",
    "faHow": "قرارداد پیام‌ها، ترتیب و خطا را تعریف می‌کند. نسخه و سازگاری عقبرو مهم است. ماشین حالت اغلب رفتار را مدل می‌کند.",
    "enHow": "A contract for messages, ordering, and errors. Versioning and backward compatibility matter. An FSM often models behavior.",
    "faWhy": "بدون پروتکل روشن، یکپارچه‌سازی شکننده و ناامن می‌شود.",
    "enWhy": "Without a clear protocol, integration is brittle and unsafe."
  },
  {
    "id": "tcp",
    "fa": "TCP",
    "en": "TCP",
    "aliasesFa": [
      "TCP",
      "تی‌سی‌پی",
      "تیسیپی",
      "پروتکل کنترل ارسال"
    ],
    "aliasesEn": [
      "TCP",
      "Transmission Control Protocol"
    ],
    "faExp": "TCP پروتکل انتقال قابل‌اطمینان است: اتصال برقرار می‌کند، ترتیب و تحویل را کنترل می‌کند و ازدحام را تا حدی مدیریت می‌کند. برای دادهٔ حساس به صحت مناسب است.",
    "enExp": "TCP is a reliable transport: it connects, preserves order and delivery, and helps manage congestion. It suits integrity-sensitive data.",
    "faEx": "بارگذاری یک صفحهٔ وب معمولاً روی TCP است تا بایت‌ها کامل و مرتب برسند.",
    "enEx": "Loading a web page usually rides TCP so bytes arrive complete and ordered.",
    "related": [
      "protocol",
      "http",
      "network"
    ],
    "faDef": "TCP پروتکل انتقال قابل‌اطمینان است: اتصال برقرار می‌کند، ترتیب و تحویل را کنترل می‌کند و ازدحام را تا حدی مدیریت می‌کند. برای دادهٔ حساس به صحت مناسب است.",
    "enDef": "TCP is a reliable transport: it connects, preserves order and delivery, and helps manage congestion. It suits integrity-sensitive data.",
    "faHow": "اتصال‌گراست: دست‌دهی، شماره ترتیب، بازارسال و کنترل جریان/ازدحام. بایت‌استریم قابل‌اطمینان روی IP ناپایدار می‌سازد.",
    "enHow": "Connection-oriented: handshake, sequence numbers, retransmission, flow/congestion control. Turns unreliable IP into a reliable byte stream.",
    "faWhy": "بیشتر APIهای تجاری روی TCP (و بالای آن TLS/HTTP) سوارند.",
    "enWhy": "Most business APIs ride TCP (often with TLS/HTTP on top)."
  },
  {
    "id": "http",
    "fa": "HTTP",
    "en": "HTTP",
    "aliasesFa": [
      "HTTP",
      "اچ‌تی‌تی‌پی",
      "اچتیتیپی"
    ],
    "aliasesEn": [
      "HTTP",
      "HTTPS"
    ],
    "faExp": "HTTP پروتکل کاربرد برای درخواست و پاسخ وب است: روش‌هایی مثل GET و POST و کدهای وضعیت. HTTPS همان HTTP روی کانال رمزشده است.",
    "enExp": "HTTP is the web’s request/response application protocol: methods like GET and POST and status codes. HTTPS is HTTP over an encrypted channel.",
    "faEx": "مرورگر GET /accounts می‌فرستد و سرور JSON با کد ۲۰۰ برمی‌گرداند.",
    "enEx": "A browser sends GET /accounts and the server returns JSON with status 200.",
    "related": [
      "api",
      "protocol",
      "encryption",
      "rest"
    ],
    "faDef": "HTTP پروتکل کاربرد برای درخواست و پاسخ وب است: روش‌هایی مثل GET و POST و کدهای وضعیت. HTTPS همان HTTP روی کانال رمزشده است.",
    "enDef": "HTTP is the web’s request/response application protocol: methods like GET and POST and status codes. HTTPS is HTTP over an encrypted channel.",
    "faHow": "درخواست/پاسخ بی‌وضعیت در لایهٔ کاربرد: متد، مسیر، سرآیند، بدنه و کد وضعیت. HTTP/2 و ۳ کارایی را بهبود می‌دهند ولی مدل مفهومی همان است.",
    "enHow": "Stateless request/response at the application layer: method, path, headers, body, status. HTTP/2 and 3 improve efficiency; the mental model stays.",
    "faWhy": "وب و APIهای REST عملاً زبان مشترک HTTP دارند.",
    "enWhy": "The web and REST APIs share HTTP as a common tongue."
  },
  {
    "id": "api",
    "fa": "رابط برنامه‌نویسی کاربردی",
    "en": "API",
    "aliasesFa": [
      "رابط برنامه‌نویسی",
      "رابط برنامهنویسی",
      "رابط برنامه‌نویسی کاربردی",
      "رابط برنامهنویسی کاربردی",
      "API",
      "ای‌پی‌آی",
      "ایپیآی"
    ],
    "aliasesEn": [
      "API",
      "application programming interface",
      "APIs"
    ],
    "faExp": "API قرارداد رسمی برای استفاده از قابلیت یک سامانه بدون دانستن جزئیات داخلی است. مرز پایدار بین تیم‌ها و سرویس‌ها می‌سازد.",
    "enExp": "An API is a formal contract for using a system’s capabilities without knowing internals. It creates a stable boundary between teams and services.",
    "faEx": "API پرداخت موجودی را کم می‌کند؛ اپ موبایل فقط endpoint و پارامترها را می‌شناسد.",
    "enEx": "A payments API debits a balance; the mobile app only knows the endpoint and parameters.",
    "related": [
      "rest",
      "http",
      "modularity"
    ],
    "faDef": "API قرارداد رسمی برای استفاده از قابلیت یک سامانه بدون دانستن جزئیات داخلی است. مرز پایدار بین تیم‌ها و سرویس‌ها می‌سازد.",
    "enDef": "An API is a formal contract for using a system’s capabilities without knowing internals. It creates a stable boundary between teams and services.",
    "faHow": "قرارداد برنامه‌نویسی برای استفاده از قابلیت بدون دانستن پیاده‌سازی. نسخه، مستند و پایداری قرارداد مهم‌اند. خطا باید ماشین‌خوان باشد.",
    "enHow": "A programming contract to use capability without knowing implementation. Versioning, docs, and contract stability matter. Errors should be machine-readable.",
    "faWhy": "تیم‌ها و سیستم‌ها از طریق API جدا و هم‌روند می‌شوند.",
    "enWhy": "Teams and systems decouple and collaborate through APIs."
  },
  {
    "id": "rest",
    "fa": "REST",
    "en": "REST",
    "aliasesFa": [
      "REST",
      "restful",
      "رست"
    ],
    "aliasesEn": [
      "REST",
      "RESTful"
    ],
    "faExp": "REST سبک طراحی API وب است که منابع را با URI شناسایی می‌کند و از روش‌های HTTP برای خواندن و تغییر استفاده می‌کند. وضعیت کلاینت ترجیحاً روی سرور نشست طولانی نگه نمی‌دارد.",
    "enExp": "REST is a web API style that identifies resources by URI and uses HTTP methods to read and change them. Client session state is preferably not kept long on the server.",
    "faEx": "GET /orders/42 سفارش را می‌خواند؛ DELETE /orders/42 آن را حذف می‌کند.",
    "enEx": "GET /orders/42 reads an order; DELETE /orders/42 removes it.",
    "related": [
      "api",
      "http",
      "json"
    ],
    "faDef": "REST سبک طراحی API وب است که منابع را با URI شناسایی می‌کند و از روش‌های HTTP برای خواندن و تغییر استفاده می‌کند. وضعیت کلاینت ترجیحاً روی سرور نشست طولانی نگه نمی‌دارد.",
    "enDef": "REST is a web API style that identifies resources by URI and uses HTTP methods to read and change them. Client session state is preferably not kept long on the server.",
    "faHow": "سبک معماری روی منبع و بازنمایی؛ افعال HTTP معنا دارند. بی‌وضعیت بودن سرور مقیاس را ساده می‌کند. HATEOAS اختیاری ولی ایدهٔ ابررسانه است.",
    "enHow": "Architectural style of resources and representations; HTTP verbs carry meaning. Stateless servers ease scaling. HATEOAS is optional hypermedia.",
    "faWhy": "API عمومی وب اغلب REST یا REST-مانند طراحی می‌شود تا کش و ابزار استاندارد بخورد.",
    "enWhy": "Public web APIs are often REST-ish so caches and standard tools apply."
  },
  {
    "id": "json",
    "fa": "JSON",
    "en": "JSON",
    "aliasesFa": [
      "JSON",
      "جی‌سون",
      "جیسون"
    ],
    "aliasesEn": [
      "JSON"
    ],
    "faExp": "JSON قالب متنی سبک برای دادهٔ ساخت‌یافته با شیء و آرایه است. خواندن برای انسان و ماشین آسان است و در APIهای وب بسیار رایج است.",
    "enExp": "JSON is a lightweight textual format for structured data with objects and arrays. Humans and machines read it easily; it dominates web APIs.",
    "faEx": "{\"amount\": 150000, \"currency\": \"IRR\"} بدنهٔ یک پاسخ API است.",
    "enEx": "{\"amount\": 150000, \"currency\": \"IRR\"} as an API response body.",
    "related": [
      "api",
      "rest",
      "xml"
    ],
    "faDef": "JSON قالب متنی سبک برای دادهٔ ساخت‌یافته با شیء و آرایه است. خواندن برای انسان و ماشین آسان است و در APIهای وب بسیار رایج است.",
    "enDef": "JSON is a lightweight textual format for structured data with objects and arrays. Humans and machines read it easily; it dominates web APIs.",
    "faHow": "متن کلید-مقدار، آرایه و مقادیر ساده. سبک و خوانا برای انسان و ماشین. اسکیمای جدا (مثلاً JSON Schema) اعتبار را اضافه می‌کند.",
    "enHow": "Text of key–values, arrays, and scalars. Light and readable for humans and machines. Separate schema (e.g. JSON Schema) adds validation.",
    "faWhy": "بدنهٔ API، پیکربندی و لاگ ساخت‌یافته غالباً JSON است.",
    "enWhy": "API bodies, config, and structured logs are often JSON."
  },
  {
    "id": "xml",
    "fa": "XML",
    "en": "XML",
    "aliasesFa": [
      "XML",
      "اکس‌ام‌ال",
      "اکسامال"
    ],
    "aliasesEn": [
      "XML"
    ],
    "faExp": "XML زبان نشانه‌گذاری برای سندهای ساخت‌یافته با برچسب‌های تودرتو است. در پیکربندی، تبادل سازمانی و برخی استانداردها هنوز مهم است.",
    "enExp": "XML is a markup language for nested tagged documents. It remains important in configuration, enterprise exchange, and some standards.",
    "faEx": "فایل تنظیمات قدیمی سرور با عناصر <server><port>443</port></server>.",
    "enEx": "A legacy server config with <server><port>443</port></server>.",
    "related": [
      "json",
      "api"
    ],
    "faDef": "XML زبان نشانه‌گذاری برای سندهای ساخت‌یافته با برچسب‌های تودرتو است. در پیکربندی، تبادل سازمانی و برخی استانداردها هنوز مهم است.",
    "enDef": "XML is a markup language for nested tagged documents. It remains important in configuration, enterprise exchange, and some standards.",
    "faHow": "نشانه‌گذاری تودرتو با تگ، ویژگی و فضای‌نام. Schema/DTD ساختار را سخت می‌گیرد. سنگین‌تر از JSON ولی برای اسناد غنی قوی است.",
    "enHow": "Nested markup with tags, attributes, and namespaces. Schema/DTD constrains structure. Heavier than JSON but strong for rich documents.",
    "faWhy": "استانداردهای سازمانی، SOAP و اسناد بلند هنوز XML زیاد دارند.",
    "enWhy": "Enterprise standards, SOAP, and long documents still use much XML."
  },
  {
    "id": "database",
    "fa": "پایگاه داده",
    "en": "Database",
    "aliasesFa": [
      "پایگاه داده",
      "پایگاه‌داده",
      "پایگاهداده",
      "دیتابیس",
      "بانک اطلاعاتی"
    ],
    "aliasesEn": [
      "database",
      "databases",
      "DB"
    ],
    "faExp": "پایگاه داده سامانهٔ سازمان‌یافته برای ذخیره و بازیابی داده با دوام و قابلیت پرس‌وجو است. مدل‌های رابطه‌ای و غیررابطه‌ای رایج‌اند.",
    "enExp": "A database is an organized system for durable storage and querying of data. Relational and non-relational models are common.",
    "faEx": "جدول مشتریان و سفارش‌ها با کلید خارجی به هم وصل می‌شوند.",
    "enEx": "Customers and orders tables linked by a foreign key.",
    "related": [
      "normalization",
      "transaction",
      "schema",
      "sql"
    ],
    "faDef": "پایگاه داده سامانهٔ سازمان‌یافته برای ذخیره و بازیابی داده با دوام و قابلیت پرس‌وجو است. مدل‌های رابطه‌ای و غیررابطه‌ای رایج‌اند.",
    "enDef": "A database is an organized system for durable storage and querying of data. Relational and non-relational models are common.",
    "faHow": "داده را durably نگه می‌دارد و پرس‌وجو می‌کند. مدل رابطه‌ای یا سند یا کلید-مقدار انتخاب طراحی است. تراکنش یکپارچگی را حفظ می‌کند.",
    "enHow": "Stores data durably and answers queries. Relational, document, or key–value is a design choice. Transactions protect integrity.",
    "faWhy": "منبع حقیقت کسب‌وکار معمولاً پایگاه‌داده است؛ طرح بد دیر اصلاح می‌شود.",
    "enWhy": "The business source of truth is usually a database; a bad schema is costly to fix late."
  },
  {
    "id": "sql",
    "fa": "SQL",
    "en": "SQL",
    "aliasesFa": [
      "SQL",
      "اس‌کیوال",
      "اسکیوال",
      "زبان پرس‌وجوی ساخت‌یافته",
      "زبان پرسوجوی ساختیافته"
    ],
    "aliasesEn": [
      "SQL",
      "Structured Query Language"
    ],
    "faExp": "SQL زبان استاندارد کار با پایگاه‌های رابطه‌ای است: تعریف طرح، درج، به‌روزرسانی و پرس‌وجو. اعلان‌محور است؛ موتور اجرا را برنامه‌ریزی می‌کند.",
    "enExp": "SQL is the standard language for relational databases: schema, insert, update, and query. It is declarative; the engine plans execution.",
    "faEx": "SELECT name FROM customers WHERE city = 'Tehran';",
    "enEx": "SELECT name FROM customers WHERE city = 'Tehran';",
    "related": [
      "database",
      "normalization",
      "transaction"
    ],
    "faDef": "SQL زبان استاندارد کار با پایگاه‌های رابطه‌ای است: تعریف طرح، درج، به‌روزرسانی و پرس‌وجو. اعلان‌محور است؛ موتور اجرا را برنامه‌ریزی می‌کند.",
    "enDef": "SQL is the standard language for relational databases: schema, insert, update, and query. It is declarative; the engine plans execution.",
    "faHow": "زبان اعلانی برای تعریف و پرس‌وجوی دادهٔ رابطه‌ای: SELECT، JOIN، INSERT/UPDATE/DELETE. بهینه‌ساز طرح اجرا می‌سازد.",
    "enHow": "Declarative language to define and query relational data: SELECT, JOIN, DML. The optimizer builds an execution plan.",
    "faWhy": "تحلیل، گزارش و منطق نزدیک به داده با SQL دقیق و قابل‌بازبینی است.",
    "enWhy": "Analytics, reporting, and data-near logic stay precise and reviewable in SQL."
  },
  {
    "id": "schema",
    "fa": "طرح‌واره",
    "en": "Schema",
    "aliasesFa": [
      "طرح‌واره",
      "طرحواره",
      "اسکیما",
      "طرح پایگاه داده"
    ],
    "aliasesEn": [
      "schema",
      "database schema"
    ],
    "faExp": "طرح‌واره ساختار مجاز داده را توصیف می‌کند: جدول‌ها، نوع ستون‌ها و محدودیت‌ها. قرارداد بین تولیدکنندگان و مصرف‌کنندگان داده است.",
    "enExp": "A schema describes allowed data shape: tables, column types, and constraints. It is a contract between producers and consumers of data.",
    "faEx": "ستون amount باید عدد غیرمنفی باشد؛ طرح‌واره مقدار منفی را رد می‌کند.",
    "enEx": "Column amount must be a non-negative number; the schema rejects negatives.",
    "related": [
      "database",
      "normalization",
      "api"
    ],
    "faDef": "طرح‌واره ساختار مجاز داده را توصیف می‌کند: جدول‌ها، نوع ستون‌ها و محدودیت‌ها. قرارداد بین تولیدکنندگان و مصرف‌کنندگان داده است.",
    "enDef": "A schema describes allowed data shape: tables, column types, and constraints. It is a contract between producers and consumers of data.",
    "faHow": "ساختار مجاز داده: جدول‌ها، نوع‌ها، کلیدها و قیود. مهاجرت طرح باید نسخه‌دار باشد. اسکیمای ضعیف دادهٔ کثیف می‌آورد.",
    "enHow": "Allowed data shape: tables, types, keys, constraints. Schema migration must be versioned. Weak schemas invite dirty data.",
    "faWhy": "قرارداد بین تولیدکننده و مصرف‌کنندهٔ داده است؛ تغییر بی‌خبر می‌شکند.",
    "enWhy": "It is the contract between producers and consumers of data; silent changes break clients."
  },
  {
    "id": "normalization",
    "fa": "نرمال‌سازی",
    "en": "Normalization",
    "aliasesFa": [
      "نرمال‌سازی",
      "نرمالسازی",
      "بهنجارسازی",
      "فرم‌های نرمال",
      "فرمهای نرمال"
    ],
    "aliasesEn": [
      "normalization",
      "normal form",
      "database normalization"
    ],
    "faExp": "نرمال‌سازی سازمان‌دهی جداول برای کاهش تکرار و ناهنجاری به‌روزرسانی است. فرم‌های نرمال قواعد وابستگی را مرحله‌به‌مرحله اعمال می‌کنند. گاهی برای کارایی عامدانه دنرمال می‌کنند.",
    "enExp": "Normalization organizes tables to reduce duplication and update anomalies. Normal forms apply dependency rules step by step. Teams sometimes denormalize deliberately for speed.",
    "faEx": "به‌جای تکرار آدرس مشتری در هر سفارش، آدرس در جدول مشتری است و سفارش فقط شناسهٔ مشتری را دارد.",
    "enEx": "Instead of repeating a customer address on every order, store it once on the customer and reference the id.",
    "related": [
      "database",
      "schema",
      "sql"
    ],
    "faDef": "نرمال‌سازی سازمان‌دهی جداول برای کاهش تکرار و ناهنجاری به‌روزرسانی است. فرم‌های نرمال قواعد وابستگی را مرحله‌به‌مرحله اعمال می‌کنند. گاهی برای کارایی عامدانه دنرمال می‌کنند.",
    "enDef": "Normalization organizes tables to reduce duplication and update anomalies. Normal forms apply dependency rules step by step. Teams sometimes denormalize deliberately for speed.",
    "faHow": "۱NF اتمی بودن، ۲NF حذف وابستگی جزئی به کلید مرکب، ۳NF حذف وابستگی متعدی. گاهی عمداً denormalize برای خواندن سریع.",
    "enHow": "1NF atomicity, 2NF no partial dependency on a composite key, 3NF no transitive dependency. Sometimes denormalize on purpose for read speed.",
    "faWhy": "کاهش افزونگی و ناهنجاری به‌روزرسانی؛ پایهٔ مدل رابطه‌ای تمیز.",
    "enWhy": "Cuts redundancy and update anomalies—foundation of a clean relational model.",
    "sample": {
      "faQ": "جدول Orders(order_id, customer_name, customer_city, product, qty) مشتری را کنار سفارش نگه می‌دارد. برای رسیدن به ۳NF چه جداول حداقلی پیشنهاد می‌کنید؟",
      "enQ": "Table Orders(order_id, customer_name, customer_city, product, qty) stores customer data with each order. What minimal tables move this toward 3NF?",
      "faSteps": [
        "۱NF: هر سلول اتمی؛ فرض می‌کنیم هست.",
        "۲NF/۳NF: ویژگی‌های مشتری به کلید مشتری وابسته‌اند نه به order_id.",
        "جدا کردن Customers(customer_id, name, city) و OrderLines(order_id, customer_id, product, qty)."
      ],
      "enSteps": [
        "1NF: assume atomic cells.",
        "2NF/3NF: customer attributes depend on customer key, not order_id.",
        "Split into Customers(customer_id, name, city) and OrderLines(order_id, customer_id, product, qty)."
      ],
      "faAns": "Customers(customer_id, name, city) و OrderLines(order_id, customer_id, product, qty).",
      "enAns": "Customers(customer_id, name, city) and OrderLines(order_id, customer_id, product, qty)."
    }
  },
  {
    "id": "transaction",
    "fa": "تراکنش",
    "en": "Transaction",
    "aliasesFa": [
      "تراکنش",
      "تراکنش‌ها",
      "تراکنشها",
      "ACID"
    ],
    "aliasesEn": [
      "transaction",
      "transactions",
      "ACID"
    ],
    "faExp": "تراکنش واحد کار اتمی روی داده است: یا همهٔ تغییرات اعمال می‌شوند یا هیچ. ویژگی‌های ACID اعتماد به صحت را در خرابی و هم‌زمانی بالا می‌برند.",
    "enExp": "A transaction is an atomic unit of work on data: all changes commit or none do. ACID properties raise confidence under failure and concurrency.",
    "faEx": "انتقال وجه: کم‌کردن از A و افزودن به B در یک تراکنش؛ اگر یکی شکست بخورد هر دو برمی‌گردند.",
    "enEx": "A transfer: debit A and credit B in one transaction; if either fails both roll back.",
    "related": [
      "database",
      "concurrency",
      "deadlock"
    ],
    "faDef": "تراکنش واحد کار اتمی روی داده است: یا همهٔ تغییرات اعمال می‌شوند یا هیچ. ویژگی‌های ACID اعتماد به صحت را در خرابی و هم‌زمانی بالا می‌برند.",
    "enDef": "A transaction is an atomic unit of work on data: all changes commit or none do. ACID properties raise confidence under failure and concurrency.",
    "faHow": "ACID: اتمی، سازگار، ایزوله، پایدار. BEGIN/COMMIT/ROLLBACK مرزها را می‌سازند. سطح ایزوله مصالحهٔ سازگاری و عملکرد است.",
    "enHow": "ACID: atomic, consistent, isolated, durable. BEGIN/COMMIT/ROLLBACK mark boundaries. Isolation level trades consistency vs performance.",
    "faWhy": "انتقال پول و رزرو موجودی بدون تراکنش خراب می‌شود.",
    "enWhy": "Money moves and inventory holds break without transactions."
  },
  {
    "id": "requirement",
    "fa": "نیازمندی",
    "en": "Requirement",
    "aliasesFa": [
      "نیازمندی",
      "نیازمندی‌ها",
      "نیازمندیها",
      "نیازمندی نرم‌افزار",
      "نیازمندی نرمافزار"
    ],
    "aliasesEn": [
      "requirement",
      "requirements",
      "software requirement"
    ],
    "faExp": "نیازمندی بیان می‌کند نرم‌افزار باید چه قابلیت یا قیدی داشته باشد تا مسئلهٔ ذی‌نفع را حل کند. پایهٔ طراحی، تست و پذیرش است. مبهم‌بودنش هزینهٔ دیرهنگام می‌آورد.",
    "enExp": "A requirement states a capability or constraint the software must meet to solve a stakeholder problem. It anchors design, test, and acceptance. Ambiguity causes late cost.",
    "faEx": "«کاربر باید بتواند در کمتر از ۳ ثانیه موجودی را ببیند» یک نیازمندی سنجش‌پذیر است.",
    "enEx": "“The user must see the balance in under 3 seconds” is a measurable requirement.",
    "related": [
      "stakeholder",
      "use-case",
      "user-story",
      "validation",
      "traceability"
    ],
    "faDef": "نیازمندی بیان می‌کند نرم‌افزار باید چه قابلیت یا قیدی داشته باشد تا مسئلهٔ ذی‌نفع را حل کند. پایهٔ طراحی، تست و پذیرش است. مبهم‌بودنش هزینهٔ دیرهنگام می‌آورد.",
    "enDef": "A requirement states a capability or constraint the software must meet to solve a stakeholder problem. It anchors design, test, and acceptance. Ambiguity causes late cost.",
    "faHow": "نیازمندی می‌گوید سامانه باید چه کند یا چه قیدی رعایت کند؛ کارکردی یا غیرکارکردی. منبع آن ذی‌نفع است و باید قابل‌راستی‌آزمایی باشد. ابهام دشمن نیازمندی است.",
    "enHow": "A requirement states what the system must do or what constraint it must meet—functional or quality. Stakeholders are the source; it must be verifiable. Ambiguity is the enemy.",
    "faWhy": "ساخت روی نیازمندی مبهم هزینهٔ دوباره‌کاری می‌دهد؛ ردیابی تا تست بستن حلقه است.",
    "enWhy": "Building on ambiguous requirements causes rework; tracing to tests closes the loop."
  },
  {
    "id": "stakeholder",
    "fa": "ذی‌نفع",
    "en": "Stakeholder",
    "aliasesFa": [
      "ذی‌نفع",
      "ذینفع",
      "ذی‌نفعان",
      "ذینفعان"
    ],
    "aliasesEn": [
      "stakeholder",
      "stakeholders"
    ],
    "faExp": "ذی‌نفع فرد یا گروهی است که از سامانه تأثیر می‌گیرد یا بر آن اثر می‌گذارد: کاربر، سفارش‌دهنده، بهره‌بردار، ناظر. شناسایی زودهنگامشان تعارض نیازها را آشکار می‌کند.",
    "enExp": "A stakeholder is a person or group affected by or affecting the system: users, buyers, operators, regulators. Finding them early surfaces conflicting needs.",
    "faEx": "در بانک، مشتری، کارمند شعبه، تیم ریسک و ممیز همگی ذی‌نفع سامانهٔ وام‌اند.",
    "enEx": "In a bank, customers, branch staff, risk, and auditors are all loan-system stakeholders.",
    "related": [
      "requirement",
      "use-case",
      "user-story"
    ],
    "faDef": "ذی‌نفع فرد یا گروهی است که از سامانه تأثیر می‌گیرد یا بر آن اثر می‌گذارد: کاربر، سفارش‌دهنده، بهره‌بردار، ناظر. شناسایی زودهنگامشان تعارض نیازها را آشکار می‌کند.",
    "enDef": "A stakeholder is a person or group affected by or affecting the system: users, buyers, operators, regulators. Finding them early surfaces conflicting needs.",
    "faHow": "هر کس یا نقشی که از سامانه تأثیر می‌گیرد یا بر آن اثر می‌گذارد: کاربر، خریدار، قانون‌گذار، بهره‌بردار. منافع گاه متضادند و باید متعادل شوند.",
    "enHow": "Anyone affected by or affecting the system: users, buyers, regulators, operators. Interests can conflict and need balancing.",
    "faWhy": "نادیده گرفتن یک ذی‌نفع یعنی ریسک پذیرش و انطباق پنهان.",
    "enWhy": "Ignoring a stakeholder hides acceptance and compliance risk."
  },
  {
    "id": "use-case",
    "fa": "مورد کاربرد",
    "en": "Use case",
    "aliasesFa": [
      "مورد کاربرد",
      "موارد کاربرد",
      "یوزکیس"
    ],
    "aliasesEn": [
      "use case",
      "use cases"
    ],
    "faExp": "مورد کاربرد داستان تعامل بازیگر با سامانه برای رسیدن به هدف است؛ معمولاً جریان اصلی و جایگزین دارد. به کشف نیازمندی کارکردی کمک می‌کند.",
    "enExp": "A use case narrates an actor’s interaction with the system to reach a goal, often with main and alternate flows. It helps discover functional requirements.",
    "faEx": "مورد کاربرد «برداشت وجه»: مشتری کارت می‌کشد، رمز می‌دهد، مبلغ را می‌گیرد.",
    "enEx": "Use case “Withdraw cash”: customer inserts card, enters PIN, receives cash.",
    "related": [
      "requirement",
      "user-story",
      "uml"
    ],
    "faDef": "مورد کاربرد داستان تعامل بازیگر با سامانه برای رسیدن به هدف است؛ معمولاً جریان اصلی و جایگزین دارد. به کشف نیازمندی کارکردی کمک می‌کند.",
    "enDef": "A use case narrates an actor’s interaction with the system to reach a goal, often with main and alternate flows. It helps discover functional requirements.",
    "faHow": "کششگر هدفی دارد و سامانه گام‌هایی برای رسیدن عرضه می‌کند. جریان اصلی و جایگزین/استثنا روایت می‌شوند. مرز سامانه صریح است.",
    "enHow": "An actor has a goal; the system offers steps to reach it. Main and alternate/exception flows are narrated. System boundary is explicit.",
    "faWhy": "برای هم‌زبانی کسب‌وکار و تیم روی رفتار دیده‌شدنی عالی است.",
    "enWhy": "Excellent for aligning business and team on visible behavior."
  },
  {
    "id": "user-story",
    "fa": "داستان کاربر",
    "en": "User story",
    "aliasesFa": [
      "داستان کاربر",
      "داستان‌های کاربر",
      "داستانهای کاربر",
      "استوری"
    ],
    "aliasesEn": [
      "user story",
      "user stories"
    ],
    "faExp": "داستان کاربر قالب کوتاه چابک است: به‌عنوان نقش، می‌خواهم هدف، تا ارزش. با معیار پذیرش کامل می‌شود و جای مشخصات سنگین را در تکرارهای کوتاه می‌گیرد.",
    "enExp": "A user story is a short agile form: as a role, I want a goal, so that value. Acceptance criteria complete it and replace heavy specs in short iterations.",
    "faEx": "«به‌عنوان مشتری می‌خواهم رمز را با پیامک بازیابی کنم تا بدون شعبه وارد شوم.»",
    "enEx": "“As a customer I want SMS password recovery so I can sign in without a branch visit.”",
    "related": [
      "requirement",
      "agile",
      "acceptance-criteria",
      "scrum"
    ],
    "faDef": "داستان کاربر قالب کوتاه چابک است: به‌عنوان نقش، می‌خواهم هدف، تا ارزش. با معیار پذیرش کامل می‌شود و جای مشخصات سنگین را در تکرارهای کوتاه می‌گیرد.",
    "enDef": "A user story is a short agile form: as a role, I want a goal, so that value. Acceptance criteria complete it and replace heavy specs in short iterations.",
    "faHow": "قالب کوتاه «به‌عنوان … می‌خواهم … تا …» ارزش را برجسته می‌کند. معیار پذیرش جزئیات را قابل‌تست می‌کند. داستان بزرگ شکسته می‌شود.",
    "enHow": "Short “as a … I want … so that …” highlights value. Acceptance criteria make detail testable. Large stories are split.",
    "faWhy": "در چابک واحد برنامه‌ریزی و گفت‌وگو است نه مشخصهٔ سنگین.",
    "enWhy": "In agile it is the planning and conversation unit, not a heavyweight spec."
  },
  {
    "id": "acceptance-criteria",
    "fa": "معیار پذیرش",
    "en": "Acceptance criteria",
    "aliasesFa": [
      "معیار پذیرش",
      "معیارهای پذیرش"
    ],
    "aliasesEn": [
      "acceptance criteria",
      "acceptance criterion"
    ],
    "faExp": "معیار پذیرش شرایط قابل‌آزمونی است که تمام‌شدن یک نیازمندی یا داستان را تعریف می‌کند. ابهام را کم و تست را هدایت می‌کند.",
    "enExp": "Acceptance criteria are testable conditions that define done for a requirement or story. They cut ambiguity and guide testing.",
    "faEx": "«اگر رمز درست باشد داشبورد باز شود؛ اگر سه بار غلط باشد حساب قفل شود.»",
    "enEx": "“If the password is right, open the dashboard; if wrong three times, lock the account.”",
    "related": [
      "user-story",
      "validation",
      "testing"
    ],
    "faDef": "معیار پذیرش شرایط قابل‌آزمونی است که تمام‌شدن یک نیازمندی یا داستان را تعریف می‌کند. ابهام را کم و تست را هدایت می‌کند.",
    "enDef": "Acceptance criteria are testable conditions that define done for a requirement or story. They cut ambiguity and guide testing.",
    "faHow": "شرایطی که داستان یا نیاز را «انجام‌شده» می‌کند؛ ideally قابل‌تست خودکار یا دستی. Given/When/Then یک قالب رایج است.",
    "enHow": "Conditions that make a story or need “done,” ideally testable. Given/When/Then is a common form.",
    "faWhy": "بدون معیار پذیرش، Done سلیقه‌ای می‌شود و مناقشه می‌زاید.",
    "enWhy": "Without them, Done is subjective and breeds dispute."
  },
  {
    "id": "prototype",
    "fa": "نمونه‌سازی",
    "en": "Prototyping",
    "aliasesFa": [
      "نمونه‌سازی",
      "نمونهسازی",
      "نمونهٔ اولیه",
      "پروتوتایپ"
    ],
    "aliasesEn": [
      "prototype",
      "prototyping",
      "prototypes"
    ],
    "faExp": "نمونه‌سازی ساخت نسخهٔ سریع برای آزمودن ایده قبل از ساخت کامل است. بازخورد ذی‌نفع را زود می‌گیرد و ریسک فهم غلط را کم می‌کند.",
    "enExp": "Prototyping builds a quick version to test ideas before full construction. It gathers early stakeholder feedback and reduces misunderstanding risk.",
    "faEx": "یک وایرفریم قابل‌کلیک جریان افتتاح حساب را قبل از کدنویسی نشان می‌دهد.",
    "enEx": "A clickable wireframe shows account opening before coding.",
    "related": [
      "requirement",
      "validation"
    ],
    "faDef": "نمونه‌سازی ساخت نسخهٔ سریع برای آزمودن ایده قبل از ساخت کامل است. بازخورد ذی‌نفع را زود می‌گیرد و ریسک فهم غلط را کم می‌کند.",
    "enDef": "Prototyping builds a quick version to test ideas before full construction. It gathers early stakeholder feedback and reduces misunderstanding risk.",
    "faHow": "نسخهٔ سریع برای یادگیری است نه محصول نهایی. می‌تواند دورریختنی یا تکاملی باشد. بازخورد ذی‌نفع را زود می‌گیرد.",
    "enHow": "A quick learning version—not the final product. Disposable or evolutionary. Pulls stakeholder feedback early.",
    "faWhy": "ابهام UI و جریان کار را قبل از هزینهٔ ساخت سنگین کم می‌کند.",
    "enWhy": "Cuts UI and workflow ambiguity before heavy build cost."
  },
  {
    "id": "traceability",
    "fa": "ردیابی‌پذیری",
    "en": "Traceability",
    "aliasesFa": [
      "ردیابی‌پذیری",
      "ردیابیپذیری",
      "ردیابی نیازمندی",
      "ماتریس ردیابی"
    ],
    "aliasesEn": [
      "traceability",
      "requirements traceability",
      "traceability matrix"
    ],
    "faExp": "ردیابی‌پذیری پیوند میان نیازمندی‌ها، طراحی، کد و تست است تا اثر تغییر و پوشش مشخص بماند. برای ایمنی و حسابرسی مهم است.",
    "enExp": "Traceability links requirements, design, code, and tests so change impact and coverage stay visible. It matters for safety and audit.",
    "faEx": "هر نیازمندی امنیتی حداقل یک مورد تست امنیتی متناظر دارد.",
    "enEx": "Each security requirement maps to at least one security test case.",
    "related": [
      "requirement",
      "testing",
      "configuration-management"
    ],
    "faDef": "ردیابی‌پذیری پیوند میان نیازمندی‌ها، طراحی، کد و تست است تا اثر تغییر و پوشش مشخص بماند. برای ایمنی و حسابرسی مهم است.",
    "enDef": "Traceability links requirements, design, code, and tests so change impact and coverage stay visible. It matters for safety and audit.",
    "faHow": "پیوند دوطرفه بین نیاز، طراحی، کد و تست. ماتریس ردیابی پوشش و اثر تغییر را نشان می‌دهد. ابزارها لینک را نگه می‌دارند.",
    "enHow": "Bidirectional links among needs, design, code, and tests. A trace matrix shows coverage and change impact. Tools keep the links.",
    "faWhy": "در حوزه‌های ایمنی و ممیزی، بدون ردیابی اثبات انطباق سخت است.",
    "enWhy": "In safety and audit domains, compliance is hard without traceability."
  },
  {
    "id": "architecture",
    "fa": "معماری نرم‌افزار",
    "en": "Software architecture",
    "aliasesFa": [
      "معماری نرم‌افزار",
      "معماری نرمافزار",
      "معماری",
      "معماری‌ها",
      "معماریها"
    ],
    "aliasesEn": [
      "software architecture",
      "architecture",
      "architectural"
    ],
    "faExp": "معماری ساختار سطح‌بالای سامانه است: اجزا، مسئولیت‌ها و روابط‌شان برای برآوردن ویژگی‌های کیفیت. تصمیم‌های معماری دیر و گران عوض می‌شوند.",
    "enExp": "Architecture is the system’s high-level structure: components, responsibilities, and relations to meet quality attributes. Architectural decisions are costly to reverse.",
    "faEx": "جدا کردن سرویس پرداخت از پرتال وب تا هر کدام جدا مقیاس بگیرند.",
    "enEx": "Splitting payments from the web portal so each scales independently.",
    "related": [
      "quality-attribute",
      "microservices",
      "modularity",
      "design-pattern"
    ],
    "faDef": "معماری ساختار سطح‌بالای سامانه است: اجزا، مسئولیت‌ها و روابط‌شان برای برآوردن ویژگی‌های کیفیت. تصمیم‌های معماری دیر و گران عوض می‌شوند.",
    "enDef": "Architecture is the system’s high-level structure: components, responsibilities, and relations to meet quality attributes. Architectural decisions are costly to reverse.",
    "faHow": "ساختار کلان اجزا، رابط‌ها و اصولی که تصمیم‌های سخت را قفل می‌کند. دیدگاه‌های متعدد (منطقی، استقرار، داده) دارد. کیفیت‌های معماری هدف طراحی‌اند.",
    "enHow": "Gross structure of components, interfaces, and principles that lock hard decisions. Multiple views (logical, deployment, data). Quality attributes drive design.",
    "faWhy": "هزینهٔ تغییر معماری دیرهنگام بسیار بالاست؛ تصمیم زود باید آگاهانه باشد.",
    "enWhy": "Late architecture change is costly; early decisions must be deliberate."
  },
  {
    "id": "architecture-style",
    "fa": "سبک معماری",
    "en": "Architecture style",
    "aliasesFa": [
      "سبک معماری",
      "سبک‌های معماری",
      "سبکهای معماری",
      "الگوی معماری"
    ],
    "aliasesEn": [
      "architecture style",
      "architectural style",
      "architecture pattern"
    ],
    "faExp": "سبک معماری الگوی تکرارشوندهٔ سازمان‌دهی است مثل لایه‌ای، مشتری/خدمت‌دهنده، رویدادمحور یا ریزخدمت. انتخاب سبک محدودیت‌ها و مزایای مشخص دارد.",
    "enExp": "An architecture style is a recurring organization pattern such as layered, client/server, event-driven, or microservices. Each choice brings specific constraints and benefits.",
    "faEx": "سبک لایه‌ای: UI → منطق کسب‌وکار → داده؛ وابستگی فقط به لایهٔ پایین‌تر.",
    "enEx": "Layered style: UI → business logic → data; depend only downward.",
    "related": [
      "architecture",
      "microservices",
      "modularity"
    ],
    "faDef": "سبک معماری الگوی تکرارشوندهٔ سازمان‌دهی است مثل لایه‌ای، مشتری/خدمت‌دهنده، رویدادمحور یا ریزخدمت. انتخاب سبک محدودیت‌ها و مزایای مشخص دارد.",
    "enDef": "An architecture style is a recurring organization pattern such as layered, client/server, event-driven, or microservices. Each choice brings specific constraints and benefits.",
    "faHow": "خانوادهٔ تصمیم‌های تکرارشونده مثل لایه‌ای، رویدادمحور، میکروسرویس یا لوله-فیلتر. سبک قیود و مزایای شناخته‌شده دارد.",
    "enHow": "A family of recurring decisions—layered, event-driven, microservices, pipes-and-filters. A style carries known constraints and benefits.",
    "faWhy": "انتخاب سبک، تیم را از اختراع دوبارهٔ چرخ و تعارض پنهان نجات می‌دهد.",
    "enWhy": "Choosing a style saves reinventing wheels and hidden conflicts."
  },
  {
    "id": "microservices",
    "fa": "ریزخدمت",
    "en": "Microservices",
    "aliasesFa": [
      "ریزخدمت",
      "ریزخدمت‌ها",
      "ریزخدمتها",
      "میکروسرویس",
      "میکروسرویس",
      "میکروسرویس‌ها",
      "میکروسرویسها"
    ],
    "aliasesEn": [
      "microservices",
      "microservice"
    ],
    "faExp": "ریزخدمت‌ها سامانه‌ای را به سرویس‌های کوچک مستقل با استقرار جدا تقسیم می‌کنند. استقلال تیم و مقیاس را بالا می‌برند ولی پیچیدگی عملیات و دادهٔ توزیع‌شده می‌آورند.",
    "enExp": "Microservices split a system into small independently deployable services. They raise team autonomy and scaling options but add ops and distributed-data complexity.",
    "faEx": "سرویس «کیف پول» و سرویس «اعلان» جدا منتشر می‌شوند و با API حرف می‌زنند.",
    "enEx": "Wallet and notification services deploy separately and talk over APIs.",
    "related": [
      "architecture",
      "api",
      "devops",
      "modularity"
    ],
    "faDef": "ریزخدمت‌ها سامانه‌ای را به سرویس‌های کوچک مستقل با استقرار جدا تقسیم می‌کنند. استقلال تیم و مقیاس را بالا می‌برند ولی پیچیدگی عملیات و دادهٔ توزیع‌شده می‌آورند.",
    "enDef": "Microservices split a system into small independently deployable services. They raise team autonomy and scaling options but add ops and distributed-data complexity.",
    "faHow": "سرویس‌های کوچک مستقل با داده و استقرار جدا، معمولاً روی شبکه حرف می‌زنند. استقلال تیم و مقیاس جزءبه‌جزء مزیت است؛ پیچیدگی عملیات هزینه است.",
    "enHow": "Small independent services with separate data and deploy, usually talking over the network. Team autonomy and per-part scale help; ops complexity costs.",
    "faWhy": "وقتی دامنه و تیم بزرگ است مفید است؛ برای محصول کوچک اغلب سنگین است.",
    "enWhy": "Useful when domain and teams are large; often heavy for a small product."
  },
  {
    "id": "quality-attribute",
    "fa": "ویژگی کیفیت",
    "en": "Quality attribute",
    "aliasesFa": [
      "ویژگی کیفیت",
      "ویژگی‌های کیفیت",
      "ویژگیهای کیفیت",
      "نیازمندی غیرکارکردی",
      "نیازمندی‌های غیرکارکردی",
      "نیازمندیهای غیرکارکردی"
    ],
    "aliasesEn": [
      "quality attribute",
      "quality attributes",
      "non-functional requirement",
      "NFR"
    ],
    "faExp": "ویژگی‌های کیفیت خواصی مثل کارایی، امنیت، قابلیت اطمینان و تغییرپذیری‌اند که چگونگی رفتار سامانه را می‌گویند نه فقط کارکرد را. معماری باید صریحاً برای آن‌ها طراحی شود.",
    "enExp": "Quality attributes—performance, security, reliability, modifiability—describe how the system behaves, not only what it does. Architecture must address them explicitly.",
    "faEx": "«۹۹٫۹٪ در دسترس‌بودن ماهانه» یک هدف ویژگی کیفیت است.",
    "enEx": "“99.9% monthly availability” is a quality-attribute goal.",
    "related": [
      "reliability",
      "architecture",
      "metric",
      "requirement"
    ],
    "faDef": "ویژگی‌های کیفیت خواصی مثل کارایی، امنیت، قابلیت اطمینان و تغییرپذیری‌اند که چگونگی رفتار سامانه را می‌گویند نه فقط کارکرد را. معماری باید صریحاً برای آن‌ها طراحی شود.",
    "enDef": "Quality attributes—performance, security, reliability, modifiability—describe how the system behaves, not only what it does. Architecture must address them explicitly.",
    "faHow": "ویژگی‌های کیفی مثل کارایی، امنیت، قابلیت‌اطمینان و تغییرپذیری. با سناریوی محرک، پاسخ و اندازه مشخص می‌شوند نه با صفت مبهم.",
    "enHow": "Qualities such as performance, security, reliability, modifiability. Specified with stimulus, response, and measure—not vague adjectives.",
    "faWhy": "معماری برای کیفیت‌ها شکل می‌گیرد؛ نادیده‌گرفتن آن‌ها دیر کشف می‌شود.",
    "enWhy": "Architecture is shaped for qualities; ignoring them is discovered late."
  },
  {
    "id": "reliability",
    "fa": "قابلیت اطمینان",
    "en": "Reliability",
    "aliasesFa": [
      "قابلیت اطمینان",
      "اطمینان‌پذیری",
      "اطمینانپذیری"
    ],
    "aliasesEn": [
      "reliability",
      "reliable"
    ],
    "faExp": "قابلیت اطمینان احتمال یا میزان درست کار کردن سامانه در بازهٔ زمانی و شرایط مشخص است. با کاهش خرابی و بازیابی سریع بهتر می‌شود.",
    "enExp": "Reliability is how correctly a system works over a stated period and conditions. Fewer failures and faster recovery improve it.",
    "faEx": "اگر سرویس در ماه ۱ ساعت خراب باشد، در دسترس‌بودن حدود ۹۹٫۸٪ است.",
    "enEx": "One hour down per month is roughly 99.8% availability.",
    "related": [
      "quality-attribute",
      "fault-tolerance",
      "metric"
    ],
    "faDef": "قابلیت اطمینان احتمال یا میزان درست کار کردن سامانه در بازهٔ زمانی و شرایط مشخص است. با کاهش خرابی و بازیابی سریع بهتر می‌شود.",
    "enDef": "Reliability is how correctly a system works over a stated period and conditions. Fewer failures and faster recovery improve it.",
    "faHow": "احتمال کارکرد صحیح در بازهٔ زمانی معین. MTBF و نرخ خرابی سنجه‌های رایج‌اند. افزونگی و طراحی تحمل‌خطا آن را بالا می‌برد.",
    "enHow": "Probability of correct operation over a period. MTBF and failure rate are common measures. Redundancy and fault-tolerant design raise it.",
    "faWhy": "در بانک و سلامت، قطعی یعنی خسارت؛ قابلیت‌اطمینان نیازمندی صریح است.",
    "enWhy": "In banking and health, downtime is damage; reliability is an explicit requirement.",
    "sample": {
      "faQ": "سامانه ۵۰۰ ساعت کار کرده و ۲ خرابی داشته است. MTBF چقدر است؟",
      "enQ": "A system ran 500 hours with 2 failures. What is MTBF?",
      "faSteps": [
        "MTBF ≈ کل زمان کارکرد / تعداد خرابی.",
        "500 / 2 = 250 ساعت."
      ],
      "enSteps": [
        "MTBF ≈ operating time / failures = 500/2 = 250 hours."
      ],
      "faAns": "۲۵۰ ساعت",
      "enAns": "250 hours"
    }
  },
  {
    "id": "fault-tolerance",
    "fa": "تحمل خطا",
    "en": "Fault tolerance",
    "aliasesFa": [
      "تحمل خطا",
      "تحمل‌پذیری خطا",
      "تحملپذیری خطا",
      "تاب‌آوری",
      "تابآوری"
    ],
    "aliasesEn": [
      "fault tolerance",
      "fault-tolerant",
      "resilience"
    ],
    "faExp": "تحمل خطا ادامهٔ خدمت با وجود خرابی اجزاست: تکرار، افزونگی و جدایی خرابی. هدف خاموش‌نشدن کامل سامانه است.",
    "enExp": "Fault tolerance keeps serving despite component faults via replication, redundancy, and isolation. The aim is to avoid total outage.",
    "faEx": "دو نمونهٔ سرور پشت توازن بار؛ اگر یکی بمیرد دیگری پاسخ می‌دهد.",
    "enEx": "Two server instances behind a load balancer; if one dies the other answers.",
    "related": [
      "reliability",
      "architecture",
      "devops"
    ],
    "faDef": "تحمل خطا ادامهٔ خدمت با وجود خرابی اجزاست: تکرار، افزونگی و جدایی خرابی. هدف خاموش‌نشدن کامل سامانه است.",
    "enDef": "Fault tolerance keeps serving despite component faults via replication, redundancy, and isolation. The aim is to avoid total outage.",
    "faHow": "خرابی رخ می‌دهد؛ سامانه باید تشخیص دهد، مهار کند و در حد توافق به کار ادامه دهد. تکرار، رأی‌گیری و مدارشکن الگوهای رایج‌اند.",
    "enHow": "Faults happen; the system should detect, contain, and continue within agreed limits. Replication, voting, and circuit breakers are common patterns.",
    "faWhy": "شکست شبکه و سخت‌افزار را از شکست کل محصول جدا می‌کند.",
    "enWhy": "Separates network/hardware failure from total product failure."
  },
  {
    "id": "modularity",
    "fa": "پیمانه‌ای‌بودن",
    "en": "Modularity",
    "aliasesFa": [
      "پیمانه‌ای",
      "پیمانهای",
      "پیمانه‌ای‌بودن",
      "پیمانهایبودن",
      "ماژولار",
      "پیمانه"
    ],
    "aliasesEn": [
      "modularity",
      "modular",
      "module"
    ],
    "faExp": "پیمانه‌ای‌بودن تقسیم سامانه به واحدهای با مسئولیت روشن و رابط پایدار است. تغییر و فهم را محلی می‌کند و همکاری تیمی را آسان‌تر می‌سازد.",
    "enExp": "Modularity splits a system into units with clear responsibilities and stable interfaces. It localizes change and eases teamwork.",
    "faEx": "ماژول «محاسبهٔ کارمزد» جدا از ماژول «UI» تا تغییر نرخ UI را نشکند.",
    "enEx": "A fees module separate from UI so rate changes do not break screens.",
    "related": [
      "cohesion",
      "coupling",
      "abstraction",
      "encapsulation"
    ],
    "faDef": "پیمانه‌ای‌بودن تقسیم سامانه به واحدهای با مسئولیت روشن و رابط پایدار است. تغییر و فهم را محلی می‌کند و همکاری تیمی را آسان‌تر می‌سازد.",
    "enDef": "Modularity splits a system into units with clear responsibilities and stable interfaces. It localizes change and eases teamwork.",
    "faHow": "سیستم را به پیمانه‌های با رابط روشن و درون‌پوشیده تقسیم می‌کند. تغییر در یک پیمانه نباید همه را بلرزاند. اندازه و مرز دامنه مهم است.",
    "enHow": "Split the system into modules with clear interfaces and hidden insides. Change in one should not shake all. Size and domain boundary matter.",
    "faWhy": "تیم موازی، تست و جایگزینی جزء با پیمانه‌ای‌سازی شدنی می‌شود.",
    "enWhy": "Parallel teams, testing, and replacing parts become feasible with modularity."
  },
  {
    "id": "cohesion",
    "fa": "پیوستگی",
    "en": "Cohesion",
    "aliasesFa": [
      "پیوستگی",
      "چسبندگی درون‌ماژولی",
      "چسبندگی درونماژولی"
    ],
    "aliasesEn": [
      "cohesion",
      "cohesive"
    ],
    "faExp": "پیوستگی میزان مرتبط‌بودن مسئولیت‌های داخل یک ماژول است. پیوستگی بالا یعنی ماژول یک کار منسجم دارد و فهمش آسان‌تر است.",
    "enExp": "Cohesion measures how closely a module’s responsibilities relate. High cohesion means one coherent job and easier understanding.",
    "faEx": "کلاسی که فقط اعتبارسنجی ورودی فرم را انجام می‌دهد پیوستگی خوبی دارد.",
    "enEx": "A class that only validates form input is highly cohesive.",
    "related": [
      "coupling",
      "modularity",
      "design-pattern"
    ],
    "faDef": "پیوستگی میزان مرتبط‌بودن مسئولیت‌های داخل یک ماژول است. پیوستگی بالا یعنی ماژول یک کار منسجم دارد و فهمش آسان‌تر است.",
    "enDef": "Cohesion measures how closely a module’s responsibilities relate. High cohesion means one coherent job and easier understanding.",
    "faHow": "عناصر داخل یک پیمانه چقدر حول یک مسئولیت واحد جمع‌اند. انسجام کارکردی ideal است؛ انسجام تصادفی بدترین. بوی مسئولیت‌های درهم.",
    "enHow": "How strongly elements inside a module gather around one responsibility. Functional cohesion is ideal; coincidental is worst. Mixed duties are a smell.",
    "faWhy": "انسجام بالا فهم، تست و تغییر موضعی را آسان می‌کند.",
    "enWhy": "High cohesion eases understanding, testing, and local change.",
    "sample": {
      "faQ": "ماژول ReportAndEmailAndTax هم گزارش می‌سازد، هم ایمیل می‌زند، هم مالیات حساب می‌کند. یک بازنویسی با انسجام بالاتر چیست؟",
      "enQ": "Module ReportAndEmailAndTax builds reports, sends email, and computes tax. Give a higher-cohesion split.",
      "faSteps": [
        "انسجام بالا یعنی یک مسئولیت روشن.",
        "سه ماژول: ReportBuilder، Mailer، TaxCalculator؛ هماهنگ‌کننده نازک آن‌ها را صدا می‌زند."
      ],
      "enSteps": [
        "High cohesion means one clear responsibility.",
        "Split into ReportBuilder, Mailer, TaxCalculator; a thin coordinator calls them."
      ],
      "faAns": "ReportBuilder + Mailer + TaxCalculator (با هماهنگ‌کنندهٔ نازک).",
      "enAns": "ReportBuilder + Mailer + TaxCalculator (thin coordinator)."
    }
  },
  {
    "id": "coupling",
    "fa": "جفت‌شدگی",
    "en": "Coupling",
    "aliasesFa": [
      "جفت‌شدگی",
      "جفتشدگی",
      "جفت شدگی",
      "وابستگی بین ماژول"
    ],
    "aliasesEn": [
      "coupling",
      "coupled"
    ],
    "faExp": "جفت‌شدگی میزان وابستگی میان ماژول‌هاست. جفت‌شدگی کم اجازه می‌دهد یکی را بدون شکستن دیگری تغییر دهید. از طریق رابط‌های باریک کاهش می‌یابد.",
    "enExp": "Coupling is how much modules depend on each other. Low coupling lets you change one without breaking another. Narrow interfaces reduce it.",
    "faEx": "اگر UI مستقیماً SQL بنویسد جفت‌شدگی زیاد است؛ لایهٔ مخزن آن را کم می‌کند.",
    "enEx": "UI writing SQL is high coupling; a repository layer lowers it.",
    "related": [
      "cohesion",
      "modularity",
      "api"
    ],
    "faDef": "جفت‌شدگی میزان وابستگی میان ماژول‌هاست. جفت‌شدگی کم اجازه می‌دهد یکی را بدون شکستن دیگری تغییر دهید. از طریق رابط‌های باریک کاهش می‌یابد.",
    "enDef": "Coupling is how much modules depend on each other. Low coupling lets you change one without breaking another. Narrow interfaces reduce it.",
    "faHow": "میزان وابستگی بین پیمانه‌ها. جفت‌شدگی محتوا و مشترک بد؛ جفت‌شدگی از طریق رابط پایدار بهتر است. وابستگی یک‌طرفه و پنهان‌سازی کمک می‌کند.",
    "enHow": "How much modules depend on each other. Content/common coupling is bad; coupling through stable interfaces is better. One-way deps and hiding help.",
    "faWhy": "جفت‌شدگی زیاد انتشار تغییر و شکست را گسترده می‌کند.",
    "enWhy": "High coupling spreads change and failure widely.",
    "sample": {
      "faQ": "تابع pay(order) مستقیماً به جدول SQL و API درگاه وصل است. یک گام کاهش جفت‌شدگی چیست؟",
      "enQ": "Function pay(order) talks directly to a SQL table and a payment gateway API. Name one decoupling step.",
      "faSteps": [
        "جفت‌شدگی سخت به جزئیات ذخیره‌سازی و شبکه وابسته است.",
        "پشت یک رابط PaymentGateway و OrderRepository پنهان کنید تا pay فقط قراردادها را ببیند."
      ],
      "enSteps": [
        "Tight coupling depends on storage and network details.",
        "Hide behind PaymentGateway and OrderRepository interfaces so pay sees only contracts."
      ],
      "faAns": "استفاده از رابط/پورت برای درگاه و مخزن داده به‌جای فراخوانی مستقیم.",
      "enAns": "Introduce gateway and repository interfaces instead of direct calls."
    }
  },
  {
    "id": "abstraction",
    "fa": "انتزاع",
    "en": "Abstraction",
    "aliasesFa": [
      "انتزاع"
    ],
    "aliasesEn": [
      "abstraction",
      "abstract"
    ],
    "faExp": "انتزاع پنهان‌کردن جزئیات غیرضروری و نشان‌دادن مفهوم ضروری است. پیچیدگی را مدیریت‌پذیر می‌کند و مدل ذهنی مشترکی می‌سازد.",
    "enExp": "Abstraction hides needless detail and shows the essential concept. It makes complexity manageable and builds a shared mental model.",
    "faEx": "«پرداخت» را صدا می‌زنید بدون دانستن اینکه کارت یا کیف پول است.",
    "enEx": "You call “pay” without knowing whether card or wallet is used.",
    "related": [
      "encapsulation",
      "modularity",
      "interface-type"
    ],
    "faDef": "انتزاع پنهان‌کردن جزئیات غیرضروری و نشان‌دادن مفهوم ضروری است. پیچیدگی را مدیریت‌پذیر می‌کند و مدل ذهنی مشترکی می‌سازد.",
    "enDef": "Abstraction hides needless detail and shows the essential concept. It makes complexity manageable and builds a shared mental model.",
    "faHow": "جزئیات غیرضروری را پنهان و مفهوم پایدار را نمایان می‌کند. لایه و رابط ابزار انتزاع‌اند. انتزاع نادرست جزئیات را در زمان بد لو می‌دهد.",
    "enHow": "Hide needless detail and show a stable concept. Layers and interfaces are tools. Wrong abstraction leaks detail at the worst time.",
    "faWhy": "ذهن انسان و تکامل سامانه بدون انتزاع غرق پیچیدگی می‌شود.",
    "enWhy": "Human minds and evolving systems drown in complexity without abstraction."
  },
  {
    "id": "encapsulation",
    "fa": "کپسوله‌سازی",
    "en": "Encapsulation",
    "aliasesFa": [
      "کپسوله‌سازی",
      "کپسولهسازی",
      "کپسوله سازی"
    ],
    "aliasesEn": [
      "encapsulation",
      "encapsulate"
    ],
    "faExp": "کپسوله‌سازی داده و رفتار را کنار هم می‌گذارد و دسترسی بیرونی را از طریق رابط کنترل‌شده محدود می‌کند. تغییر داخلی را بی‌خطرتر می‌کند.",
    "enExp": "Encapsulation keeps data with behavior and limits outside access through a controlled interface. Internal change becomes safer.",
    "faEx": "موجودی حساب خصوصی است؛ فقط متد deposit/withdraw آن را عوض می‌کند.",
    "enEx": "Account balance is private; only deposit/withdraw change it.",
    "related": [
      "abstraction",
      "modularity",
      "interface-type"
    ],
    "faDef": "کپسوله‌سازی داده و رفتار را کنار هم می‌گذارد و دسترسی بیرونی را از طریق رابط کنترل‌شده محدود می‌کند. تغییر داخلی را بی‌خطرتر می‌کند.",
    "enDef": "Encapsulation keeps data with behavior and limits outside access through a controlled interface. Internal change becomes safer.",
    "faHow": "داده و عملیات مجاز را کنار هم می‌گذارد و دسترسی مستقیم بیرونی را محدود می‌کند. نامتغیرهای شیء حفظ می‌شوند.",
    "enHow": "Bundles data with allowed operations and limits outside direct access. Object invariants stay protected.",
    "faWhy": "تغییر نمایش داخلی بدون شکستن کلاینت ممکن می‌شود.",
    "enWhy": "Lets internal representation change without breaking clients."
  },
  {
    "id": "interface-type",
    "fa": "واسط",
    "en": "Interface",
    "aliasesFa": [
      "واسط",
      "اینترفیس"
    ],
    "aliasesEn": [
      "interface",
      "interfaces"
    ],
    "faExp": "واسط مجموعهٔ عملیات قابل‌فراخوانی بدون افشای پیاده‌سازی است. قرارداد پایدار بین تولیدکننده و مصرف‌کننده می‌سازد.",
    "enExp": "An interface is the set of callable operations without exposing implementation. It is a stable contract between producer and consumer.",
    "faEx": "واسط PaymentGateway با متد charge؛ پیاده‌سازی می‌تواند ارائه‌دهندگان مختلف باشد.",
    "enEx": "PaymentGateway interface with charge; implementation may be one provider or another.",
    "related": [
      "abstraction",
      "api",
      "modularity"
    ],
    "faDef": "واسط مجموعهٔ عملیات قابل‌فراخوانی بدون افشای پیاده‌سازی است. قرارداد پایدار بین تولیدکننده و مصرف‌کننده می‌سازد.",
    "enDef": "An interface is the set of callable operations without exposing implementation. It is a stable contract between producer and consumer.",
    "faHow": "قرارداد عملیات بدون پیاده‌سازی. پیاده‌سازی‌های متعدد می‌توانند یک رابط را برآورند. نسخه‌بندی قرارداد حیاتی است.",
    "enHow": "A contract of operations without implementation. Many implementations can satisfy one interface. Contract versioning is critical.",
    "faWhy": "تست با double و جایگزینی پیاده‌سازی روی رابط سوار است.",
    "enWhy": "Test doubles and swappable implementations ride on interfaces."
  },
  {
    "id": "inheritance",
    "fa": "ارث‌بری",
    "en": "Inheritance",
    "aliasesFa": [
      "ارث‌بری",
      "ارثبری",
      "وراثت"
    ],
    "aliasesEn": [
      "inheritance"
    ],
    "faExp": "ارث‌بری نوع تازه را بر پایهٔ نوع موجود می‌سازد و رفتار/ساختار را بازاستفاده می‌کند. زیاده‌روی در سلسله‌مراتب عمیق طراحی را شکننده می‌کند.",
    "enExp": "Inheritance builds a new type from an existing one, reusing behavior and structure. Deep hierarchies can make design brittle.",
    "faEx": "SavingsAccount از Account ارث می‌برد و سود را اضافه می‌کند.",
    "enEx": "SavingsAccount inherits Account and adds interest.",
    "related": [
      "polymorphism",
      "encapsulation",
      "design-pattern"
    ],
    "faDef": "ارث‌بری نوع تازه را بر پایهٔ نوع موجود می‌سازد و رفتار/ساختار را بازاستفاده می‌کند. زیاده‌روی در سلسله‌مراتب عمیق طراحی را شکننده می‌کند.",
    "enDef": "Inheritance builds a new type from an existing one, reusing behavior and structure. Deep hierarchies can make design brittle.",
    "faHow": "زیرنوع ویژگی و رفتار ابرنوع را بازاستفاده/تخصصی می‌کند. جایگزینی لیسکوف باید حفظ شود. سوءاستفاده سلسله‌مراتب شکننده می‌سازد.",
    "enHow": "A subtype reuses/specializes a supertype. Liskov substitution should hold. Abuse builds fragile hierarchies.",
    "faWhy": "وقتی «هست-یک» واقعی است مفید است؛ وگرنه ترکیب اغلب بهتر است.",
    "enWhy": "Useful for true is-a; otherwise composition is often better."
  },
  {
    "id": "polymorphism",
    "fa": "چندریختی",
    "en": "Polymorphism",
    "aliasesFa": [
      "چندریختی",
      "پلی‌مورفیسم",
      "پلیمورفیسم"
    ],
    "aliasesEn": [
      "polymorphism",
      "polymorphic"
    ],
    "faExp": "چندریختی اجازه می‌دهد با یک واسط واحد به رفتارهای متفاوت در زمان اجرا برسید. انعطاف طراحی را بالا می‌برد.",
    "enExp": "Polymorphism lets one interface reach different runtime behaviors. It increases design flexibility.",
    "faEx": "لیستی از Shapeها؛ هر کدام متد area خودش را اجرا می‌کند.",
    "enEx": "A list of Shapes; each runs its own area method.",
    "related": [
      "inheritance",
      "interface-type",
      "design-pattern"
    ],
    "faDef": "چندریختی اجازه می‌دهد با یک واسط واحد به رفتارهای متفاوت در زمان اجرا برسید. انعطاف طراحی را بالا می‌برد.",
    "enDef": "Polymorphism lets one interface reach different runtime behaviors. It increases design flexibility.",
    "faHow": "یک رابط، رفتارهای متعدد در زمان اجرا. ارسال پیام به پیاده‌سازی درست می‌رود. امکان گسترش بدون تغییر کلاینت کهنه.",
    "enHow": "One interface, many runtime behaviors. Dispatch reaches the right implementation. Extends behavior without changing old clients.",
    "faWhy": "اصل باز/بسته در عمل اغلب با چندریختی محقق می‌شود.",
    "enWhy": "The open/closed principle often shows up as polymorphism in practice."
  },
  {
    "id": "design-pattern",
    "fa": "الگوی طراحی",
    "en": "Design pattern",
    "aliasesFa": [
      "الگوی طراحی",
      "الگوهای طراحی",
      "دیزاین پترن"
    ],
    "aliasesEn": [
      "design pattern",
      "design patterns"
    ],
    "faExp": "الگوی طراحی راه‌حل آزموده برای مسئلهٔ تکرارشونده در زمینهٔ مشخص است. نام مشترک به تیم می‌دهد ولی باید با مسئله جور باشد نه تزئینی.",
    "enExp": "A design pattern is a proven solution to a recurring problem in a context. It gives a shared name but must fit the problem, not decorate it.",
    "faEx": "Observer برای به‌روزرسانی UI وقتی مدل داده عوض می‌شود.",
    "enEx": "Observer to refresh UI when the data model changes.",
    "related": [
      "architecture",
      "modularity",
      "refactoring"
    ],
    "faDef": "الگوی طراحی راه‌حل آزموده برای مسئلهٔ تکرارشونده در زمینهٔ مشخص است. نام مشترک به تیم می‌دهد ولی باید با مسئله جور باشد نه تزئینی.",
    "enDef": "A design pattern is a proven solution to a recurring problem in a context. It gives a shared name but must fit the problem, not decorate it.",
    "faHow": "راه‌حل نام‌دار برای مسئلهٔ طراحی تکراری در زمینه. ساختار، پیامد و انواع دارد. الگو دستور جادویی نیست؛ تناسب زمینه لازم است.",
    "enHow": "A named solution to a recurring design problem in context. Has structure, consequences, variants. Not magic—fit the context.",
    "faWhy": "واژگان مشترک تیم و اجتناب از دام‌های شناخته‌شده.",
    "enWhy": "Shared team vocabulary and avoiding known pitfalls."
  },
  {
    "id": "uml",
    "fa": "UML",
    "en": "UML",
    "aliasesFa": [
      "UML",
      "زبان مدل‌سازی یکپارچه",
      "زبان مدلسازی یکپارچه"
    ],
    "aliasesEn": [
      "UML",
      "Unified Modeling Language"
    ],
    "faExp": "UML مجموعهٔ نمودارهای استاندارد برای مدل‌کردن ساختار و رفتار نرم‌افزار است. ارتباط میان تحلیل‌گر و توسعه‌دهنده را تسهیل می‌کند.",
    "enExp": "UML is a standard set of diagrams for modeling software structure and behavior. It eases communication between analysts and developers.",
    "faEx": "نمودار کلاس موجودیت‌های دامنه و ارتباطشان را نشان می‌دهد.",
    "enEx": "A class diagram shows domain entities and their relations.",
    "related": [
      "use-case",
      "architecture",
      "fsm"
    ],
    "faDef": "UML مجموعهٔ نمودارهای استاندارد برای مدل‌کردن ساختار و رفتار نرم‌افزار است. ارتباط میان تحلیل‌گر و توسعه‌دهنده را تسهیل می‌کند.",
    "enDef": "UML is a standard set of diagrams for modeling software structure and behavior. It eases communication between analysts and developers.",
    "faHow": "زبان نمودار برای ساختار (کلاس، مؤلفه) و رفتار (توالی، حالت). نمودار باید مخاطب و هدف داشته باشد نه دیوار تزئینی.",
    "enHow": "Diagram language for structure (class, component) and behavior (sequence, state). Diagrams need audience and purpose—not wallpaper.",
    "faWhy": "هم‌ترازی طراحی قبل از کد گران و رفع سوءتفاهم ارزان‌تر است.",
    "enWhy": "Aligning design before code is cheaper than fixing misunderstandings later."
  },
  {
    "id": "refactoring",
    "fa": "بازآرایی",
    "en": "Refactoring",
    "aliasesFa": [
      "بازآرایی",
      "بازنویسی ساختاری",
      "رفکتور"
    ],
    "aliasesEn": [
      "refactoring",
      "refactor"
    ],
    "faExp": "بازآرایی تغییر ساختار کد بدون تغییر رفتار بیرونی برای خوانایی و انعطاف بیشتر است. باید با تست محافظت شود.",
    "enExp": "Refactoring changes code structure without changing external behavior to improve clarity and flexibility. Tests should guard it.",
    "faEx": "استخراج تابع تکراری اعتبارسنجی به یک تابع مشترک.",
    "enEx": "Extracting duplicated validation into one shared function.",
    "related": [
      "technical-debt",
      "testing",
      "design-pattern"
    ],
    "faDef": "بازآرایی تغییر ساختار کد بدون تغییر رفتار بیرونی برای خوانایی و انعطاف بیشتر است. باید با تست محافظت شود.",
    "enDef": "Refactoring changes code structure without changing external behavior to improve clarity and flexibility. Tests should guard it.",
    "faHow": "تغییر ساختار درونی بدون تغییر رفتار بیرونی مشاهده‌پذیر. با تست محافظ انجام می‌شود. گام‌های کوچک ایمن‌ترند.",
    "enHow": "Change internal structure without changing observable external behavior. Guarded by tests. Small steps are safer.",
    "faWhy": "فشار ویژگی بدون بازآرایی بدهی می‌سازد؛ بازآرایی خوانایی و سرعت تغییر را برمی‌گرداند.",
    "enWhy": "Feature pressure without refactoring builds debt; refactoring restores clarity and change speed."
  },
  {
    "id": "technical-debt",
    "fa": "بدهی فنی",
    "en": "Technical debt",
    "aliasesFa": [
      "بدهی فنی",
      "بدهی تکنیکی"
    ],
    "aliasesEn": [
      "technical debt",
      "tech debt"
    ],
    "faExp": "بدهی فنی هزینهٔ آیندهٔ انتخاب‌های عجولانه یا منسوخ در طراحی و کد است. گاهی آگاهانه پذیرفته می‌شود ولی باید بازپرداخت شود وگرنه سرعت تیم می‌افتد.",
    "enExp": "Technical debt is future cost from hasty or outdated design and code choices. Sometimes deliberate, it must be repaid or team speed drops.",
    "faEx": "کپی‌کردن منطق به‌جای ماژول مشترک برای رسیدن به مهلت؛ بعداً هر باگ دو جا باید درست شود.",
    "enEx": "Copying logic instead of a shared module to hit a deadline; later every bug is fixed twice.",
    "related": [
      "refactoring",
      "risk",
      "quality-attribute"
    ],
    "faDef": "بدهی فنی هزینهٔ آیندهٔ انتخاب‌های عجولانه یا منسوخ در طراحی و کد است. گاهی آگاهانه پذیرفته می‌شود ولی باید بازپرداخت شود وگرنه سرعت تیم می‌افتد.",
    "enDef": "Technical debt is future cost from hasty or outdated design and code choices. Sometimes deliberate, it must be repaid or team speed drops.",
    "faHow": "میانبر امروز که هزینهٔ سود مرکب فردا دارد. باید ثبت، اولویت و بازپرداخت داشته باشد. بعضی بدهی‌ها آگاهانه‌اند.",
    "enHow": "Today’s shortcut with compound interest tomorrow. Must be recorded, prioritized, and repaid. Some debt is deliberate.",
    "faWhy": "نادیده گرفتن بدهی سرعت ظاهری را می‌کشد و ریسک انتشار را بالا می‌برد.",
    "enWhy": "Ignoring debt kills apparent velocity and raises release risk."
  },
  {
    "id": "testing",
    "fa": "آزمون نرم‌افزار",
    "en": "Software testing",
    "aliasesFa": [
      "آزمون نرم‌افزار",
      "آزمون نرمافزار",
      "تست نرم‌افزار",
      "تست نرمافزار",
      "آزمون نرم‌افزاری",
      "آزمون نرمافزاری"
    ],
    "aliasesEn": [
      "software testing",
      "testing"
    ],
    "faExp": "آزمون اجرای سامانه یا اجزا برای یافتن نقص و افزایش اعتماد به رفتار است. سطوح و تکنیک‌های گوناگون دارد و جایگزین طراحی خوب نیست ولی مکمل آن است.",
    "enExp": "Testing executes a system or parts to find defects and raise confidence. It has many levels and techniques; it complements, not replaces, good design.",
    "faEx": "قبل از انتشار، سناریوی انتقال وجه روی محیط آزمایش با دادهٔ ساختگی اجرا می‌شود.",
    "enEx": "Before release, a transfer scenario runs on a test environment with synthetic data.",
    "related": [
      "unit-test",
      "integration-test",
      "regression-test",
      "coverage",
      "verification",
      "validation"
    ],
    "faDef": "آزمون اجرای سامانه یا اجزا برای یافتن نقص و افزایش اعتماد به رفتار است. سطوح و تکنیک‌های گوناگون دارد و جایگزین طراحی خوب نیست ولی مکمل آن است.",
    "enDef": "Testing executes a system or parts to find defects and raise confidence. It has many levels and techniques; it complements, not replaces, good design.",
    "faHow": "اجرای سامانه با هدف یافتن نقص و ایجاد اعتماد. سطوح واحد تا پذیرش و فنون جعبه سیاه/سفید مکمل‌اند. تست خودکار بازخورد سریع می‌دهد.",
    "enHow": "Execute the system to find defects and build confidence. Unit to acceptance levels and black/white-box techniques complement. Automation gives fast feedback.",
    "faWhy": "بدون تست، تغییر ترسناک و رگرسیون پنهان است.",
    "enWhy": "Without tests, change is scary and regressions hide.",
    "sample": {
      "faQ": "ورودی سن باید عدد صحیح ۱ تا ۱۲۰ باشد. با افراز هم‌ارزی و مقادیر مرزی، حداقل چه مقادیری را برای تست پیشنهاد می‌کنید؟",
      "enQ": "Age input must be an integer 1..120. Using equivalence partitioning and boundary values, which test ages do you propose at minimum?",
      "faSteps": [
        "افراز: نامعتبر <1، معتبر 1..120، نامعتبر >120 (و غیرعدد اگر جدا باشد).",
        "مرزها: 0، 1، 120، 121.",
        "یک مقدار میانی معتبر مثلاً ۳۰."
      ],
      "enSteps": [
        "Partitions: invalid <1, valid 1..120, invalid >120.",
        "Boundaries: 0, 1, 120, 121.",
        "One mid valid value e.g. 30."
      ],
      "faAns": "مثلاً ۰، ۱، ۳۰، ۱۲۰، ۱۲۱.",
      "enAns": "e.g. 0, 1, 30, 120, 121."
    }
  },
  {
    "id": "unit-test",
    "fa": "آزمون واحد",
    "en": "Unit test",
    "aliasesFa": [
      "آزمون واحد",
      "تست واحد",
      "آزمون‌های واحد",
      "آزمونهای واحد"
    ],
    "aliasesEn": [
      "unit test",
      "unit tests",
      "unit testing"
    ],
    "faExp": "آزمون واحد کوچک‌ترین واحد منطقی (تابع یا کلاس) را جدا از بقیه بررسی می‌کند. سریع است و بازآرایی را ایمن می‌کند.",
    "enExp": "A unit test checks the smallest logical unit (function or class) in isolation. It is fast and makes refactoring safer.",
    "faEx": "تست اینکه تابع محاسبهٔ سود برای ورودی مشخص عدد مورد انتظار را می‌دهد.",
    "enEx": "A test that interest calculation returns the expected number for a given input.",
    "related": [
      "testing",
      "integration-test",
      "tdd"
    ],
    "faDef": "آزمون واحد کوچک‌ترین واحد منطقی (تابع یا کلاس) را جدا از بقیه بررسی می‌کند. سریع است و بازآرایی را ایمن می‌کند.",
    "enDef": "A unit test checks the smallest logical unit (function or class) in isolation. It is fast and makes refactoring safer.",
    "faHow": "کوچک‌ترین واحد منطقی را جدا و سریع می‌آزماید. وابستگی‌ها اغلب double می‌شوند. باید قطعی و خوانا باشد.",
    "enHow": "Tests the smallest logical unit in isolation and fast. Dependencies are often doubled. Must be deterministic and readable.",
    "faWhy": "شبکهٔ ایمنی بازآرایی و مستند زندهٔ رفتار است.",
    "enWhy": "Safety net for refactoring and living documentation of behavior."
  },
  {
    "id": "integration-test",
    "fa": "آزمون یکپارچگی",
    "en": "Integration test",
    "aliasesFa": [
      "آزمون یکپارچگی",
      "تست یکپارچه",
      "تست یکپارچگی"
    ],
    "aliasesEn": [
      "integration test",
      "integration tests",
      "integration testing"
    ],
    "faExp": "آزمون یکپارچگی تعامل چند جزء یا سرویس را می‌سنجد تا قراردادها و فرض‌های مرزی درست باشند. گران‌تر از واحد است ولی شکاف‌های اتصال را می‌گیرد.",
    "enExp": "Integration tests exercise several components or services so contracts and boundary assumptions hold. Costlier than unit tests, they catch wiring gaps.",
    "faEx": "API سفارش با پایگاه‌دادهٔ واقعی آزمایشی یک سفارش می‌سازد و می‌خواند.",
    "enEx": "The orders API with a real test database creates and reads an order.",
    "related": [
      "testing",
      "unit-test",
      "api"
    ],
    "faDef": "آزمون یکپارچگی تعامل چند جزء یا سرویس را می‌سنجد تا قراردادها و فرض‌های مرزی درست باشند. گران‌تر از واحد است ولی شکاف‌های اتصال را می‌گیرد.",
    "enDef": "Integration tests exercise several components or services so contracts and boundary assumptions hold. Costlier than unit tests, they catch wiring gaps.",
    "faHow": "چند جزء واقعی را کنار هم می‌آزماید تا قرارداد و سیم‌کشی را بسنجد. گران‌تر از واحد است؛ مرزهای مهم را هدف می‌گیرد.",
    "enHow": "Exercises several real parts together to check contracts and wiring. Costlier than unit tests; aim at important boundaries.",
    "faWhy": "باگ‌های «هر کدام جدا درست بود» اینجا دیده می‌شوند.",
    "enWhy": "Catches “each part worked alone” failures."
  },
  {
    "id": "regression-test",
    "fa": "آزمون رگرسیون",
    "en": "Regression test",
    "aliasesFa": [
      "آزمون رگرسیون",
      "تست رگرسیون"
    ],
    "aliasesEn": [
      "regression test",
      "regression testing"
    ],
    "faExp": "آزمون رگرسیون بررسی می‌کند تغییر جدید رفتار درست قبلی را نشکسته باشد. معمولاً مجموعه‌ای خودکار و تکرارشونده است.",
    "enExp": "Regression testing checks that new changes did not break previously correct behavior. It is usually an automated, repeatable suite.",
    "faEx": "بعد از اصلاح کارمزد، همهٔ تست‌های پرداخت قدیمی دوباره سبز می‌مانند.",
    "enEx": "After a fee fix, all older payment tests stay green.",
    "related": [
      "testing",
      "ci-cd",
      "coverage"
    ],
    "faDef": "آزمون رگرسیون بررسی می‌کند تغییر جدید رفتار درست قبلی را نشکسته باشد. معمولاً مجموعه‌ای خودکار و تکرارشونده است.",
    "enDef": "Regression testing checks that new changes did not break previously correct behavior. It is usually an automated, repeatable suite.",
    "faHow": "پس از تغییر اجرا می‌شود تا رفتار درست قبلی نشکند. غالباً مجموعهٔ خودکار است. انتخاب هوشمند orthognal با ریسک تغییر است.",
    "enHow": "Runs after change so prior good behavior does not break. Often an automated suite. Smart selection matches change risk.",
    "faWhy": "انتشار مکرر بدون رگرسیون خودکار قمار است.",
    "enWhy": "Frequent release without automated regression is a gamble."
  },
  {
    "id": "coverage",
    "fa": "پوشش آزمون",
    "en": "Test coverage",
    "aliasesFa": [
      "پوشش آزمون",
      "پوشش تست",
      "پوشش کد"
    ],
    "aliasesEn": [
      "test coverage",
      "code coverage",
      "coverage"
    ],
    "faExp": "پوشش آزمون نشان می‌دهد چه بخشی از کد یا نیازمندی‌ها توسط تست لمس شده است. پوشش بالا به‌تنهایی کیفیت را تضمین نمی‌کند ولی شکاف را نمایان می‌کند.",
    "enExp": "Test coverage shows how much code or requirements tests touch. High coverage alone does not guarantee quality but reveals gaps.",
    "faEx": "گزارش می‌گوید ۸۰٪ خطوط ماژول کارمزد اجرا شده‌اند؛ شاخهٔ خطای نادر هنوز بدون تست است.",
    "enEx": "A report shows 80% of fee-module lines ran; a rare error branch is still untested.",
    "related": [
      "testing",
      "unit-test",
      "metric"
    ],
    "faDef": "پوشش آزمون نشان می‌دهد چه بخشی از کد یا نیازمندی‌ها توسط تست لمس شده است. پوشش بالا به‌تنهایی کیفیت را تضمین نمی‌کند ولی شکاف را نمایان می‌کند.",
    "enDef": "Test coverage shows how much code or requirements tests touch. High coverage alone does not guarantee quality but reveals gaps.",
    "faHow": "درصد اجزای کد (خط، شاخه، مسیر) که با تست اجرا شده‌اند. ۱۰۰٪ به معنی نبود نقص نیست. پوشش شاخه از خط قوی‌تر است.",
    "enHow": "Percent of code parts (line, branch, path) executed by tests. 100% ≠ no defects. Branch coverage is stronger than line.",
    "faWhy": "نقاط کور تست را نشان می‌دهد؛ هدف کورِ درصد خطرناک است.",
    "enWhy": "Shows blind spots; chasing a percentage blindly is dangerous.",
    "sample": {
      "faQ": "۱۰ شاخه در کد هست و تست‌ها ۸ تا را اجرا می‌کنند. پوشش شاخه چند درصد است؟",
      "enQ": "A program has 10 branches; tests execute 8. What is branch coverage percent?",
      "faSteps": [
        "پوشش شاخه = (شاخه‌های اجراشده / کل شاخه‌ها) × ۱۰۰.",
        "۸/۱۰ × ۱۰۰ = ۸۰٪."
      ],
      "enSteps": [
        "Branch coverage = (executed branches / total branches) × 100.",
        "8/10 × 100 = 80%."
      ],
      "faAns": "۸۰٪",
      "enAns": "80%"
    }
  },
  {
    "id": "verification",
    "fa": "وارسی",
    "en": "Verification",
    "aliasesFa": [
      "وارسی"
    ],
    "aliasesEn": [
      "verification"
    ],
    "faExp": "وارسی می‌پرسد آیا محصول را درست می‌سازیم: با مشخصات، استاندارد و طراحی داخلی سازگار است؟ بازبینی و تحلیل ایستا نمونه‌اند.",
    "enExp": "Verification asks whether we are building the product right: consistent with specs, standards, and internal design. Reviews and static analysis are examples.",
    "faEx": "بازبینی کد بررسی می‌کند پیاده‌سازی با طرح کلاس توافق‌شده بخواند.",
    "enEx": "A code review checks the implementation against the agreed class design.",
    "related": [
      "validation",
      "formal-methods",
      "testing"
    ],
    "faDef": "وارسی می‌پرسد آیا محصول را درست می‌سازیم: با مشخصات، استاندارد و طراحی داخلی سازگار است؟ بازبینی و تحلیل ایستا نمونه‌اند.",
    "enDef": "Verification asks whether we are building the product right: consistent with specs, standards, and internal design. Reviews and static analysis are examples.",
    "faHow": "آیا محصول را درست می‌سازیم؟ بررسی با مشخصه: بازبینی، تحلیل ایستا، تست مبتنی بر نیاز. تمرکز روی انطباق با توصیف.",
    "enHow": "Are we building the product right? Check against the spec: reviews, static analysis, requirements-based tests. Focus on conformance to description.",
    "faWhy": "خطاهای مشخصه و پیاده‌سازی را زود می‌گیرد.",
    "enWhy": "Catches spec and implementation errors early."
  },
  {
    "id": "validation",
    "fa": "اعتبارسنجی",
    "en": "Validation",
    "aliasesFa": [
      "اعتبارسنجی"
    ],
    "aliasesEn": [
      "validation",
      "validate"
    ],
    "faExp": "اعتبارسنجی می‌پرسد آیا محصول درست را می‌سازیم: نیاز واقعی ذی‌نفع برآورده می‌شود؟ آزمون پذیرش و بازخورد کاربر نمونه‌اند.",
    "enExp": "Validation asks whether we are building the right product: real stakeholder needs are met. Acceptance tests and user feedback are examples.",
    "faEx": "نسخهٔ آزمایشی را به مشتری می‌دهید ببیند جریان افتتاح حساب همان است که می‌خواست.",
    "enEx": "You give a trial build to the customer to confirm account opening matches intent.",
    "related": [
      "verification",
      "requirement",
      "acceptance-criteria",
      "testing"
    ],
    "faDef": "اعتبارسنجی می‌پرسد آیا محصول درست را می‌سازیم: نیاز واقعی ذی‌نفع برآورده می‌شود؟ آزمون پذیرش و بازخورد کاربر نمونه‌اند.",
    "enDef": "Validation asks whether we are building the right product: real stakeholder needs are met. Acceptance tests and user feedback are examples.",
    "faHow": "آیا محصول درست را می‌سازیم؟ سنجش نسبت به نیاز واقعی کاربر/ذی‌نفع. پذیرش و آزمایش میدانی نمونه‌اند.",
    "enHow": "Are we building the right product? Assess against real user/stakeholder need. Acceptance and field trials are examples.",
    "faWhy": "سامانهٔ منطبق اما بی‌فایده را برملا می‌کند.",
    "enWhy": "Exposes a conforming but useless system."
  },
  {
    "id": "formal-methods",
    "fa": "روش‌های صوری",
    "en": "Formal methods",
    "aliasesFa": [
      "روش‌های صوری",
      "روشهای صوری",
      "روش صوری",
      "روش‌های رسمی",
      "روشهای رسمی",
      "مدل‌checking",
      "مدلchecking",
      "model checking"
    ],
    "aliasesEn": [
      "formal methods",
      "formal method",
      "model checking"
    ],
    "faExp": "روش‌های صوری از ریاضیات دقیق برای مشخص‌کردن و اثبات یا رد ویژگی‌های سامانه استفاده می‌کنند. در سامانه‌های حیاتی ارزش بالایی دارند ولی هزینهٔ تخصص دارند.",
    "enExp": "Formal methods use precise mathematics to specify and prove or refute system properties. They are valuable in critical systems but need specialist effort.",
    "faEx": "مدل‌checking نشان می‌دهد پروتکل قفل هرگز به بن‌بست نمی‌رسد.",
    "enEx": "Model checking shows a locking protocol never reaches deadlock.",
    "related": [
      "logic",
      "fsm",
      "verification",
      "proof"
    ],
    "faDef": "روش‌های صوری از ریاضیات دقیق برای مشخص‌کردن و اثبات یا رد ویژگی‌های سامانه استفاده می‌کنند. در سامانه‌های حیاتی ارزش بالایی دارند ولی هزینهٔ تخصص دارند.",
    "enDef": "Formal methods use precise mathematics to specify and prove or refute system properties. They are valuable in critical systems but need specialist effort.",
    "faHow": "مدل ریاضی مشخصه و اثبات یا جست‌وجوی فضای حالت (model checking). ابزارها ویژگی را رد یا تأیید می‌کنند. هزینهٔ تخصص بالاست.",
    "enHow": "Mathematical models of the spec plus proof or state-space search (model checking). Tools refute or confirm properties. Specialist cost is high.",
    "faWhy": "در سامانه‌های ایمنی‌مبنا ارزش اثبات قوی بیشتر از هزینه است.",
    "enWhy": "In safety-critical systems strong proof can outweigh the cost."
  },
  {
    "id": "static-analysis",
    "fa": "تحلیل ایستا",
    "en": "Static analysis",
    "aliasesFa": [
      "تحلیل ایستا",
      "آنالیز ایستا"
    ],
    "aliasesEn": [
      "static analysis",
      "static analyzer"
    ],
    "faExp": "تحلیل ایستا کد را بدون اجرا برای الگوهای خطرناک، باگ‌های رایج و نقض سبک بررسی می‌کند. زود و ارزان سیگنال می‌دهد.",
    "enExp": "Static analysis inspects code without running it for risky patterns, common bugs, and style breaches. It gives early, cheap signals.",
    "faEx": "ابزار هشدار می‌دهد متغیر null ممکن است بدون بررسی فراخوانی شود.",
    "enEx": "A tool warns a variable may be dereferenced without a null check.",
    "related": [
      "testing",
      "verification",
      "ci-cd"
    ],
    "faDef": "تحلیل ایستا کد را بدون اجرا برای الگوهای خطرناک، باگ‌های رایج و نقض سبک بررسی می‌کند. زود و ارزان سیگنال می‌دهد.",
    "enDef": "Static analysis inspects code without running it for risky patterns, common bugs, and style breaches. It gives early, cheap signals.",
    "faHow": "بدون اجرای برنامه الگوهای خطرناک، نقض سبک و بعضی کلاس‌های باگ را می‌یابد. مثبت کاذب باید مدیریت شود. در CI قفل کیفیت می‌شود.",
    "enHow": "Finds risky patterns, style breaches, and some bug classes without running the program. Manage false positives. Becomes a CI quality gate.",
    "faWhy": "باگ‌هایی که تست به آن‌ها نرسیده را ارزان سطح می‌کند.",
    "enWhy": "Surfaces bugs tests missed—cheaply."
  },
  {
    "id": "tdd",
    "fa": "توسعهٔ آزمون‌محور",
    "en": "Test-driven development",
    "aliasesFa": [
      "توسعهٔ آزمون‌محور",
      "توسعهٔ آزمونمحور",
      "TDD"
    ],
    "aliasesEn": [
      "test-driven development",
      "TDD"
    ],
    "faExp": "TDD چرخهٔ کوتاه نوشتن تست ردشونده، پیاده‌سازی حداقلی، سپس بازآرایی است. طراحی را به سمت واحدهای آزمون‌پذیر هل می‌دهد.",
    "enExp": "TDD is a short cycle of failing test, minimal implementation, then refactor. It pushes design toward testable units.",
    "faEx": "اول تست «برداشت بیش از موجودی خطا بدهد» را می‌نویسید؛ بعد منطق را پیاده می‌کنید.",
    "enEx": "First write a test that overdraft withdraw fails; then implement the logic.",
    "related": [
      "unit-test",
      "refactoring",
      "testing"
    ],
    "faDef": "TDD چرخهٔ کوتاه نوشتن تست ردشونده، پیاده‌سازی حداقلی، سپس بازآرایی است. طراحی را به سمت واحدهای آزمون‌پذیر هل می‌دهد.",
    "enDef": "TDD is a short cycle of failing test, minimal implementation, then refactor. It pushes design toward testable units.",
    "faHow": "ابتدا تست قرمز، بعد حداقل کد سبز، بعد بازآرایی. چرخه کوتاه بازخورد طراحی می‌دهد. تست مشخصهٔ اجرایی می‌شود.",
    "enHow": "Red failing test first, then minimal green code, then refactor. Short cycles feedback design. Tests become executable specs.",
    "faWhy": "API را از دیدگاه استفاده شکل می‌دهد و ترس تغییر را کم می‌کند.",
    "enWhy": "Shapes API from the caller’s view and reduces fear of change."
  },
  {
    "id": "configuration-management",
    "fa": "مدیریت پیکربندی",
    "en": "Configuration management",
    "aliasesFa": [
      "مدیریت پیکربندی",
      "پیکربندی نرم‌افزار",
      "پیکربندی نرمافزار"
    ],
    "aliasesEn": [
      "configuration management",
      "CM",
      "software configuration management"
    ],
    "faExp": "مدیریت پیکربندی هویت، کنترل تغییر و وضعیت اقلام پیکربندی را در طول عمر محصول نگه می‌دارد. پایهٔ بازتولید ساخت و ممیزی است.",
    "enExp": "Configuration management tracks identity, change control, and status of configuration items over the product life. It underpins reproducible builds and audit.",
    "faEx": "هر انتشار با برچسب دقیق commit و نسخهٔ وابستگی‌ها ثبت می‌شود.",
    "enEx": "Each release records an exact commit tag and dependency versions.",
    "related": [
      "version-control",
      "baseline",
      "configuration-item",
      "ci-cd"
    ],
    "faDef": "مدیریت پیکربندی هویت، کنترل تغییر و وضعیت اقلام پیکربندی را در طول عمر محصول نگه می‌دارد. پایهٔ بازتولید ساخت و ممیزی است.",
    "enDef": "Configuration management tracks identity, change control, and status of configuration items over the product life. It underpins reproducible builds and audit.",
    "faHow": "شناسایی اقلام، کنترل تغییر، وضعیت و ممیزی پیکربندی. پایه و خط‌پایه نقاط مرجع‌اند. انتشار از پیکربندی شناخته می‌آید.",
    "enHow": "Identify items, control change, status accounting, and audit. Baselines are reference points. Releases come from known configurations.",
    "faWhy": "بدون آن «کدام نسخه در تولید است؟» بی‌پاسخ می‌ماند.",
    "enWhy": "Without it “what’s in production?” stays unanswered."
  },
  {
    "id": "configuration-item",
    "fa": "آیتم پیکربندی",
    "en": "Configuration item",
    "aliasesFa": [
      "آیتم پیکربندی",
      "قلم پیکربندی"
    ],
    "aliasesEn": [
      "configuration item",
      "configuration items"
    ],
    "faExp": "آیتم پیکربندی واحدی است که جداگانه نسخه و کنترل می‌شود: کد، سند، طرح یا ابزار. تغییرش باید ردیابی شود.",
    "enExp": "A configuration item is a unit versioned and controlled on its own—code, document, schema, or tool. Its changes must be tracked.",
    "faEx": "فایل طرح پایگاه‌داده و سرویس API هر کدام یک آیتم پیکربندی‌اند.",
    "enEx": "The database schema file and the API service are each configuration items.",
    "related": [
      "configuration-management",
      "baseline",
      "version-control"
    ],
    "faDef": "آیتم پیکربندی واحدی است که جداگانه نسخه و کنترل می‌شود: کد، سند، طرح یا ابزار. تغییرش باید ردیابی شود.",
    "enDef": "A configuration item is a unit versioned and controlled on its own—code, document, schema, or tool. Its changes must be tracked.",
    "faHow": "واحدی که جداگانه نسخه و کنترل می‌شود: کد، سند، مدل، ایمیج. شناسه و فراداده دارد.",
    "enHow": "A unit versioned and controlled separately—code, doc, model, image. Has identity and metadata.",
    "faWhy": "دانه‌بندی درست CI تعادل کنترل و سربار را می‌سازد.",
    "enWhy": "Right CI granularity balances control and overhead."
  },
  {
    "id": "baseline",
    "fa": "خط پایه",
    "en": "Baseline",
    "aliasesFa": [
      "خط پایه",
      "خط‌پایه",
      "خطپایه",
      "بیس‌لاین",
      "بیسلاین"
    ],
    "aliasesEn": [
      "baseline",
      "baselines"
    ],
    "faExp": "خط پایه مجموعهٔ توافق‌شده و منجمد اقلام در یک لحظه است که مبنای تغییر بعدی قرار می‌گیرد. بدون آن «نسخهٔ مرجع» مبهم می‌ماند.",
    "enExp": "A baseline is an agreed, frozen set of items at a moment that becomes the base for later change. Without it the reference version stays fuzzy.",
    "faEx": "خط پایهٔ نیازمندی‌های انتشار ۱٫۰ قبل از شروع کدنویسی قفل می‌شود.",
    "enEx": "The release 1.0 requirements baseline is locked before coding starts.",
    "related": [
      "configuration-management",
      "version-control",
      "requirement"
    ],
    "faDef": "خط پایه مجموعهٔ توافق‌شده و منجمد اقلام در یک لحظه است که مبنای تغییر بعدی قرار می‌گیرد. بدون آن «نسخهٔ مرجع» مبهم می‌ماند.",
    "enDef": "A baseline is an agreed, frozen set of items at a moment that becomes the base for later change. Without it the reference version stays fuzzy.",
    "faHow": "مجموعهٔ تصویب‌شدهٔ اقلام در یک لحظهٔ مرجع. تغییر نسبت به خط‌پایه کنترل‌شده است. بازتولید ساخت از خط‌پایه ممکن می‌شود.",
    "enHow": "An approved set of items at a reference moment. Change against the baseline is controlled. Builds become reproducible from it.",
    "faWhy": "ممیزی و بازگشت به نسخهٔ پایدار روی خط‌پایه تکیه دارد.",
    "enWhy": "Audit and rollback to a stable version rely on baselines."
  },
  {
    "id": "version-control",
    "fa": "کنترل نسخه",
    "en": "Version control",
    "aliasesFa": [
      "کنترل نسخه",
      "کنترل نسخه‌ها",
      "کنترل نسخهها",
      "ورژن کنترل",
      "گیت"
    ],
    "aliasesEn": [
      "version control",
      "VCS",
      "Git",
      "source control"
    ],
    "faExp": "کنترل نسخه تاریخچهٔ تغییر فایل‌ها را نگه می‌دارد تا بتوان شاخه ساخت، ادغام کرد و به گذشته برگشت. همکاری موازی را ممکن می‌کند.",
    "enExp": "Version control keeps file history so you can branch, merge, and roll back. It enables parallel collaboration.",
    "faEx": "دو نفر روی یک مخزن Git کار می‌کنند؛ هر commit قابل بازبینی است.",
    "enEx": "Two people work in one Git repo; every commit is reviewable.",
    "related": [
      "branch",
      "merge",
      "configuration-management",
      "ci-cd"
    ],
    "faDef": "کنترل نسخه تاریخچهٔ تغییر فایل‌ها را نگه می‌دارد تا بتوان شاخه ساخت، ادغام کرد و به گذشته برگشت. همکاری موازی را ممکن می‌کند.",
    "enDef": "Version control keeps file history so you can branch, merge, and roll back. It enables parallel collaboration.",
    "faHow": "تاریخچهٔ تغییرات را با commit، شاخه و ادغام نگه می‌دارد. هم‌کاری موازی و نسبت‌دادن تغییر را ممکن می‌کند.",
    "enHow": "Keeps change history with commits, branches, and merges. Enables parallel work and attribution.",
    "faWhy": "ستون فقرات کار تیمی نرم‌افزار امروز است.",
    "enWhy": "The backbone of modern software teamwork."
  },
  {
    "id": "branch",
    "fa": "شاخه",
    "en": "Branch",
    "aliasesFa": [
      "شاخه",
      "شاخه‌ها",
      "شاخهها",
      "برنچ"
    ],
    "aliasesEn": [
      "branch (git)",
      "branches",
      "branching",
      "Git branch"
    ],
    "faExp": "شاخه خط توسعهٔ جدا در کنترل نسخه است تا ویژگی یا اصلاح بدون شکستن خط اصلی پیش برود. سیاست شاخه‌بندی تیم را هماهنگ می‌کند.",
    "enExp": "A branch is a separate line of development in version control so a feature or fix can progress without breaking the main line. Branching policy aligns the team.",
    "faEx": "شاخهٔ feature/login از main جدا می‌شود و بعد از بازبینی ادغام می‌گردد.",
    "enEx": "Branch feature/login forks from main and merges after review.",
    "related": [
      "merge",
      "version-control",
      "ci-cd"
    ],
    "faDef": "شاخه خط توسعهٔ جدا در کنترل نسخه است تا ویژگی یا اصلاح بدون شکستن خط اصلی پیش برود. سیاست شاخه‌بندی تیم را هماهنگ می‌کند.",
    "enDef": "A branch is a separate line of development in version control so a feature or fix can progress without breaking the main line. Branching policy aligns the team.",
    "faHow": "خط توسعهٔ جدا از یک نقطهٔ تاریخچه. کوتاه‌عمر برای ویژگی؛ سیاست ادغام مهم است. شاخهٔ طولانی ادغام را دردناک می‌کند.",
    "enHow": "A separate line of development from a history point. Short-lived for features; merge policy matters. Long-lived branches hurt merges.",
    "faWhy": "جداسازی کارهای ناپایدار از خط اصلی بدون توقف دیگران.",
    "enWhy": "Isolates unstable work from main without blocking others."
  },
  {
    "id": "merge",
    "fa": "ادغام",
    "en": "Merge",
    "aliasesFa": [
      "ادغام",
      "مرج"
    ],
    "aliasesEn": [
      "merge (git)",
      "merging branches",
      "branch merge",
      "Merge"
    ],
    "faExp": "ادغام تغییرات دو شاخه را یکی می‌کند. تعارض وقتی هر دو یک بخش را متفاوت عوض کرده باشند رخ می‌دهد و باید حل شود.",
    "enExp": "A merge combines changes from two branches. Conflicts arise when both edited the same region and must be resolved.",
    "faEx": "ادغام شاخهٔ پرداخت با main؛ تعارض در فایل کارمزد دستی حل می‌شود.",
    "enEx": "Merging payments into main; a fee-file conflict is resolved by hand.",
    "related": [
      "branch",
      "version-control"
    ],
    "faDef": "ادغام تغییرات دو شاخه را یکی می‌کند. تعارض وقتی هر دو یک بخش را متفاوت عوض کرده باشند رخ می‌دهد و باید حل شود.",
    "enDef": "A merge combines changes from two branches. Conflicts arise when both edited the same region and must be resolved.",
    "faHow": "ترکیب تاریخچه‌های شاخه. ادغام سه‌طرفه والد مشترک را می‌بیند. تداخل وقتی هر دو طرف یک ناحیه را عوض کرده باشند دستی حل می‌شود.",
    "enHow": "Combine branch histories. Three-way merge sees the common ancestor. Conflicts when both sides edited the same region need manual resolution.",
    "faWhy": "تحویل پیوسته به ادغام مکرر و کوچک وابسته است.",
    "enWhy": "Continuous delivery depends on frequent small merges.",
    "sample": {
      "faQ": "شاخه main و feature هر دو خط ۳ فایل config را عوض کرده‌اند. هنگام merge چه باید کرد؟",
      "enQ": "Both main and feature changed line 3 of config. What should you do on merge?",
      "faSteps": [
        "ابزار تداخل (conflict) اعلام می‌کند چون دو تغییر غیرقابل‌ادغام خودکار است.",
        "فایل را باز کنید، تغییر درست را نگه دارید یا ترکیب کنید، سپس مرحله و commit ادغام."
      ],
      "enSteps": [
        "The tool marks a conflict—two non-auto-mergeable edits.",
        "Open the file, keep or combine the right change, then stage and commit the merge."
      ],
      "faAns": "رفع دستی تداخل، سپس stage و commit ادغام.",
      "enAns": "Resolve the conflict manually, then stage and commit the merge."
    }
  },
  {
    "id": "ci-cd",
    "fa": "CI/CD",
    "en": "CI/CD",
    "aliasesFa": [
      "CI/CD",
      "یکپارچه‌سازی پیوسته",
      "یکپارچهسازی پیوسته",
      "تحویل پیوسته",
      "استقرار پیوسته"
    ],
    "aliasesEn": [
      "CI/CD",
      "continuous integration",
      "continuous delivery",
      "continuous deployment"
    ],
    "faExp": "CI تغییرات را زود یکپارچه و خودکار می‌سازد و می‌آزماید؛ CD مسیر آماده‌سازی یا استقرار مکرر به محیط‌ها را خودکار می‌کند. بازخورد را سریع و انتشار را کم‌ریسک‌تر می‌سازد.",
    "enExp": "CI integrates and automatically builds/tests changes early; CD automates preparing or deploying to environments often. Feedback speeds up and releases get less risky.",
    "faEx": "هر push روی main تست‌ها را اجرا می‌کند و در موفقیت، بسته را به محیط Staging می‌فرستد.",
    "enEx": "Each push to main runs tests and, on success, ships a package to Staging.",
    "related": [
      "devops",
      "version-control",
      "testing",
      "container"
    ],
    "faDef": "CI تغییرات را زود یکپارچه و خودکار می‌سازد و می‌آزماید؛ CD مسیر آماده‌سازی یا استقرار مکرر به محیط‌ها را خودکار می‌کند. بازخورد را سریع و انتشار را کم‌ریسک‌تر می‌سازد.",
    "enDef": "CI integrates and automatically builds/tests changes early; CD automates preparing or deploying to environments often. Feedback speeds up and releases get less risky.",
    "faHow": "CI هر تغییر را می‌سازد و می‌آزماید؛ CD مسیر رسیدن به استقرار را خودکار می‌کند. خط لوله دروازه کیفیت دارد. بازخورد باید سریع باشد.",
    "enHow": "CI builds and tests every change; CD automates the path to deploy. Pipelines hold quality gates. Feedback must be fast.",
    "faWhy": "ریسک انتشار را از «شب طولانی» به تغییر کوچک روزانه تبدیل می‌کند.",
    "enWhy": "Turns release risk from a long night into small daily changes.",
    "sample": {
      "faQ": "یک خط لولهٔ CI ساده بعد از push چه سه گام رایجی را به ترتیب اجرا می‌کند؟",
      "enQ": "Name three common ordered steps a simple CI pipeline runs after a push.",
      "faSteps": [
        "۱) دریافت کد و نصب وابستگی‌ها.",
        "۲) اجرای تست و تحلیل ایستا.",
        "۳) ساخت بسته‌ٔ انتشار (و در CD استقرار)."
      ],
      "enSteps": [
        "1) Checkout and install dependencies.",
        "2) Run tests and static analysis.",
        "3) Build an artifact (and deploy in CD)."
      ],
      "faAns": "checkout/نصب → تست/تحلیل → ساخت (و در CD استقرار).",
      "enAns": "checkout/install → test/analyze → build (and deploy in CD)."
    }
  },
  {
    "id": "devops",
    "fa": "DevOps",
    "en": "DevOps",
    "aliasesFa": [
      "DevOps",
      "دِوآپس",
      "دواپس"
    ],
    "aliasesEn": [
      "DevOps"
    ],
    "faExp": "DevOps فرهنگ و عملیاتی است که توسعه و عملیات را با خودکارسازی، پایش و مسئولیت مشترک نزدیک می‌کند. هدف تحویل پایدار و سریع ارزش است.",
    "enExp": "DevOps is a culture and practice set that brings development and operations together through automation, monitoring, and shared ownership. The aim is steady, fast delivery of value.",
    "faEx": "تیم هم کد می‌نویسد و هم هشدارهای تولید را برمی‌دارد—نه پرتاب کار از دیوار.",
    "enEx": "The team both ships code and owns production alerts—no throw-over-the-wall.",
    "related": [
      "ci-cd",
      "observability",
      "container"
    ],
    "faDef": "DevOps فرهنگ و عملیاتی است که توسعه و عملیات را با خودکارسازی، پایش و مسئولیت مشترک نزدیک می‌کند. هدف تحویل پایدار و سریع ارزش است.",
    "enDef": "DevOps is a culture and practice set that brings development and operations together through automation, monitoring, and shared ownership. The aim is steady, fast delivery of value.",
    "faHow": "فرهنگ و عمل نزدیک کردن توسعه و عملیات با خودکارسازی، مشاهده‌پذیری و مسئولیت مشترک. دیوار دست‌به‌دست را می‌شکند.",
    "enHow": "Culture and practice bringing dev and ops together via automation, observability, and shared ownership. Breaks the throw-over-the-wall habit.",
    "faWhy": "سرعت پایدار تحویل با پایداری تولید همراه می‌شود.",
    "enWhy": "Sustainable delivery speed pairs with production stability."
  },
  {
    "id": "observability",
    "fa": "مشاهده‌پذیری",
    "en": "Observability",
    "aliasesFa": [
      "مشاهده‌پذیری",
      "مشاهدهپذیری",
      "قابلیت مشاهده",
      "پایش",
      "مانیتورینگ"
    ],
    "aliasesEn": [
      "observability",
      "monitoring",
      "telemetry"
    ],
    "faExp": "مشاهده‌پذیری توانایی فهم حالت درونی سامانه از خروجی‌هایش است: لاگ، سنجه، ردگیری. عیب‌یابی سامانه‌های توزیع‌شده را ممکن می‌کند.",
    "enExp": "Observability is understanding internal state from external outputs: logs, metrics, traces. It enables debugging distributed systems.",
    "faEx": "ردگیری یک درخواست از دروازه تا سرویس پرداخت نشان می‌دهد کجا کند شده.",
    "enEx": "A trace from gateway to payments shows where latency grew.",
    "related": [
      "metric",
      "devops",
      "reliability"
    ],
    "faDef": "مشاهده‌پذیری توانایی فهم حالت درونی سامانه از خروجی‌هایش است: لاگ، سنجه، ردگیری. عیب‌یابی سامانه‌های توزیع‌شده را ممکن می‌کند.",
    "enDef": "Observability is understanding internal state from external outputs: logs, metrics, traces. It enables debugging distributed systems.",
    "faHow": "از خروجی‌های سامانه (لاگ، سنجه، رد) می‌توان حالت درونی را فهمید. برخلاف مانیتورینگ صرف، پرسش‌های تازه را هم پشتیبانی می‌کند.",
    "enHow": "From outputs (logs, metrics, traces) you can infer internal state. Unlike pure monitoring, it supports novel questions.",
    "faWhy": "اشکال‌زدایی سیستم‌های توزیع‌شده بدون آن حدس است.",
    "enWhy": "Debugging distributed systems without it is guesswork."
  },
  {
    "id": "metric",
    "fa": "سنجه",
    "en": "Metric",
    "aliasesFa": [
      "سنجه",
      "سنجه‌ها",
      "سنجهها",
      "متریک"
    ],
    "aliasesEn": [
      "metric",
      "metrics"
    ],
    "faExp": "سنجه مقدار کمّی برای پایش ویژگی یا فرایند است. باید معنادار، تکرارپذیر و مرتبط با تصمیم باشد نه فقط عدد تزئینی.",
    "enExp": "A metric is a quantitative value for monitoring a property or process. It should be meaningful, repeatable, and decision-relevant—not vanity.",
    "faEx": "نرخ خطای HTTP ۵xx در ۱۵ دقیقهٔ اخیر یک سنجهٔ عملیاتی است.",
    "enEx": "HTTP 5xx rate over the last 15 minutes is an operational metric.",
    "related": [
      "observability",
      "quality-attribute",
      "statistics"
    ],
    "faDef": "سنجه مقدار کمّی برای پایش ویژگی یا فرایند است. باید معنادار، تکرارپذیر و مرتبط با تصمیم باشد نه فقط عدد تزئینی.",
    "enDef": "A metric is a quantitative value for monitoring a property or process. It should be meaningful, repeatable, and decision-relevant—not vanity.",
    "faHow": "اندازهٔ کمّی یک ویژگی در بازهٔ زمان. باید تعریف عملیاتی و واحد داشته باشد. سنجهٔ وانیته گمراه‌کننده است.",
    "enHow": "A quantitative measure of a property over time. Needs operational definition and unit. Vanity metrics mislead.",
    "faWhy": "تصمیم مدیریت و هشدان تولید روی سنجهٔ درست سوار است.",
    "enWhy": "Management decisions and production alerts ride on the right metrics.",
    "sample": {
      "faQ": "گراف کنترل‌جریان یک تابع ۹ یال، ۷ گره و ۱ مؤلفهٔ همبند دارد. پیچیدگی دورانی (McCabe) چند است؟",
      "enQ": "A function CFG has 9 edges, 7 nodes, and 1 connected component. What is cyclomatic complexity M = E − N + 2P?",
      "faSteps": [
        "فرمول: M = E − N + 2P.",
        "M = 9 − 7 + 2×1 = 4."
      ],
      "enSteps": [
        "Formula: M = E − N + 2P.",
        "M = 9 − 7 + 2×1 = 4."
      ],
      "faAns": "۴",
      "enAns": "4"
    }
  },
  {
    "id": "threat",
    "fa": "تهدید",
    "en": "Threat",
    "aliasesFa": [
      "تهدید",
      "تهدیدها"
    ],
    "aliasesEn": [
      "threat",
      "threats"
    ],
    "faExp": "تهدید شرایط یا عامل بالقوه‌ای است که می‌تواند از آسیب‌پذیری سوءاستفاده کند و به دارایی آسیب بزند. مدل‌سازی تهدید اولویت دفاع را روشن می‌کند.",
    "enExp": "A threat is a potential condition or actor that can exploit a vulnerability and harm an asset. Threat modeling clarifies defense priorities.",
    "faEx": "مهاجم بیرونی که می‌خواهد دادهٔ کارت را بدزدد یک تهدید است.",
    "enEx": "An external attacker seeking card data is a threat.",
    "related": [
      "vulnerability",
      "risk",
      "encryption",
      "authentication"
    ],
    "faDef": "تهدید شرایط یا عامل بالقوه‌ای است که می‌تواند از آسیب‌پذیری سوءاستفاده کند و به دارایی آسیب بزند. مدل‌سازی تهدید اولویت دفاع را روشن می‌کند.",
    "enDef": "A threat is a potential condition or actor that can exploit a vulnerability and harm an asset. Threat modeling clarifies defense priorities.",
    "faHow": "عامل یا شرایطی که می‌تواند از آسیب‌پذیری بهره ببرد و زیان بزند. مدل تهدید دارایی، مهاجم و مسیر حمله را فهرست می‌کند.",
    "enHow": "An agent or condition that can exploit a vulnerability and cause harm. Threat modeling lists assets, adversaries, and attack paths.",
    "faWhy": "امنیت بدون شناخت تهدید فهرست کنترل تصادفی است.",
    "enWhy": "Security without knowing threats is a random control list."
  },
  {
    "id": "vulnerability",
    "fa": "آسیب‌پذیری",
    "en": "Vulnerability",
    "aliasesFa": [
      "آسیب‌پذیری",
      "آسیبپذیری",
      "آسیب پذیری",
      "حفرهٔ امنیتی"
    ],
    "aliasesEn": [
      "vulnerability",
      "vulnerabilities"
    ],
    "faExp": "آسیب‌پذیری ضعف در سامانه است که تهدید می‌تواند از آن بهره ببرد. به‌روزرسانی، سخت‌سازی و بازبینی آن را کم می‌کند.",
    "enExp": "A vulnerability is a system weakness a threat can exploit. Patching, hardening, and review reduce it.",
    "faEx": "نسخهٔ قدیمی کتابخانه با باگ تزریق شناخته‌شده یک آسیب‌پذیری است.",
    "enEx": "An old library version with a known injection bug is a vulnerability.",
    "related": [
      "threat",
      "risk",
      "encryption"
    ],
    "faDef": "آسیب‌پذیری ضعف در سامانه است که تهدید می‌تواند از آن بهره ببرد. به‌روزرسانی، سخت‌سازی و بازبینی آن را کم می‌کند.",
    "enDef": "A vulnerability is a system weakness a threat can exploit. Patching, hardening, and review reduce it.",
    "faHow": "ضعف در طراحی، پیاده‌سازی یا پیکربندی که تهدید می‌تواند از آن سوءاستفاده کند. مدیریت آسیب‌پذیری کشف، ارزیابی و رفع است.",
    "enHow": "A weakness in design, implementation, or config that a threat can abuse. Vulnerability management finds, rates, and fixes.",
    "faWhy": "وصلهٔ دیر و وابستگی کهنه رایج‌ترین مسیر نفوذند.",
    "enWhy": "Late patches and stale dependencies are common breach paths."
  },
  {
    "id": "risk",
    "fa": "ریسک",
    "en": "Risk",
    "aliasesFa": [
      "ریسک",
      "ریسک‌ها",
      "ریسکها",
      "مخاطره"
    ],
    "aliasesEn": [
      "risk",
      "risks",
      "project risk",
      "risk management"
    ],
    "faExp": "ریسک ترکیب احتمال یک رویداد ناخواسته و اثر آن است. مدیریت ریسک شناسایی، تحلیل، پاسخ و پایش را شامل می‌شود.",
    "enExp": "Risk combines the likelihood of an unwanted event and its impact. Risk management covers identify, analyze, respond, and monitor.",
    "faEx": "احتمال نشت دادهٔ متوسط با اثر بالا ممکن است قبل از ویژگی جدید اولویت بگیرد.",
    "enEx": "A medium-likelihood, high-impact data leak may outrank a new feature.",
    "related": [
      "threat",
      "vulnerability",
      "technical-debt"
    ],
    "faDef": "ریسک ترکیب احتمال یک رویداد ناخواسته و اثر آن است. مدیریت ریسک شناسایی، تحلیل، پاسخ و پایش را شامل می‌شود.",
    "enDef": "Risk combines the likelihood of an unwanted event and its impact. Risk management covers identify, analyze, respond, and monitor.",
    "faHow": "ترکیب احتمال رخداد نامطلوب و اثر آن. مواجهه ≈ احتمال × اثر. پاسخ: اجتناب، کاهش، انتقال، پذیرش.",
    "enHow": "Combination of likelihood of an undesired event and its impact. Exposure ≈ probability × impact. Responses: avoid, mitigate, transfer, accept.",
    "faWhy": "اولویت کار امنیتی و پروژه با ریسک کمّی‌شده عقلانی می‌شود.",
    "enWhy": "Security and project priorities become rational with quantified risk.",
    "sample": {
      "faQ": "احتمال از دست رفتن داده ۰٫۲ و اثر مالی ۵۰٬۰۰۰ است. مواجههٔ ریسک (احتمال × اثر) چقدر است؟",
      "enQ": "Probability of data loss is 0.2 and financial impact is 50,000. Risk exposure = probability × impact?",
      "faSteps": [
        "0.2 × 50,000 = 10,000."
      ],
      "enSteps": [
        "0.2 × 50,000 = 10,000."
      ],
      "faAns": "۱۰٬۰۰۰",
      "enAns": "10,000"
    }
  },
  {
    "id": "encryption",
    "fa": "رمزنگاری",
    "en": "Encryption",
    "aliasesFa": [
      "رمزنگاری",
      "رمز کردن",
      "رمزگشایی",
      "رمزنگاری‌شده",
      "رمزنگاریشده"
    ],
    "aliasesEn": [
      "encryption",
      "encrypt",
      "cryptography",
      "encrypted"
    ],
    "faExp": "رمزنگاری تبدیل داده به شکل ناخوانا برای کسی است که کلید ندارد. محرمانگی را در ذخیره و انتقال پشتیبانی می‌کند ولی جایگزین کنترل دسترسی کامل نیست.",
    "enExp": "Encryption transforms data so those without the key cannot read it. It supports confidentiality in storage and transit but does not replace full access control.",
    "faEx": "HTTPS محتوای درخواست را در مسیر برای شنودگر بی‌معنا می‌کند.",
    "enEx": "HTTPS makes request content meaningless to a path eavesdropper.",
    "related": [
      "authentication",
      "hash",
      "http",
      "threat"
    ],
    "faDef": "رمزنگاری تبدیل داده به شکل ناخوانا برای کسی است که کلید ندارد. محرمانگی را در ذخیره و انتقال پشتیبانی می‌کند ولی جایگزین کنترل دسترسی کامل نیست.",
    "enDef": "Encryption transforms data so those without the key cannot read it. It supports confidentiality in storage and transit but does not replace full access control.",
    "faHow": "تبدیل داده به ciphertext با کلید؛ بدون کلید خواندن عملی نیست. متقارن سریع، نامتقارن برای تبادل کلید و امضا. مدیریت کلید سخت‌ترین بخش است.",
    "enHow": "Transform data to ciphertext with a key; reading without the key is impractical. Symmetric is fast; asymmetric helps key exchange and signatures. Key management is hardest.",
    "faWhy": "داده در انتقال و سکون بدون رمزنگاری در برابر شنود بی‌دفاع است.",
    "enWhy": "Data in transit and at rest is defenseless to eavesdropping without crypto.",
    "sample": {
      "faQ": "هش SHA-256 یک‌طرفه است. اگر دو گذرواژهٔ مختلف یک هش بدهند چه نام دارد و برای ذخیرهٔ گذرواژه چه پیامدی دارد؟",
      "enQ": "SHA-256 is one-way. If two different passwords share a hash, what is that called, and why does it matter for password storage?",
      "faSteps": [
        "این رویداد برخورد (collision) نام دارد.",
        "برای گذرواژه باید از هش کندِ نمک‌دار استفاده کرد؛ برخورد عملاً باید ناشدنی باشد و مقایسه فقط روی هش انجام شود."
      ],
      "enSteps": [
        "That event is a collision.",
        "Password storage needs slow salted hashing; collisions must be infeasible and only hashes are compared."
      ],
      "faAns": "برخورد (collision)؛ ذخیره باید نمک‌دار و کند باشد، نه مقایسهٔ متن خام.",
      "enAns": "A collision; store slow salted hashes, never compare raw passwords."
    }
  },
  {
    "id": "authentication",
    "fa": "احراز هویت",
    "en": "Authentication",
    "aliasesFa": [
      "احراز هویت",
      "بازنمایی هویت"
    ],
    "aliasesEn": [
      "authentication",
      "authenticate",
      "authn"
    ],
    "faExp": "احراز هویت اثبات می‌کند هویت اعلام‌شده درست است: رمز، عامل دوم، گواهی. پیش‌نیاز بیشتر کنترل‌های دسترسی است.",
    "enExp": "Authentication proves a claimed identity—password, second factor, certificate. It underpins most access control.",
    "faEx": "ورود با رمز و کد یک‌بارمصرف پیامکی.",
    "enEx": "Sign-in with password plus SMS one-time code.",
    "related": [
      "encryption",
      "authorization",
      "threat"
    ],
    "faDef": "احراز هویت اثبات می‌کند هویت اعلام‌شده درست است: رمز، عامل دوم، گواهی. پیش‌نیاز بیشتر کنترل‌های دسترسی است.",
    "enDef": "Authentication proves a claimed identity—password, second factor, certificate. It underpins most access control.",
    "faHow": "اثبات هویت: چیزی که می‌دانی، داری یا هستی. چندعاملی سخت‌تر می‌شکند. جلسه پس از اثبات صادر می‌شود.",
    "enHow": "Proving identity: something you know, have, or are. MFA is harder to break. A session is issued after proof.",
    "faWhy": "تقریباً هر کنترل بعدی به «این کیست؟» وابسته است.",
    "enWhy": "Almost every later control depends on “who is this?”"
  },
  {
    "id": "authorization",
    "fa": "اجازهٔ دسترسی",
    "en": "Authorization",
    "aliasesFa": [
      "اجازهٔ دسترسی",
      "مجوزدهی",
      "اختیاردهی"
    ],
    "aliasesEn": [
      "authorization",
      "access control",
      "authz"
    ],
    "faExp": "اجازهٔ دسترسی تصمیم می‌گیرد هویت احرازشده چه کارهایی مجاز است. مدل‌هایی مثل نقش‌محور رایج‌اند.",
    "enExp": "Authorization decides what an authenticated identity may do. Role-based models are common.",
    "faEx": "نقش صندوقدار می‌تواند برداشت ثبت کند ولی نرخ بهره را عوض نکند.",
    "enEx": "A teller role may post a withdrawal but not change interest rates.",
    "related": [
      "authentication",
      "least-privilege"
    ],
    "faDef": "اجازهٔ دسترسی تصمیم می‌گیرد هویت احرازشده چه کارهایی مجاز است. مدل‌هایی مثل نقش‌محور رایج‌اند.",
    "enDef": "Authorization decides what an authenticated identity may do. Role-based models are common.",
    "faHow": "پس از احراز هویت، تصمیم می‌گیرد چه عملی مجاز است. RBAC/ABAC مدل‌های رایج‌اند. حداقل امتیاز باید اعمال شود.",
    "enHow": "After authentication, decides what action is allowed. RBAC/ABAC are common models. Least privilege should apply.",
    "faWhy": "هویت درست با مجوز زیاد همچنان خطرناک است.",
    "enWhy": "A correct identity with excess permission is still dangerous."
  },
  {
    "id": "least-privilege",
    "fa": "کمینهٔ امتیاز",
    "en": "Least privilege",
    "aliasesFa": [
      "کمینهٔ امتیاز",
      "حداقل دسترسی",
      "کمینه امتیاز"
    ],
    "aliasesEn": [
      "least privilege",
      "least-privilege"
    ],
    "faExp": "اصل کمینهٔ امتیاز می‌گوید هر هویت فقط دسترسی لازم برای انجام کارش را داشته باشد. شعاع خسارت نفوذ را کوچک می‌کند.",
    "enExp": "Least privilege means each identity gets only the access needed for its job. It shrinks blast radius after compromise.",
    "faEx": "سرویس گزارش فقط خواندن جدول تراکنش دارد، نه حذف.",
    "enEx": "A reporting service can read transactions but not delete them.",
    "related": [
      "authorization",
      "threat"
    ],
    "faDef": "اصل کمینهٔ امتیاز می‌گوید هر هویت فقط دسترسی لازم برای انجام کارش را داشته باشد. شعاع خسارت نفوذ را کوچک می‌کند.",
    "enDef": "Least privilege means each identity gets only the access needed for its job. It shrinks blast radius after compromise.",
    "faHow": "فقط دسترسی لازم برای نقش/وظیفه، برای کمترین زمان. بازبینی دوره‌ای دسترسی‌های مانده. جداسازی وظیفه مکمل است.",
    "enHow": "Only the access needed for the role/task, for the least time. Periodically review leftover access. Separation of duties complements.",
    "faWhy": "شعاع انفجار نفوذ یا خطای انسانی را کوچک می‌کند.",
    "enWhy": "Shrinks blast radius of breach or human error."
  },
  {
    "id": "lifecycle",
    "fa": "چرخهٔ عمر",
    "en": "Life cycle",
    "aliasesFa": [
      "چرخهٔ عمر",
      "چرخه عمر",
      "چرخهٔ حیات",
      "lifecycle"
    ],
    "aliasesEn": [
      "life cycle",
      "lifecycle",
      "software life cycle"
    ],
    "faExp": "چرخهٔ عمر نرم‌افزار مراحل از ایده تا بازنشستگی را پوشش می‌دهد: نیاز، ساخت، استقرار، بهره‌برداری، نگهداری. مدل‌های مختلف ترتیب و تکرار این مراحل را تنظیم می‌کنند.",
    "enExp": "The software life cycle spans idea through retirement: need, build, deploy, operate, maintain. Different models arrange and repeat these stages.",
    "faEx": "پس از انتشار ۱٫۰ وارد نگهداری می‌شوید: رفع نقص و بهبود کوچک تا نسخهٔ بعد.",
    "enEx": "After 1.0 you enter maintenance: fixes and small improvements until the next version.",
    "related": [
      "waterfall",
      "agile",
      "devops"
    ],
    "faDef": "چرخهٔ عمر نرم‌افزار مراحل از ایده تا بازنشستگی را پوشش می‌دهد: نیاز، ساخت، استقرار، بهره‌برداری، نگهداری. مدل‌های مختلف ترتیب و تکرار این مراحل را تنظیم می‌کنند.",
    "enDef": "The software life cycle spans idea through retirement: need, build, deploy, operate, maintain. Different models arrange and repeat these stages.",
    "faHow": "مراحل از ایده تا بازنشستگی: نیاز، طراحی، ساخت، تست، استقرار، نگهداری. مدل‌ها ترتیب و بازخورد را تنظیم می‌کنند.",
    "enHow": "Stages from idea to retirement: need, design, build, test, deploy, maintain. Models set order and feedback.",
    "faWhy": "بدون چرخهٔ روشن، کارها گم و مسئولیت‌ها تار می‌شوند.",
    "enWhy": "Without a clear lifecycle, work and ownership blur."
  },
  {
    "id": "waterfall",
    "fa": "مدل آبشاری",
    "en": "Waterfall",
    "aliasesFa": [
      "آبشاری",
      "مدل آبشاری"
    ],
    "aliasesEn": [
      "waterfall",
      "waterfall model"
    ],
    "faExp": "مدل آبشاری مراحل را تقریباً ترتیبی پیش می‌برد: تحلیل سپس طراحی سپس ساخت و تست. برای نیاز پایدار و قراردادهای سخت‌گیرانه گاهی مناسب است ولی بازخورد دیر می‌دهد.",
    "enExp": "Waterfall progresses stages largely in sequence: analysis, then design, then build and test. It can fit stable needs and strict contracts but delays feedback.",
    "faEx": "سند نیاز کامل امضا می‌شود؛ سپس ماه‌ها طراحی قبل از اولین نسخهٔ قابل‌نمایش.",
    "enEx": "A full requirements document is signed; months of design precede the first demoable build.",
    "related": [
      "lifecycle",
      "agile"
    ],
    "faDef": "مدل آبشاری مراحل را تقریباً ترتیبی پیش می‌برد: تحلیل سپس طراحی سپس ساخت و تست. برای نیاز پایدار و قراردادهای سخت‌گیرانه گاهی مناسب است ولی بازخورد دیر می‌دهد.",
    "enDef": "Waterfall progresses stages largely in sequence: analysis, then design, then build and test. It can fit stable needs and strict contracts but delays feedback.",
    "faHow": "مراحل پشت‌سرهم با دروازه؛ فرض ثبات نسبی نیاز. مستند سنگین‌تر رایج است. تغییر دیرهزینه است.",
    "enHow": "Sequential stages with gates; assumes relatively stable needs. Heavier docs are common. Late change is costly.",
    "faWhy": "در پروژه‌های با نیاز ثابت و الزام ممیزی هنوز مناسب است؛ برای کشف سریع نه.",
    "enWhy": "Still fits fixed-need, audit-heavy projects; not rapid discovery."
  },
  {
    "id": "agile",
    "fa": "چابک",
    "en": "Agile",
    "aliasesFa": [
      "چابک",
      "چابکی",
      "اجایل"
    ],
    "aliasesEn": [
      "Agile",
      "agile"
    ],
    "faExp": "چابک مجموعه‌ای از ارزش‌ها و اصول برای تحویل تکراری ارزش با همکاری نزدیک مشتری و پاسخ به تغییر است. بر افراد، نرم‌افزار کارکننده و بهبود مستمر تأکید دارد.",
    "enExp": "Agile is a set of values and principles for iterative delivery of value with close customer collaboration and response to change. It emphasizes people, working software, and continuous improvement.",
    "faEx": "هر دو هفته یک افزایش قابل‌استفاده به کاربر نمایش داده می‌شود و بک‌لاگ بازچینی می‌شود.",
    "enEx": "Every two weeks a usable increment is shown and the backlog is reordered.",
    "related": [
      "scrum",
      "user-story",
      "devops",
      "lifecycle"
    ],
    "faDef": "چابک مجموعه‌ای از ارزش‌ها و اصول برای تحویل تکراری ارزش با همکاری نزدیک مشتری و پاسخ به تغییر است. بر افراد، نرم‌افزار کارکننده و بهبود مستمر تأکید دارد.",
    "enDef": "Agile is a set of values and principles for iterative delivery of value with close customer collaboration and response to change. It emphasizes people, working software, and continuous improvement.",
    "faHow": "تحویل افزایشی ارزش، بازخورد کوتاه، Adapt به‌جای طرح خشک. افراد و تعامل، نرم‌افزار کارکننده، همکاری مشتری، پاسخ به تغییر.",
    "enHow": "Incremental value delivery, short feedback, adapt over rigid plan. People, working software, customer collab, respond to change.",
    "faWhy": "عدم‌قطعیت محصول را با یادگیری پیوسته مدیریت می‌کند.",
    "enWhy": "Manages product uncertainty with continuous learning."
  },
  {
    "id": "scrum",
    "fa": "اسکرام",
    "en": "Scrum",
    "aliasesFa": [
      "اسکرام"
    ],
    "aliasesEn": [
      "Scrum"
    ],
    "faExp": "اسکرام چارچوب چابک با نقش‌ها، رویدادها و آرتیفکت‌های مشخص است: اسپرینت، بک‌لاگ، بررسی و بازاندیشی. نظم سبک برای تیم‌های چندوظیفه‌ای می‌دهد.",
    "enExp": "Scrum is an agile framework with defined roles, events, and artifacts: sprint, backlog, review, and retrospective. It gives light structure for cross-functional teams.",
    "faEx": "اسپرینت دو هفته‌ای با هدف «پرداخت درون‌برنامه‌ای» و بررسی در پایان.",
    "enEx": "A two-week sprint aimed at “in-app payment” with a review at the end.",
    "related": [
      "agile",
      "user-story",
      "ci-cd"
    ],
    "faDef": "اسکرام چارچوب چابک با نقش‌ها، رویدادها و آرتیفکت‌های مشخص است: اسپرینت، بک‌لاگ، بررسی و بازاندیشی. نظم سبک برای تیم‌های چندوظیفه‌ای می‌دهد.",
    "enDef": "Scrum is an agile framework with defined roles, events, and artifacts: sprint, backlog, review, and retrospective. It gives light structure for cross-functional teams.",
    "faHow": "اسپرینت‌های کوتاه، نقش‌های Product Owner/Scrum Master/تیم، رویدادها و مصنوعات. بک‌لاگ اولویت‌دار منبع کار است. سرعت برای برنامه‌ریزی ظرفیت است نه فشار.",
    "enHow": "Short sprints; PO/SM/team roles; events and artifacts. Prioritized backlog is the work source. Velocity plans capacity—not pressure.",
    "faWhy": "چارچوب ساده برای نظم تحویل و شفافیت مانع‌ها.",
    "enWhy": "A simple frame for delivery cadence and obstacle transparency.",
    "sample": {
      "faQ": "سرعت سه اسپرینت اخیر ۲۰، ۲۴ و ۲۲ داستان‌پوینت بوده. سرعت میانگین برای برنامه‌ریزی بعدی؟",
      "enQ": "Recent sprint velocities: 20, 24, 22 story points. What average velocity would you use next?",
      "faSteps": [
        "(20+24+22)/3 = 66/3 = 22."
      ],
      "enSteps": [
        "(20+24+22)/3 = 22."
      ],
      "faAns": "۲۲ داستان‌پوینت",
      "enAns": "22 story points"
    }
  },
  {
    "id": "cost-estimation",
    "fa": "برآورد هزینه",
    "en": "Cost estimation",
    "aliasesFa": [
      "برآورد هزینه",
      "تخمین هزینه"
    ],
    "aliasesEn": [
      "cost estimation",
      "effort estimation",
      "estimation"
    ],
    "faExp": "برآورد هزینه پیش‌بینی منابع لازم برای کار است با روش‌هایی مثل تشابه، تجزیه و مدل‌های پارامتری. عدم‌قطعیت را باید صریح گفت.",
    "enExp": "Cost estimation predicts resources needed using analogy, decomposition, and parametric models. Uncertainty should be stated openly.",
    "faEx": "تخمین ۳ تا ۵ نفر‌ماه برای ماژول گزارش با سطح اطمینان متوسط.",
    "enEx": "Estimate 3–5 person-months for a reporting module at medium confidence.",
    "related": [
      "roi",
      "risk",
      "metric"
    ],
    "faDef": "برآورد هزینه پیش‌بینی منابع لازم برای کار است با روش‌هایی مثل تشابه، تجزیه و مدل‌های پارامتری. عدم‌قطعیت را باید صریح گفت.",
    "enDef": "Cost estimation predicts resources needed using analogy, decomposition, and parametric models. Uncertainty should be stated openly.",
    "faHow": "پیش‌بینی تلاش/هزینه با تشابه، پایین‌به‌بالا، یا مدل پارامتری (نقاط کارکرد، COCOMOگونه). عدم‌قطعیت را بازه بدهید نه تک‌عدد دروغین.",
    "enHow": "Predict effort/cost via analogy, bottom-up, or parametric models (function points, COCOMO-like). Give uncertainty ranges—not fake single points.",
    "faWhy": "تعهد تجاری و ظرفیت تیم به برآورد صادقانه بند است.",
    "enWhy": "Business commitment and team capacity hang on honest estimates.",
    "sample": {
      "faQ": "با وزن ساده، ۳ فایل منطقی داخلی (هر کدام وزن ۱۰) و ۲ ورودی خارجی (هر کدام وزن ۴) چند «نقطهٔ کارکرد ساده» می‌دهد؟",
      "enQ": "Using simple weights: 3 internal logical files (weight 10 each) and 2 external inputs (weight 4 each)—what is the simple function-point total?",
      "faSteps": [
        "ILF: 3×10 = 30.",
        "EI: 2×4 = 8.",
        "جمع = ۳۸."
      ],
      "enSteps": [
        "ILF: 3×10 = 30.",
        "EI: 2×4 = 8.",
        "Total = 38."
      ],
      "faAns": "۳۸",
      "enAns": "38"
    }
  },
  {
    "id": "roi",
    "fa": "بازگشت سرمایه",
    "en": "ROI",
    "aliasesFa": [
      "بازگشت سرمایه",
      "ROI"
    ],
    "aliasesEn": [
      "ROI",
      "return on investment"
    ],
    "faExp": "بازگشت سرمایه نسبت سود حاصل به هزینهٔ سرمایه‌گذاری است و به اولویت‌بندی ابتکارات کمک می‌کند. باید افق زمانی و ریسک را هم ببیند.",
    "enExp": "Return on investment compares gain to cost and helps prioritize initiatives. Time horizon and risk should be included.",
    "faEx": "خودکارسازی تست اگر ماهانه ۲۰ ساعت ذخیره کند ممکن است در سه ماه هزینهٔ ابزار را جبران کند.",
    "enEx": "Test automation saving 20 hours monthly may repay tool cost within three months.",
    "related": [
      "npv",
      "cost-estimation"
    ],
    "faDef": "بازگشت سرمایه نسبت سود حاصل به هزینهٔ سرمایه‌گذاری است و به اولویت‌بندی ابتکارات کمک می‌کند. باید افق زمانی و ریسک را هم ببیند.",
    "enDef": "Return on investment compares gain to cost and helps prioritize initiatives. Time horizon and risk should be included.",
    "faHow": "نسبت سود خالص به هزینه: (منافع − هزینه)/هزینه. زمان و ریسک باید در تفسیر بیایند. منافع نامشهود را صریح فرض کنید.",
    "enHow": "Net benefit over cost: (benefit − cost)/cost. Interpret with time and risk. State intangible-benefit assumptions.",
    "faWhy": "اولویت سرمایه‌گذاری بین پروژه‌ها را قابل‌مقایسه می‌کند.",
    "enWhy": "Makes investment priority comparable across projects.",
    "sample": {
      "faQ": "پروژه ۸۰ هزینه و ۱۲۰ منافع دارد. ROI چند درصد است؟ (ROI = (منافع − هزینه) / هزینه)",
      "enQ": "A project costs 80 and yields 120 benefit. ROI% = (benefit − cost) / cost?",
      "faSteps": [
        "(120 − 80) / 80 = 40/80 = 0.5.",
        "۰٫۵ یعنی ۵۰٪."
      ],
      "enSteps": [
        "(120 − 80) / 80 = 0.5 → 50%."
      ],
      "faAns": "۵۰٪",
      "enAns": "50%"
    }
  },
  {
    "id": "npv",
    "fa": "ارزش فعلی خالص",
    "en": "NPV",
    "aliasesFa": [
      "ارزش فعلی خالص",
      "NPV"
    ],
    "aliasesEn": [
      "NPV",
      "net present value"
    ],
    "faExp": "ارزش فعلی خالص جریان‌های نقدی آینده را با نرخ تنزیل به امروز می‌آورد تا پروژه‌های بلندمدت مقایسه‌پذیر شوند. پول امروز از همان مبلغ در آینده باارزش‌تر فرض می‌شود.",
    "enExp": "Net present value discounts future cash flows to today so long projects become comparable. Money now is treated as worth more than the same amount later.",
    "faEx": "پروژهٔ زیرساختی با هزینهٔ بالا امسال و صرفه‌جویی سه سال آینده با NPV مثبت انتخاب می‌شود.",
    "enEx": "An infrastructure project with high cost this year and savings over three years is chosen if NPV is positive.",
    "related": [
      "roi",
      "cost-estimation"
    ],
    "faDef": "ارزش فعلی خالص جریان‌های نقدی آینده را با نرخ تنزیل به امروز می‌آورد تا پروژه‌های بلندمدت مقایسه‌پذیر شوند. پول امروز از همان مبلغ در آینده باارزش‌تر فرض می‌شود.",
    "enDef": "Net present value discounts future cash flows to today so long projects become comparable. Money now is treated as worth more than the same amount later.",
    "faHow": "جریان‌های نقدی آینده با نرخ تنزیل به امروز برمی‌گردند و با هزینهٔ اولیه جمع می‌شوند. NPV>0 یعنی از نرخ مبنا بهتر.",
    "enHow": "Future cash flows are discounted to today and summed with the initial outlay. NPV>0 beats the discount hurdle.",
    "faWhy": "پروژه‌های چندساله را با ارزش زمانی پول مقایسه می‌کند.",
    "enWhy": "Compares multi-year projects with the time value of money.",
    "sample": {
      "faQ": "سرمایه‌گذاری اولیه ۱۰۰−، جریان‌های سال ۱ و ۲ هر کدام ۶۰، نرخ تنزیل ۱۰٪. NPV تقریبی؟",
      "enQ": "Initial outlay −100, cash flows year1=60 and year2=60, discount rate 10%. Approximate NPV?",
      "faSteps": [
        "NPV = −100 + 60/1.1 + 60/1.1².",
        "60/1.1 ≈ 54.55؛ 60/1.21 ≈ 49.59.",
        "جمع ≈ −100 + 54.55 + 49.59 = 4.14 (حدود ۴٫۱۳)."
      ],
      "enSteps": [
        "NPV = −100 + 60/1.1 + 60/1.1².",
        "60/1.1 ≈ 54.55; 60/1.21 ≈ 49.59.",
        "Sum ≈ 4.13."
      ],
      "faAns": "حدود ۴٫۱۳ (مثبت → از نظر تنزیل‌شده به‌صرفه).",
      "enAns": "About 4.13 (positive → worthwhile at 10%)."
    }
  }
];

SWE.glossaryDiagrams = {
  "graph": "<svg class=\"gdiag\" viewBox=\"0 0 160 90\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"30\" cy=\"45\" r=\"12\" fill=\"#f27a5e\"/><circle cx=\"80\" cy=\"22\" r=\"12\" fill=\"#e7ad3f\"/><circle cx=\"130\" cy=\"45\" r=\"12\" fill=\"#9c4f96\"/><circle cx=\"80\" cy=\"70\" r=\"12\" fill=\"#2fa36b\"/><line x1=\"40\" y1=\"40\" x2=\"70\" y2=\"26\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"90\" y1=\"26\" x2=\"120\" y2=\"40\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"40\" y1=\"50\" x2=\"70\" y2=\"66\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"90\" y1=\"66\" x2=\"120\" y2=\"50\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"80\" y1=\"34\" x2=\"80\" y2=\"58\" stroke=\"#5a3040\" stroke-width=\"2\"/></svg>",
  "tree": "<svg class=\"gdiag\" viewBox=\"0 0 160 100\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"80\" cy=\"18\" r=\"11\" fill=\"#f27a5e\"/><circle cx=\"45\" cy=\"55\" r=\"11\" fill=\"#e7ad3f\"/><circle cx=\"115\" cy=\"55\" r=\"11\" fill=\"#9c4f96\"/><circle cx=\"25\" cy=\"88\" r=\"9\" fill=\"#2fa36b\"/><circle cx=\"65\" cy=\"88\" r=\"9\" fill=\"#2fa36b\"/><circle cx=\"115\" cy=\"88\" r=\"9\" fill=\"#c08070\"/><line x1=\"74\" y1=\"28\" x2=\"52\" y2=\"46\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"86\" y1=\"28\" x2=\"108\" y2=\"46\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"38\" y1=\"64\" x2=\"28\" y2=\"80\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"52\" y1=\"64\" x2=\"62\" y2=\"80\" stroke=\"#5a3040\" stroke-width=\"2\"/><line x1=\"115\" y1=\"66\" x2=\"115\" y2=\"79\" stroke=\"#5a3040\" stroke-width=\"2\"/></svg>",
  "fsm": "<svg class=\"gdiag\" viewBox=\"0 0 180 70\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"40\" cy=\"35\" r=\"16\" fill=\"#fff\" stroke=\"#f27a5e\" stroke-width=\"3\"/><circle cx=\"90\" cy=\"35\" r=\"16\" fill=\"#fff\" stroke=\"#e7ad3f\" stroke-width=\"3\"/><circle cx=\"140\" cy=\"35\" r=\"16\" fill=\"#fff\" stroke=\"#9c4f96\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"35\" r=\"10\" fill=\"none\" stroke=\"#f27a5e\" stroke-width=\"2\"/><text x=\"40\" y=\"39\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5a3040\">S0</text><text x=\"90\" y=\"39\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5a3040\">S1</text><text x=\"140\" y=\"39\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5a3040\">S2</text><path d=\"M56 32 L74 32\" stroke=\"#5a3040\" stroke-width=\"2\"/><path d=\"M106 32 L124 32\" stroke=\"#5a3040\" stroke-width=\"2\"/></svg>",
  "stack": "<svg class=\"gdiag\" viewBox=\"0 0 100 110\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"25\" y=\"70\" width=\"50\" height=\"22\" rx=\"4\" fill=\"#f27a5e\"/><rect x=\"25\" y=\"46\" width=\"50\" height=\"22\" rx=\"4\" fill=\"#e7ad3f\"/><rect x=\"25\" y=\"22\" width=\"50\" height=\"22\" rx=\"4\" fill=\"#9c4f96\"/><text x=\"50\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5a3040\">top</text></svg>",
  "queue": "<svg class=\"gdiag\" viewBox=\"0 0 180 60\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"20\" y=\"18\" width=\"36\" height=\"28\" rx=\"4\" fill=\"#2fa36b\"/><rect x=\"58\" y=\"18\" width=\"36\" height=\"28\" rx=\"4\" fill=\"#e7ad3f\"/><rect x=\"96\" y=\"18\" width=\"36\" height=\"28\" rx=\"4\" fill=\"#f27a5e\"/><rect x=\"134\" y=\"18\" width=\"36\" height=\"28\" rx=\"4\" fill=\"#9c4f96\"/><text x=\"20\" y=\"12\" font-size=\"9\" fill=\"#5a3040\">front</text><text x=\"150\" y=\"12\" font-size=\"9\" fill=\"#5a3040\">back</text></svg>",
  "set": "<svg class=\"gdiag\" viewBox=\"0 0 160 90\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><ellipse cx=\"60\" cy=\"45\" rx=\"40\" ry=\"32\" fill=\"rgba(242,122,94,.25)\" stroke=\"#f27a5e\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"45\" rx=\"40\" ry=\"32\" fill=\"rgba(156,79,150,.25)\" stroke=\"#9c4f96\" stroke-width=\"2\"/><text x=\"42\" y=\"50\" font-size=\"12\" fill=\"#5a3040\">A</text><text x=\"110\" y=\"50\" font-size=\"12\" fill=\"#5a3040\">B</text></svg>",
};
