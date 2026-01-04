import React from 'react';
import SectionTitle from './SectionTitle';

const AboutAi = () => {
    return (
        <section className="bg-linear-to-r from-indigo-50 to-purple-50 py-16 px-6 md:px-20" id="about-ai-models">
            <div className="max-w-5xl mx-auto text-center">
                <SectionTitle title="About" highlight="AI" suffix="Models" />

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
                    AI models are computer programs designed to learn from data and make intelligent decisions.
                    They use techniques like <span className="font-semibold text-gray-800">neural networks</span>
                    to identify patterns, understand language, recognize images, and even generate creative content.
                    These models power everyday technologies — from chatbots and voice assistants to self-driving cars and medical image analysis.
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                        <div className="text-indigo-600 text-5xl mb-4">🧠</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Neural Networks</h3>
                        <p className="text-gray-600">
                            Inspired by the human brain, neural networks process data through layers of nodes to make predictions and decisions.
                        </p>
                    </div>


                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                        <div className="text-indigo-600 text-5xl mb-4">🤖</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Chatbots & NLP</h3>
                        <p className="text-gray-600">
                            Natural Language Processing (NLP) enables models to understand and respond to human language — like how chatbots or translators work.
                        </p>
                    </div>


                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                        <div className="text-indigo-600 text-5xl mb-4">📸</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Image Recognition</h3>
                        <p className="text-gray-600">
                            AI models can identify faces, objects, and scenes from images — helping with security, healthcare, and autonomous driving.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAi;