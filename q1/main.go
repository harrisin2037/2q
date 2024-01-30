package main

import (
	"fmt"
)

func main() {

	graph := map[string][]string{
		"A": {"B", "D", "H"},
		"B": {"A", "C", "D"},
		"C": {"B", "D", "F"},
		"D": {"B", "C", "E"},
		"E": {"D", "F", "H"},
		"F": {"C", "E", "G"},
		"G": {"F", "H"},
		"H": {"A", "E", "G"},
	}

	printShortestPath(graph, "A", "H")
	fmt.Println("--------")
	printAllPaths(graph, "A", "H")
}

func printShortestPath(graph map[string][]string, start string, end string) {
	path := findShortestPath(graph, start, end)
	fmt.Println(path)
}

func printAllPaths(graph map[string][]string, start string, end string) {
	paths := [][]string{}
	findAllPaths(graph, start, end, []string{}, &paths)
	for _, path := range paths {
		fmt.Println(path)
	}
}

func findAllPaths(graph map[string][]string, start string, end string, path []string, paths *[][]string) {
	path = append(path, start)
	if start == end {
		*paths = append(*paths, path)
		return
	}

	for _, node := range graph[start] {
		if !contains(path, node) {
			findAllPaths(graph, node, end, append([]string(nil), path...), paths)
		}
	}
}

func contains(slice []string, item string) bool {
	for _, s := range slice {
		if s == item {
			return true
		}
	}
	return false
}

func findShortestPath(graph map[string][]string, start string, end string) []string {

	var (
		queue   = [][]string{{start}}
		visited = make(map[string]bool)
	)

	for len(queue) > 0 {

		var (
			path = queue[0]
			node = path[len(path)-1]
		)

		queue = queue[1:]

		if visited[node] {
			continue
		}
		visited[node] = true

		if node == end {
			return path
		}

		for _, neighbor := range graph[node] {
			if !visited[neighbor] {
				new_path := make([]string, len(path))
				copy(new_path, path)
				new_path = append(new_path, neighbor)
				queue = append(queue, new_path)
			}
		}
	}

	return []string{}
}
