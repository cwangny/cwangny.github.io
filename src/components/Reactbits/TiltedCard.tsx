import type { SpringOptions } from 'motion/react';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface TiltedCardProps {
	imageSrc: React.ComponentProps<'img'>['src'];
	altText?: string;
	captionText?: string;
	containerHeight?: React.CSSProperties['height'];
	containerWidth?: React.CSSProperties['width'];
	imageHeight?: React.CSSProperties['height'];
	imageWidth?: React.CSSProperties['width'];
	scaleOnHover?: number;
	rotateAmplitude?: number;
	showMobileWarning?: boolean;
	showTooltip?: boolean;
	overlayContent?: React.ReactNode;
	displayOverlayContent?: boolean;
	className?: string;
}

const springValues: SpringOptions = {
	damping: 30,
	stiffness: 100,
	mass: 2
};

export default function TiltedCard({
	imageSrc,
	altText = 'Tilted card image',
	captionText = '',
	containerHeight = '300px',
	containerWidth = '100%',
	imageHeight = '300px',
	imageWidth = '300px',
	scaleOnHover = 1.1,
	rotateAmplitude = 14,
	showMobileWarning = true,
	showTooltip = true,
	overlayContent = null,
	displayOverlayContent = false,
	className
}: TiltedCardProps) {
	const ref = useRef<HTMLElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(useMotionValue(0), springValues);
	const rotateY = useSpring(useMotionValue(0), springValues);
	const scale = useSpring(1, springValues);
	const opacity = useSpring(0);
	const rotateFigcaption = useSpring(0, {
		stiffness: 350,
		damping: 30,
		mass: 1
	});

	const [lastY, setLastY] = useState(0);
	const [isMobileZoomed, setIsMobileZoomed] = useState(false);

	function handleMouse(e: React.MouseEvent<HTMLElement>) {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - rect.width / 2;
		const offsetY = e.clientY - rect.top - rect.height / 2;

		const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
		const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

		rotateX.set(rotationX);
		rotateY.set(rotationY);

		x.set(e.clientX - rect.left);
		y.set(e.clientY - rect.top);

		const velocityY = offsetY - lastY;
		rotateFigcaption.set(-velocityY * 0.6);
		setLastY(offsetY);
	}

	function handleMouseEnter() {
		scale.set(scaleOnHover);
		opacity.set(1);
	}

	function handleMouseLeave() {
		opacity.set(0);
		scale.set(1);
		rotateX.set(0);
		rotateY.set(0);
		rotateFigcaption.set(0);
		setIsMobileZoomed(false);
	}

	function handleMobileClick() {
		setIsMobileZoomed(!isMobileZoomed);
		scale.set(isMobileZoomed ? 1 : scaleOnHover);
	}

	return (
		<figure
			ref={ref}
			className={`relative w-full h-full perspective-midrange flex flex-col items-center justify-center ${className || ''}`}
			style={{
				height: containerHeight,
				width: containerWidth
			}}
			onMouseMove={handleMouse}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleMobileClick}
		>
			{showMobileWarning && (
				<div className="absolute top-4 text-center text-sm block sm:hidden px-4">
					This effect is not optimized for mobile. Check on desktop.
				</div>
			)}

			<motion.div
				className="relative transform-3d w-full aspect-[16/9] max-w-[90vw] sm:max-w-none"
				style={{
					width: imageWidth === 'auto' ? '100%' : `min(90vw, ${imageWidth})`,
					rotateX,
					rotateY,
					scale
				}}
			>
				<motion.img
					src={imageSrc}
					alt={altText}
					className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px] will-change-transform transform-[translateZ(0)]"
				/>

				{displayOverlayContent && overlayContent && (
					<motion.div
						className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none will-change-transform"
					>
						<div 
							className="group px-4 py-3 sm:px-6 sm:pt-4 sm:pb-3 rounded-2xl sm:rounded-3xl border-white/20 bg-white/10 backdrop-blur-md shadow-2xl cursor-pointer pointer-events-auto text-sm sm:text-base"
							onClick={() => window.open('https://iamtellos.com', '_blank')}
						>
							{overlayContent}
						</div>
					</motion.div>
				)}
			</motion.div>

			{showTooltip && (
				<motion.figcaption
					className="pointer-events-none absolute left-0 top-0 rounded-sm bg-white px-2.5 py-1 text-[10px] text-[#2d2d2d] opacity-0 z-3 hidden sm:block"
					style={{
						x,
						y,
						opacity,
						rotate: rotateFigcaption
					}}
				>
					{captionText}
				</motion.figcaption>
			)}
		</figure>
	);
}
