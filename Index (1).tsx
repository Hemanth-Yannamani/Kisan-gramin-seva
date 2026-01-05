import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Logo from '@/components/layout/Logo';
import { 
  Leaf, 
  ShoppingBag, 
  TrendingUp, 
  Shield, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Buy & Sell',
    description: 'Purchase quality supplies and sell your harvest at competitive prices',
  },
  {
    icon: TrendingUp,
    title: 'Market Prices',
    description: 'Real-time market prices and trends to help you make informed decisions',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Safe and instant payments directly to your bank account',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Access agricultural advisory and government scheme assistance',
  },
];

const stats = [
  { value: '50,000+', label: 'Registered Farmers' },
  { value: '₹10Cr+', label: 'Monthly Transactions' },
  { value: '500+', label: 'Products Available' },
  { value: '100+', label: 'Districts Covered' },
];

const testimonials = [
  {
    name: 'Ramesh Kumar',
    location: 'Guntur, Andhra Pradesh',
    text: 'KisanMitra helped me get 20% better prices for my paddy crop. The platform is very easy to use.',
    rating: 5,
  },
  {
    name: 'Lakshmi Devi',
    location: 'Warangal, Telangana',
    text: 'I can now buy fertilizers at wholesale prices without middlemen. Saved a lot of money this season!',
    rating: 5,
  },
  {
    name: 'Suresh Reddy',
    location: 'Kurnool, Andhra Pradesh',
    text: 'The government scheme assistance feature helped me get PM-KISAN benefits quickly.',
    rating: 4,
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo size="md" />
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="hero" onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 slide-up">
              <Leaf size={16} />
              <span className="text-sm font-medium">Empowering Indian Farmers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 slide-up" style={{ animationDelay: '0.1s' }}>
              Your Complete{' '}
              <span className="text-primary">Digital Farming</span>{' '}
              Platform
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
              Buy supplies at best prices, sell your harvest directly, access government schemes, 
              and get expert agricultural guidance - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" onClick={() => navigate('/register')}>
                Start Free <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => navigate('/login')}>
                <Phone size={20} className="mr-2" /> Call Helpline
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              KisanMitra brings together all the tools and services farmers need in one easy-to-use platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                variant="interactive"
                className="text-center p-6"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl hero-gradient flex items-center justify-center">
                    <feature.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Trusted by Farmers Across India
            </h2>
            <p className="text-muted-foreground">
              See what our farming community has to say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated" className="p-6">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? 'text-secondary fill-secondary' : 'text-muted'} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="hero-gradient text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 relative">
                Ready to Transform Your Farming?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto relative">
                Join thousands of farmers who are already benefiting from KisanMitra's digital platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
                <Button 
                  variant="secondary" 
                  size="xl"
                  onClick={() => navigate('/register')}
                >
                  Create Free Account
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => navigate('/login')}
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-primary-foreground/70 relative">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} /> Free to Use
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} /> No Hidden Fees
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} /> 24/7 Support
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo size="md" />
              <p className="text-sidebar-foreground/70 mt-4 text-sm">
                Empowering Indian farmers with technology and connecting them to better opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li><a href="#" className="hover:text-sidebar-foreground">Buy Supplies</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground">Sell Products</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground">Market Prices</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li><a href="#" className="hover:text-sidebar-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground">FAQs</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li>Toll Free: 1800-XXX-XXXX</li>
                <li>Email: support@kisanmitra.in</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm text-sidebar-foreground/50">
            <p>© 2024 KisanMitra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
