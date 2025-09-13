#!/bin/bash

# Local development script
set -e

echo "🚀 Starting local development environment"

# Start SAM local API
echo "📡 Starting local API..."
cd infrastructure
sam local start-api --port 3001 &
API_PID=$!
cd ..

# Start frontend dev server
echo "🌐 Starting frontend..."
export VITE_API_URL=http://localhost:3001
npm run dev &
FRONTEND_PID=$!

echo "✅ Development servers started:"
echo "   Frontend: http://localhost:5173"
echo "   API: http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop all servers"

# Cleanup function
cleanup() {
    echo "🛑 Stopping servers..."
    kill $API_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Wait for processes
wait