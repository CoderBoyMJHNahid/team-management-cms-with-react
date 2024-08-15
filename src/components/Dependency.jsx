import React, { useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge/CustomEdge";

const initialNodes = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    type: "custom",
    position: { x: 0, y: 80 },
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
  },
  {
    id: "horizontal-2",
    sourcePosition: "right",
    targetPosition: "left",
    position: { x: 300, y: 10 },
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
  },
  {
    id: "horizontal-3",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
    position: { x: 300, y: 160 },
  },
  {
    id: "horizontal-4",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
    position: { x: 600, y: 100 },
  },
  {
    id: "horizontal-5",
    sourcePosition: "top",
    targetPosition: "bottom",
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
    position: { x: 600, y: 200 },
  },
  {
    id: "horizontal-6",
    sourcePosition: "bottom",
    targetPosition: "top",
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
    position: { x: 600, y: 330 },
  },
  {
    id: "horizontal-7",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
    position: { x: 850, y: 150 },
  },
  {
    id: "horizontal-8",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Task 1", subLabel: "Front-end" },
    position: { x: 850, y: 400 },
  },
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    target: "horizontal-2",
    animated: true,
    style: { stroke: "red" },
    type: "custom",
    data: { text: "Nodo 1" },
  },
  {
    id: "horizontal-e1-3",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-3",
    animated: true,
    style: { stroke: "green" },
    type: "custom",
    data: { text: "Nodo 2" },
  },
  {
    id: "horizontal-e1-4",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-4",
    style: { stroke: "blue" },
    type: "custom",
    data: { text: "Nodo 3" },
  },
  {
    id: "horizontal-e3-5",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-5",
    animated: true,
    style: { stroke: "purple" },
    type: "custom",
    data: { text: "Nodo 4" },
  },
  {
    id: "horizontal-e3-6",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
    style: { stroke: "orange" },
    type: "custom",
    data: { text: "Nodo 5" },
  },
  {
    id: "horizontal-e5-7",
    source: "horizontal-5",
    type: "smoothstep",
    target: "horizontal-7",
    animated: true,
    style: { stroke: "black" },
    type: "custom",
    data: { text: "Nodo 6" },
  },
  {
    id: "horizontal-e6-8",
    source: "horizontal-6",
    type: "smoothstep",
    target: "horizontal-8",
    animated: true,
    style: { stroke: "blue" },
    type: "custom",
    data: { text: "Nodo 7" },
  },
];

const nodeTypes = {
  custom: CustomNode,
};
const edgeTypes = {
  custom: CustomEdge,
};
const Dependency = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <div style={{ width: "100%", height: "500px", position: "relative" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        attributionPosition="bottom-left"
        style={{ zIndex: -100 }}
      />
    </div>
  );
};

export default Dependency;
