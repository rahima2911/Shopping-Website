import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '../../../../lib/mongodb'
import User from '../../../../lib/models/User'
import bcrypt from 'bcryptjs'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

export async function POST(request) {
  try {
    await connectDB()

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const phone = formData.get('phone')
    const address = formData.get('address')
    const gender = formData.get('gender')
    const birthdate = formData.get('birthdate')
    const profilePicture = formData.get('profilePicture')

    // Validation
    if (!name || !email || !password || !phone || !address || !gender || !birthdate) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists with this email' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Handle profile picture upload
    let profilePicturePath = null
    if (profilePicture && profilePicture.size > 0) {
      try {
        const bytes = await profilePicture.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        // Create uploads directory if it doesn't exist
        const uploadsDir = join(process.cwd(), 'public', 'uploads', 'profiles')
        await mkdir(uploadsDir, { recursive: true })
        
        // Generate unique filename
        const filename = `${Date.now()}-${profilePicture.name}`
        const filepath = join(uploadsDir, filename)
        
        await writeFile(filepath, buffer)
        profilePicturePath = `/uploads/profiles/${filename}`
      } catch (error) {
        console.error('Error uploading profile picture:', error)
        return NextResponse.json(
          { message: 'Error uploading profile picture' },
          { status: 500 }
        )
      }
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      gender,
      birthdate: new Date(birthdate),
      profilePicture: profilePicturePath
    })

    await newUser.save()

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    )

  } catch (error) {
    console.error('Signup error:', error)
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message)
      return NextResponse.json(
        { message: errors.join(', ') },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}