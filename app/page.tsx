"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Award, BookOpen, DollarSign, Users } from "lucide-react"
import { MotionButton } from "@/components/ui/motion-button"
import { PageTransition } from "@/components/ui/page-transition"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import NewsletterForm from "@/components/newsletter-form"
import HowItWorks from "@/components/how-it-works"
import VideoPlayer from "@/components/video-player"
import { featuredProjects, testimonials } from "@/lib/dummy-data"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Wujudkan Ide Bisnismu Bersama ProyekSiswa.id
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl mb-8"
            >
              Platform crowdfunding pertama di Indonesia yang didedikasikan untuk mendukung proyek penelitian dan kewirausahaan pelajar
              dan mahasiswa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MotionButton size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/projects/create">Mulai Proyekmu</Link>
              </MotionButton>
              <MotionButton size="lg" variant="outline" className="border-white text-blue-700 hover:bg-white/10">
                <Link href="/projects">Dukung Proyek</Link>
              </MotionButton>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2"
          >
            <VideoPlayer
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
              title="Pengenalan ProyekSiswa.id"
            />
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="container mx-auto px-4 md:px-6 mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-center">
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-3xl font-bold"
              >
                500+
              </motion.p>
              <p className="text-sm">Proyek Terdanai</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-3xl font-bold"
              >
                Rp2.5M+
              </motion.p>
              <p className="text-sm">Dana Tersalurkan</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-3xl font-bold"
              >
                1,200+
              </motion.p>
              <p className="text-sm">Pelajar Terlibat</p>
            </div>
            <div className="text-center">
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-3xl font-bold"
              >
                250+
              </motion.p>
              <p className="text-sm">Sekolah & Kampus</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Bagaimana ProyekSiswa.id Bekerja?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti langkah-langkah sederhana ini untuk memulai perjalanan kewirausahaanmu atau mendukung proyek
              inovatif
            </p>
          </motion.div>
          <HowItWorks />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-3xl font-bold">Proyek Unggulan</h2>
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 flex items-center group">
              <span>Lihat Semua</span>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih ProyekSiswa.id?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami tidak hanya menyediakan platform pendanaan, tetapi juga ekosistem lengkap untuk mengembangkan potensi
              kewirausahaan pelajar
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: DollarSign,
                title: "Pendanaan Terpercaya",
                description: "Sistem pendanaan yang transparan dan aman untuk mewujudkan ide penilitian dan bisnismu",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
              },
              {
                icon: Users,
                title: "Bimbingan Mentor",
                description: "Dapatkan bimbingan dari mentor berpengalaman di bidang bisnismu",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
              },
              {
                icon: BookOpen,
                title: "Edukasi Bisnis",
                description: "Akses ke materi pembelajaran dan workshop kewirausahaan",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
              },
              {
                icon: Award,
                title: "Pengakuan & Jaringan",
                description: "Bangun portofolio dan jaringan dengan komunitas wirausaha muda",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white p-6 rounded-lg shadow-md text-center overflow-hidden"
              >
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image src={benefit.image || "/placeholder.svg"} alt={benefit.title} fill className="object-cover" />
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Cerita Sukses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dengarkan pengalaman mereka yang telah berhasil mewujudkan ide bisnisnya melalui ProyekSiswa.id
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Video Kisah Sukses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Saksikan perjalanan inspiratif para alumni ProyekSiswa.id yang telah berhasil membangun bisnis mereka
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Perjalanan GreenTech Solutions",
                thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              },
              {
                title: "EduApp Indonesia Story",
                thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              },
              {
                title: "FoodTech Nusantara Journey",
                thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <VideoPlayer videoUrl={video.videoUrl} thumbnailUrl={video.thumbnail} title={video.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Perjalanan Wirausahamu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelajar dan mahasiswa yang telah mewujudkan ide bisnisnya melalui ProyekSiswa.id
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MotionButton size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/register">Daftar Sekarang</Link>
            </MotionButton>
            <MotionButton size="lg" variant="outline" className="border-white text-blue-700 hover:bg-white/10">
              <Link href="/about">Pelajari Lebih Lanjut</Link>
            </MotionButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Dapatkan Inspirasi Bisnis dan Penelitian Terbaru</h2>
            <p className="text-gray-600 mb-8">
              Berlangganan newsletter kami untuk mendapatkan update proyek inspiratif dan tips kewirausahaan
            </p>
            <NewsletterForm />
          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}
