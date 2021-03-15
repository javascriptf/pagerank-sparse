// #pragma once
// #include <tuple>
// #include <vector>
// #include <unordered_map>
// #include <utility>
// #include "_support.h"
// #include "_graph.h"
// #include "find.h"
// #include "erase.h"
// #include "range.h"
// #include "count.h"
// #include "transform.h"
// #include "filter.h"

// using std::tuple;
// using std::vector;
// using std::unordered_map;
// using std::get;




// template <class K=int, class V=NONE, class E=NONE>
// class DiGraphBase {
//   // Types
//   public:
//   using TKey    = K;
//   using TVertex = V;
//   using TEdge   = E;

//   // Read operations
//   public:
//   auto& base()   { return *this; }
//   auto& root()   { return *this; }
//   int span()     { return 0; }
//   int order()    { return 0; }
//   int size()     { return 0; }
//   bool isEmpty() { return true; }

//   bool hasVertex(K u)    { return false; }
//   bool hasEdge(K u, K v) { return false; }
//   auto nonVertices() { return vector<K>(); }
//   auto vertices()    { return vector<K>(); }
//   auto edges(K u)    { return vector<K>(); }
//   auto inEdges(K v)  { return vector<K>(); }
//   int degree(K u)    { return 0; }
//   int inDegree(K v)  { return 0; }

//   V vertexData(K u)    { return V(); }
//   E edgeData(K u, K v) { return E(); }
//   void setVertexData(K u, V d)    {}
//   void setEdgeData(K u, K v, E d) {}

//   // Write operations
//   public:
//   void addVertex(K u, V d=V())    {}
//   void addEdge(K u, K v, E d=E()) {}
//   void removeEdge(K u, K v) {}
//   void removeEdges(K u)     {}
//   void removeInEdges(K v)   {}
//   void removeVertex(K u)    {}

//   // Access operations
//   public:
//   auto vertexKeys() { return getVertexKeys(*this); }
//   auto vertexData() { return getVertexData(*this); }
//   auto edgeData() { return getEdgeData(*this); }
//   auto sourceOffsets() { return getSourceOffsets(*this); }
//   auto destinationIndices() { return getDestinationIndices(*this); }

//   // Generate operations
//   public:
//   template <class T>
//   auto createVertexData(T _) { return unordered_map<K, T>(); }

//   template <class T>
//   auto createEdgeData(T _)   { return unordered_map<tuple<K, K>, T>(); }
// };




// template <class K=int, class V=NONE, class E=NONE>
// class DiGraph : public DiGraphBase<K, V, E> {
//   vector<K> none;  // TODO: try removing this
//   unordered_map<K, tuple<vector<K>, vector<E>, V>> ve;
//   int M = 0;

//   // Cute helpers
//   private:
//   int n() { return ve.size(); }
//   auto& eto(K u)    { return get<0>(ve[u]); }
//   auto& edata(K u)  { return get<1>(ve[u]); }
//   auto& vdata(K u)  { return get<2>(ve[u]); }
//   bool ex(K u, K v) { return find(eto(u), v) != eto(u).end(); }
//   int  ei(K u, K v) { return find(eto(u), v) -  eto(u).begin(); }

//   // Read operations
//   public:
//   auto& base()   { return *this; }
//   auto& root()   { return *this; }
//   int span()     { return n(); }
//   int order()    { return n(); }
//   int size()     { return M; }
//   bool isEmpty() { return n() == 0; }

//   bool hasVertex(K u)    { return ve.find(u) != ve.end(); }
//   bool hasEdge(K u, K v) { return hasVertex(u) && ex(u, v); }
//   auto& edges(K u) { return hasVertex(u)? eto(u) : none; }
//   int degree(K u)  { return hasVertex(u)? eto(u).size() : 0; }
//   auto vertices()  { return transform(ve, [&](auto p) { return p.first; }); }
//   auto inEdges(K v)   { return filter(ve, [&](auto p) { return ex(p.first, v); }); }
//   int inDegree(K v)  { return countIf(ve, [&](auto p) { return ex(p.first, v); }); }

//   V vertexData(K u)         { return hasVertex(u)? vdata(u) : V(); }
//   void setVertexData(K u, V d) { if (hasVertex(u)) vdata(u) = d; }
//   E edgeData(K u, K v)         { return hasEdge(u, v)? edata(u)[ei(u, v)] : E(); }
//   void setEdgeData(K u, K v, E d) { if (hasEdge(u, v)) edata(u)[ei(u, v)] = d; }

//   // Write operations
//   public:
//   void addVertex(K u, V d=V()) {
//     if (hasVertex(u)) return;
//     ve[u] = {{}, {}, V()};
//   }

//   void addEdge(K u, K v, E d=E()) {
//     if (hasEdge(u, v)) return;
//     addVertex(u);
//     addVertex(v);
//     eto(u).push_back(v);
//     edata(u).push_back(d);
//     M++;
//   }

//   void removeEdge(K u, K v) {
//     if (!hasEdge(u, v)) return;
//     int o = ei(u, v);
//     eraseAt(edges(u), o);
//     eraseAt(edata(u), o);
//     M--;
//   }

