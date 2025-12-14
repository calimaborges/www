desc "Serve the website locally on port 8000"
task :serve do
  require 'webrick'
  
  port = 8000
  root = File.expand_path('web')
  
  server = WEBrick::HTTPServer.new(Port: port, DocumentRoot: root)
  
  trap('INT') { server.shutdown }
  
  puts "🚀 Server running at http://localhost:#{port}"
  puts "Press CTRL+C to stop"
  
  server.start
end
