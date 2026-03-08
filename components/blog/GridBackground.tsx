export default function GridBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Light subtle grid pattern matching the reference image */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #9ca3af 1px, transparent 1px),
            linear-gradient(to bottom, #9ca3af 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                }}
            />
            {/* Gradient fade out at the bottom to blend with content */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>
    );
}