//   void removeEdges(K u) {
//     if (!hasVertex(u)) return;
//     M -= degree(u);
//     eto(u).clear();
//     edata(u).clear();
//   }

//   void removeInEdges(K v) {
//     if (!hasVertex(v)) return;
//     for (auto&& u : inEdges(v))
//       removeEdge(u, v);
//   }

//   void removeVertex(K u) {
//     if (!hasVertex(u)) return;
//     removeEdges(u);
//     removeInEdges(u);
//     ve.erase(u);
//   }

//   // Access operations
//   public:
//   auto vertexKeys() { return getVertexKeys(*this); }
//   auto vertexData() { return getVertexData(*this); }
//   auto edgeData() { return getEdgeData(*this); }
//   auto sourceOffsets() { return getSourceOffsets(*this); }
//   auto destinationIndices() { return getDestinationIndices(*this); }
// };




class DiGraphInt {
  #vex
  #veto
  #edata
  #vdata
  #N
  #M

  constructor() {
    this.#vex   = [];
    this.#veto  = [];
    this.#edata = [];
    this.#vdata = [];
    this.#N = 0;
    this.#M = 0;
  }

  // Cute helpers
  #s() { return this.#veto.length; }
  #eto(u) { return this.#veto[u]; }
  #ex(u, v) { return this.#eto(u).includes(v); }
  #ei(u, v) { return this.#eto(u).indexOf(v); }

  // Read operations
  base()    { return this; }
  root()    { return this; }
  span()    { return this.#s(); }
  order()   { return this.#N; }
  size()    { return this.#M; }
  isEmpty() { return this.#N === 0; }

  hasVertex(u)  { return u < this.#s() && this.#vex[u]; }
  hasEdge(u, v) { return u < this.#s() && this.#ex(u, v); }
  edges(u)      { return u < this.#s()? this.#eto(u) : []; }
  degree(u)     { return u < this.#s()? this.#eto(u).length : 0; }
  nonVertices() { for (var u=0, S=this.#s(); u<S; u++) if (!this.#vex[u])  yield u; }
  vertices()    { for (var u=0, S=this.#s(); u<S; u++) if ( this.#vex[u])  yield u; }
  inEdges(v)    { for (var u=0, S=this.#s(); u<S; u++) if (this.#ex(u, v)) yield u; }
  inDegree(v)   { for (var u=0, S=this.#s(), a=0; u<S; u++) if (this.#ex(u,v)) a++; return a; }

  vertexData(u)    { return this.hasVertex(u)? this.#vdata[u] : undefined; }
  setVertexData(u, d) { if (this.hasVertex(u)) this.#vdata[u] = d; }
  edgeData(u, v) { return this.hasEdge(u, v)? this.#edata[u][this.#ei(u, v)] : undefined; }
  setEdgeData(u, v) { if (this.hasEdge(u, v)) this.#edata[u][this.#ei(u, v)] = d; }

  // Write operations
  addVertex(u, d) {
    if (this.hasVertex(u)) return;
    for (var i=Math.max(u, this.#s()), I=u+1; i<I; i++) {
      this.#vex[i] = false;
      this.#veto[i]  = [];
      this.#edata[i] = [];
      this.#vdata[i] = [];
    }
    this.#vex[u] = true;
    this.#vdata[u] = d;
    this.#N++;
  }
}

var a = new DiGraphInt();

// template <class V, class E>
// class DiGraph<int, V, E> : public DiGraphBase<int, V, E> {

//   // Write operations
//   public:
//   void addEdge(int u, int v, E d=E()) {
//     if (hasEdge(u, v)) return;
//     addVertex(u);
//     addVertex(v);
//     eto(u).push_back(v);
//     edata[u].push_back(d);
//     M++;
//   }

//   void removeEdge(int u, int v) {
//     if (!hasEdge(u, v)) return;
//     int o = ei(u, v);
//     eraseAt(eto(u), o);
//     eraseAt(edata[u], o);
//     M--;
//   }

//   void removeEdges(int u) {
//     if (!hasVertex(u)) return;
//     M -= degree(u);
//     eto(u).clear();
//     edata[u].clear();
//   }

//   void removeInEdges(int v) {
//     if (!hasVertex(v)) return;
//     for (int u : inEdges(v))
//       removeEdge(u, v);
//   }

//   void removeVertex(int u) {
//     if (!hasVertex(u)) return;
//     removeEdges(u);
//     removeInEdges(u);
//     vex[u] = false;
//     N--;
//   }

//   // Access operations
//   public:
//   auto vertexKeys() { return getVertexKeys(*this); }
//   auto vertexData() { return getVertexData(*this); }
//   auto edgeData() { return getEdgeData(*this); }
//   auto sourceOffsets() { return getSourceOffsets(*this); }
//   auto destinationIndices() { return getDestinationIndices(*this); }

//   // Generate operations
//   public:
//   template <class T>
//   auto createVertexData(T _) { return vector<T>(span()); }
// };
