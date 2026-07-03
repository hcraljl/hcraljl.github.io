export default function useAnimationSetup() {
  // Common easing configurations
  const easeOut = 'power3.out';
  const easeInOut = 'power2.inOut';
  const easeSlowOut = 'power4.out';
  const easeSmooth = 'expo.out';
  const easeSnap = 'back.out(1.7)';

  return { easeOut, easeInOut, easeSlowOut, easeSmooth, easeSnap };
}
