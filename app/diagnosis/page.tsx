"use client";

import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { Container, Typography, Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Paper, Divider } from '@mui/material';

const questions: string[] = [
    "Q1: 好きなゲームなら、英語モードで遊んでみたい。",
    "Q2: いつも見ているアニメや映画を、英語で観てみるのはわくわくする。",
    "Q3: ゲームで見かける英語の単語は、「これ何だろう？」とすぐ調べたくなる。",
    "Q4: 問題集より、ゲームや映画など“楽しみながら英語に触れる”ほうが好き。",
    "Q5: 目標があると、毎日コツコツ続けるのは苦にならない。",
    "Q6: 過去問や問題集でのトレーニングを、しっかり積み重ねるほうが安心する。",
    "Q7: 覚えた単語やフレーズの数を記録して、増えていくのを見るのが嬉しい。",
    "Q8: 毎日どのくらい勉強したかをチェックできると、やる気がアップする。",
    "Q9: 友だちやクラスメイトと一緒に勉強すると、やる気が出て楽しい。",
    "Q10: 英語を話すとき、間違えても「みんなで笑い合いながら覚えていきたい」と思う。",
    "Q11: 教室やオンラインで英語ゲームをするほうが、自主勉強よりも性に合っている。",
    "Q12: 英語は「会話しながら自然に覚えたい」と感じる。",
    "Q13: おうちで家族と一緒に勉強していると落ち着いて取り組める。",
    "Q14: 自分のペースで学習を進めたいので、家でじっくりやるほうが合う。",
    "Q15: 保護者や家庭教師にそばでサポートしてもらうと、理解しやすくて助かる。",
    "Q16: 英会話スクールに通うより、家でコツコツ取り組むほうが安心できる。",
];

    export default function DiagnosisPage() {
        const router = useRouter();
        const [answers, setAnswers] = useState<(number|null)[]>(Array(16).fill(null));

        const handleAnswer = (i: number, value: number) => {
            setAnswers(prev => {
                const next = [...prev];
                next[i] = value;
                return next;
            });
        };

        const handleSubmit = () => {
            if (answers.some(a => a === null)) {
                alert('すべての質問に回答してください');
                return;
            }
            const sums = [
                answers.slice(0, 4),
                answers.slice(4, 8),
                answers.slice(8, 12),
                answers.slice(12, 16),
            ].map(arr => arr.reduce((sum: number, v) => sum + (v ?? 0), 0));
            const maxIdx = sums.indexOf(Math.max(...sums));
            const pattern = ['A', 'B', 'C', 'D'][maxIdx] as 'A'|'B'|'C'|'D';
        router.push(`/result?pattern=${pattern}`)
    };

        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h4">診断テスト</Typography>
                <Box component="form" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                    {questions.map((q, i) => (
                        <Paper key={i} sx={{ p: 2, mb: 2 }} elevation={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">{q}</FormLabel>
                                <RadioGroup
                                    row
                                    value={answers[i] ?? ''}
                                    onChange={(_, v) => handleAnswer(i, parseInt(v))}
                                >
                                    {[1,2,3,4,5,6,7].map(n => (
                                        <FormControlLabel
                                            key={n}
                                            value={n}
                                            control={<Radio />}
                                            label={n.toString()}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    ))}

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{textAlign: 'center'}}>
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                            disabled={answers.some(a => a === null)}
                        >
                            結果を見る
                        </Button>
                    </Box>
                </Box>
            </Container>
        )
            };