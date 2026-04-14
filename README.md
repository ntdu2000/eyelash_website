#Description
- My first website project for commercial use
- The reason: My friend just asked if she can have a website working for her business. Even though I'm not a dev, with the power of tech, I started with a belief :)))))
- The resources:
    + Home router with a public, dynamic IP. Port 80 got blocked by ISP.
    + A rasberry pi
    + A little server at my friend house (I have no control over his network, he'll only give me the access and internet connection to the server)

#Problems and Solutions:
- Networking: I want to host a website (probably many more in the future) on the remote server. So I only have one public IP which links to my home router.
- Solution:
    + Use DDNS to fix the problem with dynamic IP (I used duckdns this time)
    + Make my rasberry pi a wireguard server and connect the remote ubuntu server to it as a client
    + Configure nftables instead of ufw or iptables on rasberry pi since it's the industry-standard now and cybersec is also a big thing to me as well ;)) There one point which takes me a lot of time is that I have to masquerade both inbound and outbound traffic from the ethernet interface on my pi to its wireguard interface (I asked so many chatbots but they couldn't fix it)
    + Bind the port 443 to port 55443 on the server since we're gonna use https eventually.
    + Topology: Router:443 -> pi:55443 -> server:55443 -> nginx -> next.js app (website):3000

- Website development: This website's gonna be used for a long time so I'll make sure we own the code, not other AI tools.
- Solution: 
    + Make the frontend on v0.dev (Used ChatGPT or whatever AI chatbot to come up with a detailed prompt first)
    + Downloaded the source code as zip from the site and learn about the app and dependencies needed
    + Put the folder in /var/www/mysite
    + Change the nginx config at /etc/nginx/sites-available/default to serve the site
    + Install node and pnpm for the next.js app. Just follow the standard procedure for its set up
    + Install pm2 to manage node.js apps for persistent processes

- Website SSL certificate: Just like other regular websites, without https, the site might looks unsafe
- Solution:
    + We'll use certbot and python3-certbot-nginx (the combo to automate this process of using ssl cert from let's encrypt)
    + The standard command would be "sudo certbot --nginx -d yourdomain.duckdns.org", but our ISP blocked the port 80, and the command uses HTTP to verify the website. So the command will fail, we need to find a workaround
    + Install the tools for certbot and duckdns to work together using "sudo apt install python3-certbot-dns-duckdns" or "sudo pip install certbot-dns-duckdns --break-system-packages"
    + Create the credentials file for duckdns using this path "/etc/letsencrypt/duckdns/credentials.ini", add this line in the file "dns_duckdns_token=your-duckdns-token-here" and lock the file down using "chmod 600"
    + Apply the cert "sudo certbot certonly \
  --authenticator dns-duckdns \
  --dns-duckdns-credentials /etc/letsencrypt/duckdns/credentials.ini \
  --dns-duckdns-propagation-seconds 60 \
  -d noirestudio.duckdns.org"

- Nginx: By default, nginx doesn't know to apply the cert we just created yet
- Solution:
    + We gotta update the config so that it uses the ssl and the keys, also put it correct domain name. Here's the sample for our site:

server {
    listen 61080 ssl;
    listen [::]:61080 ssl;

    server_name noirestudio.duckdns.org;

    ssl_certificate /etc/letsencrypt/live/noirestudio.duckdns.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/noirestudio.duckdns.org/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

    + Then we reload the nginx (this is needed every time you change its config) "sudo systemctl reload nginx" 
