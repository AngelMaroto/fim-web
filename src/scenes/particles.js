import * as THREE from 'three'

export function initParticles() {
    const canvas = document.getElementById('bg')
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 4

    // Nodos (esferas pequeñas)
    const nodeCount = 120
    const nodePositions = []
    const nodeGeo = new THREE.SphereGeometry(0.025, 8, 8)
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00ff9f })
    const nodeGroup = new THREE.Group()

    for (let i = 0; i < nodeCount; i++) {
        const mesh = new THREE.Mesh(nodeGeo, nodeMat.clone())
        const x = (Math.random() - 0.5) * 12
        const y = (Math.random() - 0.5) * 8
        const z = (Math.random() - 0.5) * 6
        mesh.position.set(x, y, z)
        mesh.material.opacity = Math.random() * 0.6 + 0.2
        mesh.material.transparent = true
        nodePositions.push({ mesh, ox: x, oy: y, oz: z, speed: Math.random() * 0.4 + 0.1 })
        nodeGroup.add(mesh)
    }
    scene.add(nodeGroup)

    // Conexiones entre nodos cercanos
    const lineMat = new THREE.LineBasicMaterial({
        color: 0x00ff9f,
        transparent: true,
        opacity: 0.08
    })
    const lineGroup = new THREE.Group()
    const maxDist = 2.2

    for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
            const a = nodePositions[i].mesh.position
            const b = nodePositions[j].mesh.position
            if (a.distanceTo(b) < maxDist) {
                const geo = new THREE.BufferGeometry().setFromPoints([a, b])
                lineGroup.add(new THREE.Line(geo, lineMat))
            }
        }
    }
    scene.add(lineGroup)

    // Algunos nodos en magenta (alertas críticas)
    const alertIndices = [3, 11, 27, 45, 67, 89]
    alertIndices.forEach(i => {
        nodePositions[i].mesh.material.color.setHex(0xff0066)
        nodePositions[i].mesh.material.opacity = 0.9
        nodePositions[i].mesh.scale.setScalar(2.5)
    })

    // Mouse parallax
    let mouseX = 0, mouseY = 0
    window.addEventListener('mousemove', e => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.2
    })

    // Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    // Animación
    let t = 0
    function animate() {
        requestAnimationFrame(animate)
        t += 0.005

        nodePositions.forEach(({ mesh, oy, speed }) => {
            mesh.position.y = oy + Math.sin(t * speed + mesh.position.x) * 0.15
        })

        nodeGroup.rotation.y += 0.0008
        nodeGroup.rotation.x += 0.0003

        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (-mouseY - camera.position.y) * 0.05
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
    }
    animate()
}