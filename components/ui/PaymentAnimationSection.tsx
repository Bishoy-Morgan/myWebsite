'use client';
import { motion } from 'framer-motion';

const gridSize = 4;
const spacing = 100;

type Node = { x: number; y: number };
const createGrid = () => {
  const nodes: Node[] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      nodes.push({ x: col * spacing, y: row * spacing });
    }
  }
  return nodes;
};
const nodes = createGrid();

export default function ModularGrid() {
  return (
    <motion.svg
      width={gridSize * spacing}
      height={gridSize * spacing}
      className="mx-auto"
    >
      {/* Lines between adjacent nodes */}
      {nodes.map((n, i) => (
        <motion.line
          key={i * 2}
          x1={n.x}
          y1={n.y}
          x2={n.x + spacing}
          y2={n.y}
          stroke="#4F46E5"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.line
          key={i * 2 + 1}
          x1={n.x}
          y1={n.y}
          x2={n.x}
          y2={n.y + spacing}
          stroke="#4F46E5"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        />
      ))}

      {/* Grid nodes */}
      {nodes.map((n, i) => (
        <motion.rect
          key={i}
          x={n.x - 6}
          y={n.y - 6}
          width={12}
          height={12}
          rx={2}
          fill="#4F46E5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
        />
      ))}
    </motion.svg>
  );
}
