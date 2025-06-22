export function SendingScreen() {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-8 animate-fade-in-up">
        <div className="relative mb-12">
          <div className="text-6xl animate-float">✨</div>
          <div className="absolute -top-4 -left-8 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute -top-2 -right-6 text-2xl animate-float" style={{ animationDelay: '1s' }}>💫</div>
          <div className="absolute -bottom-4 left-4 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🌟</div>
        </div>

        <div className="space-y-6">
          <h2 className="font-cormorant text-5xl md:text-6xl text-purple-deep">
            Sending to the Universe
          </h2>
          
          <div className="space-y-4 font-inter text-purple-deep/80">
            <p className="text-xl font-light">
              Your letter is finding its place among the stars...
            </p>
            <p className="text-lg font-light italic">
              Trust in perfect timing.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-2 pt-8">
          <div className="w-3 h-3 bg-lilac-medium rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-lilac-medium rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-lilac-medium rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}