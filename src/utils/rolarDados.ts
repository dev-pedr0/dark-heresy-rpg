export function rolarD10(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function rolar3d10(): number[] {
  return [rolarD10(), rolarD10(), rolarD10()];
}

export function rolar2d10(): number[] {
  return [rolarD10(), rolarD10()];
}