import React from 'react'
import "./Cod.scss"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
function Cod() {
    return (
        <div>
            <Navbar />
            <section className='concept-home-img'>
                <video className='vid' autoPlay loop muted src="./assets/cod-bg.mp4"></video>
            </section>
            <section className='concept-container'>
                <div className='title'>
                    Concept
                    <hr />
                </div>
                <div  className="concept-card">
                    <h1 className='concept-title'>Tree Traversals (Inorder, Preorder ,Postorder and Levelorder)</h1>
                    <span className='difficulty'>Difficulty: <span className='lvl-easy'>Easy</span> </span>
                    <span className='difficulty'>• Date: <span>10 oct 2022</span> </span>
                    <br />
                    <br />
                    <h6> <u>READ</u></h6>
                    <p className='read'>Trees can be traversed in a variety of ways. The commonly used techniques for traversing trees are as follows:</p>
                    <img className='concept-img' src="./assets/concept-of-day-imgs/tree_example.png" alt="img" />
                    <br />
                    <br />

                    {/* CONCEPT */}
                    <h3>• Inorder Traversal</h3>
                    <p className="read">The left subtree is visited first in this traversal method, followed by the root and then the right subtree. Always keep in mind that every node could be a subtree by itself. The output will contain key values sorted in ascending order if a binary search tree is traversed in inorder.</p>
                    <pre>
                        <p>
                            Algorithm : <br />
                            Step 1: Traverse the left subtree, i.e., call Inorder(left→subtree) <br />
                            Step 2: Visit the root. <br />
                            Step 3: Traverse the right subtree, i.e., call Inorder(right→subtree) <br />
                        </p>
                    </pre>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28247%2C249%2C250%2C1%29&t=monokai&wt=none&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F**%250A%2520*%2520Definition%2520for%2520a%2520binary%2520tree%2520node.%250A%2520*%2520struct%2520TreeNode%2520%257B%250A%2520*%2520%2520%2520%2520%2520int%2520val%253B%250A%2520*%2520%2520%2520%2520%2520TreeNode%2520*left%253B%250A%2520*%2520%2520%2520%2520%2520TreeNode%2520*right%253B%250A%2520*%2520%2520%2520%2520%2520TreeNode%28%29%2520%253A%2520val%280%29%252C%2520left%28nullptr%29%252C%2520right%28nullptr%29%2520%257B%257D%250A%2520*%2520%2520%2520%2520%2520TreeNode%28int%2520x%29%2520%253A%2520val%28x%29%252C%2520left%28nullptr%29%252C%2520right%28nullptr%29%2520%257B%257D%250A%2520*%2520%2520%2520%2520%2520TreeNode%28int%2520x%252C%2520TreeNode%2520*left%252C%2520TreeNode%2520*right%29%2520%253A%2520val%28x%29%252C%2520left%28left%29%252C%2520right%28right%29%2520%257B%257D%250A%2520*%2520%257D%253B%250A%2520*%252F%250A%250A%250Aclass%2520Solution%2520%257B%250Aprivate%253A%2520%250A%2520%2520%2520%2520vector%253Cint%253E%2520solve%28TreeNode*%2520root%2520%252C%2520vector%253Cint%253E%2520%2526ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F*Inorder-%253E%2520left%2520-%2520root%2520-%2520ans*%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520inorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520solve%28root%252C%2520ans%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520complexity%253A%2520O%28N%29%2520%253A%2520n-%253E%2520Number%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520complexity%253A%2520O%28height%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>


                    <h3>• Preorder Traversal</h3>
                    <p className="read">We will now talk about data structure preorder traversal. Stack, array, queue, and other linear data structures only have one way to traverse the data. However, there are numerous ways to navigate through the data in a hierarchical data structure like a tree. In preorder traversal, the root node is visited first, followed by the left subtree and then the right subtree. Preorder traversal is represented by the following: root → left →right</p>
                    <pre>
                        <p>
                            Algorithm : <br />
                            Step 1: Visit the root. <br />
                            Step 2: Traverse the left subtree, i.e., call Preorder(left → subtree) <br />
                            Step 3: Traverse the right subtree, i.e., call Inorder(right → subtree) <br />
                        </p>
                    </pre>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28247%2C249%2C250%2C1%29&t=monokai&wt=none&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%250A%2520%2520%2520%2520void%2520solve%28TreeNode*%2520root%252Cvector%253Cint%253E%2526%2520ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Base%2520case%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Preorder%2520Traversal%2520%253D%2520ROOT%2520-%2520LEFT%2520-%2520RIGHT%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520preorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520complexity%253A%2520O%28N%29%2520%253A%2520n-%253E%2520Number%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520complexity%253A%2520O%28height%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>



                    <h3>• Postorder Traversal</h3>
                    <p className="read">we will now talk about postorder traversal, another method for moving through a tree data structure. One of the traversing methods used to visit a node in the tree is the postorder traversal. It adheres to the LRN principle (Left-right-node). To determine a tree's postfix expression, postorder traversal is used.</p>
                    <pre>
                        <p>
                            Algorithm : <br />
                            Step 1: Traverse the left subtree, i.e., call postorder(left→subtree) <br />
                            Step 2: Traverse the right subtree, i.e., call postorder(right→subtree) <br />
                            Step 3: Visit the root. <br />
                        </p>
                    </pre>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28247%2C249%2C250%2C1%29&t=monokai&wt=none&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%250A%2520%2520%2520%2520void%2520solve%28TreeNode*%2520root%252Cvector%253Cint%253E%2526%2520ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Base%2520case%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Postrder%2520Traversal%2520%253D%2520LEFT%2520-%2520RIGHT%2520-%2520ROOT%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520postorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520complexity%253A%2520O%28N%29%2520%253A%2520n-%253E%2520Number%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520complexity%253A%2520O%28height%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>


                    <h3>• Level-order Traversal</h3>
                    <p className="read">The algorithm is just like BFS. The algorithm works in this way - Before moving on to the nodes at the next depth level, algorithm begins at the root of the tree and explores every node there. To keep track of the child nodes that were discovered but haven't been fully explored, additional memory, typically a queue, is required.</p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28247%2C249%2C250%2C1%29&t=monokai&wt=none&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cvector%253Cint%253E%253E%2520levelOrder%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cvector%253Cint%253E%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%2520%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520queue%253CTreeNode%2520*%253E%2520q%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520q.push%28root%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520q.push%28NULL%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520v%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520while%2520%28%21q.empty%28%29%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520TreeNode%2520*temp%2520%253D%2520q.front%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.pop%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28temp%2520%21%253D%2520NULL%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520v.push_back%28temp-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28temp-%253Eleft%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.push%28temp-%253Eleft%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28temp-%253Eright%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.push%28temp-%253Eright%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520else%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%25201%2520level%2520has%2520completely%2520traversed%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28v%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520v.clear%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28%21q.empty%28%29%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Queue%2520still%2520has%2520elements%2520in%2520next%2520level%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.push%28NULL%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520complexity%253A%2520O%28N%29%2520%253A%2520n-%253E%2520Number%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520complexity%253A%2520O%28height%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>


                    <h3>• Morris Traversal</h3>
                    <p className="read">We can navigate the tree without using stack or recursion by using the Morris Traversal. Threaded Binary Tree is the foundation of the Morris Traversal concept. In this traversal, we first create links to Inorder successors and print the data using these links. Then, we go back and undo the changes to bring the tree back to its original state.</p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28247%2C249%2C250%2C1%29&t=monokai&wt=none&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%250A%2520%2520%2520%2520TreeNode*%2520findPredecessor%28TreeNode*%2520curr%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520TreeNode*%2520temp%2520%253D%2520curr-%253Eleft%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520while%28temp-%253Eright%2520%21%253D%2520NULL%2520%2526%2526%2520temp-%253Eright%2520%21%253D%2520curr%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520temp%2520%253D%2520temp-%253Eright%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520temp%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520inorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Start%2520Traversal%250A%2520%2520%2520%2520%2520%2520%2520%2520TreeNode*%2520curr%2520%253D%2520root%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520while%28curr%2520%21%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%28%21curr-%253Eleft%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28curr-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520curr%2520%253D%2520curr-%253Eright%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520else%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520TreeNode*%2520predecessor%2520%253D%2520findPredecessor%28curr%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%28predecessor-%253Eright%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Create%2520link%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520predecessor-%253Eright%2520%253D%2520curr%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520curr%2520%253D%2520curr-%253Eleft%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520else%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Destroy%2520link%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520predecessor-%253Eright%2520%253D%2520NULL%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28curr-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520curr%2520%253D%2520curr-%253Eright%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%252F%252F%2520Time%2520complexity%253A%2520O%28N%29%2520%253A%2520n-%253E%2520Number%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520complexity%253A%2520O%281%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Cod