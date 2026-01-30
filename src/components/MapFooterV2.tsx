export default function MapFooterV2() {
  return (
    <footer className="relative bg-stadium-black text-white pt-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row h-[600px]">
         {/* Map Section - 60% Width */}
         <div className="w-full md:w-3/5 h-full relative border-r border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.635837130638!2d-117.69483328478817!3d34.01582238061614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3330e7914041b%3A0x6e2c39c894819777!2s12345%20Central%20Ave%2C%20Chino%2C%20CA%2091710!5e0!3m2!1sen!2sus!4v1677615632742!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="opacity-60 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 pointer-events-none bg-stadium-black/20 mix-blend-overlay" />
         </div>

         {/* Info Section - 40% Width */}
         <div className="w-full md:w-2/5 p-12 md:p-24 flex flex-col justify-between bg-charcoal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-victory-red/5 rounded-full blur-[80px]" />
            
            <div>
               <h3 className="text-4xl md:text-6xl font-athletic italic font-black uppercase text-white mb-8">
                  Visit The <br/> <span className="text-victory-red">Stadium</span>
               </h3>
               
               <div className="space-y-8 font-tech text-sm tracking-widest text-white/60">
                  <div>
                     <p className="text-white mb-2 uppercase border-l-2 border-victory-red pl-4">Location</p>
                     <p>12345 Central Ave<br/>Chino, CA 91710</p>
                  </div>
                  <div>
                     <p className="text-white mb-2 uppercase border-l-2 border-victory-red pl-4">Hours</p>
                     <p>Mon - Thu: 11AM - 11PM<br/>Fri - Sat: 11AM - 1AM<br/>Sun: 9AM - 10PM</p>
                  </div>
                  <div>
                     <p className="text-white mb-2 uppercase border-l-2 border-victory-red pl-4">Contact</p>
                     <p>(909) 555-0123<br/>hello@gametimesports.com</p>
                  </div>
               </div>
            </div>

            <div className="mt-12 flex gap-4">
                {['Inst', 'Face', 'Twit', 'Tik'].map((social) => (
                   <a key={social} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-victory-red hover:border-victory-red hover:text-white transition-all transform hover:-translate-y-1">
                      <span className="font-tech text-[10px]">{social}</span>
                   </a>
                ))}
            </div>
         </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-black py-4 text-center border-t border-white/5">
         <p className="font-tech text-[10px] text-white/20 tracking-[0.3em] uppercase">
            © 2024 Gametime Sportsbar & Grill. All Rights Reserved. Designed For The Game.
         </p>
      </div>
    </footer>
  );
}
